# KCL (KaiChuangLi) Official Website

A modern, multilingual website for KCL AI Education, built with Next.js 14, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Multilingual Support**: English and Chinese (Simplified) with easy language switching
- **Modern Design**: Clean, professional design inspired by leading education platforms
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Performance Optimized**: Built with Next.js 14 App Router for optimal performance
- **SEO Friendly**: Proper meta tags and structured data
- **Internationalization**: Using next-intl for seamless i18n support

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Internationalization**: next-intl
- **Icons**: Lucide React
- **Animations**: Framer Motion

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

The app will automatically redirect to `/en` (English) by default.

## 🌐 Language Support

The website supports:
- English (en) - Default language
- Chinese Simplified (zh)

Switch languages using the globe icon in the navigation bar.

## 📁 Project Structure

```
├── app/
│   ├── [locale]/          # Internationalized pages
│   │   ├── about/         # About pages
│   │   ├── page.tsx       # Homepage
│   │   └── layout.tsx     # Locale-specific layout
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── home/              # Homepage sections
│   ├── Navigation.tsx     # Main navigation
│   ├── Footer.tsx         # Footer component
│   └── LanguageSwitcher.tsx
├── messages/              # Translation files
│   ├── en.json           # English translations
│   └── zh.json           # Chinese translations
├── i18n.ts               # i18n configuration
└── middleware.ts         # Next.js middleware for locale routing
```

## 🎨 Design System

### Colors
- **Primary**: Blue shades (#2563EB)
- **Secondary**: Orange shades (#F59E0B)
- **Accent**: Purple shades

### Typography
- **Headings**: Poppins
- **Body**: Inter

## 📄 Available Pages

- `/` - Homepage with hero, features, learning journey, testimonials
- `/about` - About KCL, mission, vision, values
- `/curriculum` - Course levels and details (coming soon)
- `/centres` - Learning centre locations (coming soon)
- `/student-life` - Student projects and stories (coming soon)
- `/admissions` - Enrollment information (coming soon)
- `/parents` - Parent resources (coming soon)
- `/blog` - News and insights (coming soon)
- `/contact` - Contact information (coming soon)

## 🛠️ Development

### Adding New Translations

1. Add keys to `messages/en.json`
2. Add corresponding translations to `messages/zh.json`
3. Use in components with `useTranslations()` hook

Example:
```tsx
import { useTranslations } from 'next-intl';

function MyComponent() {
  const t = useTranslations('namespace');
  return <h1>{t('key')}</h1>;
}
```

### Creating New Pages

1. Create page in `app/[locale]/your-page/page.tsx`
2. The locale parameter is automatically available
3. Use `getTranslations()` for server components

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Build for production:
```bash
npm run build
```

### Start production server:
```bash
npm start
```

### Deploy to Vercel:
```bash
vercel
```

## 📝 License

© 2025 KCL (KaiChuangLi). All rights reserved.

## 🤝 Contributing

This is a private project for KCL. For questions or suggestions, contact the development team.



