
import React, { useState, useEffect } from 'react';
import { Food as FoodEntity } from '@/entities/Food';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Utensils,
  MapPin,
  Star,
  Leaf,
  Heart,
  Truck,
  Trophy,
  Flame,
  ChefHat,
  CheckCircle,
  XCircle,
  Sparkles,
  Share2, // Added Share2 icon for share functionality
  Users, // Added Users icon for team section
  CalendarDays, // Added CalendarDays for Diwali date
  X // Added X for close button
} from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs.jsx';
import { Button } from '@/components/ui/button';
import Mascot from '../Components/NewMascot';

const statePositions = [
  { name: 'Punjab', x: 20, y: 25, dish: 'Makki ki Roti' },
  { name: 'Rajasthan', x: 15, y: 45, dish: 'Dal Bati Churma' },
  { name: 'Gujarat', x: 12, y: 60, dish: 'Dhokla' },
  { name: 'Maharashtra', x: 25, y: 68, dish: 'Vada Pav' },
  { name: 'Goa', x: 22, y: 78, dish: 'Fish Curry' },
  { name: 'Karnataka', x: 30, y: 82, dish: 'Bisi Bele Bath' },
  { name: 'Kerala', x: 28, y: 92, dish: 'Appam' },
  { name: 'Tamil Nadu', x: 40, y: 88, dish: 'Dosa' },
  { name: 'Andhra', x: 45, y: 72, dish: 'Biryani' },
  { name: 'Telangana', x: 43, y: 68, dish: 'Mirchi ka Salan' },
  { name: 'Odisha', x: 60, y: 62, dish: 'Pakhala' },
  { name: 'Bengal', x: 70, y: 58, dish: 'Macher Jhol' },
  { name: 'Bihar', x: 65, y: 48, dish: 'Litti Chokha' },
  { name: 'UP', x: 55, y: 42, dish: 'Kebabs' },
  { name: 'Delhi', x: 50, y: 38, dish: 'Chole Bhature' },
  { name: 'Assam', x: 82, y: 52, dish: 'Masor Tenga' },
  { name: 'Sikkim', x: 72, y: 38, dish: 'Momo' },
  { name: 'HP', x: 28, y: 32, dish: 'Siddu' },
  { name: 'J&K', x: 22, y: 18, dish: 'Rogan Josh' },
  { name: 'Uttarakhand', x: 42, y: 35, dish: 'Bal Mithai' }
];

const spiceFacts = [
  { name: 'Turmeric', origin: 'India', fact: 'Called "Golden Spice"! Used for over 4000 years and has healing powers.', emoji: '🌿' },
  { name: 'Cardamom', origin: 'Kerala', fact: 'Known as "Queen of Spices"! India grows the best cardamom.', emoji: '💚' },
  { name: 'Black Pepper', origin: 'Kerala', fact: 'Called "Black Gold"! Romans used it as money!', emoji: '⚫' },
  { name: 'Cumin', origin: 'India', fact: 'Used in almost every dish! Helps digestion.', emoji: '🟤' },
  { name: 'Saffron', origin: 'Kashmir', fact: 'Most expensive spice! Takes 75,000 flowers to make 1 pound.', emoji: '🟡' },
  { name: 'Cloves', origin: 'Kerala', fact: 'Look like tiny nails! Freshens your breath.', emoji: '🔴' },
  { name: 'Cinnamon', origin: 'Kerala', fact: 'Made from tree bark! Ancient Egyptians loved it.', emoji: '🟫' },
  { name: 'Mustard Seeds', origin: 'India', fact: 'Tiny but powerful! Pop them in hot oil and they dance.', emoji: '🟡' }
];

