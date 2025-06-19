import React, { useEffect, useRef } from 'react';
import { GiPaperLantern } from 'react-icons/gi';
import anime from 'animejs/lib/anime.es.js';

// This component injects the Google Font into the document's head.
const FontStyles = () => (
  <style>
    {`
      @import url('https://fonts.googleapis.com/css2?family=Lilita+One&display=swap');
      .font-lilita {
        font-family: 'Lilita One', cursive;
        text-shadow: 
          -1.5px -1.5px 0 #A16A6A,  
           1.5px -1.5px 0 #A16A6A,
          -1.5px  1.5px 0 #A16A6A,
           1.5px  1.5px 0 #A16A6A;
      }
    `}
  </style>
);

const categoriesData = [
  {
    name: 'Hair Care',
    images: [
      { src: 'https://i.postimg.cc/9fpdGz3g/pngegg-10.png', alt: 'Shampoo', position: 'z-20 bottom-0 left-1/2 -translate-x-1/2 w-28 md:w-32 rotate-6' },
      { src: 'https://i.postimg.cc/B6L05p3v/pngegg-12.png', alt: 'Hair Oil', position: 'z-10 bottom-0 left-0 w-24 md:w-28 -rotate-12' },
    ],
  },
  {
    name: 'Body Care',
    images: [
      { src: 'https://i.postimg.cc/y8Yg3yY0/pngegg-13.png', alt: 'Lotion', position: 'z-20 bottom-0 left-1/2 -translate-x-1/2 w-28 md:w-32 rotate-3' },
      { src: 'https://i.postimg.cc/RhdJ4mP5/pngegg-14.png', alt: 'Body Scrub', position: 'z-10 bottom-0 left-0 w-24 md:w-28 -rotate-12' },
    ],
  },
  {
    name: 'Face Care',
    images: [
      { src: 'https://i.postimg.cc/pXj2VqjV/pngegg-16.png', alt: 'Face Wash', position: 'z-20 bottom-0 left-1/2 -translate-x-1/2 w-28 md:w-32 rotate-6' },
      { src: 'https://i.postimg.cc/J7s84f1f/pngegg-18.png', alt: 'Face Cream', position: 'z-10 bottom-0 left-0 w-24 md:w-28 -rotate-6' },
    ],
  },
  {
    name: 'Fragrance & Scents',
    images: [
      { src: 'https://i.postimg.cc/tCNxS0Y9/pngegg-19.png', alt: 'Perfume', position: 'z-20 bottom-0 left-1/2 -translate-x-1/2 w-20 md:w-24 rotate-12' },
      { src: 'https://i.postimg.cc/Y9pS34s7/pngegg-20.png', alt: 'Perfume 2', position: 'z-10 bottom-0 right-0 w-20 md:w-24 -rotate-12' },
    ],
  },
  {
    name: 'Makeup & Beauty',
    isLarge: true,
    images: [
      { src: 'https://i.postimg.cc/pL4jN6fV/pngegg-22.png', alt: 'Eyeshadow Palette', position: 'z-20 bottom-0 left-1/2 -translate-x-1/2 w-48' },
      { src: 'https://i.postimg.cc/3RkZ3N3b/pngegg-24.png', alt: 'Makeup Brushes', position: 'z-10 -bottom-4 right-0 w-40 rotate-12' },
      { src: 'https://i.postimg.cc/FKs3YV0W/pngegg-21.png', alt: 'Lipstick', position: 'z-10 -bottom-4 left-0 w-32 -rotate-12' },
    ],
  },
];

const Lantern = ({ className = '' }: { className?: string }) => (
  <div className={`absolute top-0 flex flex-col items-center ${className}`}>
    <div className="h-6 w-px bg-pink-300/70" />
    <GiPaperLantern className="text-pink-400 text-2xl" />
  </div>
);

