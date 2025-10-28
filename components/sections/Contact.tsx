'use client';

import { useState } from 'react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';

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

    // Form submission simulation
    setTimeout(() => {
      setSubmitMessage("Thanks for reaching out! We'll be in touch soon.");
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1500);
  };

  return (
    <SectionWrapper id="contact" background="transparent">
      <div className="grid md:grid-cols-2 gap-16">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-amber-900 mb-5">
            Say Hello
          </h2>
          <div className="w-24 h-1.5 bg-amber-700 mb-8 rounded-full"></div>
          <p className="text-xl text-stone-600 mb-10 leading-relaxed">
            Got a question? Want to book a table? Just feel like chatting about coffee? Drop us a line—we'd love to hear from you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-stone-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 border-2 border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-600 focus:border-amber-600 transition-all duration-300 outline-none"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-stone-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 border-2 border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-600 focus:border-amber-600 transition-all duration-300 outline-none"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-stone-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-5 py-4 border-2 border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-600 focus:border-amber-600 transition-all duration-300 resize-none outline-none"
                placeholder="Tell us what's on your mind..."
              />
            </div>

            <Button type="submit" variant="primary" className={`w-full sm:w-auto ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>

            {submitMessage && (
              <motion.p
                className="text-green-700 font-medium text-lg"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {submitMessage}
              </motion.p>
            )}
          </form>
        </motion.div>

        {/* Info and Map */}
        <motion.div
          className="space-y-10"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div>
            <h3 className="text-3xl font-serif font-bold text-amber-900 mb-6">
              Come Visit
            </h3>
            <div className="space-y-5 text-stone-700">
              <p className="flex items-start text-lg">
                <svg className="w-7 h-7 mr-4 text-amber-700 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Jl. Pantai Batu Bolong No.88<br />Canggu, Bali 80361</span>
              </p>
              <p className="flex items-center text-lg">
                <svg className="w-7 h-7 mr-4 text-amber-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hello@solsticecafe.com
              </p>
              <p className="flex items-center text-lg">
                <svg className="w-7 h-7 mr-4 text-amber-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Daily: 7:00 AM – 6:00 PM
              </p>
            </div>
          </div>

          {/* Google Maps */}
          <div className="w-full h-80 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-stone-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.2074640746486!2d115.13479931478372!3d-8.67947799372743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2409b0e5e80db%3A0xe27334e8ccb9b90!2sCanggu%2C%20Bali%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Solstice Café location in Canggu, Bali"
            />
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
