import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, User, Eye, EyeOff, X } from 'lucide-react';
import { FaUserCircle, FaGoogle, FaFacebook } from 'react-icons/fa';

interface RegisteringModalProps {
  open: boolean;
  onClose: () => void;
  onSwitchToLogin?: () => void;
}

const RegisteringModal: React.FC<RegisteringModalProps> = ({ open, onClose, onSwitchToLogin }) => {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [remember, setRemember] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 2000);
      setForm({ name: '', email: '', password: '', confirm: '' });
      onClose();
    }, 1200);
  };

  // Social signup handlers (stub)
  const handleGoogleSignup = () => {
    alert('Google signup coming soon!');
  };
  const handleFacebookSignup = () => {
    alert('Facebook signup coming soon!');
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
            initial={{ y: 40, opacity: 0, scale: 0.97 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 180, damping: 18 }}
            className="relative z-10 w-full max-w-md mx-auto bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl px-4 py-6 flex flex-col items-center border border-pink-100 ring-2 ring-pink-100/40"
            style={{ boxShadow: '0 8px 48px 0 rgba(236,72,153,0.18), 0 1.5px 8px 0 rgba(236,72,153,0.10)' }}
            onClick={e => e.stopPropagation()}
          >
            <button
              aria-label="Close"
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-400 hover:text-pink-500 focus:outline-none"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex flex-col items-center mb-5">
              <FaUserCircle className="w-16 h-16 text-pink-400 mb-2 drop-shadow-lg animate-bounce" />
              <h2 className="text-2xl font-extrabold text-gray-800 mb-1 tracking-tight">Join Bloom</h2>
              <p className="text-pink-400 font-medium text-base">Create your account and start your beauty journey</p>
            </div>
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5" autoComplete="off" aria-label="Register form">
              {/* Name */}
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-pink-400 w-5 h-5" />
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="peer pl-10 pr-4 py-3 rounded-lg border border-pink-200 focus:ring-2 focus:ring-pink-400 outline-none transition-all bg-white/60 w-full placeholder-transparent shadow-sm"
                  placeholder="Name"
                  aria-label="Name"
                />
                <label className="absolute left-10 top-3 text-pink-300 pointer-events-none transition-all duration-200 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-pink-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-pink-300 bg-white/70 px-1">
                  Name
                </label>
              </div>
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
              {/* Confirm Password */}
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-pink-400 w-5 h-5" />
                <input
                  type={showConfirm ? 'text' : 'password'}
                  name="confirm"
                  value={form.confirm}
                  onChange={handleChange}
                  required
                  className="peer pl-10 pr-10 py-3 rounded-lg border border-pink-200 focus:ring-2 focus:ring-pink-400 outline-none transition-all bg-white/60 w-full placeholder-transparent shadow-sm"
                  placeholder="Confirm Password"
                  aria-label="Confirm Password"
                />
                <label className="absolute left-10 top-3 text-pink-300 pointer-events-none transition-all duration-200 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-pink-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-pink-300 bg-white/70 px-1">
                  Confirm Password
                </label>
                <button
                  type="button"
                  tabIndex={0}
                  aria-label={showConfirm ? 'Hide password' : 'Show password'}
                  onClick={() => setShowConfirm((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-pink-400 hover:text-pink-600 focus:outline-none"
                >
                  {showConfirm ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {/* Terms agreement */}
              <div className="flex items-center w-full">
                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <input type="checkbox" checked={remember} onChange={() => setRemember(!remember)} className="accent-pink-500 w-4 h-4 rounded" />
                  <span>I agree to the <a href="#" className="text-pink-500 underline hover:text-pink-600">Terms of Service</a> and <a href="#" className="text-pink-500 underline hover:text-pink-600">Privacy Policy</a></span>
                </label>
              </div>
              {/* Sign Up Button */}
              <motion.button
                whileHover={{ scale: 1.06, boxShadow: '0 0 0 4px #f9a8d4' }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="mt-5 bg-gradient-to-r from-pink-500 to-pink-400 text-white px-8 py-3 rounded-full font-extrabold flex items-center gap-2 justify-center shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400 tracking-wide text-lg"
                disabled={isLoading}
              >
                {isLoading ? 'Signing up...' : 'Sign Up'}
              </motion.button>
              {/* Success Message */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="flex flex-col items-center gap-2 text-green-600 font-semibold text-center mt-2"
                >
                  Successfully registered!
                </motion.div>
              )}
              {/* Switch to login */}
              <div className="mt-5 text-center">
                <span className="text-gray-600 text-base">Already have an account? </span>
                <a href="#" onClick={onSwitchToLogin} className="text-pink-500 underline font-semibold hover:text-pink-600 transition text-base">Login here</a>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RegisteringModal; 