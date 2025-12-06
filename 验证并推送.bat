@echo off
chcp 65001 >nul
echo ================================
echo 🔍 验证并推送删除
echo ================================
echo.

echo [1] 删除 contact 文件夹(如果存在)
if exist "app\[locale]\contact" (
    echo 发现 contact 文件夹,正在删除...
    rmdir /s /q "app\[locale]\contact"
) else (
    echo contact 文件夹已不存在
)

echo.
echo [2] 添加所有更改(包括删除)
git add -A

echo.
echo [3] 查看将要提交的内容
git status

echo.
echo [4] 提交
git commit -m "fix: 完全删除 contact 页面及文件夹"

echo.
echo [5] 推送到 GitHub
git push

echo.
echo ================================
echo ✅ 完成！
echo ================================
echo.
echo 现在请到 Vercel 页面:
echo 1. 点击项目名称回到主页
echo 2. 点击 Deployments 标签
echo 3. 点击最新部署右侧的 "..." 菜单
echo 4. 选择 "Redeploy"
echo 5. 取消勾选 "Use existing Build Cache"
echo 6. 点击 "Redeploy" 按钮
echo.
pause

