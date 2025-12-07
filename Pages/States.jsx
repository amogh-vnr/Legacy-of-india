import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, MapPin, Building2, BookOpen, X, Share2 } from 'lucide-react';
import IndiaMapSVG from '../Components/IndiaMapSVG.jsx';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import NewMascot from '../Components/NewMascot';

export default function States() {
  const [selectedState, setSelectedState] = useState(null);
  const [hoveredState, setHoveredState] = useState(null);
  const [statesData, setStatesData] = useState([]);
  const [monuments, setMonuments] = useState([]);
  const [selectedMonument, setSelectedMonument] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [statesRes, monumentsRes] = await Promise.all([
          base44.entities.State.list(),
          base44.entities.Monument.list()
        ]);
        setStatesData(statesRes);
        setMonuments(monumentsRes);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const handleStateClick = (stateId) => {
    const stateInfo = statesData.find(s => s.name.toLowerCase().replace(/\s+/g, '-') === stateId);
    if (stateInfo) {
      navigate(createPageUrl(`State-${stateId}`));
    }
  };

  const handleStateHover = (stateId) => {
    const stateInfo = statesData.find(s => s.name.toLowerCase().replace(/\s+/g, '-') === stateId);
    setHoveredState(stateInfo || { name: stateId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) });
    setSelectedState(stateInfo);
  };

  const getStateMonuments = (stateName) => {
    return monuments.filter(m => m.state === stateName);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: selectedState ? `${selectedState.name} - Legacy of India` : 'Explore India - Legacy of India',
        text: selectedState 
          ? `Discover the amazing heritage of ${selectedState.name}! 🗺️✨` 
          : 'Explore all 28 states and 9 union territories of India! 🗺️',
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied! Share India\'s heritage! 🎉');
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 bg-gradient-to-br from-[#FFF7E9] to-[#EAD9C6]">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] bg-clip-text text-transparent"
          >
            🗺️ Explore India Interactive Map
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#3E2C24] max-w-3xl mx-auto mb-4"
          >
            Hover or click on any state to discover its amazing culture, food, monuments, and history!
          </motion.p>
          <button
            onClick={handleShare}
            className="bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-[#4E342E] px-6 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto hover:from-[#B8941F] hover:to-[#9A7A1A] border-2 border-[#4E342E] shadow-lg"
          >
            <Share2 className="w-5 h-5" />
            Share This Map
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Section */}
          <div className="lg:col-span-2">
            <div className="bg-[#EAD9C6] rounded-3xl shadow-2xl p-4 sm:p-8 border-4 border-[#D4AF37]">
              <div className="relative aspect-square sm:aspect-video lg:aspect-[4/3]">
                <IndiaMapSVG 
                  onStateClick={handleStateClick}
                  onStateHover={handleStateHover}
                  selectedStateId={selectedState?.name.toLowerCase().replace(/\s+/g, '-')}
                />
              </div>
            </div>
          </div>

          {/* State Info Panel */}
          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <AnimatePresence mode="wait">
                {selectedState ? (
                  <motion.div
                    key={selectedState.id || selectedState.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="bg-[#EAD9C6] rounded-3xl shadow-2xl border-4 border-[#D4AF37] overflow-hidden"
                  >
                     <div 
                      className="h-32 p-6 flex items-end bg-gradient-to-br from-[#D4AF37] to-[#B8941F]"
                    >
                      <div className="text-[#4E342E]">
                        <h2 className="text-2xl font-bold">{selectedState.name}</h2>
                        {selectedState.capital && <p className="opacity-90">Capital: {selectedState.capital}</p>}
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="text-[#3E2C24] mb-6 leading-relaxed">
                        {selectedState.description || "Discover the secrets of this amazing region!"}
                      </p>

                      {selectedState.fun_facts && (
                        <div className="bg-[#FFF7E9] border-l-4 border-[#D4AF37] p-4 mb-6 rounded-r-xl">
                            <p className="font-medium text-[#4E342E]">Fun Fact!</p>
                            <p className="text-[#3E2C24] text-sm">{selectedState.fun_facts[0]}</p>
                        </div>
                      )}

                      {/* Monuments Section */}
                      {getStateMonuments(selectedState.name).length > 0 && (
                        <div className="mb-6">
                          <h3 className="font-bold text-[#4E342E] mb-3 flex items-center gap-2">
                            <Building2 className="w-5 h-5 text-[#D4AF37]" />
                            Famous Monuments:
                          </h3>
                          <div className="space-y-2">
                            {getStateMonuments(selectedState.name).map((monument) => (
                              <button
                                key={monument.id}
                                onClick={() => setSelectedMonument(monument)}
                                className="w-full bg-[#FFF7E9] hover:bg-[#D4AF37] border-2 border-[#D4AF37] rounded-xl p-3 text-left transition-all group"
                              >
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="font-semibold text-[#4E342E] group-hover:text-[#4E342E]">
                                      {monument.name}
                                    </p>
                                    <p className="text-xs text-[#3E2C24]">
                                      Built: {monument.built_year} | By: {monument.built_by}
                                    </p>
                                  </div>
                                  <BookOpen className="w-5 h-5 text-[#D4AF37] group-hover:text-[#4E342E]" />
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      <button
                        onClick={() => handleStateClick(selectedState.name.toLowerCase().replace(/\s+/g, '-'))}
                        className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-[#4E342E] py-3 px-6 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 group border-2 border-[#4E342E]"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="placeholder"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="bg-[#EAD9C6] rounded-3xl shadow-2xl p-8 text-center border-4 border-[#D4AF37]"
                  >
                    <div className="text-6xl mb-4">🗺️</div>
                    <h3 className="text-2xl font-bold text-[#4E342E] mb-4">
                      Select a State
                    </h3>
                    <p className="text-[#3E2C24] text-lg">
                      Hover over or click on any state to learn about its culture, monuments, and history!
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Monument Reading Modal */}
        <AnimatePresence>
          {selectedMonument && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 overflow-y-auto"
              onClick={() => setSelectedMonument(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                className="bg-gradient-to-br from-[#FFF7E9] to-[#EAD9C6] rounded-3xl max-w-4xl w-full shadow-2xl border-4 border-[#D4AF37] max-h-[90vh] overflow-y-auto relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedMonument(null)}
                  className="absolute top-4 right-4 bg-[#4E342E] text-[#D4AF37] p-2 rounded-full hover:bg-[#3E2C24] z-10"
                  aria-label="Close monument details"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="p-8 md:p-12">
                  {/* Taru Reading Companion */}
                  <div className="flex items-start gap-6 mb-8">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="flex-shrink-0 w-32 h-32"
                    >
                      <img 
                        src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c6b284b529b667d4fc8344/c443765be_image-removebg-preview11.png"
                        alt="Taru"
                        className="w-full h-full object-contain drop-shadow-2xl"
                      />
                    </motion.div>
                    <div className="flex-1">
                      <div className="bg-gradient-to-r from-[#D4AF37] to-[#B8941F] rounded-2xl p-4 text-[#4E342E] relative">
                        <p className="font-semibold">
                          "Let me tell you an amazing story about {selectedMonument.name}! Get comfortable and enjoy this journey through time! 📖✨"
                        </p>
                        <div className="absolute -bottom-2 left-8 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-transparent border-t-[#B8941F]"></div>
                      </div>
                    </div>
                  </div>

                  {/* Monument Header */}
                  <div className="text-center mb-8">
                    <div className="inline-block bg-gradient-to-r from-[#D4AF37] to-[#B8941F] rounded-full px-6 py-2 mb-4">
                      <p className="text-[#4E342E] font-bold">{selectedMonument.state}</p>
                    </div>
                    <h2 className="text-4xl font-display font-bold text-[#4E342E] mb-4">
                      {selectedMonument.name}
                    </h2>
                    <div className="flex items-center justify-center gap-6 text-[#3E2C24]">
                      <div>
                        <span className="font-semibold">Built:</span> {selectedMonument.built_year}
                      </div>
                      <div>
                        <span className="font-semibold">By:</span> {selectedMonument.built_by}
                      </div>
                    </div>
                  </div>

                  {/* The Story */}
                  <div className="bg-[#EAD9C6] rounded-3xl p-8 border-4 border-[#D4AF37] mb-6">
                    <h3 className="text-2xl font-bold text-[#4E342E] mb-4 flex items-center gap-2">
                      <BookOpen className="w-6 h-6 text-[#D4AF37]" />
                      The Story
                    </h3>
                    <div className="prose prose-lg max-w-none">
                      {selectedMonument.story.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="text-[#3E2C24] text-lg leading-relaxed mb-4">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Significance */}
                  {selectedMonument.significance && (
                    <div className="bg-gradient-to-r from-[#D4AF37]/20 to-[#B8941F]/20 rounded-2xl p-6 mb-6 border-2 border-[#D4AF37]">
                      <h3 className="text-xl font-bold text-[#4E342E] mb-3 flex items-center gap-2">
                        <Star className="w-5 h-5 text-[#D4AF37]" />
                        Why It's Special
                      </h3>
                      <p className="text-[#3E2C24] text-lg leading-relaxed">
                        {selectedMonument.significance}
                      </p>
                    </div>
                  )}

                  {/* Fun Facts */}
                  {selectedMonument.fun_facts && selectedMonument.fun_facts.length > 0 && (
                    <div className="bg-[#FFF7E9] rounded-2xl p-6 border-2 border-[#D4AF37]">
                      <h3 className="text-xl font-bold text-[#4E342E] mb-4">
                        🎉 Amazing Fun Facts!
                      </h3>
                      <div className="space-y-3">
                        {selectedMonument.fun_facts.map((fact, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-full flex items-center justify-center flex-shrink-0 text-[#4E342E] font-bold">
                              {index + 1}
                            </div>
                            <p className="text-[#3E2C24] text-lg leading-relaxed pt-1">
                              {fact}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Architecture Style */}
                  {selectedMonument.architecture_style && (
                    <div className="mt-6 text-center">
                      <div className="inline-block bg-gradient-to-r from-[#D4AF37] to-[#B8941F] rounded-full px-6 py-3">
                        <p className="text-[#4E342E] font-bold">
                          Architecture Style: {selectedMonument.architecture_style}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Taru Mascot */}
      <NewMascot 
        pose="default"
        message="Namaste! 👋 I'm Taru, your friendly guide! Hover over any state on the map to learn about it, or click to explore its monuments and history. Let's discover India together! 🗺️✨"
      />
    </div>
  );
}