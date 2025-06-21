import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Components/HomePage/Navbar';
import Footer from '../Components/HomePage/Footer';
import { 
  Users, 
  ShoppingBag, 
  Tag, 
  HeadphonesIcon,
  Sparkles,
  Heart,
  Leaf,
  Zap,
  Camera,
  Star,
  Award,
  TrendingUp,
  Linkedin,
  Twitter,
  Instagram,
  ArrowRight,
  Mail
} from 'lucide-react';
import { FaGem, FaHandshake } from 'react-icons/fa';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: '10K+', label: 'Happy Customers', icon: <Users className="w-8 h-8" /> },
    { number: '500+', label: 'Products', icon: <ShoppingBag className="w-8 h-8" /> },
    { number: '50+', label: 'Brands', icon: <Tag className="w-8 h-8" /> },
    { number: '24/7', label: 'Support', icon: <HeadphonesIcon className="w-8 h-8" /> },
  ];

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      bio: 'Passionate about creating exceptional beauty experiences.',
      social: { linkedin: '#', twitter: '#', instagram: '#' }
    },
    {
      name: 'Michael Chen',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      bio: 'Bringing innovation and style to every product we offer.',
      social: { linkedin: '#', twitter: '#', instagram: '#' }
    },
    {
      name: 'Emma Rodriguez',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      bio: 'Ensuring seamless experiences for our valued customers.',
      social: { linkedin: '#', twitter: '#', instagram: '#' }
    }
  ];

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

  const timeline = [
    {
      year: '2020',
      title: 'Our Beginning',
      description: 'Started with a simple dream to make beauty accessible to everyone.'
    },
    {
      year: '2021',
      title: 'First Milestone',
      description: 'Reached 1,000 happy customers and expanded our product range.'
    },
    {
      year: '2022',
      title: 'Growth & Innovation',
      description: 'Launched our mobile app and introduced exclusive beauty services.'
    },
    {
      year: '2023',
      title: 'Market Leader',
      description: 'Became one of the top beauty retailers with 10,000+ customers.'
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 mt-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-purple-400/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-6"
              >
                About Us
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              >
                We're passionate about bringing you the finest beauty products and creating 
                experiences that make you feel confident and beautiful every day.
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
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

        {/* Story Section */}
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

        {/* Values Section */}
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

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20 bg-gradient-to-r from-pink-500 to-purple-500"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-6"
            >
              Ready to Experience Beauty Like Never Before?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-xl text-pink-100 mb-8"
            >
              Join thousands of satisfied customers who trust us for their beauty needs.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2"
              >
                Shop Now
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-pink-600 transition-all duration-300 flex items-center gap-2"
              >
                Contact Us
                <Mail className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default About;
