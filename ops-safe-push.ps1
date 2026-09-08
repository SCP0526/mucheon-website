# MUCHEON commercial-website — safe Git ownership + commit + push
# Run in PowerShell (outside Cursor if agent terminal is broken):
#   powershell -ExecutionPolicy Bypass -File D:\AI-Engineering\commercial-website\ops-safe-push.ps1
#
# Hard rules:
# - Never push to ColorlibHQ/velora-ui
# - Never commit .env / .env.local / secrets
# - Origin must be https://github.com/schen1062-glitch/<repo>.git

$ErrorActionPreference = "Stop"
$ProjectRoot = "D:\AI-Engineering\commercial-website"
$Owner = "schen1062-glitch"
$RepoName = "commercial-website"   # personal repo name under schen1062-glitch
$DesiredOrigin = "https://github.com/$Owner/$RepoName.git"
$Proxy = "http://127.0.0.1:7897"
$CommitMsg = "chore: MUCHEON commercial site — personal origin + safe publish prep"

Set-Location $ProjectRoot
Write-Host "=== CWD: $(Get-Location) ===" -ForegroundColor Cyan

# ---------- Phase 0: diagnose ----------
Write-Host "`n=== Phase 0: diagnose ===" -ForegroundColor Cyan
git remote -v
git branch -vv
Write-Host "`n--- status (short, first 80) ---"
git status --short | Select-Object -First 80
Write-Host "`n--- env tracked? ---"
git status --short --ignored .env.local 2>$null
git ls-files -- .env.local .env .env.*
Write-Host "`n--- .gitignore .env lines ---"
Select-String -Path .gitignore -Pattern '\.env' -ErrorAction SilentlyContinue

$currentOrigin = (git remote get-url origin 2>$null)
if ($currentOrigin -match 'ColorlibHQ/velora-ui') {
    Write-Host "`n[BLOCK] origin is Colorlib upstream: $currentOrigin" -ForegroundColor Red
    Write-Host "Will replace with: $DesiredOrigin"
}

$envTracked = git ls-files -- .env.local .env .env.*
if ($envTracked) {
    Write-Host "[BLOCK] Env files are tracked — unstage/remove from index before continue:" -ForegroundColor Red
    $envTracked
    Write-Host "Run: git rm --cached .env.local .env  (then re-run this script)"
    exit 1
}

# ---------- Phase 1: ensure .gitignore ----------
Write-Host "`n=== Phase 1: ensure .gitignore covers env ===" -ForegroundColor Cyan
$gi = Get-Content .gitignore -Raw -ErrorAction SilentlyContinue
if ($gi -notmatch '(?m)^\s*\.env') {
    Add-Content .gitignore "`n# env secrets`n.env`n.env.*`n!.env.example`n"
    Write-Host "Appended .env rules to .gitignore"
} else {
    Write-Host ".gitignore already ignores .env*"
}

# ---------- Phase 2: create personal repo if missing + fix origin ----------
Write-Host "`n=== Phase 2: personal GitHub repo + origin ===" -ForegroundColor Cyan

function Get-GitHubToken {
    $credInput = "protocol=https`nhost=github.com`n`n"
    $line = ($credInput | git credential fill | Select-String '^password=').Line
    if (-not $line) { throw "No GitHub credential found. Run: gh auth login  OR set a PAT in Windows Credential Manager." }
    return $line.Replace('password=', '')
}

$token = Get-GitHubToken
$headersCommon = @(
    "-H", "Authorization: Bearer $token",
    "-H", "Accept: application/vnd.github+json",
    "-H", "Content-Type: application/json"
)

# Check if repo exists
$check = curl.exe -s -o "$env:TEMP\gh-repo-check.json" -w "%{http_code}" -x $Proxy `
    -H "Authorization: Bearer $token" -H "Accept: application/vnd.github+json" `
    "https://api.github.com/repos/$Owner/$RepoName"
Write-Host "GET repos/$Owner/$RepoName -> HTTP $check"

if ($check -eq "404") {
    $createBody = @{
        name        = $RepoName
        description = "MUCHEON commercial website — zero-cost Vercel deploy"
        private     = $false
        auto_init   = $false
    } | ConvertTo-Json -Compress
    Set-Content -Path "$env:TEMP\gh-create-repo.json" -Value $createBody -Encoding utf8
    Write-Host "Creating public repo $Owner/$RepoName ..."
    curl.exe -s -x $Proxy -X POST @headersCommon `
        --data-binary "@$env:TEMP\gh-create-repo.json" `
        https://api.github.com/user/repos | Out-File "$env:TEMP\gh-create-out.json" -Encoding utf8
    Get-Content "$env:TEMP\gh-create-out.json" | Select-String '"full_name"|"html_url"|"message"'
} elseif ($check -eq "200") {
    Write-Host "Repo already exists: $DesiredOrigin"
} else {
    Write-Host "Unexpected status $check — inspect $env:TEMP\gh-repo-check.json" -ForegroundColor Yellow
    Get-Content "$env:TEMP\gh-repo-check.json" -ErrorAction SilentlyContinue
}

# Force origin to personal repo (never Colorlib)
if (git remote | Select-String -Pattern '^origin$') {
    git remote set-url origin $DesiredOrigin
} else {
    git remote add origin $DesiredOrigin
}
Write-Host "origin now:"
git remote -v
$verify = git remote get-url origin
if ($verify -match 'ColorlibHQ') {
    Write-Host "[ABORT] origin still Colorlib — stop." -ForegroundColor Red
    exit 1
}
if ($verify -ne $DesiredOrigin) {
    Write-Host "[ABORT] origin mismatch: $verify" -ForegroundColor Red
    exit 1
}

# ---------- Phase 3: safe stage + commit ----------
Write-Host "`n=== Phase 3: safe commit ===" -ForegroundColor Cyan
git add -A
# Belt-and-suspenders: never stage env secrets
git reset HEAD -- .env .env.local .env.* 2>$null
git status --short | Select-Object -First 60

$stagedEnv = git diff --cached --name-only | Select-String -Pattern '^\.env'
if ($stagedEnv) {
    Write-Host "[ABORT] Env files staged — refusing commit:" -ForegroundColor Red
    $stagedEnv
    exit 1
}

$pending = git status --porcelain
if (-not $pending) {
    Write-Host "Nothing to commit (working tree clean)."
} else {
    git -c user.name="schen1062-glitch" -c user.email="schen1062-glitch@users.noreply.github.com" `
        commit -m $CommitMsg
    Write-Host "Committed."
}

# ---------- Phase 4: push ----------
Write-Host "`n=== Phase 4: push main ===" -ForegroundColor Cyan
git branch -M main
$pushUrl = git remote get-url origin
if ($pushUrl -match 'ColorlibHQ') {
    Write-Host "[ABORT] Refusing push to Colorlib" -ForegroundColor Red
    exit 1
}
git -c http.proxy=$Proxy -c https.proxy=$Proxy push -u origin main
if ($LASTEXITCODE -ne 0) {
    Write-Host "Push failed. If remote has unrelated history, do NOT force-push to Colorlib." -ForegroundColor Yellow
    Write-Host "For empty personal repo, retry after confirming repo exists."
    exit $LASTEXITCODE
}

Write-Host "`n=== DONE ===" -ForegroundColor Green
Write-Host "GitHub: $DesiredOrigin"
Write-Host "Browser: https://github.com/$Owner/$RepoName"
Write-Host "`nNext: follow Vercel Hobby steps in docs (browser login required — not done by this script)."
