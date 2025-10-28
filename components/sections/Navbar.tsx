'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { locale, setLocale, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: t.nav_about, id: 'about' },
    { name: t.nav_menu, id: 'menu' },
    { name: t.nav_gallery, id: 'gallery' },
    { name: t.nav_contact, id: 'contact' }
  ];

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`font-serif text-2xl font-bold transition-colors ${
              isScrolled ? 'text-amber-900' : 'text-white'
            }`}
          >
            Solstice
          </button>

          {/* Desktop Navigation + Language Switch */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`font-medium transition-colors ${
                  isScrolled
                    ? 'text-stone-700 hover:text-amber-700'
                    : 'text-white hover:text-amber-300'
                }`}
              >
                {link.name}
              </button>
            ))}

            {/* Language Toggle */}
            <div className="flex gap-2 ml-4 pl-4 border-l-2 border-amber-700/30">
              <button
                onClick={() => setLocale('en')}
                className={`px-3 py-1 rounded-full text-sm font-semibold transition-all ${
                  locale === 'en'
                    ? 'bg-amber-700 text-white'
                    : isScrolled
                    ? 'text-stone-600 hover:bg-amber-100'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLocale('fr')}
                className={`px-3 py-1 rounded-full text-sm font-semibold transition-all ${
                  locale === 'fr'
                    ? 'bg-amber-700 text-white'
                    : isScrolled
                    ? 'text-stone-600 hover:bg-amber-100'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                FR
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-stone-700' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-4 py-3 text-stone-700 hover:bg-amber-50 hover:text-amber-700 transition-colors"
              >
                {link.name}
              </button>
            ))}

            {/* Mobile Language Toggle */}
            <div className="flex gap-2 px-4 pt-4 mt-2 border-t border-stone-200">
              <button
                onClick={() => setLocale('en')}
                className={`flex-1 px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                  locale === 'en'
                    ? 'bg-amber-700 text-white'
                    : 'text-stone-600 hover:bg-amber-100'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLocale('fr')}
                className={`flex-1 px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                  locale === 'fr'
                    ? 'bg-amber-700 text-white'
                    : 'text-stone-600 hover:bg-amber-100'
                }`}
              >
                Français
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
