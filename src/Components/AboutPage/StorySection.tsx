import React from 'react';
import { motion } from 'framer-motion';
import { 
  Camera,
  Star,
  Heart,
  Sparkles,
  ArrowRight
} from 'lucide-react';

const StorySection: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 bg-gradient-to-r from-pink-100 to-purple-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded in 2020, we began with a simple mission: to make premium beauty products 
              accessible to everyone. What started as a small local store has grown into a 
              trusted destination for beauty enthusiasts worldwide.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Today, we're proud to offer a curated selection of the finest beauty products, 
              backed by exceptional customer service and a commitment to quality that never wavers.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-2xl p-6 shadow-lg"
                >
                  <div className="text-pink-500 mb-2 flex justify-center">
                    <Camera className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-gray-800 text-center">Beauty</h3>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-2xl p-6 shadow-lg"
                >
                  <div className="text-pink-500 mb-2 flex justify-center">
                    <Star className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-gray-800 text-center">Quality</h3>
                </motion.div>
              </div>
              <div className="space-y-4 pt-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-2xl p-6 shadow-lg"
                >
                  <div className="text-pink-500 mb-2 flex justify-center">
                    <Heart className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-gray-800 text-center">Care</h3>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-2xl p-6 shadow-lg"
                >
                  <div className="text-pink-500 mb-2 flex justify-center">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-gray-800 text-center">Magic</h3>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default StorySection; 