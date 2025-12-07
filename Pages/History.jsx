import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { motion } from 'framer-motion';
import { Clock, BookOpen, Scroll, Crown, Building, Share2 } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs.jsx';

export default function History() {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await base44.entities.HistoryEvent.list('year');
        setEvents(data);
      } catch (error) {
        console.error('Error fetching history events:', error);
        setEvents([]);
      }
      setIsLoading(false);
    };
    fetchEvents();
  }, []);

  const eras = ['Ancient', 'Medieval', 'Colonial', 'Modern'];
  const eraColors = {
    'Ancient': 'from-[#D4AF37] to-[#B8941F]',
    'Medieval': 'from-[#B8941F] to-[#9A7A1A]',
    'Colonial': 'from-[#C4A972] to-[#A68D56]',
    'Modern': 'from-[#D4AF37] to-[#C4A972]'
  };

  const eraIcons = {
    'Ancient': Scroll,
    'Medieval': Crown,
    'Colonial': Building,
    'Modern': BookOpen
  };

  const eventsByEra = (era) => events.filter(event => event.era === era);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'India\'s Historical Journey - Legacy of India',
        text: 'Travel through 5000 years of incredible history! 📜✨',
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied! Share India\'s history! 🎉');
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 bg-gradient-to-br from-[#FFF7E9] to-[#EAD9C6]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6 text-[#4E342E]"
          >
            📜 India's Historical Journey
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#3E2C24] max-w-3xl mx-auto leading-relaxed mb-4"
          >
            Travel through 5000 years of incredible history - from ancient civilizations to modern India!
          </motion.p>
          <div className="h-1 w-32 mx-auto mt-6 mb-4 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
          <button
            onClick={handleShare}
            className="bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-[#4E342E] px-6 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto hover:from-[#B8941F] hover:to-[#9A7A1A] border-2 border-[#4E342E] shadow-lg"
          >
            <Share2 className="w-5 h-5" />
            Share History
          </button>
        </div>

        {/* History Timeline */}
        <Tabs defaultValue="Ancient" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 bg-[#EAD9C6] border-2 border-[#D4AF37]">
            {eras.map(era => (
              <TabsTrigger 
                key={era} 
                value={era} 
                className="text-lg font-semibold data-[state=active]:bg-[#D4AF37] data-[state=active]:text-[#4E342E] text-[#4E342E]"
              >
                {era}
              </TabsTrigger>
            ))}
          </TabsList>

          {eras.map(era => {
            const Icon = eraIcons[era];
            return (
              <TabsContent key={era} value={era}>
                <div className="space-y-8">
                  {isLoading ? (
                    Array(3).fill(0).map((_, i) => (
                      <div key={i} className="bg-[#EAD9C6] rounded-3xl shadow-xl animate-pulse border-4 border-[#D4AF37] p-8 h-48"></div>
                    ))
                  ) : eventsByEra(era).length === 0 ? (
                    <div className="text-center py-16">
                      <Icon className="w-16 h-16 text-[#D4AF37] mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-[#4E342E] mb-2">No events found</h3>
                      <p className="text-[#3E2C24]">Historical events from the {era} era will appear here</p>
                    </div>
                  ) : (
                    eventsByEra(era).map((event, index) => (
                      <motion.div
                        key={event.id}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative"
                      >
                        <div className={`bg-gradient-to-br ${eraColors[era]} rounded-3xl p-8 text-[#4E342E] shadow-2xl border-4 border-[#4E342E]`}>
                          <div className="flex items-start gap-6">
                            <div className="flex-shrink-0">
                              <div className="w-20 h-20 bg-[#FFF7E9] rounded-full flex items-center justify-center border-4 border-[#4E342E]">
                                <Icon className="w-10 h-10 text-[#D4AF37]" />
                              </div>
                            </div>
                            
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-4">
                                <Clock className="w-5 h-5" />
                                <span className="font-bold text-xl">{event.year}</span>
                              </div>
                              
                              <h3 className="text-2xl font-display font-bold mb-4">
                                {event.title}
                              </h3>
                              
                              <p className="text-lg leading-relaxed">
                                {event.description}
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Timeline connector */}
                        {index < eventsByEra(era).length - 1 && (
                          <div className="flex justify-center my-6">
                            <div className="w-1 h-12 bg-[#D4AF37]"></div>
                          </div>
                        )}
                      </motion.div>
                    ))
                  )}
                </div>
              </TabsContent>
            );
          })}
        </Tabs>

        {/* Fun Facts Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] rounded-3xl p-8 md:p-12 text-[#4E342E] shadow-2xl border-4 border-[#4E342E]"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            🌟 Amazing History Facts!
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#FFF7E9] backdrop-blur rounded-2xl p-6 text-center border-2 border-[#4E342E]">
              <Scroll className="w-10 h-10 mx-auto mb-3 text-[#D4AF37]" />
              <h4 className="font-bold text-lg mb-2">5000+ Years Old</h4>
              <p className="text-[#3E2C24] text-sm">India has one of the world's oldest continuous civilizations!</p>
            </div>
            <div className="bg-[#FFF7E9] backdrop-blur rounded-2xl p-6 text-center border-2 border-[#4E342E]">
              <Crown className="w-10 h-10 mx-auto mb-3 text-[#D4AF37]" />
              <h4 className="font-bold text-lg mb-2">200+ Kings & Queens</h4>
              <p className="text-[#3E2C24] text-sm">Ruled different parts of India through the ages!</p>
            </div>
            <div className="bg-[#FFF7E9] backdrop-blur rounded-2xl p-6 text-center border-2 border-[#4E342E]">
              <BookOpen className="w-10 h-10 mx-auto mb-3 text-[#D4AF37]" />
              <h4 className="font-bold text-lg mb-2">Birthplace of Ideas</h4>
              <p className="text-[#3E2C24] text-sm">Zero, yoga, chess, and many discoveries came from India!</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}