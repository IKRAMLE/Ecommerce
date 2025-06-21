import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, LogIn, X } from 'lucide-react';
import { FaUserCircle } from 'react-icons/fa';

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ open, onClose }) => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
    setForm({ email: '', password: '' });
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="relative z-10 w-full max-w-md mx-auto bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl px-8 py-10 flex flex-col items-center border border-pink-100"
            onClick={e => e.stopPropagation()}
          >
            <button
              aria-label="Close"
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-400 hover:text-pink-500 focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex flex-col items-center mb-6">
              <FaUserCircle className="w-16 h-16 text-pink-400 mb-2 drop-shadow" />
              <h2 className="text-3xl font-bold text-gray-800 mb-1">Welcome Back</h2>
              <p className="text-gray-500">Login to your account</p>
            </div>
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6" autoComplete="off" aria-label="Login form">
              {/* Email */}
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-pink-400 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="peer pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-pink-400 outline-none transition-all bg-transparent w-full placeholder-transparent"
                  placeholder="Email"
                  aria-label="Email"
                />
                <label className="absolute left-10 top-3 text-gray-400 pointer-events-none transition-all duration-200 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-pink-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 bg-white/70 px-1">
                  Email
                </label>
              </div>
              {/* Password */}
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-pink-400 w-5 h-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  className="peer pl-10 pr-10 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-pink-400 outline-none transition-all bg-transparent w-full placeholder-transparent"
                  placeholder="Password"
                  aria-label="Password"
                />
                <label className="absolute left-10 top-3 text-gray-400 pointer-events-none transition-all duration-200 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-pink-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 bg-white/70 px-1">
                  Password
                </label>
                <button
                  type="button"
                  tabIndex={0}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-pink-400 hover:text-pink-600 focus:outline-none"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {/* Login Button */}
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="mt-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 justify-center shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
              >
                <LogIn className="w-5 h-5" /> Login
              </motion.button>
              {/* Success Message */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="flex flex-col items-center gap-2 text-green-600 font-semibold text-center mt-2"
                >
                  Successfully logged in!
                </motion.div>
              )}
            </form>
            <div className="flex flex-col sm:flex-row justify-between items-center w-full mt-6 gap-2 text-sm">
              <a href="#" className="text-pink-500 hover:underline">Forgot password?</a>
              <span className="text-gray-400 hidden sm:inline-block">|</span>
              <a href="#" className="text-purple-500 hover:underline">Don&apos;t have an account? <span className="underline">Sign up</span></a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoginModal; 