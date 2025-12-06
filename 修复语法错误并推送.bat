@echo off
chcp 65001 >nul
echo ================================
echo 🔧 修复语法错误并推送到 GitHub
echo ================================
echo.

echo 正在添加修改的文件...
git add .

echo.
echo 正在提交更改...
git commit -m "fix: 修复 contact 页面缺失的 p 标签结束符"

echo.
echo 正在推送到 GitHub...
git push

echo.
echo ================================
echo ✅ 推送完成！
echo ================================
echo.
echo 现在请访问 Vercel 网站，会自动开始部署！
echo.
pause

