@echo off
chcp 65001 >nul
echo ========================================
echo 最终更新 - 禁用ESLint引号检查
echo ========================================
echo.
cd C:\0.work\KCL
echo 正在添加文件...
git add .
echo.
echo 正在提交...
git commit -m "Disable eslint quote rule"
echo.
echo 正在推送到GitHub...
echo 如果提示需要认证，请登录GitHub
echo.
git push
echo.
if errorlevel 1 (
    echo [错误] 推送失败！
    echo 请检查网络连接或GitHub认证
    pause
    exit /b 1
)
echo.
echo ========================================
echo [成功] 已推送到GitHub！
echo ========================================
echo.
echo Vercel会自动重新部署
echo 请等待2-3分钟后访问网站
echo.
pause


