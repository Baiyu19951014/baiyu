@echo off
chcp 65001 >nul
echo ========================================
echo KCL 网站安装和启动
echo ========================================
echo.
echo 正在检查 Node.js...
node --version >nul 2>&1
if errorlevel 1 (
    echo [错误] 未找到 Node.js！
    echo 请从 https://nodejs.org/ 下载安装
    pause
    exit /b 1
)

echo [成功] Node.js 已安装
node --version
echo.

echo 正在安装依赖包...
echo 这可能需要 3-5 分钟，请耐心等待...
echo.

npm install

if errorlevel 1 (
    echo.
    echo [错误] 安装依赖失败！
    echo 请检查网络连接或稍后重试
    pause
    exit /b 1
)

echo.
echo ========================================
echo [成功] 依赖安装完成！
echo ========================================
echo.
echo 正在启动开发服务器...
echo 网站将在 http://localhost:3000 打开
echo.
echo 按 Ctrl+C 可以停止服务器
echo.

timeout /t 2 >nul
start http://localhost:3000

npm run dev

pause

