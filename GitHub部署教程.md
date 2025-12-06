# 🚀 KCL网站 - GitHub + Vercel 部署完整教程

## 📋 准备工作

### 需要的账号（都是免费的）：
- ✅ GitHub 账号
- ✅ Vercel 账号（建议用GitHub登录）

---

## 第一部分：安装 Git

### 1. 下载 Git
- 访问：https://git-scm.com/
- 点击 "Download for Windows"
- 下载完成后双击安装

### 2. 安装 Git
- 一路点击 "Next"
- 保持默认设置即可
- 安装完成后**重启电脑**

### 3. 验证安装
打开命令提示符，输入：
```bash
git --version
```
如果显示版本号，说明安装成功！

---

## 第二部分：上传代码到 GitHub

### 方法A：使用自动化脚本（推荐）

1. **双击运行** `上传到GitHub.bat`

2. **按照提示操作**：
   - 输入 GitHub 用户名
   - 输入 GitHub 邮箱
   - 访问 https://github.com/new 创建仓库
   - 仓库名称：`kcl-website`
   - 选择 **Public**（公开）
   - **不要**勾选 "Add a README file"
   - 点击 "Create repository"
   - 复制显示的 HTTPS 网址
   - 粘贴到脚本中

3. **完成！** 代码已上传到 GitHub

---

### 方法B：手动操作

#### 步骤1：配置 Git

```bash
git config --global user.name "你的用户名"
git config --global user.email "你的邮箱"
```

#### 步骤2：初始化仓库

```bash
cd C:\0.work\KCL
git init
git add .
git commit -m "Initial commit: KCL website"
git branch -M main
```

#### 步骤3：创建 GitHub 仓库

1. 访问：https://github.com/new
2. Repository name: `kcl-website`
3. 选择 **Public**
4. 点击 "Create repository"

#### 步骤4：推送到 GitHub

```bash
git remote add origin https://github.com/你的用户名/kcl-website.git
git push -u origin main
```

**如果提示需要认证：**
- 用户名：GitHub 用户名
- 密码：需要使用 **Personal Access Token**

**获取 Token：**
1. 访问：https://github.com/settings/tokens
2. 点击 "Generate new token (classic)"
3. 勾选 "repo" 权限
4. 点击 "Generate token"
5. **复制 token**（只显示一次！）
6. 在命令行用 token 作为密码

---

## 第三部分：部署到 Vercel

### 步骤1：注册/登录 Vercel

1. 访问：https://vercel.com/
2. 点击 "Sign Up"
3. **建议选择 "Continue with GitHub"**（这样更方便）
4. 授权 Vercel 访问 GitHub

### 步骤2：导入项目

1. 登录后，点击 **"Add New..."**
2. 选择 **"Project"**
3. 在 "Import Git Repository" 下找到 **kcl-website**
4. 点击 **"Import"**

### 步骤3：配置项目

保持默认设置：
- Framework Preset: **Next.js** ✅ 自动检测
- Root Directory: `./` ✅
- Build Command: `npm run build` ✅
- Output Directory: `.next` ✅

点击 **"Deploy"**

### 步骤4：等待部署

- 部署过程需要 **2-5 分钟**
- 可以看到实时构建日志
- 看到 **"Congratulations!"** 表示成功

### 步骤5：获取网址

部署完成后会显示：
```
https://kcl-website-xxxxx.vercel.app
```

点击访问，您的网站已经上线了！🎉

---

## 第四部分：更新网站

修改代码后，如何更新线上网站？

### 方法1：使用脚本更新

创建 `更新网站.bat`：

```batch
@echo off
echo 正在更新网站...
git add .
git commit -m "Update website"
git push
echo 更新完成！Vercel 会自动部署
pause
```

双击运行即可！

### 方法2：手动命令

```bash
cd C:\0.work\KCL
git add .
git commit -m "Update content"
git push
```

**Vercel 会自动检测到更新并重新部署！**

---

## 第五部分：自定义域名（可选）

### 步骤1：购买域名
- 阿里云：https://wanwang.aliyun.com/
- 腾讯云：https://dnspod.cloud.tencent.com/
- GoDaddy：https://www.godaddy.com/

建议域名：`kcl-ai.com` 或 `kaichuangli.com`

### 步骤2：在 Vercel 添加域名

1. 进入项目设置
2. 点击 **"Domains"**
3. 输入您的域名，例如：`kcl-ai.com`
4. 点击 **"Add"**

### 步骤3：配置 DNS

Vercel 会提供 DNS 记录，在域名注册商添加：

**A 记录：**
```
@ → 76.76.21.21
```

**CNAME 记录：**
```
www → cname.vercel-dns.com
```

等待 **10分钟到48小时** DNS 生效

完成后访问：https://kcl-ai.com 🎉

---

## 故障排除

### Git 推送失败？

**问题1：认证失败**
- 使用 Personal Access Token，不是密码
- Token 获取：https://github.com/settings/tokens

**问题2：端口443连接失败**
```bash
git config --global http.proxy http://127.0.0.1:7890
```
（根据你的代理设置调整）

**问题3：文件太大**
- 检查是否上传了 `node_modules`
- 确保 `.gitignore` 文件存在

### Vercel 部署失败？

**检查构建日志：**
1. 点击失败的部署
2. 查看 "Build Logs"
3. 根据错误信息修复

**常见问题：**
- 缺少依赖：确保 `package.json` 完整
- 构建错误：本地运行 `npm run build` 测试

---

## 常用命令速查

```bash
# 查看状态
git status

# 添加文件
git add .

# 提交更改
git commit -m "描述"

# 推送到 GitHub
git push

# 查看远程仓库
git remote -v

# 查看提交历史
git log --oneline

# 撤销修改
git checkout -- 文件名

# 回退版本
git reset --hard HEAD^
```

---

## 获取帮助

- **GitHub 文档**：https://docs.github.com/
- **Vercel 文档**：https://vercel.com/docs
- **Git 教程**：https://git-scm.com/book/zh/v2

---

## 🎉 完成清单

部署完成后，您应该有：

- ✅ GitHub 仓库：https://github.com/你的用户名/kcl-website
- ✅ 在线网站：https://kcl-website.vercel.app
- ✅ 自动部署：推送代码自动更新
- ✅ HTTPS 加密
- ✅ 全球 CDN 加速
- ✅ 免费无限流量

**分享您的网站给全世界吧！** 🌍✨

---

最后更新：2025年12月6日

