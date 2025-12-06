# KCL（开创力）官方网站

一个现代化的多语言网站，为KCL AI教育项目打造，使用Next.js 14、TypeScript和Tailwind CSS构建。

## 🌟 主要特性

- **多语言支持**：英文和简体中文，轻松切换语言
- **现代化设计**：借鉴国际领先教育平台的简洁专业设计风格
- **完全响应式**：针对桌面、平板和移动设备优化
- **性能优化**：使用Next.js 14 App Router实现最佳性能
- **SEO友好**：完善的meta标签和结构化数据
- **国际化**：使用next-intl实现无缝的多语言支持

## 🚀 技术栈

- **框架**：Next.js 14 (App Router)
- **语言**：TypeScript
- **样式**：Tailwind CSS
- **国际化**：next-intl
- **图标**：Lucide React
- **动画**：Framer Motion

## 📦 安装

1. 安装依赖：
```bash
npm install
```

2. 运行开发服务器：
```bash
npm run dev
```

3. 在浏览器中打开 [http://localhost:3000](http://localhost:3000)

应用会自动重定向到 `/en` (英文) 或根据浏览器语言设置选择语言。

## 🌐 语言支持

网站支持：
- 英文 (en) - 默认语言
- 简体中文 (zh)

通过导航栏的地球图标切换语言。

## 📁 项目结构

```
├── app/
│   ├── [locale]/          # 国际化页面
│   │   ├── about/         # 关于我们页面
│   │   ├── contact/       # 联系我们页面
│   │   ├── curriculum/    # 课程体系页面
│   │   ├── page.tsx       # 首页
│   │   └── layout.tsx     # 语言特定布局
│   ├── layout.tsx         # 根布局
│   └── globals.css        # 全局样式
├── components/
│   ├── home/              # 首页各部分组件
│   ├── Navigation.tsx     # 主导航
│   ├── Footer.tsx         # 页脚组件
│   └── LanguageSwitcher.tsx # 语言切换器
├── messages/              # 翻译文件
│   ├── en.json           # 英文翻译
│   └── zh.json           # 中文翻译
├── i18n.ts               # i18n配置
└── middleware.ts         # Next.js中间件处理语言路由
```

## 🎨 设计系统

### 颜色
- **主色**：蓝色系 (#2563EB)
- **辅助色**：橙色系 (#F59E0B)
- **强调色**：紫色系

### 字体
- **标题**：Poppins
- **正文**：Inter

## 📄 已完成的页面

- `/` - 首页，包含英雄区、特色、学习路径、家长评价
- `/about` - 关于KCL，使命、愿景、价值观
- `/curriculum` - 课程等级和详情
- `/contact` - 联系信息和表单

## 📄 待开发页面

- `/centres` - 学习中心位置
- `/student-life` - 学生作品和故事
- `/admissions` - 入学信息
- `/parents` - 家长资源
- `/blog` - 新闻和见解

## 🛠️ 开发

### 添加新翻译

1. 在 `messages/en.json` 中添加键值
2. 在 `messages/zh.json` 中添加对应的中文翻译
3. 在组件中使用 `useTranslations()` hook

示例：
```tsx
import { useTranslations } from 'next-intl';

function MyComponent() {
  const t = useTranslations('namespace');
  return <h1>{t('key')}</h1>;
}
```

### 创建新页面

1. 在 `app/[locale]/your-page/page.tsx` 创建页面
2. locale参数会自动可用
3. 服务器组件使用 `getTranslations()`

## 📱 响应式断点

- 移动端：< 768px
- 平板：768px - 1024px
- 桌面：> 1024px

## 🚀 部署

### 构建生产版本：
```bash
npm run build
```

### 启动生产服务器：
```bash
npm start
```

### 部署到Vercel：
```bash
vercel
```

或直接在Vercel网站导入GitHub仓库。

## 🎯 核心功能

### 首页包含：
1. **Hero区域** - 吸引人的标题和CTA按钮
2. **为什么选择KCL** - 4大核心优势
3. **学习路径** - 6级课程体系展示
4. **运作方式** - 5步学习流程
5. **家长评价** - 真实用户反馈
6. **FAQ** - 常见问题解答
7. **CTA区域** - 行动号召

### 导航功能：
- 固定顶部导航栏
- 滚动时变化效果
- 语言切换器
- 移动端响应式菜单
- 预约试听和登录按钮

### 页脚功能：
- 5列链接布局
- 社交媒体图标
- 联系信息
- 法律链接

## 🎨 自定义样式类

项目提供了便捷的样式类：

```css
.btn-primary        /* 主要按钮样式 */
.btn-secondary      /* 次要按钮样式 */
.section-padding    /* 标准区块内边距 */
.container-custom   /* 带最大宽度的容器 */
.card-hover         /* 卡片悬停效果 */
.gradient-primary   /* 主要渐变背景 */
.text-gradient      /* 渐变文字 */
```

## 📊 SEO优化

- 每个页面都有适当的meta标签
- 语义化HTML结构
- 优化的图片加载
- 快速的页面加载速度
- 移动端友好

## 🔒 隐私和安全

- GDPR合规考虑
- 安全的表单处理
- Cookie政策
- 隐私政策页面（待开发）

## 📝 待办事项

- [ ] 添加真实的KCL Logo
- [ ] 收集并添加学生作品图片
- [ ] 完善学习中心地址和地图
- [ ] 开发剩余页面
- [ ] 集成联系表单后端
- [ ] 添加Google Analytics
- [ ] 实现在线预约系统
- [ ] 添加学生/家长登录功能
- [ ] 集成支付系统（如需要）

## 🤝 贡献

这是KCL的私有项目。如有问题或建议，请联系开发团队。

## 📞 联系方式

- 邮箱：hello@kcl-ai.co.uk
- 电话：+44 (0) 20 1234 5678
- 网站：www.kcl-ai.co.uk

## 📄 许可

© 2025 KCL（开创力）。保留所有权利。

## 🙏 致谢

设计灵感来自：
- K12.com - 教育网站最佳实践
- 现代化教育平台的UI/UX设计

技术支持：
- Next.js团队
- Vercel
- Tailwind Labs
- 开源社区

---

**快速开始？** 查看 [QUICKSTART.md](./QUICKSTART.md) 获取简明指南！

**需要帮助？** 查看 [SETUP.md](./SETUP.md) 获取详细设置说明！


