@echo off
chcp 65001 >nul
echo ================================
echo 🔥 强制推送删除操作
echo ================================
echo.

echo [1] 删除 contact 文件夹
rmdir /s /q "app\[locale]\contact"

echo.
echo [2] 添加所有更改
git add -A

echo.
echo [3] 显示状态
git status

echo.
echo [4] 提交删除
git commit -m "fix: 删除整个 contact 文件夹"

echo.
echo [5] 强制推送
git push origin main --force

echo.
echo ================================
echo ✅ 完成！
echo ================================
echo.
pause

