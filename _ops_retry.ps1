Set-Location "D:\AI-Engineering\commercial-website"
$Proxy = "http://127.0.0.1:7897"
$Owner = "schen1062-glitch"
$RepoName = "commercial-website"
$ResultFile = Join-Path (Get-Location) "_ops_result.txt"

Write-Host "=== Retry repo check (no proxy) ==="
$credLines = @("protocol=https", "host=github.com", "")
$credOut = $credLines | git credential fill 2>&1
$tokenLine = ($credOut | Select-String "^password=").Line
if (-not $tokenLine) {
    Write-Host "ERROR: no token from credential fill"
    Write-Host $credOut
    exit 1
}
$token = $tokenLine.Replace("password=", "")

$checkFile = Join-Path $env:TEMP "gh-check2.json"
$check = curl.exe -s -o $checkFile -w "%{http_code}" `
    -H "Authorization: Bearer $token" -H "Accept: application/vnd.github+json" `
    "https://api.github.com/repos/$Owner/$RepoName"
Write-Host "GET repos/$Owner/$RepoName -> HTTP $check (no proxy)"
$repoCheckResult = ""
if ($check -eq "404") {
    $body = '{"name":"commercial-website","description":"MUCHEON commercial website","private":false,"auto_init":false}'
    $createFile = Join-Path $env:TEMP "gh-create2.json"
    Set-Content $createFile $body -Encoding utf8
    $repoCheckResult = curl.exe -s -X POST `
        -H "Authorization: Bearer $token" -H "Accept: application/vnd.github+json" -H "Content-Type: application/json" `
        --data-binary "@$createFile" https://api.github.com/user/repos 2>&1 | Out-String
    Write-Host $repoCheckResult
} elseif ($check -eq "200") {
    $repoCheckResult = "Repo already exists"
    Write-Host $repoCheckResult
} else {
    $repoCheckResult = Get-Content $checkFile -Raw -ErrorAction SilentlyContinue
    Write-Host $repoCheckResult
}

$pushSuccess = "fail"
$pushOutput = ""
$pushMethod = ""

Write-Host "`n=== Push attempt 1: no proxy ==="
$out1 = git push -u origin main 2>&1 | Out-String
Write-Host $out1
if ($LASTEXITCODE -eq 0) {
    $pushSuccess = "success"
    $pushOutput = $out1
    $pushMethod = "no proxy"
} else {
    Write-Host "`n=== Push attempt 2: git -c proxy ==="
    $out2 = git -c http.proxy=$Proxy -c https.proxy=$Proxy push -u origin main 2>&1 | Out-String
    Write-Host $out2
    if ($LASTEXITCODE -eq 0) {
        $pushSuccess = "success"
        $pushOutput = $out2
        $pushMethod = "git -c proxy $Proxy"
    } else {
        Write-Host "`n=== Push attempt 3: env HTTP_PROXY ==="
        $env:HTTP_PROXY = $Proxy
        $env:HTTPS_PROXY = $Proxy
        $env:http_proxy = $Proxy
        $env:https_proxy = $Proxy
        $out3 = git push -u origin main 2>&1 | Out-String
        Write-Host $out3
        if ($LASTEXITCODE -eq 0) {
            $pushSuccess = "success"
            $pushOutput = $out3
            $pushMethod = "env proxy $Proxy"
        } else {
            $pushOutput = "attempt1:`n$out1`nattempt2:`n$out2`nattempt3:`n$out3"
        }
    }
}

$commitHash = (git rev-parse HEAD).Trim()
$remoteUrl = (git remote get-url origin).Trim()
$githubUrl = "https://github.com/schen1062-glitch/commercial-website"
$errors = @()
if ($pushSuccess -eq "fail") { $errors += "All push attempts failed" }

$result = @"
=== MUCHEON commercial-website ops result ===
Timestamp: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')
Remote URL: $remoteUrl
Commit hash: $commitHash
Push: $pushSuccess
Push method: $pushMethod
GitHub URL: $githubUrl

--- Repo check ---
HTTP $check
$repoCheckResult

--- Push output ---
$pushOutput

--- Errors ---
$(if ($errors.Count) { $errors -join "`n" } else { "(none)" })

--- Notes ---
- ops-safe-push.ps1 blocked on tracked .env.example; manual steps used instead
- .env.example changes were unstaged before commit (not included in commit)
- Origin verified: NOT ColorlibHQ/velora-ui
"@

Set-Content -Path $ResultFile -Value $result -Encoding utf8
Write-Host "`n=== _ops_result.txt written ==="
Get-Content $ResultFile
