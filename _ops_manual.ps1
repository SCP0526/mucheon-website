$ErrorActionPreference = "Continue"
$ProjectRoot = "D:\AI-Engineering\commercial-website"
$Owner = "schen1062-glitch"
$RepoName = "commercial-website"
$DesiredOrigin = "https://github.com/$Owner/$RepoName.git"
$Proxy = "http://127.0.0.1:7897"
$CommitMsg = "chore: MUCHEON commercial site — personal origin + safe publish prep"
$ResultFile = Join-Path $ProjectRoot "_ops_result.txt"
$errors = New-Object System.Collections.Generic.List[string]
$outputs = New-Object System.Collections.Generic.List[string]

Set-Location $ProjectRoot

Write-Host "=== Step 2: Verify origin ==="
$remoteV = git remote -v 2>&1 | Out-String
Write-Host $remoteV
$outputs.Add("remote -v:`n$remoteV")

$remoteUrl = (git remote get-url origin 2>&1).ToString().Trim()
if ($remoteUrl -match "ColorlibHQ") {
    $errors.Add("BLOCKED: origin was ColorlibHQ — fixing")
    git remote set-url origin $DesiredOrigin
    $remoteUrl = $DesiredOrigin
}
if ($remoteUrl -ne $DesiredOrigin) {
    git remote set-url origin $DesiredOrigin
    $remoteUrl = $DesiredOrigin
}
Write-Host "origin: $remoteUrl"

Write-Host "`n=== Step 3: Check/create GitHub repo ==="
try {
    $credInput = "protocol=https`nhost=github.com`n`n"
    $credOut = $credInput | git credential fill 2>&1 | Out-String
    $outputs.Add("credential fill (redacted): token present=$([bool]($credOut -match 'password='))")
    $tokenLine = ($credOut | Select-String "^password=").Line
    if (-not $tokenLine) { throw "No GitHub credential found" }
    $token = $tokenLine.Replace("password=", "")

    $checkFile = Join-Path $env:TEMP "gh-repo-check.json"
    $check = curl.exe -s -o $checkFile -w "%{http_code}" -x $Proxy `
        -H "Authorization: Bearer $token" -H "Accept: application/vnd.github+json" `
        "https://api.github.com/repos/$Owner/$RepoName"
    Write-Host "GET repos/$Owner/$RepoName -> HTTP $check"
    $outputs.Add("repo check HTTP: $check")

    if ($check -eq "404") {
        $createBody = '{"name":"commercial-website","description":"MUCHEON commercial website — zero-cost Vercel deploy","private":false,"auto_init":false}'
        $createFile = Join-Path $env:TEMP "gh-create-repo.json"
        Set-Content -Path $createFile -Value $createBody -Encoding utf8
        $createOut = curl.exe -s -x $Proxy -X POST `
            -H "Authorization: Bearer $token" -H "Accept: application/vnd.github+json" -H "Content-Type: application/json" `
            --data-binary "@$createFile" https://api.github.com/user/repos 2>&1 | Out-String
        Write-Host $createOut
        $outputs.Add("create repo: $createOut")
    } elseif ($check -eq "200") {
        Write-Host "Repo already exists"
        $outputs.Add("Repo already exists")
    } else {
        $body = Get-Content $checkFile -Raw -ErrorAction SilentlyContinue
        $errors.Add("Unexpected repo check HTTP $check : $body")
    }
} catch {
    $errors.Add("Step 3 error: $_")
    Write-Host "Step 3 error: $_"
}

Write-Host "`n=== Step 4: Stage (exclude .env*) ==="
git add -A 2>&1 | ForEach-Object { Write-Host $_ }
git reset HEAD -- .env .env.local .env.* 2>&1 | ForEach-Object { Write-Host $_ }
$stagedEnv = @(git diff --cached --name-only | Select-String -Pattern "^\.env")
if ($stagedEnv.Count -gt 0) {
    $errors.Add("Env files were staged — unstaging: $($stagedEnv -join ', ')")
    git reset HEAD -- $stagedEnv
}
Write-Host "--- staged files ---"
$stagedList = git diff --cached --name-only 2>&1 | Out-String
Write-Host $stagedList
$outputs.Add("staged:`n$stagedList")

Write-Host "`n=== Step 5: Commit ==="
$commitHash = ""
$pending = git status --porcelain
if (-not $pending) {
    Write-Host "Nothing to commit"
    $commitHash = (git rev-parse HEAD).Trim()
} else {
    $commitOut = git -c user.name=schen1062-glitch -c user.email=schen1062-glitch@users.noreply.github.com commit -m $CommitMsg 2>&1 | Out-String
    Write-Host $commitOut
    $outputs.Add("commit:`n$commitOut")
    if ($LASTEXITCODE -ne 0) {
        $errors.Add("Commit failed with exit $LASTEXITCODE")
    } else {
        $commitHash = (git rev-parse HEAD).Trim()
        Write-Host "Commit: $commitHash"
    }
}

Write-Host "`n=== Step 6: Branch main ==="
git branch -M main 2>&1 | ForEach-Object { Write-Host $_ }

Write-Host "`n=== Step 7: Push ==="
$pushSuccess = "fail"
$pushUrl = git remote get-url origin
if ($pushUrl -match "ColorlibHQ") {
    $errors.Add("ABORT: refusing push to ColorlibHQ")
    Write-Host "ABORT: refusing push to ColorlibHQ"
} else {
    $pushOut = git -c http.proxy=$Proxy -c https.proxy=$Proxy push -u origin main 2>&1 | Out-String
    Write-Host $pushOut
    $outputs.Add("push:`n$pushOut")
    if ($LASTEXITCODE -eq 0) {
        $pushSuccess = "success"
    } else {
        $errors.Add("Push failed exit $LASTEXITCODE")
    }
}

$githubUrl = "https://github.com/schen1062-glitch/commercial-website"
if (-not $commitHash) {
    try { $commitHash = (git rev-parse HEAD).Trim() } catch { $commitHash = "(unknown)" }
}

$finalRemote = git remote get-url origin 2>&1 | Out-String
$errText = if ($errors.Count -gt 0) { $errors -join "`n" } else { "(none)" }
$outText = $outputs -join "`n"

$result = @"
=== MUCHEON commercial-website ops result ===
Timestamp: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')
Remote URL: $($finalRemote.Trim())
Commit hash: $commitHash
Push: $pushSuccess
GitHub URL: $githubUrl

--- Key command outputs ---
$outText

--- Errors ---
$errText
"@

Set-Content -Path $ResultFile -Value $result -Encoding utf8
Write-Host ""
Write-Host "=== _ops_result.txt ==="
Get-Content $ResultFile
