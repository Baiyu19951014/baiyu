@echo off
chcp 65001 >nul
cd C:\0.work\KCL
echo 正在更新代码...
git add .
git commit -m "Fix all quote characters"
git push
echo.
echo 更新完成！Vercel会自动重新部署
echo 请等待2-3分钟后访问网站
pause

