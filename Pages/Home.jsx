import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Heart,
  Share2,
  Upload,
  MapPin,
  X,
  Star,
  Gift,
  TreePine
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import NewMascot from '../Components/NewMascot';

const features = [
  {
    title: "Explore States",
    description: "Journey through 28 states and discover their unique culture",
    icon: "🗺️",
    url: createPageUrl('States'),
    color: "from-[#D4AF37] to-[#B8941F]"
  },
  {
    title: "Rich History",
    description: "Travel through time and learn India's fascinating stories",
    icon: "📜",
    url: createPageUrl('History'),
    color: "from-[#B8941F] to-[#9A7A1A]"
  },
  {
    title: "Delicious Food",
    description: "Taste the flavors of India from every region",
    icon: "🍛",
    url: createPageUrl('Food'),
    color: "from-[#D4AF37] to-[#B8941F]"
  },
  {
    title: "Festivals",
    description: "Celebrate India's colorful festivals all year round",
    icon: "🎉",
    url: createPageUrl('Festivals'),
    color: "from-[#B8941F] to-[#9A7A1A]"
  }
];

const christmasFacts = [
  "🎄 Christmas celebrates the birth of Jesus Christ on December 25th!",
  "🎅 Santa Claus is based on St. Nicholas, a generous bishop from Turkey!",
  "🎁 The tradition of gift-giving comes from the Three Wise Men's gifts to baby Jesus!",
  "🌟 The Christmas star represents the Star of Bethlehem that guided the Wise Men!",
  "🦌 Rudolph the Red-Nosed Reindeer was created in 1939 for a store promotion!",
  "🎶 'Jingle Bells' was originally written for Thanksgiving, not Christmas!",
  "🍪 Leaving cookies for Santa started in the US during the Great Depression!",
  "❄️ In the Southern Hemisphere, Christmas falls during summer!",
  "🎄 The first Christmas trees were decorated in Germany in the 16th century!",
  "🔔 Christmas carols date back to 4th century Rome!"
];

