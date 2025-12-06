'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowRight, Baby, Users as UsersIcon, Brain, Code, Cpu, Lightbulb } from 'lucide-react';

export default function LearningJourneySection() {
  const t = useTranslations('learningJourney');
  const params = useParams();
  const locale = params?.locale || 'en';

  const levels = [
    {
      icon: Baby,
      level: 'Pre-Level 0',
      age: t('preLevel0.age'),
      title: t('preLevel0.title'),
      description: t('preLevel0.description'),
      color: 'from-pink-400 to-pink-500',
      bgColor: 'bg-pink-50',
    },
    {
      icon: UsersIcon,
      level: 'Level 1',
      age: t('level1.age'),
      title: t('level1.title'),
      description: t('level1.description'),
      color: 'from-blue-400 to-blue-500',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Brain,
      level: 'Level 2',
      age: t('level2.age'),
      title: t('level2.title'),
      description: t('level2.description'),
      color: 'from-green-400 to-green-500',
      bgColor: 'bg-green-50',
    },
    {
      icon: Code,
      level: 'Level 3',
      age: t('level3.age'),
      title: t('level3.title'),
      description: t('level3.description'),
      color: 'from-purple-400 to-purple-500',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Cpu,
      level: 'Level 4',
      age: t('level4.age'),
      title: t('level4.title'),
      description: t('level4.description'),
      color: 'from-orange-400 to-orange-500',
      bgColor: 'bg-orange-50',
    },
    {
      icon: Lightbulb,
      level: 'Level 5',
      age: t('level5.age'),
      title: t('level5.title'),
      description: t('level5.description'),
      color: 'from-red-400 to-red-500',
      bgColor: 'bg-red-50',
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {levels.map((level, index) => {
            const Icon = level.icon;
            return (
              <div
                key={index}
                className={`${level.bgColor} rounded-2xl p-8 card-hover border-2 border-transparent hover:border-primary-300 transition-all`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${level.color} rounded-xl flex items-center justify-center`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <span className="text-sm font-semibold text-gray-600 bg-white px-3 py-1 rounded-full">
                    {level.age}
                  </span>
                </div>

                <div className="mb-2">
                  <div className="text-sm font-bold text-primary-600 mb-1">
                    {level.level}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {level.title}
                  </h3>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {level.description}
                </p>

                <Link
                  href={`/${locale}/curriculum/${level.level.toLowerCase().replace(' ', '-')}`}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold group"
                >
                  {t('learnMore')}
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Progress Path Visualization */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-gray-600">
            <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-blue-500"></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-green-500"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-purple-500"></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-orange-500"></div>
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          </div>
          <p className="mt-4 text-gray-600 text-sm">
            Progressive learning pathway from ages 4 to 18
          </p>
        </div>
      </div>
    </section>
  );
}


