'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useParams } from 'next/navigation';

export default function HeroSection() {
  const t = useTranslations('hero');
  const params = useParams();
  const locale = params?.locale || 'en';

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container-custom mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles size={16} />
              <span>Empowering 100 Million AI Talents Worldwide</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-tight">
              {t('title')}
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
              {t('subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href={`/${locale}/admissions/book-trial`}
                className="btn-primary inline-flex items-center justify-center space-x-2 text-lg group"
              >
                <span>{t('bookTrial')}</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href={`/${locale}/curriculum`}
                className="btn-secondary inline-flex items-center justify-center text-lg"
              >
                {t('exploreCurriculum')}
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-8 text-sm">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">10,000+</div>
                <div className="text-gray-600">Students Enrolled</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">15+</div>
                <div className="text-gray-600">Learning Centres</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">98%</div>
                <div className="text-gray-600">Parent Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Illustration/Image */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              {/* Placeholder for hero image - you can replace with actual images */}
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="aspect-square bg-gradient-to-br from-primary-100 to-purple-100 rounded-xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl mx-auto flex items-center justify-center transform rotate-6 hover:rotate-0 transition-transform duration-300">
                      <span className="text-white text-6xl">🤖</span>
                    </div>
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-gray-800">AI Education</div>
                      <div className="text-gray-600">Ages 4-18</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 animate-float z-20 border border-gray-100">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">✓</span>
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold text-gray-800">Level Complete!</div>
                    <div className="text-gray-600">Well done!</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 animate-float z-20 border border-gray-100" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-2">
                  <div className="text-3xl">🎨</div>
                  <div className="text-sm">
                    <div className="font-semibold text-gray-800">AI Art Created</div>
                    <div className="text-gray-600">by Emma, age 10</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}