export default function Home() {
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [daysToChristmas, setDaysToChristmas] = useState(30);
  const [currentFact, setCurrentFact] = useState(0);

  useEffect(() => {
    const christmas = new Date('2025-12-25');
    const today = new Date();
    const diffTime = christmas.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDaysToChristmas(diffDays > 0 ? diffDays : 0);

    const factInterval = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % christmasFacts.length);
    }, 5000);

    return () => clearInterval(factInterval);
  }, []);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Legacy of India',
        text: 'Discover India\'s amazing heritage and culture! 🇮🇳✨',
        url: window.location.origin,
      });
    } else {
      navigator.clipboard.writeText(window.location.origin);
      alert('Link copied to clipboard! Share Legacy of India with friends! 🎉');
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Christmas Countdown Banner */}
      <section className="relative bg-gradient-to-r from-red-600 via-green-700 to-red-600 py-6 px-4 border-b-4 border-[#4E342E]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-6 flex-wrap"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-5xl"
            >
              🎄
            </motion.div>
            
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
                Christmas Countdown 2025!
              </h2>
              <div className="flex items-center justify-center gap-4 mt-2">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="bg-white text-red-600 px-6 py-3 rounded-2xl font-bold text-3xl shadow-lg border-4 border-yellow-400"
                >
                  {daysToChristmas}
                </motion.div>
                <span className="text-white text-xl font-semibold">Days to Go!</span>
              </div>
            </div>

            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-5xl"
            >
              🎅
            </motion.div>
          </motion.div>

          {/* Christmas Fact Ticker */}
          <motion.div
            key={currentFact}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-4 text-center"
          >
            <div className="bg-white/20 backdrop-blur rounded-full px-6 py-2 inline-block">
              <p className="text-white font-medium text-sm md:text-base">
                {christmasFacts[currentFact]}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Banner with Taru Introduction */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-20 mandala-bg silk-texture overflow-hidden">
        {/* Decorative corner elements */}
        <div className="absolute top-0 left-0 w-64 h-64 opacity-20">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path d="M100,10 Q150,50 100,90 Q50,50 100,10" fill="#D4AF37" />
            <circle cx="100" cy="50" r="30" fill="none" stroke="#D4AF37" strokeWidth="2" />
          </svg>
        </div>
        <div className="absolute bottom-0 right-0 w-64 h-64 opacity-20 rotate-180">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path d="M100,10 Q150,50 100,90 Q50,50 100,10" fill="#D4AF37" />
            <circle cx="100" cy="50" r="30" fill="none" stroke="#D4AF37" strokeWidth="2" />
          </svg>
        </div>

        {/* Floating rangoli patterns */}
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 text-8xl opacity-30"
        >
          🌺
        </motion.div>
        <motion.div
          animate={{ rotate: -360, scale: [1, 1.2, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-32 left-20 text-8xl opacity-30"
        >
          🪷
        </motion.div>

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          {/* Taru Introduction */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-12"
          >
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-8 border-4 border-yellow-600 shadow-2xl max-w-2xl mx-auto">
              <div className="flex items-start gap-6">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="flex-shrink-0"
                >
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c6b284b529b667d4fc8344/ce2568eaf_taru_sweets-removebg-preview.png"
                    alt="Taru"
                    className="w-32 h-32 object-contain drop-shadow-2xl"
                  />
                </motion.div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-amber-900 mb-2">
                    Hi! I'm Taru! 👋
                  </h3>
                  <p className="text-amber-800 leading-relaxed">
                    I'm your guide through India's amazing legacy! I LOVE stories, festivals, and sweets (especially laddoos! 🍬).
                    Join me as we explore 28 states, discover incredible monuments, and learn why India is SO special! 🇮🇳✨
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-9xl mb-6 inline-block"
          >
            🇮🇳
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-5xl md:text-7xl font-display font-bold mb-8 text-[#4E342E] leading-tight"
          >
            India's timeless stories,<br />
            <span className="text-[#D4AF37]">discover our incredible heritage</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl md:text-2xl text-[#4E342E] mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Explore stories, culture, and heritage that illuminate India's incredible legacy
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-wrap gap-6 justify-center"
          >
            <Link to={createPageUrl('States')}>
              <Button className="bg-gradient-to-r from-[#D4AF37] to-[#B8941F] hover:from-[#B8941F] hover:to-[#9A7A1A] text-[#4E342E] px-10 py-7 rounded-full text-lg font-bold shadow-2xl border-4 border-[#4E342E] gold-glow flex items-center gap-3 group">
                <span className="text-2xl">🗺️</span>
                <span>Start Exploring</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>

            <button
              onClick={handleShare}
              className="bg-[#EAD9C6] hover:bg-[#D4AF37] text-[#4E342E] px-10 py-7 rounded-full text-lg font-bold shadow-2xl border-4 border-[#4E342E] flex items-center gap-3"
            >
              <Share2 className="w-6 h-6" />
              <span>Share Legacy</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#FFF7E9] to-[#EAD9C6]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-display font-bold mb-6 text-[#4E342E]">
              Discover India's Heritage
            </h2>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={feature.url} className="block group">
                  <motion.div
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="bg-[#EAD9C6] rounded-3xl p-8 shadow-2xl border-4 border-[#4E342E] hover:border-[#D4AF37] transition-all duration-300 h-full silk-texture"
                  >
                    <motion.div
                      whileHover={{ rotate: 12, scale: 1.1 }}
                      className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-xl border-2 border-[#4E342E]`}
                    >
                      <span className="text-4xl">{feature.icon}</span>
                    </motion.div>

                    <h3 className="text-2xl font-display font-bold text-[#4E342E] mb-4 text-center group-hover:text-[#D4AF37] transition-colors">
                      {feature.title}
                    </h3>

                    <p className="text-[#4E342E] text-center leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#EAD9C6] to-[#FFF7E9]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-display font-bold mb-6 text-[#4E342E]">
              Begin Your Journey
            </h2>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-3xl p-10 text-[#4E342E] shadow-2xl border-4 border-[#4E342E]"
            >
              <div className="text-6xl mb-4">🗺️</div>
              <h3 className="text-3xl font-display font-bold mb-4">Explore States</h3>
              <p className="mb-6 text-lg leading-relaxed">Click on the interactive map and discover all 28 states and 9 union territories with their magnificent monuments!</p>
              <Link to={createPageUrl('States')}>
                <Button className="bg-[#4E342E] hover:bg-[#3E2C24] text-[#D4AF37] px-8 py-4 rounded-full font-bold flex items-center gap-2 border-2 border-[#D4AF37]">
                  Let's Explore <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-[#B8941F] to-[#9A7A1A] rounded-3xl p-10 text-[#FFF7E9] shadow-2xl border-4 border-[#4E342E]"
            >
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-3xl font-display font-bold mb-4">Test Your Knowledge</h3>
              <p className="mb-6 text-lg leading-relaxed">Take fun quizzes about monuments, food, festivals, and Indian culture!</p>
              <Link to={createPageUrl('Quizzes')}>
                <Button className="bg-[#4E342E] hover:bg-[#3E2C24] text-[#D4AF37] px-8 py-4 rounded-full font-bold flex items-center gap-2 border-2 border-[#D4AF37]">
                  Start Quiz <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-16 px-4 bg-[#EAD9C6] border-t-4 border-b-4 border-[#D4AF37]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex justify-center gap-6 mb-8 text-6xl">
            <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity }}>🇮🇳</motion.span>
            <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}>✨</motion.span>
            <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}>🏛️</motion.span>
          </div>

          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#4E342E] mb-6 leading-tight">
            Discover your legacy
          </h2>

          <p className="text-xl text-[#4E342E] leading-relaxed italic">
            Where tradition meets design — celebrating the stories that make India shine
          </p>
        </motion.div>
      </section>

      {/* Taru Mascot */}
      <NewMascot
        pose="default"
        message="Welcome to Legacy of India! 🇮🇳✨ I'm Taru, and I'll be your guide through this amazing journey. Explore states, learn history, taste delicious food, and discover what makes India so special! Where would you like to start? 🗺️"
        position="bottom-right"
      />
    </div>
  );
}