const cookingChallenges = [
  {
    dish: 'Masala Dosa',
    ingredients: ['Rice Batter', 'Potato', 'Mustard Seeds', 'Curry Leaves', 'Ghee'],
    correctOrder: ['Rice Batter', 'Ghee', 'Mustard Seeds', 'Curry Leaves', 'Potato'],
    emoji: '🍛'
  },
  {
    dish: 'Chole Bhature',
    ingredients: ['Chickpeas', 'Bhatura Dough', 'Tomatoes', 'Spices', 'Oil'],
    correctOrder: ['Tomatoes', 'Spices', 'Chickpeas', 'Bhatura Dough', 'Oil'],
    emoji: '🫓'
  },
  {
    dish: 'Pani Puri',
    ingredients: ['Puri', 'Tamarind Water', 'Potato', 'Mint Chutney', 'Chickpeas'],
    correctOrder: ['Puri', 'Potato', 'Chickpeas', 'Mint Chutney', 'Tamarind Water'],
    emoji: '🥟'
  }
];

export default function Food() {
  const [foods, setFoods] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentState, setCurrentState] = useState(0);
  const [score, setScore] = useState(0);
  const [visitedStates, setVisitedStates] = useState([0]);
  const [showChallenge, setShowChallenge] = useState(false);
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [playerIngredients, setPlayerIngredients] = useState([]);
  const [availableIngredients, setAvailableIngredients] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showSpiceFact, setShowSpiceFact] = useState(false);
  const [currentSpiceFact, setCurrentSpiceFact] = useState(null);
  const [showMascotMessage, setShowMascotMessage] = useState(true); // State for Mascot message visibility

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const data = await FoodEntity.list();
        setFoods(data);
      } catch (error) {
        console.error('Error fetching foods:', error);
        setFoods([]);
      }
      setIsLoading(false);
    };
    fetchFoods();
  }, []);

  const regions = ['North', 'South', 'East', 'West'];
  const regionColors = {
    'North': 'from-amber-400 to-orange-500',
    'South': 'from-yellow-600 to-amber-700',
    'East': 'from-orange-400 to-red-500',
    'West': 'from-amber-500 to-yellow-600'
  };

  const foodsByRegion = (region) => foods.filter(food => food.region === region);

  const moveToNextState = () => {
    if (currentState < statePositions.length - 1) {
      const nextState = currentState + 1;
      setCurrentState(nextState);
      setVisitedStates([...visitedStates, nextState]);
      setScore(score + 10);
    }
  };

  const startChallenge = (challenge) => {
    setSelectedChallenge(challenge);
    setPlayerIngredients([]);
    const shuffled = [...challenge.ingredients].sort(() => Math.random() - 0.5);
    setAvailableIngredients(shuffled);
    setShowChallenge(true);
    setShowResult(false);
  };

  const addIngredient = (ingredient) => {
    setPlayerIngredients([...playerIngredients, ingredient]);
    setAvailableIngredients(availableIngredients.filter(i => i !== ingredient));
  };

  const removeIngredient = (ingredient) => {
    setPlayerIngredients(playerIngredients.filter(i => i !== ingredient));
    setAvailableIngredients([...availableIngredients, ingredient]);
  };

  const checkRecipe = () => {
    const correct = JSON.stringify(playerIngredients) === JSON.stringify(selectedChallenge.correctOrder);
    setIsCorrect(correct);
    setShowResult(true);
    if (correct) setScore(score + 50);
  };

  const showRandomSpiceFact = () => {
    const randomFact = spiceFacts[Math.floor(Math.random() * spiceFacts.length)];
    setCurrentSpiceFact(randomFact);
    setShowSpiceFact(true);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Indian Food Journey - Legacy of India',
        text: 'Explore the delicious foods of India! 🍛✨',
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied! Share India's delicious food! 🎉");
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
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent"
          >
            🍛 Delicious Food of India
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-amber-800 max-w-3xl mx-auto mb-4"
          >
            Take a tasty journey across India! Travel on our food truck, try cooking games, and learn about magical spices!
          </motion.p>
          <button
            onClick={handleShare}
            className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto hover:from-amber-700 hover:to-orange-700 shadow-lg"
          >
            <Share2 className="w-5 h-5" />
            Share Food Journey
          </button>
        </div>

        {/* Food Trail Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-amber-50 rounded-3xl p-8 shadow-2xl border-4 border-amber-300 mb-12"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-amber-900 flex items-center gap-3">
              <Truck className="w-8 h-8" />
              Food Trail Across India
            </h2>
            <div className="flex gap-4">
              <div className="bg-amber-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
                <Trophy className="w-6 h-6" />
                <span className="font-bold text-lg">Score: {score}</span>
              </div>
              <div className="bg-orange-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
                <Star className="w-6 h-6" />
                <span className="font-bold text-lg">States: {visitedStates.length}/{statePositions.length}</span>
              </div>
            </div>
          </div>

          <div className="relative h-[600px] bg-gradient-to-br from-yellow-100 to-amber-100 rounded-2xl overflow-hidden border-4 border-amber-400">
            {/* India outline watermark */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <span className="text-9xl font-bold text-amber-900">🇮🇳</span>
            </div>

            {/* State dots */}
            {statePositions.map((state, index) => (
              <motion.div
                key={state.name}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className={`absolute w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all ${
                  visitedStates.includes(index)
                    ? 'bg-green-500 shadow-lg'
                    : index === currentState
                    ? 'bg-amber-500 shadow-xl ring-4 ring-amber-300 animate-pulse'
                    : 'bg-stone-400'
                }`}
                style={{ left: `${state.x}%`, top: `${state.y}%`, transform: 'translate(-50%, -50%)' }}
              >
                <Utensils className="w-6 h-6 text-white" />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded-lg shadow-md text-xs font-bold whitespace-nowrap border-2 border-amber-300">
                  {state.name}
                </div>
              </motion.div>
            ))}

            {/* Food truck */}
            <motion.div
              animate={{
                left: `${statePositions[currentState].x}%`,
                top: `${statePositions[currentState].y}%`
              }}
              transition={{ type: "spring", duration: 1.5 }}
              className="absolute w-20 h-20 z-10"
              style={{ transform: 'translate(-50%, -50%)' }}
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-7xl"
              >
                🚚
              </motion.div>
            </motion.div>
          </div>

          {/* Current state info */}
          <motion.div
            key={currentState}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-6 shadow-lg border-2 border-amber-400"
          >
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h3 className="text-2xl font-bold text-amber-900 mb-2">
                  📍 {statePositions[currentState].name}
                </h3>
                <p className="text-lg text-amber-800 flex items-center gap-2">
                  <Utensils className="w-5 h-5 text-amber-600" />
                  <span className="font-semibold">{statePositions[currentState].dish}</span>
                </p>
              </div>
              <Button
                onClick={moveToNextState}
                disabled={currentState >= statePositions.length - 1}
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-6 py-3 rounded-full font-bold text-lg flex items-center gap-2 disabled:opacity-50"
              >
                Next Stop <Truck className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* Mini Games Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => startChallenge(cookingChallenges[Math.floor(Math.random() * cookingChallenges.length)])}
            className="bg-gradient-to-br from-amber-500 to-orange-600 text-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all"
          >
            <ChefHat className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Cooking Challenge</h3>
            <p className="text-amber-100">Mix ingredients in the right order!</p>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={showRandomSpiceFact}
            className="bg-gradient-to-br from-yellow-600 to-amber-700 text-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all"
          >
            <Flame className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Spice Facts</h3>
            <p className="text-yellow-100">Learn about amazing Indian spices!</p>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => alert('More mini games coming soon! 🎮')}
            className="bg-gradient-to-br from-orange-600 to-red-600 text-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all"
          >
            <Trophy className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Mini Games</h3>
            <p className="text-orange-100">Fun food challenges and quizzes!</p>
          </motion.button>
        </div>

        {/* Regional Food Tabs */}
        <Tabs defaultValue="North" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 bg-amber-100">
            {regions.map(region => (
              <TabsTrigger key={region} value={region} className="text-lg data-[state=active]:bg-amber-500 data-[state=active]:text-white">
                {region} India
              </TabsTrigger>
            ))}
          </TabsList>

          {regions.map(region => (
            <TabsContent key={region} value={region}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {isLoading ? (
                  Array(6).fill(0).map((_, i) => (
                    <div key={i} className="bg-white rounded-3xl shadow-xl animate-pulse border-4 border-amber-200">
                      <div className="h-48 bg-amber-200 rounded-t-3xl"></div>
                      <div className="p-6 space-y-3">
                        <div className="h-6 bg-amber-200 rounded"></div>
                        <div className="h-4 bg-amber-200 rounded w-2/3"></div>
                        <div className="h-16 bg-amber-200 rounded"></div>
                      </div>
                    </div>
                  ))
                ) : foodsByRegion(region).length === 0 ? (
                  <div className="col-span-full text-center py-16">
                    <Utensils className="w-16 h-16 text-amber-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-amber-800 mb-2">No dishes found</h3>
                    <p className="text-amber-600">Delicious {region} Indian dishes will appear here</p>
                  </div>
                ) : (
                  foodsByRegion(region).map((food, index) => (
                    <motion.div
                      key={food.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="bg-white rounded-3xl shadow-2xl border-4 border-transparent hover:border-amber-300 transition-all duration-300 overflow-hidden"
                    >
                      <div className={`h-48 bg-gradient-to-br ${regionColors[region]} p-6 flex items-end relative overflow-hidden`}>
                        {food.image_url ? (
                          <img
                            src={food.image_url}
                            alt={food.name}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        ) : (
                          <div className="absolute top-4 right-4">
                            <Utensils className="w-8 h-8 text-white/80" />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-black/30"></div>
                        <div className="relative text-white z-10">
                          <h3 className="text-2xl font-bold">{food.name}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{food.region} India</span>
                            {food.is_vegetarian && (
                              <div className="flex items-center gap-1 bg-green-500 px-2 py-1 rounded-full text-xs">
                                <Leaf className="w-3 h-3" />
                                Veg
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="p-6">
                        <p className="text-amber-900 leading-relaxed">
                          {food.description}
                        </p>

                        <div className="flex justify-between items-center mt-4">
                          <div className="flex items-center gap-1 text-amber-500">
                            {Array(5).fill(0).map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                          </div>
                          <Heart className="w-5 h-5 text-red-500 cursor-pointer hover:scale-110 transition-transform" />
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Cooking Challenge Modal */}
        <AnimatePresence>
          {showChallenge && selectedChallenge && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
              onClick={() => !showResult && setShowChallenge(false)}
            >
              <motion.div
                initial={{ scale: 0.8, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 50 }}
                className="bg-amber-50 rounded-3xl p-8 max-w-2xl w-full shadow-2xl max-h-[90vh] overflow-y-auto border-4 border-amber-400"
                onClick={e => e.stopPropagation()}
              >
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{selectedChallenge.emoji}</div>
                  <h2 className="text-3xl font-bold text-amber-900 mb-2">
                    Cook {selectedChallenge.dish}!
                  </h2>
                  <p className="text-amber-700 text-lg">
                    Arrange ingredients in the correct cooking order
                  </p>
                </div>

                {!showResult ? (
                  <>
                    <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-6 mb-6 min-h-[150px] border-2 border-dashed border-amber-400">
                      <h3 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                        <ChefHat className="w-5 h-5" />
                        Your Recipe Order:
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {playerIngredients.length === 0 ? (
                          <p className="text-amber-600 italic">Click ingredients below to add them...</p>
                        ) : (
                          playerIngredients.map((ingredient, index) => (
                            <motion.div
                              key={index}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="bg-white px-4 py-2 rounded-full shadow-md flex items-center gap-2 cursor-pointer hover:bg-red-50 border-2 border-amber-300"
                              onClick={() => removeIngredient(ingredient)}
                            >
                              <span className="font-semibold text-amber-900">{index + 1}. {ingredient}</span>
                              <XCircle className="w-4 h-4 text-red-500" />
                            </motion.div>
                          ))
                        )}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-bold text-amber-900 mb-3">Available Ingredients:</h3>
                      <div className="flex flex-wrap gap-3">
                        {availableIngredients.map((ingredient, index) => (
                          <motion.button
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => addIngredient(ingredient)}
                            className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all border-2 border-amber-600"
                          >
                            {ingredient}
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button
                        onClick={checkRecipe}
                        disabled={playerIngredients.length !== selectedChallenge.ingredients.length}
                        className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-4 rounded-2xl font-bold text-lg disabled:opacity-50"
                      >
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Check Recipe!
                      </Button>
                      <Button
                        onClick={() => setShowChallenge(false)}
                        variant="outline"
                        className="px-6 py-4 rounded-2xl font-bold border-2 border-amber-400"
                      >
                        Cancel
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className="text-center">
                    {isCorrect ? (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="space-y-4"
                      >
                        <div className="text-8xl">🎉</div>
                        <h3 className="text-3xl font-bold text-green-700">Perfect Recipe!</h3>
                        <p className="text-xl text-amber-800">
                          You are an amazing chef! +50 points!
                        </p>
                        <Button
                          onClick={() => {
                            setShowChallenge(false);
                            setShowResult(false);
                          }}
                          className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-2xl font-bold text-lg"
                        >
                          Cook Another Dish!
                        </Button>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="space-y-4"
                      >
                        <div className="text-8xl">😅</div>
                        <h3 className="text-3xl font-bold text-orange-700">Oops! Try Again!</h3>
                        <p className="text-xl text-amber-800">
                          The order was not quite right. Let's try again!
                        </p>
                        <div className="bg-blue-50 p-4 rounded-2xl border-2 border-blue-300">
                          <p className="font-semibold text-blue-900 mb-2">Correct Order:</p>
                          <div className="flex flex-wrap gap-2 justify-center">
                            {selectedChallenge.correctOrder.map((ing, i) => (
                              <span key={i} className="bg-blue-200 px-3 py-1 rounded-full text-sm font-semibold text-blue-900">
                                {i + 1}. {ing}
                              </span>
                            ))}
                          </div>
                        </div>
                        <Button
                          onClick={() => {
                            setShowResult(false);
                            setPlayerIngredients([]);
                            const shuffled = [...selectedChallenge.ingredients].sort(() => Math.random() - 0.5);
                            setAvailableIngredients(shuffled);
                          }}
                          className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-2xl font-bold text-lg"
                        >
                          Try Again!
                        </Button>
                      </motion.div>
                    )}
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Spice Fact Modal */}
        <AnimatePresence>
          {showSpiceFact && currentSpiceFact && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
              onClick={() => setShowSpiceFact(false)}
            >
              <motion.div
                initial={{ scale: 0.8, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0.8, rotate: 10 }}
                className="bg-gradient-to-br from-amber-100 to-yellow-100 rounded-3xl p-8 max-w-lg w-full shadow-2xl border-4 border-amber-500"
                onClick={e => e.stopPropagation()}
              >
                <div className="text-center">
                  <div className="text-8xl mb-4">{currentSpiceFact.emoji}</div>
                  <h2 className="text-3xl font-bold text-amber-900 mb-2">
                    {currentSpiceFact.name}
                  </h2>
                  <div className="bg-white/70 rounded-2xl p-4 mb-4 border-2 border-amber-300">
                    <p className="text-sm font-semibold text-amber-700 mb-1">Origin:</p>
                    <p className="text-lg font-bold text-amber-900">{currentSpiceFact.origin}</p>
                  </div>
                  <p className="text-lg text-amber-900 leading-relaxed mb-6">
                    {currentSpiceFact.fact}
                  </p>
                  <div className="flex gap-3">
                    <Button
                      onClick={showRandomSpiceFact}
                      className="flex-1 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-3 rounded-2xl font-bold"
                    >
                      <Sparkles className="w-5 h-5 mr-2" />
                      Another Fact!
                    </Button>
                    <Button
                      onClick={() => setShowSpiceFact(false)}
                      variant="outline"
                      className="px-8 py-3 rounded-2xl font-bold border-2 border-amber-400"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Fun Facts Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl p-8 text-white shadow-2xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            🌶️ Amazing Food Facts!
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/20 backdrop-blur rounded-2xl p-6 text-center">
              <Utensils className="w-10 h-10 mx-auto mb-3 text-yellow-200" />
              <h4 className="font-bold text-lg mb-2">1000+ Dishes</h4>
              <p className="text-amber-100 text-sm">Each region has hundreds of unique recipes!</p>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-2xl p-6 text-center">
              <Leaf className="w-10 h-10 mx-auto mb-3 text-green-200" />
              <h4 className="font-bold text-lg mb-2">World's Best Vegetarian</h4>
              <p className="text-amber-100 text-sm">India has the most delicious vegetarian food!</p>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-2xl p-6 text-center">
              <Star className="w-10 h-10 mx-auto mb-3 text-yellow-200" />
              <h4 className="font-bold text-lg mb-2">Ancient Spices</h4>
              <p className="text-amber-100 text-sm">India gave the world amazing spices!</p>
            </div>
          </div>
        </motion.div>

        {/* Diwali 2025 Dates */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl p-8 text-white shadow-2xl text-center"
        >
          <CalendarDays className="w-12 h-12 mx-auto mb-4 text-yellow-200" />
          <h3 className="text-3xl font-bold mb-3">Diwali 2025</h3>
          <p className="text-lg text-red-100">
            Get ready to celebrate the Festival of Lights!
          </p>
          <p className="text-2xl font-semibold text-white mt-2">
            October 21 - October 25, 2025
          </p>
          <p className="text-sm text-red-200 mt-1">(Main Celebrations: October 23rd)</p>
        </motion.div>

        {/* Team Members Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-8 text-white shadow-2xl"
        >
          <Users className="w-12 h-12 mx-auto mb-4 text-blue-200" />
          <h3 className="text-3xl font-bold mb-6 text-center">
            Meet the Flavorful Team!
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/20 backdrop-blur rounded-2xl p-6 text-center">
              <img src="https://api.dicebear.com/7.x/adventurer/svg?seed=Nisha" alt="Nisha" className="w-20 h-20 rounded-full mx-auto mb-3 bg-blue-300 p-1" />
              <h4 className="font-bold text-lg mb-1">Nisha Sharma</h4>
              <p className="text-blue-100 text-sm">Head Chef & Creator</p>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-2xl p-6 text-center">
              <img src="https://api.dicebear.com/7.x/adventurer/svg?seed=Rahul" alt="Rahul" className="w-20 h-20 rounded-full mx-auto mb-3 bg-blue-300 p-1" />
              <h4 className="font-bold text-lg mb-1">Rahul Singh</h4>
              <p className="text-blue-100 text-sm">Spice Master & Dev</p>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-2xl p-6 text-center">
              <img src="https://api.dicebear.com/7.x/adventurer/svg?seed=Priya" alt="Priya" className="w-20 h-20 rounded-full mx-auto mb-3 bg-blue-300 p-1" />
              <h4 className="font-bold text-lg mb-1">Priya Patel</h4>
              <p className="text-blue-100 text-sm">Taste Tester & Designer</p>
            </div>
          </div>
        </motion.div>

        {/* Mascot with closeable message */}
        <AnimatePresence>
          {showMascotMessage && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative mt-12"
            >
              <Mascot
                pose="sweets"
                message="Mmm! Are you getting hungry? I love trying different dishes from each region. Travel on our food truck and play games to learn more! What looks yummiest to you? 🤤🍛"
              />
              <Button
                onClick={() => setShowMascotMessage(false)}
                className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white w-8 h-8 p-0 rounded-full flex items-center justify-center shadow-lg"
              >
                <X className="w-4 h-4" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
