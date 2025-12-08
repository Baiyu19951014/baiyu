@echo off
chcp 65001 >nul
echo ========================================
echo KCL 网站 - 快速更新
echo ========================================
echo.

REM 检查Git是否安装
git --version >nul 2>&1
if errorlevel 1 (
    echo [错误] 未检测到 Git！
    echo 请先运行 "上传到GitHub.bat" 完成初始设置
    pause
    exit /b 1
)

REM 检查是否有远程仓库
git remote -v | findstr origin >nul 2>&1
if errorlevel 1 (
    echo [错误] 未检测到 GitHub 仓库！
    echo 请先运行 "上传到GitHub.bat" 完成初始上传
    pause
    exit /b 1
)

echo 当前修改的文件：
echo ----------------------------------------
git status --short
echo.

set /p CONFIRM="确认要上传这些修改吗？(Y/N): "
if /i not "%CONFIRM%"=="Y" (
    echo 取消上传
    pause
    exit /b 0
)

echo.
set /p MESSAGE="请输入更新说明（直接回车使用默认）: "
if "%MESSAGE%"=="" set MESSAGE=Update website

echo.
echo 正在添加文件...
git add .

echo 正在提交更改...
git commit -m "%MESSAGE%"

echo 正在推送到 GitHub...
git push

if errorlevel 1 (
    echo.
    echo [错误] 推送失败！
    echo 请检查网络连接或 GitHub 认证信息
    pause
    exit /b 1
)

echo.
echo ========================================
echo [成功] 网站已更新！
echo ========================================
echo.
echo Vercel 会自动检测到更新并重新部署
echo 大约 2-3 分钟后，线上网站会更新完成
echo.
echo 查看部署状态: https://vercel.com/
echo.
pause


