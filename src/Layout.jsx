import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import {
  Home,
  Map,
  BookOpen,
  Clock,
  Utensils,
  Calendar,
  Camera,
  Sparkles,
  ClipboardCheck,
  Users,
  Scroll
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navigationItems = [
  { name: 'Home', url: createPageUrl('Home'), icon: Home },
  { name: 'States', url: createPageUrl('States'), icon: Map },
  { name: 'History', url: createPageUrl('History'), icon: Clock },
  { name: 'Food', url: createPageUrl('Food'), icon: Utensils },
  { name: 'Stories', url: createPageUrl('Stories'), icon: Scroll },
  { name: 'Festivals', url: createPageUrl('Festivals'), icon: Calendar },
  { name: 'Quizzes', url: createPageUrl('Quizzes'), icon: ClipboardCheck },
  { name: 'Instagram', url: createPageUrl('Instagram'), icon: Camera },
  { name: 'About & Contact', url: createPageUrl('AboutUs'), icon: Users }
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [festiveMode, setFestiveMode] = useState(false);

  // Google Analytics - Load on mount
  useEffect(() => {
    const existingScript = document.querySelector('script[src*="googletagmanager"]');
    if (existingScript) return;

    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-26H448SC1Z';
    document.head.appendChild(script1);

    script1.onload = () => {
      if (!window.gtag) {
        window.dataLayer = window.dataLayer || [];
        function gtag() { window.dataLayer.push(arguments); }
        window.gtag = gtag;
      }
      window.gtag('js', new Date());
      window.gtag('config', 'G-26H448SC1Z', {
        page_path: window.location.pathname,
      });
    };
  }, []);

  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-26H448SC1Z', {
        page_path: location.pathname,
        page_title: currentPageName || document.title,
      });
    }
  }, [location, currentPageName]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF7E9] via-[#EAD9C6] to-[#F3E8D9]">
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            if (!window.gtag) {
              window.gtag = gtag;
            }
            gtag('js', new Date());
            gtag('config', 'G-26H448SC1Z');
          `
        }}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Cinzel:wght@400;600;700&family=Poppins:wght@300;400;500;600;700&family=Lato:wght@300;400;700&display=swap');
        :root {
          --deep-brown: #4E342E;
          --beige: #EAD9C6;
          --cream: #FFF7E9;
          --soft-gold: #D4AF37;
          --text-brown: #3E2C24;
          --muted-bg: #F3E8D9;
        }
        body {
          font-family: 'Poppins', sans-serif;
          color: var(--text-brown);
        }
        .font-display { font-family: 'Playfair Display', serif; }
        .font-elegant { font-family: 'Cinzel', serif; }
        @keyframes float-diya {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
          50% { transform: translateY(-30px) rotate(5deg); opacity: 1; }
        }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(212, 175, 55, 0.3); }
          50% { box-shadow: 0 0 40px rgba(212, 175, 55, 0.6); }
        }
        .diya-sparkle { animation: float-diya 4s ease-in-out infinite; }
        .gold-glow { animation: glow-pulse 2s ease-in-out infinite; }
        .silk-texture {
          background-image: 
            linear-gradient(45deg, rgba(212, 175, 55, 0.05) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(212, 175, 55, 0.05) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgba(212, 175, 55, 0.05) 75%),
            linear-gradient(-45deg, transparent 75%, rgba(212, 175, 55, 0.05) 75%);
          background-size: 20px 20px;
          background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
        }
        .mandala-bg { background-image: radial-gradient(circle at center, rgba(212, 175, 55, 0.1) 0%, transparent 70%); }
      `}</style>

      {festiveMode && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`santa-${i}`}
              className="absolute text-4xl"
              initial={{ x: -100 }}
              animate={{
                x: ['-10%', '110%'],
                y: [Math.random() * 200, Math.random() * 200 + 50, Math.random() * 200]
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                delay: i * 3
              }}
              style={{ top: `${10 + i * 15}%` }}
            >
              🎅
            </motion.div>
          ))}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`candy-${i}`}
              className="absolute text-3xl"
              animate={{
                y: [0, -30, 0],
                rotate: [0, 20, -20, 0]
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            >
              🍬
            </motion.div>
          ))}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`star-${i}`}
              className="absolute text-2xl"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            >
              ⭐
            </motion.div>
          ))}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`tree-${i}`}
              className="absolute text-3xl"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            >
              🎄
            </motion.div>
          ))}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`snow-${i}`}
              className="absolute text-xl"
              animate={{
                y: ['0vh', '100vh'],
                x: [0, Math.random() * 50 - 25],
                rotate: [0, 360]
              }}
              transition={{
                duration: 8 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
              style={{ left: `${Math.random() * 100}%` }}
            >
              ❄️
            </motion.div>
          ))}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`gift-${i}`}
              className="absolute text-3xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            >
              🎁
            </motion.div>
          ))}
        </div>
      )}

      <header className="bg-[#4E342E] backdrop-blur-md shadow-2xl sticky top-0 z-40 border-b-4 border-[#D4AF37]">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to={createPageUrl('Home')} className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-[#D4AF37] rounded-full blur opacity-60"></div>
                <div className="relative w-14 h-14 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-full flex items-center justify-center shadow-lg border-2 border-[#FFF7E9] gold-glow">
                  <Sparkles className="w-7 h-7 text-[#4E342E]" />
                </div>
              </motion.div>
              <div>
                <h1 className="text-2xl lg:text-3xl font-elegant font-bold text-[#D4AF37]">
                  Legacy of India
                </h1>
                <p className="hidden sm:block text-xs text-[#EAD9C6] font-light italic">Where tradition meets design</p>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={() => setFestiveMode(!festiveMode)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all border-2 ${
                  festiveMode 
                    ? 'bg-red-600 text-white border-red-600 shadow-lg' 
                    : 'bg-[#EAD9C6] text-[#4E342E] border-[#4E342E] hover:bg-red-600 hover:text-white hover:border-red-600'
                }`}
              >
                <span className="text-sm font-semibold">Festive Mode</span>
                <span className="text-lg">🎄</span>
              </button>
            </div>

            <nav className="hidden lg:block">
              <ul className="flex space-x-1">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.url;
                  return (
                    <li key={item.name}>
                      <Link
                        to={item.url}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300 font-medium text-sm border-2 ${
                          isActive
                            ? 'bg-[#D4AF37] text-[#4E342E] border-[#D4AF37] shadow-lg'
                            : 'text-[#EAD9C6] bg-transparent border-transparent hover:bg-[#EAD9C6]/20 hover:border-[#D4AF37]'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="lg:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="p-2 rounded-lg bg-[#EAD9C6] text-[#4E342E] hover:bg-[#D4AF37] transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#4E342E] shadow-2xl fixed top-[88px] left-0 right-0 z-30 overflow-hidden border-b-2 border-[#D4AF37]"
          >
            <nav className="p-4">
              <ul className="space-y-2">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.url;
                  return (
                    <li key={`mobile-${item.name}`}>
                      <Link
                        to={item.url}
                        onClick={() => setIsMenuOpen(false)}
                        className={`flex items-center gap-3 p-3 rounded-xl transition-colors border ${
                          isActive
                            ? 'bg-[#D4AF37] text-[#4E342E] border-[#D4AF37]'
                            : 'text-[#EAD9C6] bg-transparent border-transparent hover:bg-[#EAD9C6]/20 hover:border-[#D4AF37]'
                        }`}
                      >
                        <Icon className="w-5 h-5 text-[#D4AF37]" />
                        <span className="font-semibold">{item.name}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-4 pt-4 border-t border-[#D4AF37]/30">
                <button
                  onClick={() => setFestiveMode(!festiveMode)}
                  className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl transition-all border-2 ${
                    festiveMode 
                      ? 'bg-red-600 text-white border-red-600' 
                      : 'bg-[#EAD9C6] text-[#4E342E] border-[#4E342E]'
                  }`}
                >
                  <span className="font-semibold">Festive Mode</span>
                  <span className="text-lg">🎄</span>
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative">
        {children}
      </main>

      <footer className="bg-[#4E342E] text-[#EAD9C6] py-16 mt-20 border-t-4 border-[#D4AF37] relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#D4AF37]/30 rounded-full flex items-center justify-center gold-glow">
                <Sparkles className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h3 className="text-3xl font-elegant font-bold text-[#D4AF37]">Legacy of India</h3>
            </div>

            <div className="max-w-3xl mx-auto bg-[#EAD9C6] rounded-2xl p-8 border-4 border-[#D4AF37] shadow-2xl mb-8">
              <p className="text-2xl font-display text-[#4E342E] leading-relaxed mb-4">
                "This Christmas, may every star you gaze upon remind you of India's timeless stories and the joy of sharing our heritage. 🎄✨"
              </p>
              <p className="text-lg text-[#4E342E] font-semibold">
                – Team Legacy of India
              </p>
            </div>

            <p className="text-[#D4AF37] mb-6 max-w-2xl mx-auto italic text-lg">
              Where tradition meets design — celebrating India's timeless heritage
            </p>

            <div className="flex justify-center gap-6 text-sm text-[#EAD9C6]">
              <span className="flex items-center gap-2">
                <span className="text-xl">🎄</span>
                Crafted with Love
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <span className="text-xl">⭐</span>
                Designed for Heritage
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
