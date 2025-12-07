import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, MapPin } from 'lucide-react';
import Mascot from '../Components/Mascot';

export default function IndiaMap() {
  const [selectedState, setSelectedState] = useState(null);
  const [hoveredState, setHoveredState] = useState(null);

  // Sample states data - in real app this would come from the State entity
  const sampleStates = [
    {
      id: 'rajasthan',
      name: 'Rajasthan',
      capital: 'Jaipur',
      description: 'The Land of Kings with magnificent palaces and colorful culture!',
      funFact: 'Home to the largest desert in India - the Thar Desert!',
      color: '#F97316'
    },
    {
      id: 'kerala',
      name: 'Kerala',
      capital: 'Thiruvananthapuram',
      description: "God's Own Country with beautiful backwaters and spices!",
      funFact: 'Kerala has the highest literacy rate in India!',
      color: '#10B981'
    },
    {
      id: 'punjab',
      name: 'Punjab',
      capital: 'Chandigarh',
      description: 'The Land of Five Rivers known for its rich culture and food!',
      funFact: 'Punjab produces the most wheat in India!',
      color: '#8B5CF6'
    },
    {
      id: 'goa',
      name: 'Goa',
      capital: 'Panaji',
      description: 'Beautiful beaches and Portuguese heritage!',
      funFact: 'Goa is the smallest state in India by area!',
      color: '#F59E0B'
    },
    {
      id: 'maharashtra',
      name: 'Maharashtra',
      capital: 'Mumbai',
      description: 'Home to Bollywood and the financial capital Mumbai!',
      funFact: 'Maharashtra means "Great Nation" in Sanskrit!',
      color: '#EF4444'
    },
    {
      id: 'west-bengal',
      name: 'West Bengal',
      capital: 'Kolkata',
      description: 'Rich in literature, arts, and delicious sweets!',
      funFact: 'Kolkata was the first capital of British India!',
      color: '#3B82F6'
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Explore India Interactive Map
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Click on any state to discover its amazing culture, food, and history!
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-orange-200">
              <div className="relative">
                {/* Simplified India Map */}
                <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8 min-h-[500px] relative overflow-hidden">
                  <div className="text-center text-gray-500 mb-8">
                    <MapPin className="w-8 h-8 mx-auto mb-2" />
                    <p className="font-medium">Interactive Map</p>
                  </div>
                  
                  {/* State Cards arranged like a map */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-full">
                    {sampleStates.map((state, index) => (
                      <motion.div
                        key={state.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className={`bg-white rounded-2xl p-4 shadow-lg cursor-pointer border-4 border-transparent hover:border-orange-300 transition-all duration-300 ${
                          selectedState?.id === state.id ? 'ring-4 ring-orange-400 border-orange-400' : ''
                        }`}
                        onClick={() => setSelectedState(state)}
                        style={{ 
                          background: `linear-gradient(135deg, ${state.color}20, ${state.color}40)`,
                        }}
                      >
                        <div className="text-center">
                          <div 
                            className="w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center"
                            style={{ backgroundColor: state.color }}
                          >
                            <Star className="w-4 h-4 text-white" />
                          </div>
                          <h3 className="font-bold text-gray-800 text-sm">{state.name}</h3>
                          <p className="text-xs text-gray-600">{state.capital}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Map Instructions */}
                  <div className="absolute bottom-4 left-4 bg-white/90 rounded-lg p-3 text-sm text-gray-600">
                    💡 Click on any state to learn more!
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* State Info Panel */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <AnimatePresence mode="wait">
                {selectedState ? (
                  <motion.div
                    key={selectedState.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="bg-white rounded-3xl shadow-2xl border-4 border-orange-200 overflow-hidden"
                  >
                    <div 
                      className="h-32 p-6 flex items-end"
                      style={{ 
                        background: `linear-gradient(135deg, ${selectedState.color}, ${selectedState.color}CC)` 
                      }}
                    >
                      <div className="text-white">
                        <h2 className="text-2xl font-bold">{selectedState.name}</h2>
                        <p className="opacity-90">Capital: {selectedState.capital}</p>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {selectedState.description}
                      </p>
                      
                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                        <div className="flex items-start">
                          <Star className="w-5 h-5 text-yellow-400 mt-0.5 mr-2 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-yellow-800">Fun Fact!</p>
                            <p className="text-yellow-700 text-sm">{selectedState.funFact}</p>
                          </div>
                        </div>
                      </div>

                      <Link
                        to={createPageUrl(`State-${selectedState.id}`)}
                        className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3 px-6 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 group"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-white rounded-3xl shadow-2xl p-8 text-center border-4 border-gray-200"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <MapPin className="w-10 h-10 text-gray-500" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      Select a State
                    </h3>
                    <p className="text-gray-600">
                      Click on any state on the map to discover its amazing culture, history, and traditions!
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <Mascot 
        message="Wow! Look at all these amazing states! Each one has its own special culture and delicious food. Try clicking on different states to explore!"
        position="bottom-right"
      />
    </div>
  );
}