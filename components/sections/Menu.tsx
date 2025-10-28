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
    description: 'Smooth cold brew made from single-origin Kintamani beans, perfect for hot Bali days',
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?q=80&w=2035'
  },
  {
    name: 'Coconut Latte',
    price: '52K',
    description: 'Espresso with steamed coconut milk and a hint of palm sugar',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=2074'
  },
  {
    name: 'Balinese Spiced Coffee',
    price: '48K',
    description: 'Traditional blend with cinnamon, cardamom, and local spices',
    image: 'https://images.unsplash.com/photo-1514066558159-fc8c737ef259?q=80&w=1974'
  },
  {
    name: 'Acai Smoothie Bowl',
    price: '65K',
    description: 'Organic acai topped with tropical fruits, granola, and coconut flakes',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?q=80&w=2036'
  }
];

export default function Menu() {
  return (
    <SectionWrapper id="menu" background="transparent">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-amber-900 mb-4">
          Our Menu
        </h2>
        <div className="w-20 h-1 bg-amber-700 mx-auto mb-6"></div>
        <p className="text-lg text-stone-600 max-w-2xl mx-auto">
          Crafted with passion, served with aloha. Each drink celebrates the flavors of Bali.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {menuItems.map((item, index) => (
          <motion.div
            key={index}
            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className="relative h-56 overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url('${item.image}')` }}
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-serif font-semibold text-amber-900">
                  {item.name}
                </h3>
                <span className="text-lg font-bold text-green-700">
                  {item.price}
                </span>
              </div>
              <p className="text-stone-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
