import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, LogIn, X } from 'lucide-react';
import { FaUserCircle, FaGoogle, FaFacebook } from 'react-icons/fa';

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
  onSwitchToRegister?: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ open, onClose, onSwitchToRegister }) => {
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

  // Social login handlers (stub)
  const handleGoogleLogin = () => {
    alert('Google login coming soon!');
  };
  const handleFacebookLogin = () => {
    alert('Facebook login coming soon!');
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
          {/* Animated Pink Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.5, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="absolute z-0 w-[420px] h-[420px] rounded-full bg-pink-300 blur-3xl pointer-events-none"
            style={{ filter: 'blur(80px)' }}
          />
          <motion.div
            initial={{ y: 40, opacity: 0, scale: 0.97 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 180, damping: 18 }}
            className="relative z-10 w-full max-w-md mx-auto bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl px-4 py-5 flex flex-col items-center border border-pink-100 ring-2 ring-pink-100/40"
            style={{ boxShadow: '0 8px 48px 0 rgba(236,72,153,0.18), 0 1.5px 8px 0 rgba(236,72,153,0.10)' }}
            onClick={e => e.stopPropagation()}
          >
            <button
              aria-label="Close"
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-400 hover:text-pink-500 focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex flex-col items-center mb-4">
              <FaUserCircle className="w-14 h-14 text-pink-400 mb-2 drop-shadow-lg animate-bounce" />
              <h2 className="text-2xl font-extrabold text-gray-800 mb-1 tracking-tight">Welcome Back</h2>
              <p className="text-pink-400 font-medium text-base">Login to your account</p>
            </div>
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4" autoComplete="off" aria-label="Login form">
              {/* Email */}
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-pink-400 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="peer pl-10 pr-4 py-3 rounded-lg border border-pink-200 focus:ring-2 focus:ring-pink-400 outline-none transition-all bg-white/60 w-full placeholder-transparent shadow-sm"
                  placeholder="Email"
                  aria-label="Email"
                />
                <label className="absolute left-10 top-3 text-pink-300 pointer-events-none transition-all duration-200 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-pink-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-pink-300 bg-white/70 px-1">
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
                  className="peer pl-10 pr-10 py-3 rounded-lg border border-pink-200 focus:ring-2 focus:ring-pink-400 outline-none transition-all bg-white/60 w-full placeholder-transparent shadow-sm"
                  placeholder="Password"
                  aria-label="Password"
                />
                <label className="absolute left-10 top-3 text-pink-300 pointer-events-none transition-all duration-200 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-pink-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-pink-300 bg-white/70 px-1">
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
              {/* Remember me and Forgot password */}
              <div className="flex items-center justify-between w-full">
                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <input type="checkbox" className="accent-pink-500 w-4 h-4 rounded" />
                  Remember me
                </label>
                <a href="#" className="text-pink-500 hover:underline text-sm">Forgot password?</a>
              </div>
              {/* Login Button */}
              <motion.button
                whileHover={{ scale: 1.06, boxShadow: '0 0 0 4px #f9a8d4' }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="mt-2 bg-gradient-to-r from-pink-500 to-pink-400 text-white px-8 py-3 rounded-full font-extrabold flex items-center gap-2 justify-center shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400 tracking-wide text-lg"
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
              {/* Sign up link */}
              <div className="mt-4 text-center">
                <span className="text-gray-600 text-base">Don&apos;t have an account? </span>
                <a
                  href="#"
                  className="text-pink-500 underline font-semibold hover:text-pink-600 transition text-base"
                  onClick={e => {
                    e.preventDefault();
                    if (onSwitchToRegister) onSwitchToRegister();
                  }}
                >
                  Sign up here
                </a>
              </div>
              {/* Divider */}
              <div className="flex items-center w-full my-4">
                <div className="flex-1 h-px bg-pink-100" />
                <span className="mx-4 text-pink-300 font-bold text-lg select-none">Or continue with</span>
                <div className="flex-1 h-px bg-pink-100" />
              </div>
            </form>
            {/* Social Login Buttons */}
            <div className="flex flex-row gap-4 w-full justify-center">
              <motion.button
                type="button"
                onClick={handleGoogleLogin}
                whileHover={{ scale: 1.05, boxShadow: '0 0 0 4px #f9a8d4' }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center w-1/2 min-w-[130px] gap-2 py-3 rounded-full font-semibold text-white bg-[#EA4335] shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-400 text-base border-2 border-white/40"
                aria-label="Login with Google"
              >
                <FaGoogle className="w-6 h-6 mr-2" />
                <span className="font-bold">Google</span>
              </motion.button>
              <motion.button
                type="button"
                onClick={handleFacebookLogin}
                whileHover={{ scale: 1.05, boxShadow: '0 0 0 4px #f9a8d4' }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center w-1/2 min-w-[130px] gap-2 py-3 rounded-full font-semibold text-white bg-[#1877F3] shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-400 text-base border-2 border-white/40"
                aria-label="Login with Facebook"
              >
                <FaFacebook className="w-6 h-6 mr-2" />
                <span className="font-bold">Facebook</span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoginModal; 