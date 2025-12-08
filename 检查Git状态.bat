@echo off
chcp 65001 >nul
echo ================================
echo 🔍 检查 Git 状态
echo ================================
echo.

echo [1] 检查当前分支:
git branch

echo.
echo [2] 检查远程仓库:
git remote -v

echo.
echo [3] 检查最近3次提交:
git log --oneline -3

echo.
echo [4] 检查未提交的更改:
git status

echo.
echo ================================
pause


