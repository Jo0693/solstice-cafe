'use client';

import SectionWrapper from '@/components/ui/SectionWrapper';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  return (
    <SectionWrapper id="about" background="light">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Image on the left */}
        <motion.div
          className="relative h-[450px] md:h-[550px] rounded-3xl overflow-hidden shadow-2xl group"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2078"
            alt="Solstice Café interior with warm lighting and tropical ambiance"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </motion.div>

        {/* Text on the right */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-amber-900 mb-5 leading-tight">
              {t.about_title}
            </h2>
            <div className="w-24 h-1.5 bg-amber-700 rounded-full"></div>
          </div>

          <p className="text-lg md:text-xl text-stone-700 leading-relaxed">
            {t.about_p1}
          </p>

          <p className="text-lg md:text-xl text-stone-700 leading-relaxed">
            {t.about_p2}
          </p>

          <p className="text-lg md:text-xl text-stone-700 leading-relaxed">
            {t.about_p3}
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
