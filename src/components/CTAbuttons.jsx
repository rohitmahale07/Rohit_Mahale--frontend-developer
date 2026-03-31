import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Mail, ArrowUp } from 'lucide-react';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling 300px
      setIsVisible(window.scrollY > 300);
      // Show scroll to top after 500px
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const ctaButtons = [
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: "WhatsApp",
      href: "https://wa.me/919924060875?",
      color: "bg-green-500 hover:bg-green-600",
      ariaLabel: "Chat on WhatsApp"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      href: "mailto:rohitmahale0020@gmail.com?subject=Inquiry%20from%20Website",
      color: "bg-purple-500 hover:bg-purple-600",
      ariaLabel: "Send Email"
    }
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
        >
          {/* Expanded CTA Buttons */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ staggerChildren: 0.1 }}
                className="flex flex-col gap-3 mb-2"
              >
                {ctaButtons.map((button, index) => (
                  <motion.a
                    key={button.label}
                    href={button.href}
                    target={button.label === 'WhatsApp' ? '_blank' : undefined}
                    rel={button.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: index * 0.1 }}
                    aria-label={button.ariaLabel}
                    className={`flex items-center gap-3 px-4 py-3 ${button.color} text-white rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl`}
                  >
                    {button.icon}
                    <span className="font-medium text-sm whitespace-nowrap">{button.label}</span>
                  </motion.a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main CTA Toggle Button */}
          {/* <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`w-14 h-14 ${isExpanded ? 'bg-neutral-800' : 'bg-green-600'} text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:shadow-xl`}
            aria-label={isExpanded ? 'Close contact options' : 'Open contact options'}
            aria-expanded={isExpanded}
          >
            <AnimatePresence mode="wait">
              {isExpanded ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col items-center"
                >
                  <MessageCircle className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button> */}

          {/* Scroll to Top Button */}
          <AnimatePresence>
            {showScrollTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-neutral-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-neutral-800 hover:shadow-xl"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
