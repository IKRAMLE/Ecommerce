import React from 'react';
import { GiPaperLantern } from 'react-icons/gi';

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
      { src: '/HairCare.jpg', alt: 'Hair Care', position: 'z-20 bottom-0 left-1/2 -translate-x-1/2 w-28 md:w-32 rotate-6' },
    ],
  },
  {
    name: 'Body Care',
    images: [
      { src: '/BodyCare.jpg', alt: 'Body Care', position: 'z-20 bottom-0 left-1/2 -translate-x-1/2 w-28 md:w-32 rotate-3' },
    ],
  },
  {
    name: 'Face Care',
    images: [
      { src: '/FaceCare.jpg', alt: 'Face Care', position: 'z-20 bottom-0 left-1/2 -translate-x-1/2 w-28 md:w-32 rotate-6' },
    ],
  },
  {
    name: 'Fragrance & Scents',
    images: [
      { src: '/Fragrance&Scents.jpg', alt: 'Fragrance & Scents', position: 'z-20 bottom-0 left-1/2 -translate-x-1/2 w-20 md:w-24 rotate-12' },
    ],
  },
  {
    name: 'Makeup & Beauty',
    isLarge: true,
    images: [
      { src: '/MakeUp.jpg', alt: 'Makeup & Beauty', position: 'z-20 bottom-0 left-1/2 -translate-x-1/2 w-48' },
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
  // Use the first image as background
  const bgImage = category.images[0]?.src;
  return (
    <div
      className={`relative rounded-xl border border-pink-200 bg-pink-50/80 p-4 transition-all duration-300 hover:border-pink-300 hover:shadow-lg hover:-translate-y-1
      ${isLarge ? 'min-h-[24rem] md:min-h-full' : 'min-h-[16rem] md:min-h-[18rem]'}`}
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Lantern className="left-6" />
      {!isLarge && <Lantern className="right-6" />}
      
      <div className="relative z-10 text-center">
        <h3 className="font-lilita text-2xl md:text-3xl lg:text-4xl text-white uppercase tracking-wider">
          {category.name}
        </h3>
      </div>

      {/* Remove the <img> rendering, keep the WavePattern overlay */}
      <WavePattern />
    </div>
  );
};

const Categories: React.FC = () => {
  const smallCategories = categoriesData.filter(c => !c.isLarge);
  const largeCategory = categoriesData.find(c => c.isLarge);

  return (
    <>
      <FontStyles />
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16 mt-15">
            <h2 className="font-lilita text-4xl md:text-5xl text-pink-500 uppercase tracking-wider -mt-15">
              Our Categories
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 max-w-6xl mx-auto -mt-5">
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
