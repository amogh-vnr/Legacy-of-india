
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Share2, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NewMascot from '../Components/NewMascot';

const diyaFacts = [
  {
    fact: "🪔 Diwali means 'row of lights' in Sanskrit. Each diya represents the victory of light over darkness.",
    blessing: "May your life be filled with endless light and prosperity!"
  },
  {
    fact: "✨ The festival celebrates Lord Rama's return to Ayodhya after 14 years of exile.",
    blessing: "May all your journeys end in joyful homecomings!"
  },
  {
    fact: "🌟 Goddess Lakshmi visits homes that are clean, well-lit, and filled with devotion.",
    blessing: "May abundance and blessings flow into your life!"
  },
  {
    fact: "💫 Diwali is celebrated for 5 days, each day having its own significance and traditions.",
    blessing: "May each day of your life be a celebration!"
  },
  {
    fact: "🎆 In India, Diwali is celebrated by people of all religions as a symbol of unity.",
    blessing: "May harmony and togetherness always surround you!"
  },
  {
    fact: "🕉️ The diyas are traditionally made from clay and filled with ghee or oil.",
    blessing: "May ancient wisdom light your modern path!"
  },
  {
    fact: "🌺 Rangoli patterns at doorsteps welcome Goddess Lakshmi into homes.",
    blessing: "May beauty and grace adorn your every step!"
  },
  {
    fact: "🍬 Sharing sweets during Diwali symbolizes spreading joy and sweetness in relationships.",
    blessing: "May your life be as sweet as the treats you share!"
  },
  {
    fact: "🙏 Diwali teaches us that even a small light can dispel great darkness.",
    blessing: "May you always be a beacon of hope for others!"
  },
  {
    fact: "🪷 The lotus flower, symbol of Lakshmi, represents spiritual enlightenment and purity.",
    blessing: "May you bloom with wisdom and inner peace!"
  }
];

export default function LightTheLegacy() {
  const [litDiyas, setLitDiyas] = useState([]);
  const [currentFact, setCurrentFact] = useState(null);
  const [showBlessing, setShowBlessing] = useState(false);

  const taruPoses = [
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c6b284b529b667d4fc8344/ddc2c022f_taru_dancing_-removebg-preview.png"
  ];

  const lightDiya = (index) => {
    if (!litDiyas.includes(index)) {
      setLitDiyas([...litDiyas, index]);
      const randomFact = diyaFacts[Math.floor(Math.random() * diyaFacts.length)];
      setCurrentFact(randomFact);
      setShowBlessing(true);

      setTimeout(() => {
        setShowBlessing(false);
      }, 5000);
    }
  };

  const shareBlessing = () => {
    if (currentFact && navigator.share) {
      navigator.share({
        title: 'Diwali Blessing',
        text: `${currentFact.fact}\n\n${currentFact.blessing}\n\nHappy Diwali! 🪔✨`,
      });
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 bg-gradient-to-br from-[#4E342E] via-[#3E2C24] to-[#2E1C16] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          >
            ✨
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", duration: 1 }}
            className="inline-block mb-6"
          >
            <div className="text-8xl">🪔</div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold mb-6 text-yellow-100"
          >
            Light the Legacy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-yellow-200 max-w-3xl mx-auto font-serif italic"
          >
            Tap each diya to light it and reveal ancient wisdom & blessings
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "8rem" }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-1 mx-auto mt-6 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
          ></motion.div>
        </div>

        {/* Progress */}
        <div className="text-center mb-12">
          <div className="inline-block bg-amber-800/50 backdrop-blur px-8 py-4 rounded-full border-2 border-yellow-600">
            <p className="text-yellow-100 text-xl font-serif">
              <span className="font-bold text-2xl text-yellow-300">{litDiyas.length}</span> / {diyaFacts.length} Diyas Lit
            </p>
          </div>
        </div>

        {/* Diyas Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {diyaFacts.map((_, index) => {
            const isLit = litDiyas.includes(index);
            return (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => lightDiya(index)}
                className="relative group"
              >
                <div className={`text-8xl transition-all duration-500 ${
                  isLit ? 'filter-none' : 'grayscale opacity-40'
                }`}>
                  🪔
                </div>

                {isLit && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.5, 1] }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="text-4xl">✨</div>
                  </motion.div>
                )}

                {!isLit && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-yellow-900/80 backdrop-blur px-3 py-1 rounded-full text-yellow-100 text-sm">
                      Tap to light
                    </div>
                  </div>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Fact & Blessing Display */}
        <AnimatePresence>
          {showBlessing && currentFact && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.9 }}
              className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-black/60 backdrop-blur-sm"
              onClick={() => setShowBlessing(false)}
            >
              <motion.div
                initial={{ rotate: -5 }}
                animate={{ rotate: 0 }}
                className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-8 md:p-12 max-w-2xl shadow-2xl border-4 border-yellow-600 relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Decorative corners */}
                <div className="absolute top-4 left-4 text-3xl">🪔</div>
                <div className="absolute top-4 right-4 text-3xl">✨</div>
                <div className="absolute bottom-4 left-4 text-3xl">🌟</div>
                <div className="absolute bottom-4 right-4 text-3xl">🪔</div>

                <div className="text-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="text-6xl mb-6"
                  >
                    🪷
                  </motion.div>

                  <h3 className="text-3xl font-display font-bold text-amber-900 mb-6">
                    Ancient Wisdom Revealed
                  </h3>

                  <div className="bg-white/50 rounded-2xl p-6 mb-6">
                    <p className="text-lg text-amber-900 font-serif leading-relaxed mb-4">
                      {currentFact.fact}
                    </p>

                    <div className="h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent my-4"></div>

                    <p className="text-xl text-orange-800 font-display font-semibold italic">
                      {currentFact.blessing}
                    </p>
                  </div>

                  <div className="flex gap-4 justify-center">
                    <Button
                      onClick={shareBlessing}
                      className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white rounded-full px-8 py-3 flex items-center gap-2"
                    >
                      <Share2 className="w-5 h-5" />
                      Share Blessing
                    </Button>

                    <Button
                      onClick={() => setShowBlessing(false)}
                      variant="outline"
                      className="border-2 border-amber-600 text-amber-900 hover:bg-amber-100 rounded-full px-8 py-3"
                    >
                      Continue Lighting
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Completion Message */}
        {litDiyas.length === diyaFacts.length && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <div className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl p-8 shadow-2xl border-4 border-yellow-300">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-4xl font-display font-bold text-white mb-4">
                All Diyas Lit!
              </h2>
              <p className="text-xl text-yellow-100 font-serif">
                You've illuminated the complete legacy. May this light guide you always!
              </p>
            </div>
          </motion.div>
        )}
      </div>

      <NewMascot
        pose="dancing"
        message="Light each diya to discover beautiful stories and blessings! Share them with your loved ones to spread the joy of Diwali! 🪔✨"
        position="bottom-right"
      />
    </div>
  );
}
