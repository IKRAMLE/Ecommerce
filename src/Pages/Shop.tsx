import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  Heart, 
  ShoppingCart, 
  Eye,
  ChevronDown,
  Grid,
  List,
  SlidersHorizontal
} from 'lucide-react';
import { FaStar, FaRegHeart, FaHeart } from 'react-icons/fa';
import Navbar from '../Components/HomePage/Navbar';
import Footer from '../Components/HomePage/Footer';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
  discount?: number;
}

const Shop: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Rose Gold Glow Serum",
      price: 89.99,
      originalPrice: 129.99,
      rating: 4.8,
      reviews: 1247,
      image: "/src/public/FaceCare.jpg",
      category: "Skincare",
      isSale: true,
      discount: 30
    },
    {
      id: 2,
      name: "Lavender Dream Cream",
      price: 65.50,
      rating: 4.9,
      reviews: 892,
      image: "/src/public/BodyCare.jpg",
      category: "Body Care",
      isNew: true
    },
    {
      id: 3,
      name: "Vanilla Paradise Perfume",
      price: 120.00,
      rating: 4.7,
      reviews: 567,
      image: "/src/public/Fragrance&Scents.jpg",
      category: "Fragrance"
    },
    {
      id: 4,
      name: "Silk Hair Elixir",
      price: 45.99,
      originalPrice: 59.99,
      rating: 4.6,
      reviews: 1234,
      image: "/src/public/HairCare.jpg",
      category: "Hair Care",
      isSale: true,
      discount: 23
    },
    {
      id: 5,
      name: "Crystal Clear Foundation",
      price: 78.00,
      rating: 4.8,
      reviews: 2341,
      image: "/src/public/MakeUp.jpg",
      category: "Makeup"
    },
    {
      id: 6,
      name: "Golden Hour Highlighter",
      price: 32.99,
      rating: 4.9,
      reviews: 1890,
      image: "/src/public/FaceCare.jpg",
      category: "Makeup"
    }
  ]);

  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [sortBy, setSortBy] = useState<string>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [loginOpen, setLoginOpen] = useState(false);

  const categories = ['all', 'skincare', 'makeup', 'body care', 'hair care', 'fragrance'];

  useEffect(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category.toLowerCase() === selectedCategory;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesRating = selectedRating === 0 || product.rating >= selectedRating;
      
      return matchesSearch && matchesCategory && matchesPrice && matchesRating;
    });

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        // Featured - keep original order
        break;
    }

    setFilteredProducts(filtered);
  }, [products, searchTerm, selectedCategory, priceRange, selectedRating, sortBy]);

  const toggleWishlist = (productId: number) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <Navbar onLoginClick={() => setLoginOpen(true)} />
      
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 py-20 overflow-hidden mt-16 sm:mt-20"
      >
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Discover Beauty
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 opacity-90"
          >
            Explore our curated collection of premium beauty products
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="relative max-w-md mx-auto"
          >
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </motion.div>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-80"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-pink-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <SlidersHorizontal className="w-5 h-5 text-pink-500" />
                  Filters
                </h3>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden p-2 rounded-lg bg-pink-100 text-pink-600 hover:bg-pink-200 transition"
                >
                  <Filter className="w-5 h-5" />
                </button>
              </div>

              <AnimatePresence>
                {(showFilters || window.innerWidth >= 1024) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-6"
                  >
                    {/* Categories */}
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-3">Categories</h4>
                      <div className="space-y-2">
                        {categories.map((category) => (
                          <label key={category} className="flex items-center gap-3 cursor-pointer group">
                            <input
                              type="radio"
                              name="category"
                              value={category}
                              checked={selectedCategory === category}
                              onChange={(e) => setSelectedCategory(e.target.value)}
                              className="w-4 h-4 text-pink-500 border-gray-300 focus:ring-pink-500"
                            />
                            <span className="text-gray-600 group-hover:text-pink-500 transition capitalize">
                              {category}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Price Range */}
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-3">Price Range</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>${priceRange[0]}</span>
                          <span>${priceRange[1]}</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="200"
                          value={priceRange[1]}
                          onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                          className="w-full h-2 bg-pink-200 rounded-lg appearance-none cursor-pointer slider"
                        />
                      </div>
                    </div>

                    {/* Rating Filter */}
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-3">Rating</h4>
                      <div className="space-y-2">
                        {[4, 3, 2, 1].map((rating) => (
                          <label key={rating} className="flex items-center gap-3 cursor-pointer group">
                            <input
                              type="radio"
                              name="rating"
                              value={rating}
                              checked={selectedRating === rating}
                              onChange={(e) => setSelectedRating(parseInt(e.target.value))}
                              className="w-4 h-4 text-pink-500 border-gray-300 focus:ring-pink-500"
                            />
                            <div className="flex items-center gap-1">
                              {Array.from({ length: 5 }, (_, i) => (
                                <FaStar
                                  key={i}
                                  className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                />
                              ))}
                              <span className="text-gray-600 group-hover:text-pink-500 transition">
                                & up
                              </span>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Products Section */}
          <div className="flex-1">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {filteredProducts.length} Products Found
                </h2>
                <p className="text-gray-600">
                  Showing results for your search
                </p>
              </div>

              <div className="flex items-center gap-4">
                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 rounded-lg border border-pink-200 bg-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest</option>
                </select>

                {/* View Mode */}
                <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition ${
                      viewMode === 'grid' ? 'bg-pink-500 text-white' : 'text-gray-600 hover:text-pink-500'
                    }`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition ${
                      viewMode === 'list' ? 'bg-pink-500 text-white' : 'text-gray-600 hover:text-pink-500'
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${viewMode}-${filteredProducts.length}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={viewMode === 'grid' 
                  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
                  : 'space-y-4'
                }
              >
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-pink-100 hover:shadow-xl transition-all duration-300 group ${
                      viewMode === 'list' ? 'flex' : ''
                    }`}
                  >
                    {/* Product Image */}
                    <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-48' : 'aspect-square'}`}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {product.isNew && (
                        <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                          NEW
                        </div>
                      )}
                      {product.isSale && (
                        <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                          -{product.discount}%
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                      
                      {/* Quick Actions */}
                      <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                          onClick={() => toggleWishlist(product.id)}
                          className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-pink-500 hover:text-white transition"
                        >
                          {wishlist.includes(product.id) ? (
                            <FaHeart className="w-4 h-4 text-pink-500" />
                          ) : (
                            <FaRegHeart className="w-4 h-4" />
                          )}
                        </button>
                        <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-pink-500 hover:text-white transition">
                          <Eye className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm text-pink-500 font-semibold capitalize">
                          {product.category}
                        </span>
                      </div>
                      
                      <h3 className="font-bold text-gray-800 mb-2 group-hover:text-pink-500 transition">
                        {product.name}
                      </h3>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-1">
                          {renderStars(product.rating)}
                        </div>
                        <span className="text-sm text-gray-500">
                          ({product.reviews})
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-2xl font-bold text-gray-800">
                          ${product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-lg text-gray-400 line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                      
                      <button className="w-full bg-gradient-to-r from-pink-500 to-pink-400 text-white py-3 rounded-full font-semibold hover:from-pink-600 hover:to-pink-500 transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                        <ShoppingCart className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                        Add to Cart
                      </button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* No Results */}
            {filteredProducts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <div className="w-24 h-24 mx-auto mb-4 bg-pink-100 rounded-full flex items-center justify-center">
                  <Search className="w-12 h-12 text-pink-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">No products found</h3>
                <p className="text-gray-600">Try adjusting your filters or search terms</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
