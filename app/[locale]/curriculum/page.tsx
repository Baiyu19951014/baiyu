import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { ArrowRight, Clock, Users, Award } from 'lucide-react';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'nav' });
  
  return {
    title: `${t('curriculum')} - KCL`,
    description: 'Explore KCL\'s comprehensive 6-level AI curriculum for ages 4-18',
  };
}

export default function CurriculumPage({ params: { locale } }: { params: { locale: string } }) {
  const levels = [
    {
      level: 'Pre-Level 0',
      age: 'Ages 4-6',
      title: 'AI Awareness & Digital Literacy',
      description: 'Introduction to AI concepts through stories, games, and creative activities. Perfect for young learners starting their tech journey.',
      duration: '36 sessions',
      classSize: '8-10 students',
      highlights: [
        'Story-based AI introduction',
        'Digital creativity basics',
        'Interactive games',
        'Safe online practices'
      ],
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
    },
    {
      level: 'Level 1',
      age: 'Ages 7-9',
      title: 'Fundamentals of AI & Coding Basics',
      description: 'Building foundation in computational thinking with block-based coding and simple AI tools.',
      duration: '36 sessions',
      classSize: '10-12 students',
      highlights: [
        'Block-based programming',
        'AI tool exploration',
        'Simple chatbot creation',
        'Pattern recognition'
      ],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      level: 'Level 2',
      age: 'Ages 10-12',
      title: 'AI Tools & Creative Applications',
      description: 'Exploring AI-powered creativity through image generation, chatbots, animation, and more.',
      duration: '36 sessions',
      classSize: '10-12 students',
      highlights: [
        'AI image generation',
        'Conversational AI basics',
        'Video editing with AI',
        'Creative projects'
      ],
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
    },
    {
      level: 'Level 3',
      age: 'Ages 13-14',
      title: 'Machine Learning Foundations',
      description: 'Understanding how machines learn and creating intelligent applications with real datasets.',
      duration: '36 sessions',
      classSize: '10-12 students',
      highlights: [
        'Supervised learning basics',
        'Data analysis',
        'Model training',
        'Ethics & bias discussion'
      ],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      level: 'Level 4',
      age: 'Ages 15-16',
      title: 'Advanced AI Development',
      description: 'Deep learning, neural networks, and practical AI implementation for real-world scenarios.',
      duration: '36 sessions',
      classSize: '10-12 students',
      highlights: [
        'Neural network architecture',
        'Deep learning frameworks',
        'Computer vision basics',
        'NLP applications'
      ],
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      level: 'Level 5',
      age: 'Ages 17-18',
      title: 'AI Innovation & Real-world Projects',
      description: 'Capstone projects addressing real challenges with AI solutions. Portfolio building for university applications.',
      duration: '36 sessions',
      classSize: '8-10 students',
      highlights: [
        'Industry-standard tools',
        'Capstone project',
        'Portfolio development',
        'Research & innovation'
      ],
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-purple-600 text-white">
        <div className="container-custom mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Our Curriculum
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            A comprehensive 6-level AI education programme designed to grow with your child from ages 4 to 18
          </p>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
              Progressive Learning Pathway
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our curriculum is carefully structured to introduce AI concepts at age-appropriate levels, 
              building skills progressively from fundamental digital literacy to advanced AI development 
              and innovation.
            </p>
          </div>

          {/* Levels Grid */}
          <div className="space-y-12">
            {levels.map((level, index) => (
              <div
                key={index}
                className={`${level.bgColor} rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow`}
              >
                <div className="grid md:grid-cols-3 gap-8 p-8">
                  {/* Level Info */}
                  <div className="md:col-span-1">
                    <div className={`inline-block bg-gradient-to-r ${level.color} text-white px-4 py-2 rounded-full text-sm font-bold mb-4`}>
                      {level.level}
                    </div>
                    <div className="text-gray-600 font-semibold mb-4">{level.age}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {level.title}
                    </h3>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-gray-700">
                        <Clock size={18} className="mr-2" />
                        <span className="text-sm">{level.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Users size={18} className="mr-2" />
                        <span className="text-sm">{level.classSize}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Award size={18} className="mr-2" />
                        <span className="text-sm">Certificate upon completion</span>
                      </div>
                    </div>

                    <Link
                      href={`/${locale}/curriculum/${level.level.toLowerCase().replace(' ', '-')}`}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold group"
                    >
                      View Details
                      <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Description & Highlights */}
                  <div className="md:col-span-2">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {level.description}
                    </p>

                    <h4 className="font-bold text-gray-900 mb-4">Key Learning Highlights:</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {level.highlights.map((highlight, hIndex) => (
                        <div
                          key={hIndex}
                          className="flex items-start space-x-2 bg-white rounded-lg p-3"
                        >
                          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white text-xs">✓</span>
                          </div>
                          <span className="text-gray-700 text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Approach */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Our Teaching Approach
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Project-Based Learning</h3>
              <p className="text-gray-600">
                Students learn by creating real projects, not just following tutorials. Every level includes hands-on projects that students showcase.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Small Class Sizes</h3>
              <p className="text-gray-600">
                Maximum 12 students per class ensures personalized attention and support from our expert instructors.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Growth Mindset</h3>
              <p className="text-gray-600">
                We celebrate effort and learning from mistakes. Students develop resilience and confidence through supportive guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-primary text-white text-center">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book a free trial class and find the perfect level for your child
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${locale}/admissions/book-trial`}
              className="btn-primary bg-white text-primary-600 hover:bg-gray-50 inline-flex items-center justify-center"
            >
              Book Free Trial
              <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link
              href={`/${locale}/curriculum/assessment`}
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white/20 font-semibold px-8 py-4 rounded-lg transition-all inline-flex items-center justify-center"
            >
              Take Level Assessment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


