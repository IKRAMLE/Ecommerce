import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles,
  Leaf
} from 'lucide-react';
import { FaGem, FaHandshake } from 'react-icons/fa';

const ValuesSection: React.FC = () => {
  const values = [
    {
      icon: <FaGem className="w-12 h-12" />,
      title: 'Quality First',
      description: 'We never compromise on the quality of our products and services.'
    },
    {
      icon: <FaHandshake className="w-12 h-12" />,
      title: 'Customer Trust',
      description: 'Building lasting relationships through transparency and reliability.'
    },
    {
      icon: <Leaf className="w-12 h-12" />,
      title: 'Sustainability',
      description: 'Committed to eco-friendly practices and responsible sourcing.'
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: 'Innovation',
      description: 'Constantly evolving to bring you the latest beauty trends.'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Values
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do and every decision we make.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="text-pink-500 mb-4 flex justify-center">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ValuesSection; 