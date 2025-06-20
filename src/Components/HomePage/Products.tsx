import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const featuredProducts = [
  {
    id: 1,
    name: 'Argan Oil Shampoo',
    image: '/HairCare.jpg',
    price: 14.99,
  },
  {
    id: 2,
    name: 'Vitamin C Face Serum',
    image: '/FaceCare.jpg',
    price: 19.99,
  },
  {
    id: 3,
    name: 'Rose Body Lotion',
    image: '/BodyCare.jpg',
    price: 12.49,
  },
  {
    id: 4,
    name: 'Luxury Perfume',
    image: '/Fragrance&Scents.jpg',
    price: 29.99,
  },
  {
    id: 5,
    name: 'Makeup Essentials Kit',
    image: '/MakeUp.jpg',
    price: 39.99,
  },
];

const AUTO_SLIDE_INTERVAL = 3000; // 3 seconds

const getCardsToShow = () => {
  if (typeof window !== 'undefined') {
    if (window.innerWidth < 640) return 1; // mobile
    if (window.innerWidth < 768) return 2; // sm
    if (window.innerWidth < 1024) return 3; // md
  }
  return 4; // lg and up
};

const Products: React.FC = () => {
  const [startIdx, setStartIdx] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(getCardsToShow());
  const total = featuredProducts.length;

  useEffect(() => {
    const handleResize = () => setCardsToShow(getCardsToShow());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const next = () => setStartIdx((prev) => (prev + 1) % total);
  const prev = () => setStartIdx((prev) => (prev - 1 + total) % total);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIdx((prev) => (prev + 1) % total);
    }, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, [total]);

  // Get the cards to show in the carousel
  const visibleProducts = Array.from({ length: cardsToShow }, (_, i) =>
    featuredProducts[(startIdx + i) % total]
  );

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-lilita text-4xl md:text-5xl text-pink-400 uppercase tracking-wider -mt-30">
            Featured Products
          </h2>
        </div>
        <div className="relative max-w-full mx-auto flex items-center -mt-5">
          <button
            onClick={prev}
            className="absolute left-0 z-10 bg-pink-400 hover:bg-pink-500 text-white p-3 rounded-full shadow transition-all duration-300 -ml-4 sm:-ml-8 md:-ml-12 lg:ml-7"
            aria-label="Previous"
          >
            <FaChevronLeft className="w-6 h-6" />
          </button>
          <div className="w-full flex justify-center gap-4 sm:gap-6 md:gap-8">
            {visibleProducts.map(product => (
              <div
                key={product.id}
                className="bg-white rounded-xl border border-pink-100 shadow hover:shadow-lg transition-all flex flex-col items-center p-4 sm:p-6 md:p-8 relative group min-w-[180px] sm:min-w-[220px] md:min-w-[260px] lg:min-w-[300px] max-w-xs sm:max-w-sm md:max-w-md"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-28 h-28 sm:w-32 sm:h-32 md:w-44 md:h-44 lg:w-56 lg:h-56 object-cover rounded-lg mb-4 sm:mb-6 md:mb-8 border border-pink-50 shadow-sm"
                />
                <h3 className="font-lilita text-lg sm:text-xl md:text-2xl text-pink-400 mb-2 md:mb-3 text-center">{product.name}</h3>
                <div className="text-base sm:text-lg md:text-xl font-semibold text-gray-700 mb-4 md:mb-6">${product.price.toFixed(2)}</div>
                <div className="flex gap-2 sm:gap-3 w-full justify-center">
                  <button className="bg-pink-400 hover:bg-pink-500 text-white px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-3 rounded-lg font-semibold transition">Add to Cart</button>
                  <button className="bg-white border border-pink-400 text-pink-400 hover:bg-pink-50 px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-3 rounded-lg font-semibold transition">View More</button>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={next}
            className="absolute right-0 z-10 bg-pink-400 hover:bg-pink-500 text-white p-3 rounded-full shadow transition-all duration-300 -mr-4 sm:-mr-8 md:-mr-12 lg:mr-7"
            aria-label="Next"
          >
            <FaChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
