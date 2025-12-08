@echo off
chcp 65001 >nul
echo ================================
echo 🔧 完全重写 contact 页面并推送
echo ================================
echo.

echo 正在添加修改的文件...
git add .

echo.
echo 正在提交更改...
git commit -m "fix: 完全重写 contact 页面,移除所有特殊字符"

echo.
echo 正在推送到 GitHub...
git push

echo.
echo ================================
echo ✅ 推送完成！
echo ================================
echo.
echo Vercel 会自动开始新的部署！
echo 请刷新 Vercel 页面查看进度
echo.
pause


