'use client';

import SectionWrapper from '@/components/ui/SectionWrapper';
import { motion } from 'framer-motion';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=2071',
    alt: 'Barista preparing coffee'
  },
  {
    url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2074',
    alt: 'Latte art masterpiece'
  },
  {
    url: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=2070',
    alt: 'Café tropical ambiance'
  },
  {
    url: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=2070',
    alt: 'Fresh coffee beans'
  },
  {
    url: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=2070',
    alt: 'Cozy café interior'
  },
  {
    url: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071',
    alt: 'Outdoor seating area'
  }
];

export default function Gallery() {
  return (
    <SectionWrapper id="gallery" background="light">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-amber-900 mb-4">
          Gallery
        </h2>
        <div className="w-20 h-1 bg-amber-700 mx-auto mb-6"></div>
        <p className="text-lg text-stone-600 max-w-2xl mx-auto">
          A glimpse into our daily moments of coffee craftsmanship and tropical vibes.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {galleryImages.map((image, index) => (
          <motion.div
            key={index}
            className="relative h-64 md:h-80 rounded-xl overflow-hidden group cursor-pointer shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url('${image.url}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-white font-medium">{image.alt}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
