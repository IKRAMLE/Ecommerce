import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-sm sm:text-base">
      {/* Main Footer */}
      <div className="container mx-auto px-3 sm:px-4 py-10 sm:py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                Bloom
              </span>
            </Link>
            
            <p className="text-gray-300 leading-relaxed">
              Discover premium beauty, hair care, and lifestyle products that help you bloom into your best self. Quality you can trust, results you can see.
            </p>

            {/* Social Media */}
            <div className="flex space-x-3 sm:space-x-4 mt-6">
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors">
                <FaFacebookF className="h-5 w-5" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors">
                <FaYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-pink-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-pink-400 transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-pink-400 transition-colors">FAQ</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-pink-400 transition-colors">Beauty Blog</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-pink-400 transition-colors">Careers</Link></li>
              <li><Link to="/affiliate" className="text-gray-300 hover:text-pink-400 transition-colors">Affiliate Program</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Customer Service</h3>
            <ul className="space-y-3">
              <li><Link to="/shipping" className="text-gray-300 hover:text-pink-400 transition-colors">Shipping Info</Link></li>
              <li><Link to="/returns" className="text-gray-300 hover:text-pink-400 transition-colors">Returns & Exchanges</Link></li>
              <li><Link to="/size-guide" className="text-gray-300 hover:text-pink-400 transition-colors">Size Guide</Link></li>
              <li><Link to="/track-order" className="text-gray-300 hover:text-pink-400 transition-colors">Track Your Order</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-pink-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-pink-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="h-5 w-5 text-pink-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>123 Beauty Boulevard</p>
                  <p>New York, NY 10001</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <FaPhone className="h-5 w-5 text-pink-400 flex-shrink-0" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <FaEnvelope className="h-5 w-5 text-pink-400 flex-shrink-0" />
                <span className="text-gray-300">hello@bloom.com</span>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-6">
              <h4 className="font-medium mb-2">Customer Support Hours</h4>
              <div className="text-sm text-gray-300 space-y-1">
                <p>Monday - Friday: 9AM - 8PM EST</p>
                <p>Saturday: 10AM - 6PM EST</p>
                <p>Sunday: 12PM - 5PM EST</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Methods & Copyright */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0 text-center md:text-left">
            <div className="text-xs sm:text-sm text-gray-400">
              © 2024 Bloom. All rights reserved.
            </div>
            {/* Add payment methods here if needed, stacked on mobile */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
