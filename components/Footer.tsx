'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { Facebook, Instagram, Youtube, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');
  const params = useParams();
  const locale = params?.locale || 'en';

  const footerLinks = {
    aboutKCL: [
      { label: t('ourStory'), href: `/${locale}/about/story` },
      { label: t('philosophy'), href: `/${locale}/about/philosophy` },
      { label: t('team'), href: `/${locale}/about/team` },
      { label: t('careers'), href: `/${locale}/careers` },
      { label: t('news'), href: `/${locale}/news` },
    ],
    programmes: [
      { label: t('courseOverview'), href: `/${locale}/curriculum` },
      { label: 'Pre-Level 0', href: `/${locale}/curriculum/pre-level-0` },
      { label: 'Level 1-2', href: `/${locale}/curriculum/level-1-2` },
      { label: 'Level 3-4', href: `/${locale}/curriculum/level-3-4` },
      { label: 'Level 5', href: `/${locale}/curriculum/level-5` },
      { label: t('sampleLessons'), href: `/${locale}/curriculum/sample-lessons` },
    ],
    admissions: [
      { label: t('howToEnrol'), href: `/${locale}/admissions` },
      { label: t('tuitionFees'), href: `/${locale}/admissions/fees` },
      { label: t('openDays'), href: `/${locale}/admissions/open-days` },
      { label: t('faqs'), href: `/${locale}/faqs` },
    ],
    resources: [
      { label: t('parentGuide'), href: `/${locale}/parents/guide` },
      { label: t('studentPortal'), href: `/${locale}/student-portal` },
      { label: t('learningResources'), href: `/${locale}/resources` },
      { label: t('community'), href: `/${locale}/community` },
    ],
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* About Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">KCL</span>
              </div>
              <span className="text-white font-display font-bold text-lg">KCL</span>
            </div>
            <p className="text-sm mb-4 text-gray-400">
              Empowering young minds with AI education. Cultivating 100 million AI talents worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
                <Youtube size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* About KCL */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('aboutKCL')}</h3>
            <ul className="space-y-2">
              {footerLinks.aboutKCL.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-primary-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programmes */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('programmes')}</h3>
            <ul className="space-y-2">
              {footerLinks.programmes.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-primary-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Admissions */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('admissions')}</h3>
            <ul className="space-y-2">
              {footerLinks.admissions.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-primary-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('resources')}</h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-primary-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="text-white font-semibold mb-4">{t('contact')}</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start space-x-2">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <span>+44 (0) 20 1234 5678</span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <span>hello@kcl-ai.co.uk</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>London, United Kingdom</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              {t('copyright')}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href={`/${locale}/privacy`} className="hover:text-primary-400 transition-colors">
                {t('privacyPolicy')}
              </Link>
              <span className="text-gray-600">|</span>
              <Link href={`/${locale}/terms`} className="hover:text-primary-400 transition-colors">
                {t('termsOfUse')}
              </Link>
              <span className="text-gray-600">|</span>
              <Link href={`/${locale}/cookies`} className="hover:text-primary-400 transition-colors">
                {t('cookiePolicy')}
              </Link>
              <span className="text-gray-600">|</span>
              <Link href={`/${locale}/sitemap`} className="hover:text-primary-400 transition-colors">
                {t('sitemap')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


