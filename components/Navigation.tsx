'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

interface NavigationProps {
  locale: string;
}

export default function Navigation({ locale }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = useTranslations('nav');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t('aboutUs'), href: `/${locale}/about` },
    { label: t('curriculum'), href: `/${locale}/curriculum` },
    { label: t('learningCentres'), href: `/${locale}/centres` },
    { label: t('studentLife'), href: `/${locale}/student-life` },
    { label: t('admissions'), href: `/${locale}/admissions` },
    { label: t('parents'), href: `/${locale}/parents` },
    { label: t('blog'), href: `/${locale}/blog` },
    { label: t('contact'), href: `/${locale}/contact` },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-3' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container-custom mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">KCL</span>
            </div>
            <span className="text-xl font-display font-bold text-gray-900 hidden md:block">
              KaiChuangLi
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.slice(0, 5).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 text-sm"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSwitcher currentLocale={locale} />
            <Link
              href={`/${locale}/admissions/book-trial`}
              className="btn-primary text-sm"
            >
              {t('bookTrial')}
            </Link>
            <Link
              href={`/${locale}/parent-login`}
              className="text-primary-600 hover:text-primary-700 font-medium text-sm"
            >
              {t('parentLogin')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-4">
            <LanguageSwitcher currentLocale={locale} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2 mt-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="border-t border-gray-200 pt-4 mt-4">
                <Link
                  href={`/${locale}/admissions/book-trial`}
                  className="block w-full btn-primary text-center mb-3"
                  onClick={() => setIsOpen(false)}
                >
                  {t('bookTrial')}
                </Link>
                <Link
                  href={`/${locale}/parent-login`}
                  className="block w-full text-center text-primary-600 hover:text-primary-700 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {t('parentLogin')}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}


