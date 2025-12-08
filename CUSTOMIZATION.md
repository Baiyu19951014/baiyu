# 🎨 KCL网站自定义指南

本指南帮助您将网站模板自定义为KCL的真实内容。

## 📝 内容更新清单

### 1. Logo和品牌资产

#### 替换Logo
1. 准备KCL Logo文件（建议格式：SVG或PNG，透明背景）
2. 将文件放入 `public/` 文件夹
3. 更新 `components/Navigation.tsx`：

```tsx
// 找到这段代码（约第47行）
<div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-purple-600 rounded-lg flex items-center justify-center">
  <span className="text-white font-bold text-xl">KCL</span>
</div>

// 替换为：
<Image 
  src="/logo.svg" 
  alt="KCL Logo" 
  width={48} 
  height={48}
  className="rounded-lg"
/>
```

#### 更新Favicon
替换 `public/favicon.ico` 为您的图标文件

### 2. 颜色方案

如果需要调整品牌颜色，编辑 `tailwind.config.ts`：

```typescript
colors: {
  primary: {
    // 将这些颜色值改为您的品牌色
    500: '#3b82f6',  // 主要蓝色
    600: '#2563eb',  // 深蓝色
    // ... 其他色阶
  },
  secondary: {
    // 辅助色（橙色）
    400: '#f59e0b',
    500: '#d97706',
    // ... 其他色阶
  },
}
```

### 3. 联系信息

更新所有出现联系信息的地方：

#### 3.1 Footer组件 (`components/Footer.tsx`)
```tsx
// 约第111-123行，更新：
<span>+44 (0) 20 1234 5678</span>  // 改为真实电话
<span>hello@kcl-ai.co.uk</span>    // 改为真实邮箱
<span>London, United Kingdom</span> // 改为真实地址
```

#### 3.2 联系页面 (`app/[locale]/contact/page.tsx`)
搜索并替换所有占位符信息

### 4. 学习中心信息

#### 添加真实学习中心

创建文件 `data/centres.ts`：

```typescript
export const centres = [
  {
    id: 'london-central',
    name: 'KCL London Central',
    address: '具体地址',
    postcode: 'SW1A 1AA',
    phone: '+44 20 1234 5678',
    email: 'london@kcl-ai.co.uk',
    hours: {
      weekday: '9:00 - 18:00',
      saturday: '10:00 - 16:00',
      sunday: 'Closed'
    },
    coordinates: {
      lat: 51.5074,
      lng: -0.1278
    }
  },
  // 添加更多学习中心...
];
```

然后在首页和中心页面使用这些数据。

### 5. 课程信息

#### 更新课程定价

编辑 `messages/en.json` 和 `messages/zh.json`：

```json
{
  "faq": {
    "q4": {
      "question": "How much does it cost?",
      "answer": "我们的学期课程从每学期£399到£699不等..."
    }
  }
}
```

#### 添加详细课程大纲

为每个Level创建详细页面，例如：
`app/[locale]/curriculum/level-1/page.tsx`

### 6. 图片资源

#### 推荐的图片尺寸
- Hero背景图：1920x1080px
- 学生作品：800x600px
- 团队照片：400x400px
- 学习中心：1200x800px

#### 添加图片步骤
1. 将图片放入 `public/images/` 文件夹
2. 创建子文件夹组织：
   - `public/images/hero/`
   - `public/images/students/`
   - `public/images/centres/`
   - `public/images/team/`

3. 在组件中使用：
```tsx
import Image from 'next/image';

<Image 
  src="/images/hero/main-bg.jpg"
  alt="描述"
  width={1920}
  height={1080}
  priority
/>
```

### 7. 学生作品展示

创建文件 `data/projects.ts`：

```typescript
export const studentProjects = [
  {
    id: '1',
    title: 'AI Art Creation',
    student: 'Emma',
    age: 10,
    level: 'Level 2',
    description: '使用AI工具创建的艺术作品',
    image: '/images/projects/project-1.jpg',
    tags: ['AI Art', 'Creative']
  },
  // 添加更多项目...
];
```

在首页和学生生活页面展示。

### 8. 家长评价

更新真实评价，编辑翻译文件：

```json
{
  "testimonials": {
    "testimonial1": {
      "quote": "真实家长的评价...",
      "author": "家长姓名, 城市",
      "role": "Level X学生家长"
    }
  }
}
```

建议：
- 收集3-6个真实评价
- 包含具体的成果描述
- 如可能，添加真实照片（需获得授权）

### 9. 团队介绍

创建 `app/[locale]/about/team/page.tsx`：

```tsx
const team = [
  {
    name: '姓名',
    title: '职位',
    bio: '简介...',
    image: '/images/team/member-1.jpg',
    linkedin: 'https://linkedin.com/in/...'
  },
  // 更多团队成员...
];
```

### 10. 开放日和活动

创建 `data/events.ts`：

