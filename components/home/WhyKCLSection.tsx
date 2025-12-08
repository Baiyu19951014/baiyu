'use client';

import { useTranslations } from 'next-intl';
import { BookOpen, Users, Laptop, Rocket } from 'lucide-react';

export default function WhyKCLSection() {
  const t = useTranslations('whyKCL');

  const features = [
    {
      icon: BookOpen,
      title: t('progressiveCurriculum.title'),
      description: t('progressiveCurriculum.description'),
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Users,
      title: t('expertInstructors.title'),
      description: t('expertInstructors.description'),
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Laptop,
      title: t('hybridLearning.title'),
      description: t('hybridLearning.description'),
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Rocket,
      title: t('futureReady.title'),
      description: t('futureReady.description'),
      color: 'from-orange-500 to-orange-600',
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 border border-gray-200 card-hover"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}