const WavePattern = () => (
  <div className="absolute bottom-0 left-0 w-full h-20 opacity-50" style={{ zIndex: 1 }}>
    <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
      <path d="M0 100 C 20 50, 40 50, 60 100" stroke="#FFFFFF" fill="none" strokeWidth="1" strokeDasharray="2 2" />
      <path d="M30 100 C 50 50, 70 50, 90 100" stroke="#FFFFFF" fill="none" strokeWidth="1" strokeDasharray="2 2" />
      <path d="M80 100 C 100 50, 120 50, 140 100" stroke="#FFFFFF" fill="none" strokeWidth="1" strokeDasharray="2 2" />
    </svg>
  </div>
);

const CategoryCard = ({ category, isLarge = false }: { category: any; isLarge?: boolean }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cardElement = cardRef.current;
    if (!cardElement) return;

    const handleMouseEnter = () => {
      anime({
        targets: cardElement,
        translateY: -8,
        scale: 1.03,
        boxShadow: '0px 15px 30px -10px rgba(236, 72, 153, 0.3)',
        duration: 300,
        easing: 'easeOutQuad'
      });
    };

    const handleMouseLeave = () => {
      anime({
        targets: cardElement,
        translateY: 0,
        scale: 1,
        boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)',
        duration: 300,
        easing: 'easeOutQuad'
      });
    };

    cardElement.addEventListener('mouseenter', handleMouseEnter);
    cardElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cardElement.removeEventListener('mouseenter', handleMouseEnter);
      cardElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`category-card relative rounded-xl border border-pink-200 bg-pink-50/80 p-4 shadow-lg
      ${isLarge ? 'min-h-[24rem] md:min-h-full' : 'min-h-[16rem] md:min-h-[18rem]'}`}
      style={{ opacity: 0 }} // Initial state for scroll animation
    >
      <Lantern className="left-6" />
      {!isLarge && <Lantern className="right-6" />}
      
      <div className="relative z-10 text-center">
        <h3 className="font-lilita text-2xl md:text-3xl lg:text-4xl text-white uppercase tracking-wider">
          {category.name}
        </h3>
      </div>

      <div className="absolute inset-0 pt-16">
        <div className="relative w-full h-full">
          {category.images.map((image: any, index: number) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={`absolute object-contain drop-shadow-lg ${image.position}`}
            />
          ))}
        </div>
      </div>
      
      <WavePattern />
    </div>
  );
};

const Categories: React.FC = () => {
  const smallCategories = categoriesData.filter(c => !c.isLarge);
  const largeCategory = categoriesData.find(c => c.isLarge);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: '.category-card',
              translateY: [50, 0],
              opacity: [0, 1],
              delay: anime.stagger(100, { start: 100 }),
              duration: 800,
              easing: 'easeOutExpo',
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <FontStyles />
      <section ref={sectionRef} className="py-12 md:py-20 bg-gradient-to-br from-pink-50 via-red-50 to-rose-100 relative overflow-hidden">
        {/* Decorative Blobs */}
        <div className="absolute top-0 -left-20 w-72 h-72 bg-rose-200 rounded-full opacity-30 mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 -right-20 w-72 h-72 bg-pink-200 rounded-full opacity-30 mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-80 h-80 bg-red-200 rounded-full opacity-30 mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-lilita text-4xl md:text-5xl text-pink-500 uppercase tracking-wider">
              Our Categories
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 max-w-6xl mx-auto">
            {/* Small Categories */}
            <div className="md:col-start-1 md:row-start-1">
              <CategoryCard category={smallCategories[0]} />
            </div>
            <div className="md:col-start-3 md:row-start-1">
              <CategoryCard category={smallCategories[1]} />
            </div>
            <div className="md:col-start-1 md:row-start-2">
              <CategoryCard category={smallCategories[2]} />
            </div>
            <div className="md:col-start-3 md:row-start-2">
              <CategoryCard category={smallCategories[3]} />
            </div>

            {/* Large Category */}
            {largeCategory && (
              <div className="md:col-start-2 md:row-start-1 md:row-span-2">
                <CategoryCard category={largeCategory} isLarge />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
