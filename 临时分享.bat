@echo off
chcp 65001 >nul
echo ========================================
echo KCL 网站 - 临时分享（使用 ngrok）
echo ========================================
echo.
echo 这将创建一个临时网址，任何人都能访问
echo 注意：关闭后网址会失效
echo.
echo 使用步骤：
echo 1. 访问 https://ngrok.com/ 注册账号（免费）
echo 2. 下载 ngrok.exe
echo 3. 运行命令：ngrok http 3000
echo 4. 复制显示的网址分享给他人
echo.
echo 您会获得类似这样的网址：
echo https://xxxx-xx-xx-xx-xx.ngrok-free.app
echo.
echo 优点：快速简单，适合临时演示
echo 缺点：关闭后网址失效
echo.
pause


