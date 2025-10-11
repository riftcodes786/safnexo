@echo off
setlocal
cd /d "%~dp0"
echo Building Next.js app...
call npm run build
if errorlevel 1 (
  echo Build failed.
  exit /b 1
)
echo Starting production server on http://localhost:3000
start "" http://localhost:3000
call npm run start
endlocal


