# 🚀 KCL网站快速启动指南

## 第一步：安装Node.js

确保你的电脑已经安装了Node.js (版本18或更高)

检查Node.js版本：
```bash
node --version
```

如果没有安装，请访问：https://nodejs.org/

## 第二步：安装依赖

在项目文件夹中打开终端/命令提示符，运行：

```bash
npm install
```

等待安装完成（可能需要几分钟）

## 第三步：启动开发服务器

```bash
npm run dev
```

看到以下信息表示成功：
```
✓ Ready in Xms
○ Local: http://localhost:3000
```

## 第四步：打开浏览器

访问：**http://localhost:3000**

网站会自动跳转到英文版 (http://localhost:3000/en)

## 切换语言

点击导航栏右上角的地球图标 🌐，可以切换英文/中文

## 常见问题

### Q: npm命令无法识别？
A: 需要先安装Node.js，它会自动包含npm

### Q: 端口3000被占用？
A: 使用其他端口：`npm run dev -- -p 3001`

### Q: 安装依赖时出错？
A: 
1. 删除node_modules文件夹
2. 删除package-lock.json文件
3. 重新运行 `npm install`

### Q: 页面显示错误？
A: 
1. 停止服务器（按Ctrl+C）
2. 删除.next文件夹
3. 重新运行 `npm run dev`

## 📁 项目结构说明

```
KCL/
├── app/                    # 页面文件
│   ├── [locale]/          # 多语言页面
│   │   ├── page.tsx       # 首页
│   │   ├── about/         # 关于我们页面
│   │   ├── curriculum/    # 课程页面
│   │   └── contact/       # 联系页面
│   └── globals.css        # 全局样式
│
├── components/            # 可复用组件
│   ├── home/             # 首页各部分
│   ├── Navigation.tsx    # 导航栏
│   └── Footer.tsx        # 页脚
│
├── messages/             # 翻译文件
│   ├── en.json          # 英文翻译
│   └── zh.json          # 中文翻译
│
└── public/              # 静态文件（图片等）
```

## 🎨 修改内容

### 修改文字内容

编辑翻译文件：
- 英文：`messages/en.json`
- 中文：`messages/zh.json`

### 修改样式

主要样式在 `app/globals.css` 和 `tailwind.config.ts`

### 添加新页面

在 `app/[locale]/` 文件夹下创建新文件夹和 `page.tsx`

## 📝 更多帮助

详细说明请查看：
- `SETUP.md` - 完整设置指南
- `README.md` - 项目文档

## 🌐 部署到网上

### 推荐：使用Vercel（免费）

1. 将代码推送到GitHub
2. 访问 https://vercel.com
3. 注册并导入你的仓库
4. 点击"Deploy"
5. 等待几分钟，你的网站就上线了！

Vercel会自动识别Next.js项目并进行配置。

## ✅ 核心功能清单

- ✅ 英文/中文双语支持
- ✅ 响应式设计（手机/平板/电脑）
- ✅ 现代化UI设计
- ✅ 首页完整内容
- ✅ 关于我们页面
- ✅ 课程体系页面
- ✅ 联系我们页面
- ✅ 平滑滚动和动画效果
- ✅ SEO优化

## 🎯 下一步开发建议

1. 添加真实的KCL Logo（替换public/favicon.ico）
2. 添加学生作品图片
3. 添加真实的学习中心地址
4. 完善其他页面（学生生活、家长专区等）
5. 添加联系表单后端处理
6. 集成Google Analytics
7. 添加在线预约系统

## 需要帮助？

查看完整文档：
- 设置指南：`SETUP.md`
- 项目说明：`README.md`
- Next.js文档：https://nextjs.org/docs
- Tailwind CSS文档：https://tailwindcss.com/docs



