@echo off
chcp 65001 >nul
echo ================================
echo 🗑️  暂时删除 contact 页面
echo ================================
echo.
echo 我们先让网站能够成功部署
echo 然后再重新添加 contact 页面
echo.

echo 正在添加更改...
git add .

echo.
echo 正在提交...
git commit -m "temp: 暂时删除 contact 页面以解决构建问题"

echo.
echo 正在推送...
git push

echo.
echo ================================
echo ✅ 完成！
echo ================================
echo.
echo 已删除 contact 页面
echo 等待 Vercel 重新部署
echo.
pause

