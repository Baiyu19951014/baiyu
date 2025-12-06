'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowRight, Download, CheckCircle } from 'lucide-react';

export default function CTASection() {
  const t = useTranslations('cta');
  const params = useParams();
  const locale = params?.locale || 'en';

  return (
    <section className="section-padding gradient-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-40 h-40 bg-white rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-white rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      <div className="container-custom mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            {t('title')}
          </h2>
          <p className="text-xl text-white/90 mb-8">
            {t('subtitle')}
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-12 text-white/90">
            <div className="flex items-center space-x-2">
              <CheckCircle size={20} className="text-green-300" />
              <span>Trusted by 10,000+ families</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle size={20} className="text-green-300" />
              <span>98% satisfaction rate</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle size={20} className="text-green-300" />
              <span>Award-winning curriculum</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${locale}/admissions/book-trial`}
              className="bg-white text-primary-600 hover:bg-gray-50 font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center space-x-2 text-lg group"
            >
              <span>{t('bookTrial')}</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href={`/${locale}/curriculum/guide.pdf`}
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white/20 font-semibold px-8 py-4 rounded-lg transition-all duration-300 inline-flex items-center justify-center space-x-2 text-lg"
            >
              <Download size={20} />
              <span>{t('downloadGuide')}</span>
            </Link>
          </div>

          <p className="mt-8 text-white/80 text-sm">
            {t('disclaimer')}
          </p>
        </div>
      </div>
    </section>
  );
}


