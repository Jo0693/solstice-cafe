import SectionWrapper from '@/components/ui/SectionWrapper';
import Image from 'next/image';

export default function About() {
  return (
    <SectionWrapper id="about" background="light">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image à gauche */}
        <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2078"
            alt="Solstice Café interior"
            fill
            className="object-cover"
          />
        </div>

        {/* Texte à droite */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-amber-900">
            Our Story
          </h2>
          <div className="w-20 h-1 bg-amber-700"></div>
          <p className="text-lg text-stone-700 leading-relaxed">
            Nestled in the heart of Canggu, Solstice Café brings together the rich coffee traditions
            of Bali with modern artisan techniques. Every cup tells a story of local farmers,
            sustainable practices, and passionate craftsmanship.
          </p>
          <p className="text-lg text-stone-700 leading-relaxed">
            We source our beans from the volcanic highlands of Kintamani, where the fertile soil
            and tropical climate create the perfect conditions for exceptional coffee. Our baristas
            are trained in both traditional Balinese brewing methods and contemporary specialty coffee techniques.
          </p>
          <p className="text-lg text-stone-700 leading-relaxed">
            More than just a café, Solstice is a community hub where surfers, digital nomads,
            and locals gather to share stories, work, and enjoy the island's laid-back lifestyle.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
