import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  MapPin, 
  Users, 
  Utensils, 
  Calendar, 
  Star,
  Crown,
  Mountain,
  Camera
} from 'lucide-react';
import Mascot from '../Components/Mascot';

export default function StateRajasthan() {
  const stateData = {
    name: "Rajasthan",
    capital: "Jaipur",
    nickname: "Land of Kings",
    description: "Rajasthan is famous for its magnificent palaces, colorful culture, and the vast Thar Desert. It's like stepping into a fairy tale with beautiful castles and brave stories of kings and queens!",
    
    languages: ["Hindi", "Rajasthani", "English"],
    
    famousFoods: [
      "Dal Bati Churma - Round bread with lentils and sweet crumbs",
      "Ghewar - Sweet honeycomb-like dessert",
      "Laal Maas - Spicy red meat curry",
      "Pyaaz Kachori - Crispy pastry with onion filling"
    ],
    
    festivals: [
      "Diwali - Festival of Lights",
      "Holi - Festival of Colors", 
      "Desert Festival - Celebrating desert culture",
      "Teej - Monsoon celebration"
    ],
    
    culturalHighlights: [
      "Ghoomar Dance - Beautiful swirling dance",
      "Rajasthani Folk Music with Sarangi",
      "Colorful Turbans and Lehengas",
      "Puppet Shows (Kathputli)"
    ],
    
    funFacts: [
      "Home to the Thar Desert - India's largest desert!",
      "The Pink City (Jaipur) is painted pink to welcome guests",
      "Has the world's largest cannon on wheels at Jaigarh Fort",
      "Rajasthan means 'Land of Kings' in Hindi"
    ],
    
    famousLandmarks: [
      "Hawa Mahal (Palace of Winds)",
      "Amber Fort",
      "City Palace, Udaipur",
      "Jaisalmer Fort (Golden Fort)",
      "Mehrangarh Fort"
    ]
  };

  const sections = [
    {
      title: "Languages Spoken",
      icon: Users,
      items: stateData.languages,
      color: "bg-blue-500"
    },
    {
      title: "Delicious Foods",
      icon: Utensils,
      items: stateData.famousFoods,
      color: "bg-orange-500"
    },
    {
      title: "Colorful Festivals",
      icon: Calendar,
      items: stateData.festivals,
      color: "bg-purple-500"
    },
    {
      title: "Amazing Landmarks",
      icon: Camera,
      items: stateData.famousLandmarks,
      color: "bg-green-500"
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Link
              to={createPageUrl('IndiaMap')}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-orange-50 group"
            >
              <ArrowLeft className="w-6 h-6 text-gray-600 group-hover:text-orange-600" />
            </Link>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center">
                <Crown className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                  {stateData.name}
                </h1>
                <p className="text-gray-600 flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  Capital: {stateData.capital}
                </p>
              </div>
            </div>
          </div>

          {/* Hero Section */}
          <div className="bg-gradient-to-r from-orange-400 to-pink-500 rounded-3xl p-8 text-white shadow-2xl">
            <div className="max-w-4xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                🏰 {stateData.nickname}
              </h2>
              <p className="text-lg leading-relaxed text-orange-100">
                {stateData.description}
              </p>
            </div>
          </div>
        </div>

        {/* Cultural Highlights */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl shadow-xl border-4 border-orange-200 p-8"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Mountain className="w-7 h-7 text-orange-500" />
              Cultural Treasures
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {stateData.culturalHighlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-gradient-to-r from-orange-50 to-pink-50 rounded-2xl border border-orange-200"
                >
                  <Star className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 font-medium">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Main Sections */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-xl border-4 border-gray-200 hover:border-orange-200 transition-all duration-300 overflow-hidden"
              >
                <div className={`${section.color} p-6 text-white`}>
                  <div className="flex items-center gap-3">
                    <Icon className="w-6 h-6" />
                    <h3 className="text-xl font-bold">{section.title}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <div 
                        key={itemIndex}
                        className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors duration-200"
                      >
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Fun Facts Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl p-8 text-white shadow-2xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            🌟 Amazing Fun Facts!
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {stateData.funFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/20 backdrop-blur rounded-2xl p-6 border border-white/30"
              >
                <div className="flex items-start gap-3">
                  <Star className="w-6 h-6 text-yellow-200 mt-1 flex-shrink-0" />
                  <p className="text-white leading-relaxed font-medium">{fact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="mt-12 text-center">
          <Link
            to={createPageUrl('States')}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <span>Explore More States</span>
            <ArrowLeft className="w-5 h-5 rotate-180" />
          </Link>
        </div>
      </div>

      <Mascot 
        message="Isn't Rajasthan amazing? The palaces look like they're from fairy tales! Did you know that Jaipur is called the Pink City because all the buildings are painted pink? 🏰💖"
      />
    </div>
  );
}