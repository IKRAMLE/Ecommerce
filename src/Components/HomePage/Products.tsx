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

const CARDS_TO_SHOW = 4;
const AUTO_SLIDE_INTERVAL = 3000; // 3 seconds

const Products: React.FC = () => {
  const [startIdx, setStartIdx] = useState(0);
  const total = featuredProducts.length;

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
  const visibleProducts = Array.from({ length: CARDS_TO_SHOW }, (_, i) =>
    featuredProducts[(startIdx + i) % total]
  );

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-lilita text-4xl md:text-5xl text-pink-400 uppercase tracking-wider -mt-25">
            Featured Products
          </h2>
        </div>
        <div className="relative max-w-6xl mx-auto flex items-center">
          <button
            onClick={prev}
            className="absolute left-0 z-10 bg-pink-400 hover:bg-pink-500 text-white p-3 rounded-full shadow transition-all duration-300 -ml-20"
            aria-label="Previous"
          >
            <FaChevronLeft className="w-6 h-6 " />
          </button>
          <div className="w-full flex justify-center gap-6">
            {visibleProducts.map(product => (
              <div
                key={product.id}
                className="bg-white rounded-xl border border-pink-100 shadow hover:shadow-lg transition-all flex flex-col items-center p-6 relative group min-w-[300px] max-w-md"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-56 h-56 object-cover rounded-lg mb-8 border border-pink-50 shadow-sm"
                />
                <h3 className="font-lilita text-xl text-pink-400 mb-2 text-center">{product.name}</h3>
                <div className="text-lg font-semibold text-gray-700 mb-4">${product.price.toFixed(2)}</div>
                <div className="flex gap-2 w-full justify-center">
                  <button className="bg-pink-400 hover:bg-pink-500 text-white px-4 py-2 rounded-lg font-semibold transition">Add to Cart</button>
                  <button className="bg-white border border-pink-400 text-pink-400 hover:bg-pink-50 px-4 py-2 rounded-lg font-semibold transition">View More</button>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={next}
            className="absolute right-0 z-10 bg-pink-400 hover:bg-pink-500 text-white p-3 rounded-full shadow transition-all duration-300 -mr-20"
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
