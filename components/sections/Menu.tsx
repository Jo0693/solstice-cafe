'use client';

import SectionWrapper from '@/components/ui/SectionWrapper';
import { motion } from 'framer-motion';

interface MenuItem {
  name: string;
  price: string;
  description: string;
  image: string;
}

const menuItems: MenuItem[] = [
  {
    name: 'Kintamani Cold Brew',
    price: '45K',
    description: 'Silky-smooth cold brew from single-origin Kintamani beans—your perfect companion for those warm Bali afternoons',
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?q=80&w=2035'
  },
  {
    name: 'Coconut Latte',
    price: '52K',
    description: 'Rich espresso meets creamy coconut milk, finished with a touch of local palm sugar for that authentic island sweetness',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=2074'
  },
  {
    name: 'Balinese Spiced Coffee',
    price: '48K',
    description: 'Our traditional house blend infused with cinnamon, cardamom, and aromatic spices from the local markets',
    image: 'https://images.unsplash.com/photo-1514066558159-fc8c737ef259?q=80&w=1974'
  },
  {
    name: 'Açaí Smoothie Bowl',
    price: '65K',
    description: 'Organic açaí base loaded with fresh tropical fruits, crunchy granola, and toasted coconut flakes',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?q=80&w=2036'
  }
];

export default function Menu() {
  return (
    <SectionWrapper id="menu" background="transparent">
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-5xl md:text-6xl font-serif font-bold text-amber-900 mb-5">
          Our Menu
        </h2>
        <div className="w-24 h-1.5 bg-amber-700 mx-auto mb-8 rounded-full"></div>
        <p className="text-xl md:text-2xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
          Every drink tells a story. Crafted with care, served with love.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {menuItems.map((item, index) => (
          <motion.div
            key={index}
            className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
            whileHover={{ y: -12, transition: { duration: 0.3 } }}
          >
            <div className="relative h-64 overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${item.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="p-7">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-serif font-bold text-amber-900 leading-snug">
                  {item.name}
                </h3>
                <span className="text-xl font-bold text-green-700 ml-3 flex-shrink-0">
                  {item.price}
                </span>
              </div>
              <p className="text-stone-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
