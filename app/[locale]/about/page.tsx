import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { ArrowRight, Target, Users, Award, Globe } from 'lucide-react';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'nav' });
  
  return {
    title: `${t('aboutUs')} - KCL`,
    description: 'Learn about KCL\'s mission to empower young minds with AI education',
  };
}

export default function AboutPage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-purple-600 text-white">
        <div className="container-custom mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            About KCL
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Empowering the next generation with AI education. Our mission is to cultivate 100 million AI talents worldwide.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Target className="text-primary-600" size={32} />
                <h2 className="text-3xl font-display font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At KCL (KaiChuangLi), our mission is to unlock the creative potential in every young mind through comprehensive AI education. We believe that every child deserves access to future-ready skills that will empower them to thrive in an AI-driven world.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We aim to cultivate <span className="font-bold text-primary-600">100 million AI talents</span> worldwide, achieving our vision of "One Student = Ten Thousand Capabilities" - where mastery of AI amplifies each individual's potential exponentially.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-purple-100 rounded-2xl p-12 text-center">
              <div className="text-6xl mb-4">🎯</div>
              <div className="text-4xl font-bold text-primary-600 mb-2">100M</div>
              <div className="text-gray-700 font-semibold">AI Talents Worldwide</div>
              <div className="mt-8 text-5xl mb-4">🚀</div>
              <div className="text-2xl font-bold text-gray-800">One Student = Ten Thousand</div>
              <div className="text-gray-600 mt-2">Amplifying Human Potential</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-lg leading-relaxed mb-6">
                KCL was founded with a simple but powerful belief: in an age where artificial intelligence is transforming every aspect of our lives, children should not just be consumers of technology—they should be creators, innovators, and leaders.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                We recognized that traditional education wasn't preparing young people for this new reality. While AI tools were becoming ubiquitous, there was a critical gap in helping children develop both the technical skills and creative mindset needed to harness these tools effectively.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Starting with our first learning centre, we developed a unique 6-level curriculum that grows with students from age 4 to 18. Our approach combines project-based learning with ethical AI education, ensuring students not only understand how AI works but also how to use it responsibly to make a positive impact.
              </p>
              <p className="text-lg leading-relaxed">
                Today, with learning centres across the UK and a growing global presence, we're proud to serve over 10,000 students and counting. Every day, we see young minds discovering their creative potential and building the skills they'll need to shape tomorrow's world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🎨',
                title: 'Creativity First',
                description: 'AI is a tool to amplify human creativity, not replace it. We nurture original thinking and innovative problem-solving.'
              },
              {
                icon: '🧠',
                title: 'Critical Thinking',
                description: 'We teach students to question, analyze, and think independently—essential skills for the AI age.'
              },
              {
                icon: '🤝',
                title: 'Inclusive Learning',
                description: 'Quality AI education should be accessible to all children, regardless of background or prior experience.'
              },
              {
                icon: '🌍',
                title: 'Ethical AI',
                description: 'We instill responsible AI use, emphasizing ethics, privacy, and positive social impact from day one.'
              },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Link href={`/${locale}/about/philosophy`} className="bg-white rounded-xl p-8 card-hover border border-gray-200 group">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                Our Philosophy
              </h3>
              <p className="text-gray-600 mb-4">
                Learn about our educational approach and teaching methodology.
              </p>
              <div className="flex items-center text-primary-600 font-semibold">
                Learn More <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link href={`/${locale}/about/team`} className="bg-white rounded-xl p-8 card-hover border border-gray-200 group">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                Our Team
              </h3>
              <p className="text-gray-600 mb-4">
                Meet the passionate educators and experts behind KCL.
              </p>
              <div className="flex items-center text-primary-600 font-semibold">
                Meet the Team <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link href={`/${locale}/about/accreditations`} className="bg-white rounded-xl p-8 card-hover border border-gray-200 group">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                Accreditations
              </h3>
              <p className="text-gray-600 mb-4">
                Our certifications, partnerships, and industry recognition.
              </p>
              <div className="flex items-center text-primary-600 font-semibold">
                View Details <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-primary text-white text-center">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Join the KCL Family
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Be part of our mission to empower the next generation with AI education
          </p>
          <Link
            href={`/${locale}/admissions/book-trial`}
            className="btn-primary bg-white text-primary-600 hover:bg-gray-50 inline-flex items-center"
          >
            Book a Free Trial
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}


