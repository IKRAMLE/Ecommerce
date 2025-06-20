import React from 'react';
import { FaShippingFast, FaLock, FaUndo, FaHeadset, FaStar } from 'react-icons/fa';
import { useState } from 'react';

const features = [
  {
    icon: <FaShippingFast className="text-teal-400 text-4xl mb-3" />,
    title: 'Free Shipping',
    description: 'Enjoy free shipping on all orders, no minimum purchase required.'
  },
  {
    icon: <FaLock className="text-yellow-400 text-4xl mb-3" />,
    title: 'Secure Payment',
    description: 'Your payment information is processed securely with top encryption.'
  },
  {
    icon: <FaUndo className="text-blue-400 text-4xl mb-3" />,
    title: 'Easy Returns',
    description: 'Not satisfied? Return your product easily within 30 days.'
  },
  {
    icon: <FaHeadset className="text-pink-400 text-4xl mb-3" />,
    title: 'Customer Support',
    description: 'Our support team is here to help you 24/7 with any questions.'
  },
];

const LoginModal = ({ show, onClose }: { show: boolean; onClose: () => void }) => {
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-sm relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-400 hover:text-pink-400 text-2xl">&times;</button>
        <h3 className="font-lilita text-2xl text-pink-500 mb-4 text-center">Login to Rate</h3>
        <form className="flex flex-col gap-4">
          <input type="email" placeholder="Email" className="border rounded-lg px-4 py-2" />
          <input type="password" placeholder="Password" className="border rounded-lg px-4 py-2" />
          <button type="submit" className="bg-pink-400 hover:bg-pink-500 text-white rounded-lg py-2 font-semibold">Login</button>
        </form>
      </div>
    </div>
  );
};

const WhyUs: React.FC = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 -mt-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-lilita text-4xl md:text-5xl text-pink-500 uppercase tracking-wider drop-shadow-sm">
            Why Choose Us
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
            We are committed to providing you with the best shopping experience possible.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-r from-pink-100 via-pink-50 to-pink-200 border border-pink-200 rounded-xl shadow-lg hover:shadow-xl transition-all flex flex-col items-center text-center p-8"
            >
              {feature.icon}
              <h3 className="font-lilita text-xl text-white mb-2 drop-shadow-sm">{feature.title}</h3>
              <p className="text-black text-base font-medium">{feature.description}</p>
            </div>
          ))}
        </div>
        <LoginModal show={showLogin} onClose={() => setShowLogin(false)} />
      </div>
    </section>
  );
};

export default WhyUs;
