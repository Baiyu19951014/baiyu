# 🚀 KCL网站部署指南

## 方法1：Vercel 一键部署（推荐）

### 准备工作
1. 访问 https://vercel.com
2. 点击"Sign Up"注册（可以用GitHub/GitLab/邮箱）
3. 验证邮箱

### 部署步骤

#### 使用Vercel CLI（命令行）

1. **安装Vercel CLI**
```bash
npm install -g vercel
```

2. **登录Vercel**
```bash
vercel login
```
（会打开浏览器登录）

3. **部署网站**
```bash
cd C:\0.work\KCL
vercel
```

4. **按照提示操作**
- "Set up and deploy"? → 按回车（Yes）
- "Which scope"? → 选择你的账号
- "Link to existing project"? → N（新项目）
- "What's your project's name"? → kcl（或其他名字）
- "In which directory"? → 按回车（当前目录）
- "Override settings"? → N

5. **等待部署**
几分钟后会显示：
```
✅ Production: https://kcl-xxxxx.vercel.app
```

6. **访问网站**
打开显示的网址，网站已经在线了！

### 更新网站

修改内容后重新部署：
```bash
vercel --prod
```

---

## 方法2：Vercel 网页部署

### 使用GitHub

1. **安装Git**
   - 下载：https://git-scm.com/
   - 安装后重启电脑

2. **上传到GitHub**
```bash
cd C:\0.work\KCL
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/你的用户名/kcl-website.git
git push -u origin main
```

3. **在Vercel导入**
   - 访问 https://vercel.com/new
   - 选择"Import Git Repository"
   - 选择你的仓库
   - 点击"Deploy"

4. **自动部署**
   - 每次推送到GitHub都会自动部署
   - 修改内容后：
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```

---

## 方法3：其他平台

### Netlify
1. 访问 https://netlify.com
2. 拖拽整个文件夹到网页
3. 等待部署完成

### Cloudflare Pages
1. 访问 https://pages.cloudflare.com
2. 连接GitHub仓库
3. 配置构建设置：
   - Build command: `npm run build`
   - Output directory: `.next`

---

## 自定义域名（可选）

部署后可以绑定自己的域名：

1. **购买域名**（例如 kcl-ai.com）
2. **在Vercel添加域名**
   - 项目设置 → Domains
   - 添加域名
   - 按照提示配置DNS

---

## 环境变量

如果需要添加环境变量：

1. Vercel项目设置 → Environment Variables
2. 添加：
   - `NEXT_PUBLIC_SITE_URL`: https://你的域名.com
   - 其他API密钥等

---

## 故障排除

### 部署失败？
- 检查 `package.json` 是否正确
- 查看Vercel部署日志
- 确保所有依赖都在 `package.json` 中

### 修改不生效？
- 清除浏览器缓存
- 等待几分钟CDN更新
- 检查是否部署到production

---

## 获取帮助

- Vercel文档：https://vercel.com/docs
- Next.js部署：https://nextjs.org/docs/deployment

---

**部署后记得分享链接！** 🎉

