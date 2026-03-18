'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/contexts/LanguageContext';
import homeContent from '@/content/home.json';

type HomeContent = typeof homeContent;
type LocaleContent = HomeContent['fr'];

export default function Hero() {
  const { locale, t } = useLanguage();
  const content = homeContent[locale as keyof HomeContent] as LocaleContent;
  const heroImage = content.hero.image;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section data-publisher-section="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {heroImage ? (
          <Image
            src={heroImage}
            alt={content.hero.image_alt || ''}
            fill
            className="object-cover"
            priority
            data-publisher-field="hero.image"
          />
        ) : (
          <>
            {/* Video Background */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              poster="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070"
              data-publisher-field="hero.image"
            >
              <source src="/videos/solstice-bg.mp4" type="video/mp4" />
            </video>

            {/* Fallback background image for when video doesn't load */}
            <motion.div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070')",
              }}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </>
        )}

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 data-publisher-field="hero.title" className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-wider drop-shadow-2xl">
            {t.hero_title}
          </h1>
          <p data-publisher-field="hero.subtitle" className="text-xl md:text-3xl font-light mb-10 text-stone-100 tracking-wide">
            {t.hero_subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
        >
          <Button onClick={() => scrollToSection('menu')} variant="primary" data-publisher-field="hero.cta">
            {t.hero_cta}
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.5,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      >
        <svg
          className="w-7 h-7 text-white/80 drop-shadow-lg"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </section>
  );
}
