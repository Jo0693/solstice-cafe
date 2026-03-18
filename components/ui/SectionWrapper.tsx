'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: 'light' | 'dark' | 'transparent';
  'data-publisher-section'?: string;
}

export default function SectionWrapper({
  children,
  id,
  className = '',
  background = 'transparent',
  'data-publisher-section': publisherSection,
}: SectionWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const backgrounds = {
    light: 'bg-stone-50',
    dark: 'bg-stone-900 text-white',
    transparent: 'bg-transparent'
  };

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`py-20 px-6 ${backgrounds[background]} ${className}`}
      data-publisher-section={publisherSection}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </motion.section>
  );
}
