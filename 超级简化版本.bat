@echo off
chcp 65001 >nul
echo ================================
echo 🔧 超级简化版本 - 最小化 contact 页面
echo ================================
echo.

echo 正在添加所有修改...
git add .

echo.
echo 正在提交...
git commit -m "fix: 超级简化 contact 页面,移除所有复杂内容"

echo.
echo 正在推送...
git push

echo.
echo ================================
echo ✅ 完成!
echo ================================
echo.
pause

