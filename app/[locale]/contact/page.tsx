import { getTranslations } from 'next-intl/server';
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'nav' });
  
  return {
    title: `${t('contact')} - KCL`,
    description: 'Get in touch with KCL. Contact us for inquiries, book a trial class, or visit our learning centres.',
  };
}

export default function ContactPage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-purple-600 text-white">
        <div className="container-custom mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            We&apos;re here to answer your questions and help you start your child&apos;s AI learning journey
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="john.smith@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="+44 20 1234 5678"
                  />
                </div>

                <div>
                  <label htmlFor="childAge" className="block text-sm font-semibold text-gray-700 mb-2">
                    Child's Age
                  </label>
                  <select
                    id="childAge"
                    name="childAge"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select age range</option>
                    <option value="4-6">4-6 years (Pre-Level 0)</option>
                    <option value="7-9">7-9 years (Level 1)</option>
                    <option value="10-12">10-12 years (Level 2)</option>
                    <option value="13-14">13-14 years (Level 3)</option>
                    <option value="15-16">15-16 years (Level 4)</option>
                    <option value="17-18">17-18 years (Level 5)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-semibold text-gray-700 mb-2">
                    I'm interested in: *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select an option</option>
                    <option value="trial">Booking a free trial class</option>
                    <option value="enrolment">General enrolment information</option>
                    <option value="curriculum">Learning about the curriculum</option>
                    <option value="centres">Visiting a learning centre</option>
                    <option value="partnership">Partnership opportunities</option>
                    <option value="other">Other inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us more about what you're looking for..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full text-lg"
                >
                  Send Message
                </button>

                <p className="text-sm text-gray-600">
                  By submitting this form, you consent to receive communications from KCL. 
                  We respect your privacy and will never share your information.
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                Contact Information
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+44 (0) 20 1234 5678</p>
                    <p className="text-sm text-gray-500 mt-1">Monday-Friday: 9:00-18:00 GMT</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">hello@kcl-ai.co.uk</p>
                    <p className="text-sm text-gray-500 mt-1">We&apos;ll respond within 24 hours
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Head Office</h3>
                    <p className="text-gray-600">
                      123 Education Street<br />
                      London, UK<br />
                      SW1A 1AA
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Office Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 - 18:00<br />
                      Saturday: 10:00 - 16:00<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Live Chat</h3>
                    <p className="text-gray-600">Available Mon-Fri 9:00-18:00</p>
                    <button className="mt-2 text-primary-600 hover:text-primary-700 font-semibold text-sm">
                      Start Chat →
                    </button>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-gradient-to-br from-primary-50 to-purple-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <a href={`/${locale}/faqs`} className="block text-primary-600 hover:text-primary-700 font-medium">
                    → Frequently Asked Questions
                  </a>
                  <a href={`/${locale}/admissions/book-trial`} className="block text-primary-600 hover:text-primary-700 font-medium">
                    → Book a Free Trial Class
                  </a>
                  <a href={`/${locale}/centres`} className="block text-primary-600 hover:text-primary-700 font-medium">
                    → Find a Learning Centre
                  </a>
                  <a href={`/${locale}/parents`} className="block text-primary-600 hover:text-primary-700 font-medium">
                    → Parent Resources
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="h-96 bg-gray-200">
        <div className="w-full h-full flex items-center justify-center text-gray-500">
          <div className="text-center">
            <MapPin size={48} className="mx-auto mb-4" />
            <p className="text-lg font-semibold">Interactive Map Coming Soon</p>
            <p className="text-sm">View all our UK learning centre locations</p>
          </div>
        </div>
      </section>
    </div>
  );
}