```typescript
export const events = [
  {
    id: '1',
    title: 'London Centre Open Day',
    date: '2025-01-15',
    time: '10:00-16:00',
    location: 'London Central',
    type: 'open-day',
    registrationUrl: '/admissions/book-trial'
  },
  // 更多活动...
];
```

### 11. SEO优化

#### 更新每个页面的metadata

在每个 `page.tsx` 文件中：

```tsx
export const metadata = {
  title: '具体页面标题 - KCL',
  description: '详细描述，包含关键词',
  keywords: 'AI教育, 儿童编程, 英国, ...',
  openGraph: {
    title: '社交媒体标题',
    description: '社交媒体描述',
    images: ['/images/og-image.jpg'],
  },
};
```

#### 创建 sitemap
创建 `app/sitemap.ts`：

```typescript
export default function sitemap() {
  return [
    {
      url: 'https://www.kcl-ai.co.uk',
      lastModified: new Date(),
    },
    {
      url: 'https://www.kcl-ai.co.uk/about',
      lastModified: new Date(),
    },
    // 添加所有页面...
  ];
}
```

### 12. 分析和追踪

#### 添加Google Analytics

1. 创建 `lib/gtag.ts`：
```typescript
export const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // 您的GA ID

export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};
```

2. 在 `app/layout.tsx` 添加GA脚本

### 13. 表单处理

#### 联系表单后端

选项1：使用表单服务（推荐新手）
- FormSpree
- Google Forms
- Typeform

选项2：自建API
创建 `app/api/contact/route.ts`：

```typescript
export async function POST(request: Request) {
  const data = await request.json();
  
  // 发送邮件或保存到数据库
  
  return Response.json({ success: true });
}
```

### 14. 预约系统集成

推荐工具：
- **Calendly** - 简单易用
- **Acuity Scheduling** - 功能强大
- **自建系统** - 完全控制

Calendly集成示例：

```tsx
<a 
  href="https://calendly.com/kcl/trial" 
  target="_blank"
  className="btn-primary"
>
  预约试听课
</a>
```

### 15. 多语言内容完善

#### 确保所有内容都有翻译

检查清单：
- [ ] 所有页面标题和描述
- [ ] 导航菜单项
- [ ] 按钮文字
- [ ] 表单标签
- [ ] 错误提示
- [ ] FAQ内容
- [ ] 页脚链接

### 16. 性能优化

#### 图片优化
使用 Next.js Image组件自动优化

#### 代码分割
已自动完成（Next.js内置）

#### 字体优化
已使用 `next/font` 自动优化

### 17. 测试清单

部署前测试：

- [ ] 所有页面在桌面端正常显示
- [ ] 所有页面在移动端正常显示
- [ ] 语言切换功能正常
- [ ] 所有链接可点击且正确
- [ ] 表单提交功能正常
- [ ] 图片正确加载
- [ ] 无控制台错误
- [ ] 页面加载速度快（<3秒）

### 18. 环境变量

创建 `.env.local` 文件（不要提交到Git）：

```
NEXT_PUBLIC_SITE_URL=https://www.kcl-ai.co.uk
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
CONTACT_EMAIL=hello@kcl-ai.co.uk
```

在代码中使用：
```typescript
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
```

## 🚀 部署准备

### 部署前检查清单

1. **内容检查**
   - [ ] 所有占位符文字已替换
   - [ ] Logo和图片已更新
   - [ ] 联系信息正确
   - [ ] 价格信息准确

2. **技术检查**
   - [ ] 构建成功（`npm run build`）
   - [ ] 无TypeScript错误
   - [ ] 无ESLint警告
   - [ ] 测试所有功能

3. **SEO检查**
   - [ ] 每页都有title和description
   - [ ] 图片都有alt标签
   - [ ] robots.txt文件存在
   - [ ] sitemap已生成

4. **法律合规**
   - [ ] 隐私政策页面
   - [ ] 使用条款页面
   - [ ] Cookie政策
   - [ ] GDPR合规

## 💡 技巧和建议

1. **渐进式更新**：不要一次性改太多，先完成核心内容

2. **保留备份**：修改前复制原文件做备份

3. **测试每次修改**：每次改动后在浏览器中检查效果

4. **使用Git**：每完成一个功能就提交代码
   ```bash
   git add .
   git commit -m "更新Logo和联系信息"
   ```

5. **移动端优先**：确保在手机上看起来也很好

6. **性能为王**：保持图片大小合理，避免过大文件

7. **内容为本**：好的内容比花哨的动画更重要

## 📞 需要帮助？

遇到问题时：
1. 查看浏览器控制台错误信息
2. 阅读Next.js文档
3. Google搜索具体错误信息
4. 查看GitHub Issues

## ✅ 完成

完成自定义后，您应该有一个：
- 展示KCL品牌的专业网站
- 包含真实内容和信息
- 在所有设备上完美运行
- 针对搜索引擎优化
- 准备好接待真实用户

祝您自定义顺利！🎉



