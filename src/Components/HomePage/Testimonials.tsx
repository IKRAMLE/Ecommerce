import { Star } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=150&h=150",
    rating: 5,
    text: "Bloom has completely transformed my skincare routine! The quality is amazing and the results speak for themselves. I've been a loyal customer for over a year now.",
    product: "Radiant Glow Serum"
  },
  {
    id: 2,
    name: "Emily Chen",
    avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=150&h=150",
    rating: 5,
    text: "I love how Bloom combines luxury with affordability. Their hair care products have made my hair healthier and more manageable than ever before.",
    product: "Luxe Hair Oil Treatment"
  },
  {
    id: 3,
    name: "Jessica Martinez",
    avatar: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=150&h=150",
    rating: 5,
    text: "The customer service is exceptional and the products always exceed my expectations. Fast shipping and beautiful packaging make every order feel special.",
    product: "Vanilla Rose Body Butter"
  }
];

const LoginModal = ({ show, onClose }: { show: boolean; onClose: () => void }) => {
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 px-2">
      <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 w-full max-w-xs sm:max-w-sm md:max-w-md relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-400 hover:text-pink-400 text-2xl">&times;</button>
        <h3 className="font-lilita text-xl sm:text-2xl text-pink-500 mb-4 text-center">Login to Rate</h3>
        <form className="flex flex-col gap-4">
          <input type="email" placeholder="Email" className="border rounded-lg px-3 py-2 sm:px-4 sm:py-2" />
          <input type="password" placeholder="Password" className="border rounded-lg px-3 py-2 sm:px-4 sm:py-2" />
          <button type="submit" className="bg-pink-400 hover:bg-pink-500 text-white rounded-lg py-2 font-semibold">Login</button>
        </form>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [showLogin, setShowLogin] = useState(false);
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating 
            ? 'text-yellow-400 fill-current' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-10 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-pink-50">
      <div className="container mx-auto px-2 sm:px-4 ">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-5 sm:p-8"
            >
              {/* Rating */}
              <div className="flex mb-3 sm:mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                "{testimonial.text}"
              </blockquote>

              {/* Customer Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-3 sm:mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-800 text-sm sm:text-base">
                    {testimonial.name}
                  </div>
                  <div className="text-xs sm:text-sm text-pink-500">
                    Verified Buyer - {testimonial.product}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rate Us Button */}
        <div className="mt-10 sm:mt-16 text-center">
          <button
            className="bg-pink-400 hover:bg-pink-500 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg text-base sm:text-lg transition-all duration-300"
            onClick={() => setShowLogin(true)}
          >
            Rate Us
          </button>
        </div>
        <LoginModal show={showLogin} onClose={() => setShowLogin(false)} />
      </div>
    </section>
  );
};

export default Testimonials;
