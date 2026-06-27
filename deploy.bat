@echo off
REM ===== 크놀AD 자동 배포 스크립트 (Windows) =====
REM 이 파일을 cnolad 레포 폴더 안에 두고 더블클릭하세요.
REM index.html 을 새 버전으로 교체한 뒤 실행하면 GitHub에 push -> Vercel 자동 배포됩니다.

cd /d "%~dp0"

echo.
echo [1/3] 변경 사항 스테이징...
git add -A

echo [2/3] 커밋...
git commit -m "update %date% %time%"
if errorlevel 1 (
  echo 변경 사항이 없거나 커밋 실패. index.html 을 교체했는지 확인하세요.
)

echo [3/3] GitHub에 푸시...
git push

echo.
echo ============================================
echo  완료! Vercel이 1~2분 내 자동 배포합니다.
echo  https://vercel.com/dashboard 에서 진행상황 확인
echo ============================================
pause
