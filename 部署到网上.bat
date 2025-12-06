@echo off
chcp 65001 >nul
echo ========================================
echo KCL 网站 - 部署到 Vercel
echo ========================================
echo.
echo 这将把您的网站部署到互联网上
echo 任何人都可以通过网址访问
echo.
echo 第一次使用需要：
echo 1. 注册 Vercel 账号（免费）
echo 2. 通过邮箱验证
echo.
pause
echo.
echo 正在安装 Vercel CLI...
call npm install -g vercel
echo.
echo ========================================
echo 开始部署...
echo ========================================
echo.
echo 请按照提示操作：
echo - 首次使用会打开浏览器登录
echo - 确认项目设置（按回车使用默认）
echo - 等待部署完成
echo.
call vercel
echo.
echo ========================================
echo 部署完成！
echo ========================================
echo.
echo 您会获得一个网址，例如：
echo https://kcl-xxxxx.vercel.app
echo.
echo 将这个网址分享给任何人即可！
echo.
pause

