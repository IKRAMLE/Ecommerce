import React, { Component } from 'react';

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
      <div className="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden max-w-7xl mx-auto top-28 ">
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
            <div className="absolute "></div>
          </div>
        ))}

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full text-white">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              {this.heroContent[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay">
              {this.heroContent[currentSlide].subtitle}
            </p>
            <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300 animate-fade-in-delay-2">
              {this.heroContent[currentSlide].cta}
            </button>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={this.prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 z-20"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={this.nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 z-20"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {this.heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => this.goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
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
