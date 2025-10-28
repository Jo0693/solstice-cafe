'use client';

import SectionWrapper from '@/components/ui/SectionWrapper';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=2071',
    altKey: 'gallery_img1'
  },
  {
    url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2074',
    altKey: 'gallery_img2'
  },
  {
    url: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=2070',
    altKey: 'gallery_img3'
  },
  {
    url: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=2070',
    altKey: 'gallery_img4'
  },
  {
    url: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=2070',
    altKey: 'gallery_img5'
  },
  {
    url: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071',
    altKey: 'gallery_img6'
  }
];

export default function Gallery() {
  const { t } = useLanguage();
  return (
    <SectionWrapper id="gallery" background="light">
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-5xl md:text-6xl font-serif font-bold text-amber-900 mb-5">
          {t.gallery_title}
        </h2>
        <div className="w-24 h-1.5 bg-amber-700 mx-auto mb-8 rounded-full"></div>
        <p className="text-xl md:text-2xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
          {t.gallery_subtitle}
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <motion.div
            key={index}
            className="relative h-72 md:h-96 rounded-3xl overflow-hidden group cursor-pointer shadow-xl"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
              style={{ backgroundImage: `url('${image.url}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
              <p className="text-white font-medium text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                {t[image.altKey as keyof typeof t]}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
