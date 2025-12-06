# KCL Website Setup Guide

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** or **pnpm**
- A code editor (VS Code recommended)

## Installation Steps

### 1. Install Dependencies

Open a terminal in the project directory and run:

```bash
npm install
```

Or if you prefer yarn:
```bash
yarn install
```

Or with pnpm:
```bash
pnpm install
```

This will install all required packages including:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- next-intl (for internationalization)
- Framer Motion (for animations)
- Lucide React (for icons)

### 2. Run Development Server

Start the development server:

```bash
npm run dev
```

Or:
```bash
yarn dev
```

The website will be available at:
- **http://localhost:3000** (redirects to /en)
- **http://localhost:3000/en** (English version)
- **http://localhost:3000/zh** (Chinese version)

### 3. Build for Production

To create a production build:

```bash
npm run build
```

Then start the production server:

```bash
npm start
```

## Project Structure

```
KCL/
├── app/                    # Next.js App Router
│   ├── [locale]/          # Internationalized pages
│   │   ├── page.tsx       # Homepage
│   │   ├── about/         # About pages
│   │   ├── curriculum/    # Curriculum pages
│   │   ├── contact/       # Contact page
│   │   └── layout.tsx     # Locale layout
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
│
├── components/            # React components
│   ├── home/             # Homepage sections
│   ├── Navigation.tsx    # Navigation bar
│   ├── Footer.tsx        # Footer
│   └── LanguageSwitcher.tsx
│
├── messages/             # Translation files
│   ├── en.json          # English translations
│   └── zh.json          # Chinese translations
│
├── public/              # Static files (images, etc.)
│
├── i18n.ts             # i18n configuration
├── middleware.ts       # Next.js middleware
├── tailwind.config.ts  # Tailwind CSS config
└── package.json        # Dependencies
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Adding New Pages

1. Create a new file in `app/[locale]/your-page/page.tsx`
2. The page will automatically support both languages
3. Add translations to `messages/en.json` and `messages/zh.json`

Example:
```tsx
// app/[locale]/new-page/page.tsx
export default function NewPage() {
  return (
    <div className="pt-24">
      <h1>Your New Page</h1>
    </div>
  );
}
```

### Adding Translations

1. Open `messages/en.json` and add your keys:
```json
{
  "mySection": {
    "title": "My Title",
    "description": "My description"
  }
}
```

2. Add Chinese translations in `messages/zh.json`:
```json
{
  "mySection": {
    "title": "我的标题",
    "description": "我的描述"
  }
}
```

3. Use in components:
```tsx
import { useTranslations } from 'next-intl';

function MyComponent() {
  const t = useTranslations('mySection');
  return <h1>{t('title')}</h1>;
}
```

### Styling

The project uses Tailwind CSS. Common classes are available:

- `btn-primary` - Primary button style
- `btn-secondary` - Secondary button style
- `section-padding` - Standard section padding
- `container-custom` - Container with max-width
- `card-hover` - Hover effect for cards
- `gradient-primary` - Primary gradient background

### Colors

Primary colors are defined in `tailwind.config.ts`:
- Primary (Blue): `primary-500`, `primary-600`, etc.
- Secondary (Orange): `secondary-400`, `secondary-500`, etc.

Use in your components:
```tsx
<div className="bg-primary-600 text-white">
  Content
</div>
```

## Troubleshooting

### Port 3000 Already in Use

If port 3000 is already in use, you can specify a different port:

```bash
npm run dev -- -p 3001
```

### Module Not Found Errors

Delete `node_modules` and reinstall:

```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

Clear Next.js cache:

```bash
rm -rf .next
npm run build
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and configure everything
5. Click "Deploy"

### Deploy to Other Platforms

Build the project:
```bash
npm run build
```

The output will be in the `.next` folder. You can deploy this to:
- AWS
- Google Cloud
- DigitalOcean
- Any Node.js hosting platform

Make sure to set the environment variable:
```
NODE_ENV=production
```

## Browser Support

The website supports:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Need Help?

- Check the [Next.js Documentation](https://nextjs.org/docs)
- Check the [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- Check the [next-intl Documentation](https://next-intl-docs.vercel.app/)

## License

© 2025 KCL (KaiChuangLi). All rights reserved.


