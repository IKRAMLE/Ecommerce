import React, { useState } from 'react';
import Navbar from '../Components/HomePage/Navbar';
import Footer from '../Components/HomePage/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, X } from 'lucide-react';
import { FaInstagram, FaTwitter, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const contactInfo = [
  {
    icon: <Mail className="w-7 h-7" />, label: 'Email', value: 'hello@bloom.com', link: 'mailto:hello@bloom.com', copy: true
  },
  {
    icon: <Phone className="w-7 h-7" />, label: 'Phone', value: '+1 234 567 890', link: 'tel:+1234567890', copy: true
  },
  {
    icon: <MapPin className="w-7 h-7" />, label: 'Address', value: '123 Beauty Ave, Glam City, Morocco', link: '', copy: false
  }
];

const socials = [
  { icon: <FaInstagram className="w-5 h-5" />, label: 'Instagram', link: '#', bg: 'bg-[#E4405F]' },
  { icon: <FaTwitter className="w-5 h-5" />, label: 'Twitter', link: '#', bg: 'bg-[#1DA1F2]' },
  { icon: <FaFacebook className="w-5 h-5" />, label: 'Facebook', link: '#', bg: 'bg-[#1877F3]' },
  { icon: <FaWhatsapp className="w-5 h-5" />, label: 'WhatsApp', link: '#', bg: 'bg-[#25D366]' },
];

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setShowThankYou(true);
    setTimeout(() => setShowThankYou(false), 3500);
    setForm({ name: '', email: '', message: '' });
  };

  const handleCopy = (value: string, label: string) => {
    navigator.clipboard.writeText(value);
    setCopied(label);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <>
      <Navbar />
      {/* Thank You Overlay */}
      <AnimatePresence>
        {showThankYou && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="bg-white rounded-2xl shadow-2xl px-8 py-10 flex flex-col items-center relative max-w-xs w-full"
            >
              <button
                aria-label="Close"
                onClick={() => setShowThankYou(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-pink-500 focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>
              <CheckCircle2 className="w-14 h-14 text-green-500 mb-4 animate-bounce" />
              <div className="text-2xl font-bold text-gray-800 mb-2 text-center">Thank you!</div>
              <div className="text-gray-600 text-center">Your message has been sent.</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Animated Gradient Background */}
      <div className="relative min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 pt-16 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1 }}
          className="pointer-events-none select-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-pink-300 via-purple-300 to-pink-100 blur-3xl animate-pulse-slow"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.2 }}
          className="pointer-events-none select-none absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-purple-200 via-pink-200 to-purple-100 blur-3xl animate-pulse-slow"
        />
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center py-16 px-4"
        >
          <div className="flex justify-center mb-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-gradient-to-r from-pink-500 to-purple-500 p-4 rounded-full shadow-lg animate-bounce-slow"
            >
              <Mail className="w-10 h-10 text-white" />
            </motion.div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4 drop-shadow-lg">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, our team is here to help.
          </p>
        </motion.div>

        {/* Contact Info Cards & Form */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-4 pb-20">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.label}
                whileHover={{ y: -6, boxShadow: '0 8px 32px 0 rgba(236,72,153,0.15)' }}
                className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg p-6 flex items-center gap-4 border border-pink-100 transition-all duration-300 relative group"
              >
                <span className="text-pink-500">{info.icon}</span>
                <div>
                  <div className="font-semibold text-gray-800">{info.label}</div>
                  {info.link ? (
                    <a href={info.link} className="text-pink-600 hover:underline" tabIndex={0}>{info.value}</a>
                  ) : (
                    <span className="text-gray-600">{info.value}</span>
                  )}
                </div>
                {info.copy && (
                  <button
                    aria-label={`Copy ${info.label}`}
                    onClick={() => handleCopy(info.value, info.label)}
                    className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs px-2 py-1 rounded bg-pink-100 text-pink-600 hover:bg-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  >
                    {copied === info.label ? 'Copied!' : 'Copy'}
                  </button>
                )}
              </motion.div>
            ))}
            <div className="flex gap-4 mt-4">
              {socials.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, rotate: [0, 10, -10, 0] }}
                  className={`w-10 h-10 ${s.bg} rounded-full flex items-center justify-center text-white shadow-md hover:shadow-xl transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400`}
                  tabIndex={0}
                  aria-label={s.label}
                >
                  {s.icon}
                  <span className="sr-only">{s.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="relative bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl p-8 flex flex-col gap-6 border border-pink-100"
            style={{ boxShadow: '0 8px 32px 0 rgba(236,72,153,0.10)' }}
            aria-label="Contact form"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Send Us a Message</h2>
            <div className="flex flex-col gap-4">
              {/* Floating Label Inputs */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="peer px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-pink-400 outline-none transition-all bg-transparent w-full placeholder-transparent"
                  placeholder="Your Name"
                  aria-label="Your Name"
                />
                <label className="absolute left-4 top-3 text-gray-400 pointer-events-none transition-all duration-200 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-pink-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 bg-white/70 px-1">
                  Your Name
                </label>
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="peer px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-pink-400 outline-none transition-all bg-transparent w-full placeholder-transparent"
                  placeholder="Your Email"
                  aria-label="Your Email"
                />
                <label className="absolute left-4 top-3 text-gray-400 pointer-events-none transition-all duration-200 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-pink-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 bg-white/70 px-1">
                  Your Email
                </label>
              </div>
              <div className="relative">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="peer px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-pink-400 outline-none transition-all bg-transparent w-full placeholder-transparent resize-none"
                  placeholder="Your Message"
                  aria-label="Your Message"
                />
                <label className="absolute left-4 top-3 text-gray-400 pointer-events-none transition-all duration-200 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-pink-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 bg-white/70 px-1">
                  Your Message
                </label>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="mt-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 justify-center shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              Send Message <Send className="w-5 h-5" />
            </motion.button>
          </motion.form>
        </div>

        {/* Map/Illustration Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-16 mb-24 px-4"
        >
          <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-pink-100 relative">
            <iframe
              title="Bloom Location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-0.1357%2C51.4975%2C-0.1277%2C51.5035&amp;layer=mapnik"
              className="w-full h-72 md:h-96"
              loading="lazy"
              style={{ border: 0 }}
              allowFullScreen
            ></iframe>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.7, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="absolute top-6 left-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full shadow-lg text-sm font-semibold pointer-events-none"
            >
              Our Location
            </motion.div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
