# Run this in PowerShell to log in to GitHub and publish resumeboost-ai.
Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

Set-Location $PSScriptRoot

Write-Host "Step 1: GitHub login (browser will open)..." -ForegroundColor Cyan
gh auth login --hostname github.com --git-protocol https --web

Write-Host ""
Write-Host "Step 2: Create repo and push..." -ForegroundColor Cyan
gh repo create resumeboost-ai --public --source=. --remote=origin --push

Write-Host ""
Write-Host "Done: https://github.com/danspelt/resumeboost-ai" -ForegroundColor Green
