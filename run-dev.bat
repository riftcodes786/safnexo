@echo off
setlocal
cd /d "%~dp0"
if not exist node_modules (
  echo Installing dependencies...
  call npm install
)
echo Starting development server on http://localhost:3000
start "" http://localhost:3000
call npm run dev
endlocal


