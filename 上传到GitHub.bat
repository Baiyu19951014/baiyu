@echo off
chcp 65001 >nul
echo ========================================
echo KCL 网站 - 上传到 GitHub
echo ========================================
echo.

REM 检查Git是否安装
git --version >nul 2>&1
if errorlevel 1 (
    echo [错误] 未检测到 Git！
    echo.
    echo 请先安装 Git:
    echo 1. 访问 https://git-scm.com/
    echo 2. 下载并安装
    echo 3. 重启电脑
    echo 4. 重新运行此脚本
    echo.
    pause
    exit /b 1
)

echo [成功] Git 已安装
git --version
echo.

REM 配置Git用户信息
echo ----------------------------------------
echo 第一步：配置 Git 用户信息
echo ----------------------------------------
echo.
set /p USERNAME="请输入您的 GitHub 用户名: "
set /p EMAIL="请输入您的 GitHub 邮箱: "

git config --global user.name "%USERNAME%"
git config --global user.email "%EMAIL%"

echo.
echo [成功] Git 配置完成
echo.

REM 初始化Git仓库
echo ----------------------------------------
echo 第二步：初始化 Git 仓库
echo ----------------------------------------
echo.

if exist .git (
    echo Git 仓库已存在，跳过初始化
) else (
    git init
    echo [成功] Git 仓库已初始化
)

echo.

REM 添加所有文件
echo ----------------------------------------
echo 第三步：添加文件到 Git
echo ----------------------------------------
echo.

git add .
git commit -m "Initial commit: KCL website"

echo.
echo [成功] 文件已提交到本地仓库
echo.

REM 创建主分支
git branch -M main

echo ----------------------------------------
echo 第四步：连接到 GitHub
echo ----------------------------------------
echo.
echo 请按照以下步骤操作：
echo.
echo 1. 打开浏览器访问: https://github.com/new
echo 2. 登录您的 GitHub 账号（如果还没有，请先注册）
echo 3. Repository name 输入: kcl-website
echo 4. 选择 Public（公开）
echo 5. 不要勾选 "Add a README file"
echo 6. 点击 "Create repository"
echo.
echo 7. 创建完成后，复制显示的 HTTPS 网址
echo    格式类似: https://github.com/你的用户名/kcl-website.git
echo.

set /p REPO_URL="请粘贴您的 GitHub 仓库网址: "

git remote remove origin 2>nul
git remote add origin %REPO_URL%

echo.
echo [成功] 已连接到 GitHub 仓库
echo.

echo ----------------------------------------
echo 第五步：上传到 GitHub
echo ----------------------------------------
echo.
echo 正在上传文件到 GitHub...
echo 首次上传可能需要几分钟，请耐心等待...
echo.

git push -u origin main

if errorlevel 1 (
    echo.
    echo [提示] 如果提示需要认证:
    echo - 用户名: 输入您的 GitHub 用户名
    echo - 密码: 需要使用 Personal Access Token（不是密码）
    echo.
    echo 如何获取 Token:
    echo 1. 访问 https://github.com/settings/tokens
    echo 2. 点击 "Generate new token" - "Generate new token (classic)"
    echo 3. 勾选 "repo" 权限
    echo 4. 点击 "Generate token"
    echo 5. 复制生成的 token（只显示一次！）
    echo 6. 使用 token 作为密码
    echo.
    pause
    echo.
    echo 请重新尝试推送...
    git push -u origin main
)

echo.
echo ========================================
echo [成功] 上传完成！
echo ========================================
echo.
echo 您的代码已上传到: %REPO_URL%
echo.
echo ----------------------------------------
echo 下一步：部署到 Vercel
echo ----------------------------------------
echo.
echo 1. 访问: https://vercel.com/
echo 2. 点击 "Sign Up" 注册（建议用 GitHub 账号登录）
echo 3. 登录后点击 "Add New..." - "Project"
echo 4. 选择 "Import Git Repository"
echo 5. 找到 "kcl-website" 仓库并点击 "Import"
echo 6. 保持默认设置，点击 "Deploy"
echo 7. 等待 2-3 分钟，获得网站网址！
echo.
echo 🎉 完成后您会获得类似这样的网址:
echo    https://kcl-website.vercel.app
echo.
pause


