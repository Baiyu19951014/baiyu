@echo off
echo ========================================
echo KCL Website Startup Script
echo ========================================
echo.

echo Checking Node.js installation...
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Node.js is not installed or not in PATH!
    echo.
    echo Please:
    echo 1. Install Node.js from https://nodejs.org/
    echo 2. Restart your computer
    echo 3. Run this script again
    echo.
    pause
    exit /b 1
)

node --version
npm --version
echo.

echo Node.js found! Installing dependencies...
echo This may take a few minutes on first run...
echo.

call npm install

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ERROR: npm install failed!
    echo Please check the error messages above.
    pause
    exit /b 1
)

echo.
echo ========================================
echo Starting KCL website...
echo ========================================
echo.
echo Website will open at: http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo.

timeout /t 3 /nobreak >nul

start http://localhost:3000

call npm run dev

pause



