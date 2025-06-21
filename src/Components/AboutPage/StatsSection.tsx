import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  ShoppingBag, 
  Tag, 
  HeadphonesIcon
} from 'lucide-react';

const StatsSection: React.FC = () => {
  const stats = [
    { number: '10K+', label: 'Happy Customers', icon: <Users className="w-8 h-8" /> },
    { number: '500+', label: 'Products', icon: <ShoppingBag className="w-8 h-8" /> },
    { number: '50+', label: 'Brands', icon: <Tag className="w-8 h-8" /> },
    { number: '24/7', label: 'Support', icon: <HeadphonesIcon className="w-8 h-8" /> },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 bg-white/50 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="text-pink-500 mb-2 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-1">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default StatsSection; 