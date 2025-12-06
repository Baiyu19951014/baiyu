@echo off
chcp 65001 >nul
echo ================================
echo 🔧 最终修复 - 移除所有 HTML 实体
echo ================================
echo.

echo 正在添加所有修改的文件...
git add .

echo.
echo 正在提交更改...
git commit -m "fix: 移除所有 HTML 实体字符 (ldquo/rdquo/apos)"

echo.
echo 正在推送到 GitHub...
git push

echo.
echo ================================
echo ✅ 推送完成！这次应该成功了！
echo ================================
echo.
echo 已修复的文件:
echo - app/[locale]/about/page.tsx
echo - components/home/TestimonialsSection.tsx
echo.
echo 请等待 30 秒后刷新 Vercel 页面
echo.
pause

