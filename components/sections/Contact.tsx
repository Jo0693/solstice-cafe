'use client';

import { useState } from 'react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Button from '@/components/ui/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi (remplacer par Formspree ou API)
    setTimeout(() => {
      setSubmitMessage('Thank you! We\'ll get back to you soon.');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1500);
  };

  return (
    <SectionWrapper id="contact" background="transparent">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Formulaire */}
        <div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-amber-900 mb-4">
            Get in Touch
          </h2>
          <div className="w-20 h-1 bg-amber-700 mb-6"></div>
          <p className="text-lg text-stone-600 mb-8">
            Have a question or want to make a reservation? We'd love to hear from you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-700 focus:border-transparent transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-700 focus:border-transparent transition-all"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-700 focus:border-transparent transition-all resize-none"
                placeholder="Your message..."
              />
            </div>

            <Button type="submit" variant="primary" className={isSubmitting ? 'opacity-50' : ''}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>

            {submitMessage && (
              <p className="text-green-700 font-medium">{submitMessage}</p>
            )}
          </form>
        </div>

        {/* Infos et Map */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-serif font-semibold text-amber-900 mb-4">
              Visit Us
            </h3>
            <div className="space-y-3 text-stone-700">
              <p className="flex items-start">
                <svg className="w-6 h-6 mr-3 text-amber-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Jl. Pantai Batu Bolong No.88<br />Canggu, Bali 80361</span>
              </p>
              <p className="flex items-center">
                <svg className="w-6 h-6 mr-3 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hello@solsticecafe.com
              </p>
              <p className="flex items-center">
                <svg className="w-6 h-6 mr-3 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Mon - Sun: 7:00 AM - 6:00 PM
              </p>
            </div>
          </div>

          {/* Google Maps embed */}
          <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.2074640746486!2d115.13479931478372!3d-8.67947799372743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2409b0e5e80db%3A0xe27334e8ccb9b90!2sCanggu%2C%20Bali%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
