'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { CheckCircle2, UserCheck, Calendar, Globe, Award } from 'lucide-react';

export default function HowItWorksSection() {
  const t = useTranslations('howItWorks');
  const params = useParams();
  const locale = params?.locale || 'en';

  const steps = [
    {
      icon: UserCheck,
      number: '01',
      title: t('step1.title'),
      description: t('step1.description'),
    },
    {
      icon: CheckCircle2,
      number: '02',
      title: t('step2.title'),
      description: t('step2.description'),
    },
    {
      icon: Calendar,
      number: '03',
      title: t('step3.title'),
      description: t('step3.description'),
    },
    {
      icon: Globe,
      number: '04',
      title: t('step4.title'),
      description: t('step4.description'),
    },
    {
      icon: Award,
      number: '05',
      title: t('step5.title'),
      description: t('step5.description'),
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8 md:space-y-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex flex-col ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-8 md:gap-12`}
              >
                {/* Icon Side */}
                <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center">
                  <div className="relative">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-purple-600 rounded-3xl flex items-center justify-center transform rotate-6 hover:rotate-0 transition-transform duration-300 shadow-xl">
                      <Icon className="text-white" size={64} />
                    </div>
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-secondary-400 rounded-full flex items-center justify-center font-bold text-white text-xl shadow-lg">
                      {step.number}
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className={`flex-1 text-center ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto md:mx-0">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href={`/${locale}/admissions`}
            className="btn-primary inline-flex items-center text-lg"
          >
            {t('getStarted')}
          </Link>
        </div>
      </div>
    </section>
  );
}


