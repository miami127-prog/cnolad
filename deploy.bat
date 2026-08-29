@echo off
cd /d "%~dp0"
echo [1/3] staging changes...
git add -A
echo [2/3] committing...
git commit -m "update"
echo [3/3] pushing to GitHub...
git push origin main
echo.
echo ============================================
echo  Done. Vercel will deploy in 1-2 minutes.
echo ============================================
pause
