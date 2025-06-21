import React, { useState, useEffect } from 'react';
import Navbar from '../Components/HomePage/Navbar';
import Footer from '../Components/HomePage/Footer';
import HeroSection from '../Components/AboutPage/HeroSection';
import StatsSection from '../Components/AboutPage/StatsSection';
import StorySection from '../Components/AboutPage/StorySection';
import ValuesSection from '../Components/AboutPage/ValuesSection';
import CTASection from '../Components/AboutPage/CTASection';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 mt-10">
        <HeroSection isVisible={isVisible} />
        <StatsSection />
        <StorySection />
        <ValuesSection />
        <CTASection />
      </div>
      <Footer />
    </>
  );
};

export default About;
