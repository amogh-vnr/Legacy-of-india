import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Star, Zap } from 'lucide-react';

const indiaFacts = [
  { fact: "India has more than 19,500 languages and dialects spoken across the country!", emoji: "🗣️", category: "Language" },
  { fact: "Chess was invented in India! It was originally called 'Chaturanga'.", emoji: "♟️", category: "History" },
  { fact: "India is the world's largest producer of milk, spices, and tea!", emoji: "🥛", category: "Agriculture" },
  { fact: "The Indian flag has 3 colors: saffron (courage), white (peace), and green (growth)!", emoji: "🇮🇳", category: "Culture" },
  { fact: "Yoga originated in India over 5,000 years ago!", emoji: "🧘", category: "Heritage" },
  { fact: "India has the world's largest postal network with over 150,000 post offices!", emoji: "📮", category: "Amazing" },
  { fact: "The Kumbh Mela in India is the largest gathering of people on Earth!", emoji: "🎉", category: "Festivals" },
  { fact: "India has 6 seasons instead of 4! Spring, Summer, Monsoon, Autumn, Pre-winter, and Winter.", emoji: "🌸", category: "Nature" },
  { fact: "The game of Snakes and Ladders was invented in India to teach morality!", emoji: "🎲", category: "Games" },
  { fact: "India is home to the Bengal Tiger, the national animal!", emoji: "🐯", category: "Wildlife" },
  { fact: "The Indian railway system employs over 1.3 million people!", emoji: "🚂", category: "Infrastructure" },
  { fact: "Shampoo is an Indian invention! The word comes from Hindi 'champo' meaning massage.", emoji: "🧴", category: "Inventions" },
  { fact: "India celebrates the most number of festivals in the world!", emoji: "🎊", category: "Festivals" },
  { fact: "The Bandra-Worli Sea Link in Mumbai has steel wires equal to Earth's circumference!", emoji: "🌉", category: "Engineering" },
  { fact: "India is the largest democracy in the world with over 900 million voters!", emoji: "🗳️", category: "Politics" },
  { fact: "The lotus is India's national flower and grows in muddy water but stays clean!", emoji: "🪷", category: "Symbols" },
  { fact: "India has more mobile phone users than the entire population of the United States!", emoji: "📱", category: "Technology" },
  { fact: "The concept of zero was invented in India by mathematician Aryabhata!", emoji: "0️⃣", category: "Mathematics" },
  { fact: "India's film industry produces more films than Hollywood every year!", emoji: "🎬", category: "Entertainment" },
  { fact: "The Himalayan mountain range in India is still growing taller each year!", emoji: "⛰️", category: "Geography" }
];

export default function DailyFactPopup() {
  const [showFact, setShowFact] = useState(false);
  const [currentFact, setCurrentFact] = useState(null);
  const [hasShownToday, setHasShownToday] = useState(false);

  useEffect(() => {
    const lastShown = localStorage.getItem('lastFactDate');
    const today = new Date().toDateString();
    
    if (lastShown !== today && !hasShownToday) {
      const timer = setTimeout(() => {
        const randomFact = indiaFacts[Math.floor(Math.random() * indiaFacts.length)];
        setCurrentFact(randomFact);
        setShowFact(true);
        setHasShownToday(true);
        localStorage.setItem('lastFactDate', today);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [hasShownToday]);

  const handleClose = () => {
    setShowFact(false);
  };

  const showNewFact = () => {
    const randomFact = indiaFacts[Math.floor(Math.random() * indiaFacts.length)];
    setCurrentFact(randomFact);
  };

  return (
    <AnimatePresence>
      {showFact && currentFact && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 p-1 rounded-3xl max-w-md w-full"
            onClick={e => e.stopPropagation()}
          >
            <div className="bg-white rounded-3xl p-8 relative">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-full hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-4 left-4"
              >
                <Sparkles className="w-6 h-6 text-yellow-400" />
              </motion.div>

              <div className="text-center pt-2">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="mb-4"
                >
                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl py-3 px-6 inline-block mb-4">
                    <span className="text-sm font-bold text-purple-600 uppercase tracking-wide flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      Daily India Fact
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-8xl mb-4"
                >
                  {currentFact.emoji}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <span className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-xs font-semibold mb-4">
                    {currentFact.category}
                  </span>
                  <p className="text-xl font-bold text-gray-800 leading-relaxed mb-6">
                    {currentFact.fact}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="flex gap-3"
                >
                  <button
                    onClick={showNewFact}
                    className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 rounded-2xl font-bold transition-all hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-5 h-5" />
                    Another Fact!
                  </button>
                  <button
                    onClick={handleClose}
                    className="px-6 py-3 border-2 border-gray-300 hover:border-gray-400 text-gray-700 rounded-2xl font-bold transition-all hover:scale-105"
                  >
                    Got It!
                  </button>
                </motion.div>

                <p className="text-xs text-gray-500 mt-4">
                  💡 Come back tomorrow for a new amazing fact!
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}