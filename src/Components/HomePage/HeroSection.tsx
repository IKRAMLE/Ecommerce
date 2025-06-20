import React, { Component } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface HeroSectionState {
  currentSlide: number;
}

class HeroSection extends Component<{}, HeroSectionState> {
  private intervalId: number | null = null;

  constructor(props: {}) {
    super(props);
    this.state = {
      currentSlide: 0
    };
  }

  componentDidMount() {
    this.startAutoAdvance();
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startAutoAdvance = () => {
    this.intervalId = setInterval(() => {
      this.setState(prevState => ({
        currentSlide: (prevState.currentSlide + 1) % this.heroImages.length
      }));
    }, 5000);
  };

  heroImages = [
    '/Hero1.jpg',
    '/Hero2.jpg',
    '/Hero3.jpg',
    '/Hero4.jpg',
    '/Hero5.jpg'
  ];

  heroContent = [
    {
      title: "Discover Amazing Products",
      subtitle: "Shop the latest trends with unbeatable prices",
      cta: "Shop Now"
    },
    {
      title: "Premium Quality",
      subtitle: "Handpicked items for the discerning shopper",
      cta: "Explore Collection"
    },
    {
      title: "Fast & Free Shipping",
      subtitle: "Get your orders delivered quickly and securely",
      cta: "Learn More"
    },
    {
      title: "Exclusive Deals",
      subtitle: "Limited time offers you won't want to miss",
      cta: "View Deals"
    },
    {
      title: "Customer Satisfaction",
      subtitle: "Join thousands of happy customers worldwide",
      cta: "Shop Today"
    }
  ];

  goToSlide = (index: number) => {
    this.setState({ currentSlide: index });
  };

  nextSlide = () => {
    this.setState(prevState => ({
      currentSlide: (prevState.currentSlide + 1) % this.heroImages.length
    }));
  };

  prevSlide = () => {
    this.setState(prevState => ({
      currentSlide: (prevState.currentSlide - 1 + this.heroImages.length) % this.heroImages.length
    }));
  };

  render() {
    const { currentSlide } = this.state;

    return (
      <div className="relative h-64 sm:h-80 md:h-[500px] lg:h-[600px] overflow-hidden max-w-full md:max-w-7xl mx-auto top-16 sm:top-20 md:top-10 ">
        {/* Hero Images */}
        {this.heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Hero ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute " />
          </div>
        ))}

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full text-white px-2 sm:px-4">
          <div className="text-center max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto px-2 sm:px-4">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-6 animate-fade-in">
              {this.heroContent[currentSlide].title}
            </h1>
            <p className="text-base xs:text-lg sm:text-xl md:text-2xl mb-4 sm:mb-8 animate-fade-in-delay">
              {this.heroContent[currentSlide].subtitle}
            </p>
            <button className="bg-white text-black px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-100 transition-colors duration-300 animate-fade-in-delay-2">
              {this.heroContent[currentSlide].cta}
            </button>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={this.prevSlide}
          className="absolute left-2 bg-pink-400 hover:bg-pink-500 sm:left-4 top-1/2 transform -translate-y-1/2 text-white p-2 sm:p-3 rounded-full transition-all duration-300 z-20"
        >
          <FaChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        
        <button
          onClick={this.nextSlide}
          className="absolute right-2 bg-pink-400 hover:bg-pink-500 sm:right-4 top-1/2 transform -translate-y-1/2 text-white p-2 sm:p-3 rounded-full transition-all duration-300 z-20"
        >
          <FaChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
          {this.heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => this.goToSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-125'
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default HeroSection;
