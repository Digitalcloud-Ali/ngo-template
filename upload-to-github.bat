@echo off
echo ========================================
echo Uploading NGO Template to GitHub
echo Organization: rayice/digitalcloud-ali
echo ========================================
echo.

REM Initialize git repository
echo [1/6] Initializing Git repository...
git init

REM Add all files
echo [2/6] Adding files to Git...
git add .

REM Create initial commit
echo [3/6] Creating initial commit...
git commit -m "Initial commit: Håp Norge NGO Template - Premium single-page website with 3D effects"

REM Rename branch to main
echo [4/6] Renaming branch to main...
git branch -M main

REM Add remote repository
echo [5/6] Adding remote repository...
git remote add origin https://github.com/rayice/digitalcloud-ali-ngo-template.git

REM Push to GitHub
echo [6/6] Pushing to GitHub...
git push -u origin main

echo.
echo ========================================
echo Upload Complete!
echo ========================================
echo.
echo Repository URL: https://github.com/rayice/digitalcloud-ali-ngo-template
echo.
echo Note: If the repository doesn't exist, create it first at:
echo https://github.com/organizations/rayice/repositories/new
echo.
pause
