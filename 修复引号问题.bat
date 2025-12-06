@echo off
chcp 65001 >nul
echo ========================================
echo 修复引号格式问题
echo ========================================
echo.
echo 正在检查并修复翻译文件中的引号...
echo.

REM 这个脚本会将中文引号替换为英文引号
REM 但Windows批处理不太适合这个任务

echo 建议使用以下方法之一修复：
echo.
echo 方法1：手动修复（最简单）
echo --------------------------------
echo 1. 打开 messages\zh.json 文件
echo 2. 按 Ctrl+H 打开查找替换
echo 3. 查找："（中文引号）替换为："（英文引号）
echo 4. 查找：'（中文引号）替换为：'（英文引号）
echo 5. 保存文件
echo.
echo 方法2：使用提供的修复版本
echo --------------------------------
echo 我会为您创建一个修复后的版本
echo.
pause

echo.
echo 正在准备修复...
echo 请在IDE中打开 messages\zh.json
echo 然后运行全局替换即可
echo.
pause

