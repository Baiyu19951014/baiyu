@echo off
chcp 65001 >nul
echo ================================
echo 🔧 第三次修复 - 简化 contact 页面
echo ================================
echo.

echo 正在添加修改的文件...
git add app/[locale]/contact/page.tsx

echo.
echo 正在提交更改...
git commit -m "fix: 简化 contact 页面,移除 br 标签"

echo.
echo 正在推送到 GitHub...
git push

echo.
echo ================================
echo ✅ 推送完成！
echo ================================
echo.
echo 请等待 30 秒后刷新 Vercel 页面
echo.
pause


