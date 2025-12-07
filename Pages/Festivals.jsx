
import React, { useState, useEffect } from 'react';
import { Festival } from '@/entities/Festival';
import { motion } from 'framer-motion';
import { 
  Calendar,
  MapPin,
  Star,
  Sparkles,
  Heart,
  Sun,
  Moon,
  Share2 // Added Share2 icon
} from 'lucide-react';
import Mascot from '../Components/NewMascot';

export default function Festivals() {
  const [festivals, setFestivals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadFestivals();
  }, []);

  const loadFestivals = async () => {
    try {
      const data = await Festival.list('month');
      setFestivals(data);
    } catch (error) {
      console.error('Error loading festivals:', error);
      setFestivals([]);
    }
    setIsLoading(false);
  };

  const getFestivalIcon = (name) => {
    if (name.toLowerCase().includes('diwali')) return Sun;
    if (name.toLowerCase().includes('holi')) return Heart;
    if (name.toLowerCase().includes('eid')) return Moon;
    return Sparkles;
  };

  const getMonthColor = (month) => {
    const colors = {
      'january': 'from-blue-400 to-blue-500',
      'february': 'from-pink-400 to-pink-500',
      'march': 'from-green-400 to-green-500',
      'april': 'from-yellow-400 to-yellow-500',
      'may': 'from-red-400 to-red-500',
      'june': 'from-purple-400 to-purple-500',
      'july': 'from-indigo-400 to-indigo-500',
      'august': 'from-orange-400 to-orange-500',
      'september': 'from-teal-400 to-teal-500',
      'october': 'from-amber-400 to-amber-500',
      'november': 'from-rose-400 to-rose-500',
      'december': 'from-emerald-400 to-emerald-500'
    };
    return colors[month.toLowerCase()] || 'from-gray-400 to-gray-500';
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Colorful Festivals of India - Legacy of India',
        text: 'Celebrate India\'s amazing festivals all year round! 🎉✨',
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied! Share India\'s festivals! 🎉');
    }
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            🎉 Colorful Festivals of India
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-4"
          >
            India celebrates amazing festivals all year round! Each festival brings people together with joy, colors, music, and delicious food.
          </motion.p>
          <button
            onClick={handleShare}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto hover:from-purple-700 hover:to-pink-700 shadow-lg"
          >
            <Share2 className="w-5 h-5" />
            Share Festivals
          </button>
        </div>

        {/* Festivals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            // Loading skeleton
            Array(6).fill(0).map((_, i) => (
              <div key={i} className="bg-white rounded-3xl shadow-xl border-4 border-gray-200 overflow-hidden animate-pulse">
                <div className="h-40 bg-gray-200"></div>
                <div className="p-6 space-y-3">
                  <div className="h-6 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  <div className="h-16 bg-gray-200 rounded"></div>
                </div>
              </div>
            ))
          ) : festivals.length === 0 ? (
            <div className="col-span-full text-center py-16">
              <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-600 mb-2">No Festivals Found</h3>
              <p className="text-gray-500">Festivals will appear here once they are added.</p>
            </div>
          ) : (
            festivals.map((festival, index) => {
              const Icon = getFestivalIcon(festival.name);
              return (
                <motion.div
                  key={festival.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-3xl shadow-xl border-4 border-transparent hover:border-purple-300 transition-all duration-300 overflow-hidden"
                >
                  {/* Festival Header */}
                  <div className={`h-40 bg-gradient-to-br ${getMonthColor(festival.month)} p-6 flex items-end relative overflow-hidden`}>
                    <div className="absolute top-4 right-4">
                      <Icon className="w-8 h-8 text-white/80" />
                    </div>
                    <div className="absolute top-2 left-4 bg-white/20 backdrop-blur rounded-full px-3 py-1 text-xs text-white font-medium">
                      {festival.month}
                    </div>
                    <div className="text-white">
                      <h3 className="text-2xl font-bold">{festival.name}</h3>
                      {festival.region && (
                        <div className="flex items-center gap-1 mt-1 text-white/80">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{festival.region}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Festival Content */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {festival.description}
                    </p>
                    
                    {festival.significance && (
                      <div className="mb-4 p-3 bg-purple-50 rounded-xl border border-purple-200">
                        <div className="flex items-start gap-2">
                          <Star className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-purple-800 text-sm">Why it's special:</p>
                            <p className="text-purple-700 text-sm">{festival.significance}</p>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {festival.traditions && festival.traditions.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-bold text-gray-800 mb-2 text-sm">How it's celebrated:</h4>
                        <div className="space-y-2">
                          {festival.traditions.slice(0, 3).map((tradition, i) => (
                            <div key={i} className="flex items-start gap-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-600">{tradition}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {festival.fun_activities && festival.fun_activities.length > 0 && (
                      <div className="bg-yellow-50 rounded-xl p-3 border border-yellow-200">
                        <h4 className="font-bold text-yellow-800 mb-2 text-sm flex items-center gap-1">
                          <Sparkles className="w-4 h-4" />
                          Fun Activities:
                        </h4>
                        <div className="space-y-1">
                          {festival.fun_activities.slice(0, 2).map((activity, i) => (
                            <p key={i} className="text-yellow-700 text-sm">• {activity}</p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })
          )}
        </div>

        {/* Fun Facts Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-8 text-white shadow-2xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            🌟 Festival Fun Facts!
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/20 backdrop-blur rounded-2xl p-6 text-center">
              <Calendar className="w-10 h-10 mx-auto mb-3 text-pink-200" />
              <h4 className="font-bold text-lg mb-2">365 Days</h4>
              <p className="text-pink-100 text-sm">There's almost a festival every day in some part of India!</p>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-2xl p-6 text-center">
              <Heart className="w-10 h-10 mx-auto mb-3 text-pink-200" />
              <h4 className="font-bold text-lg mb-2">Unity in Diversity</h4>
              <p className="text-pink-100 text-sm">Festivals bring people of all backgrounds together!</p>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-2xl p-6 text-center">
              <Sparkles className="w-10 h-10 mx-auto mb-3 text-pink-200" />
              <h4 className="font-bold text-lg mb-2">Colors & Joy</h4>
              <p className="text-pink-100 text-sm">Each festival adds bright colors and happiness to life!</p>
            </div>
          </div>
        </motion.div>
      </div>

      <Mascot 
        pose="dancing"
        message="I love festivals! They're like colorful parties where everyone comes together to celebrate. My favorite is Holi - imagine playing with colors all day! Which festival sounds most fun to you? 🎨🎉"
      />
    </div>
  );
}
