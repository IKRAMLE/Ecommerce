import React, { useEffect, useState } from 'react';

const deals = [
  {
    id: 1,
    name: 'Argan Oil Shampoo',
    image: '/HairCare.jpg',
    originalPrice: 14.99,
    discount: 30, // percent
  },
  {
    id: 2,
    name: 'Vitamin C Face Serum',
    image: '/FaceCare.jpg',
    originalPrice: 19.99,
    discount: 40,
  },
  {
    id: 3,
    name: 'Rose Body Lotion',
    image: '/BodyCare.jpg',
    originalPrice: 12.49,
    discount: 25,
  },
  {
    id: 4,
    name: 'Luxury Perfume',
    image: '/Fragrance&Scents.jpg',
    originalPrice: 29.99,
    discount: 50,
  },
];

function getTimeLeftToMidnight() {
  const now = new Date();
  const midnight = new Date();
  midnight.setHours(23, 59, 59, 999);
  const diff = midnight.getTime() - now.getTime();
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return { hours, minutes, seconds };
}

const Promotions: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeftToMidnight());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeftToMidnight());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 md:py-20 bg-gradient-to-r from-pink-100 via-pink-50 to-pink-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <h2 className="font-lilita text-3xl md:text-4xl text-pink-400 uppercase tracking-wider mb-4 md:mb-0 ">
            Today's Deals
          </h2>
          <div className="flex items-center gap-2 text-lg font-semibold text-pink-500 bg-white rounded-full px-6 py-2 shadow">
            <span>Ends in</span>
            <span className="font-mono text-xl">
              {String(timeLeft.hours).padStart(2, '0')}:
              {String(timeLeft.minutes).padStart(2, '0')}:
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {deals.map(deal => {
            const discountedPrice = (deal.originalPrice * (1 - deal.discount / 100)).toFixed(2);
            return (
              <div
                key={deal.id}
                className="relative bg-white rounded-xl border border-pink-100 shadow-lg p-6 flex flex-col items-center group overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                {/* Discount Badge */}
                <span className="absolute top-4 left-4 bg-pink-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10">
                  -{deal.discount}%
                </span>
                <img
                  src={deal.image}
                  alt={deal.name}
                  className="w-28 h-28 object-cover rounded-lg mb-4 border border-pink-50 shadow-sm"
                />
                <h3 className="font-lilita text-lg text-pink-400 mb-2 text-center">{deal.name}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-gray-400 line-through text-base">${deal.originalPrice.toFixed(2)}</span>
                  <span className="text-pink-500 text-xl font-bold">${discountedPrice}</span>
                </div>
                <button className="mt-2 bg-pink-400 hover:bg-pink-500 text-white px-4 py-2 rounded-lg font-semibold transition">
                  Shop Now
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Promotions;
