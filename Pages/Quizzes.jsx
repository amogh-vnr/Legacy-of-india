
import React, { useState, useEffect } from 'react';
import { Quiz } from '@/entities/Quiz';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ClipboardCheck, 
  Trophy, 
  Star,
  CheckCircle,
  XCircle,
  RotateCcw,
  Sparkles,
  Target,
  Award
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Mascot from '../Components/NewMascot';

export default function Quizzes() {
  const [quizzes, setQuizzes] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [quizComplete, setQuizComplete] = useState(false);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const data = await Quiz.list();
        setQuizzes(data);
      } catch (error) {
        console.error('Error fetching quizzes:', error);
        setQuizzes([]);
      }
      setIsLoading(false);
    };
    fetchQuizzes();
  }, []);

  const handleQuizSelect = (quiz) => {
    setSelectedQuiz(quiz);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer('');
    setShowResult(false);
    setAnsweredQuestions([]);
    setQuizComplete(false);
  };

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNext = () => {
    const isCorrect = selectedAnswer === selectedQuiz.questions[currentQuestion].correct_answer;
    const newAnsweredQuestions = [...answeredQuestions, {
      question: selectedQuiz.questions[currentQuestion].question,
      selectedAnswer,
      correctAnswer: selectedQuiz.questions[currentQuestion].correct_answer,
      isCorrect
    }];
    
    setAnsweredQuestions(newAnsweredQuestions);
    
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion < selectedQuiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer('');
    } else {
      setQuizComplete(true);
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setSelectedQuiz(null);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer('');
    setShowResult(false);
    setAnsweredQuestions([]);
    setQuizComplete(false);
  };

  const getScoreMessage = () => {
    const percentage = (score / selectedQuiz.questions.length) * 100;
    if (percentage >= 80) return "Amazing! You're an India expert! 🌟";
    if (percentage >= 60) return "Great job! You know India well! 👏";
    if (percentage >= 40) return "Good try! Keep learning about India! 📚";
    return "Don't worry! Every expert was once a beginner! 💪";
  };

  const getTaruMessage = () => {
    if (showResult) {
      const percentage = (score / selectedQuiz.questions.length) * 100;
      if (percentage >= 80) return "WOW! You're absolutely brilliant! I'm so proud of you! You really know India well! 🎉🌟";
      if (percentage >= 60) return "Fantastic work! You did really well! Keep exploring and learning more about our amazing country! 🎊";
      if (percentage >= 40) return "Good effort! Learning is a journey, and you're on the right path! Try another quiz to learn more! 📖✨";
      return "Hey, don't feel bad! Even I had to learn all this stuff! The important thing is you're curious about India. That's awesome! 🤗💚";
    }
    if (selectedQuiz) {
      return `Take your time and think carefully! Remember, learning about India is fun, not stressful! You've got this! 🧠💪`;
    }
    return "Ready to test your India knowledge? These quizzes are super fun! Pick one and let's see how much you know about our incredible country! 🎯🚀";
  };

  if (isLoading) {
    return (
      <div className="min-h-screen py-12 px-4 flex items-center justify-center">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-orange-400 border-t-transparent rounded-full mx-auto mb-4"
          ></motion.div>
          <p className="text-xl text-gray-600">Loading awesome quizzes...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {!selectedQuiz ? (
          <div>
            {/* Header */}
            <div className="text-center mb-12">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"
              >
                🎯 Fun India Quizzes
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-600 max-w-3xl mx-auto"
              >
                Test your knowledge about India's amazing states, history, culture, and more! Are you ready for the challenge?
              </motion.p>
            </div>

            {/* Quiz Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {quizzes.map((quiz, index) => (
                <motion.div
                  key={quiz.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-3xl shadow-2xl border-4 border-transparent hover:border-green-300 transition-all duration-300 overflow-hidden cursor-pointer"
                  onClick={() => handleQuizSelect(quiz)}
                >
                  <div className="h-32 bg-gradient-to-br from-green-400 to-blue-500 p-6 flex items-end">
                    <div className="text-white">
                      <ClipboardCheck className="w-8 h-8 mb-2" />
                      <h3 className="text-xl font-bold">{quiz.title}</h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">Topic: <span className="font-semibold text-blue-600">{quiz.topic}</span></p>
                    <p className="text-gray-600 mb-4">{quiz.questions.length} Questions</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-yellow-500">
                        {Array(3).fill(0).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-green-600 font-semibold">Start Quiz →</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            {/* Quiz Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-between mb-4">
                <Button
                  variant="outline"
                  onClick={resetQuiz}
                  className="rounded-full"
                >
                  ← Back to Quizzes
                </Button>
                <div className="text-sm text-gray-600">
                  Question {currentQuestion + 1} of {selectedQuiz.questions.length}
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                {selectedQuiz.title}
              </h2>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / selectedQuiz.questions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {!showResult ? (
                <motion.div
                  key={currentQuestion}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-green-200"
                >
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-8">
                    {selectedQuiz.questions[currentQuestion].question}
                  </h3>
                  
                  <div className="space-y-4 mb-8">
                    {selectedQuiz.questions[currentQuestion].options.map((option, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleAnswerSelect(option)}
                        className={`w-full p-4 text-left rounded-2xl border-2 transition-all duration-200 ${
                          selectedAnswer === option
                            ? 'border-green-500 bg-green-50 text-green-700'
                            : 'border-gray-200 hover:border-green-300 hover:bg-green-50'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-4 h-4 rounded-full border-2 ${
                            selectedAnswer === option ? 'border-green-500 bg-green-500' : 'border-gray-300'
                          }`}>
                            {selectedAnswer === option && (
                              <div className="w-2 h-2 bg-white rounded-full mx-auto mt-1"></div>
                            )}
                          </div>
                          <span className="font-medium">{option}</span>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                  
                  <Button
                    onClick={handleNext}
                    disabled={!selectedAnswer}
                    className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white py-3 rounded-2xl font-semibold disabled:opacity-50"
                  >
                    {currentQuestion < selectedQuiz.questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-yellow-200 text-center"
                >
                  <div className="mb-8">
                    <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">Quiz Complete!</h3>
                    <div className="text-6xl font-bold mb-2">
                      <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                        {score}/{selectedQuiz.questions.length}
                      </span>
                    </div>
                    <p className="text-xl text-gray-600 mb-6">{getScoreMessage()}</p>
                    
                    {/* Score breakdown */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-green-50 p-4 rounded-2xl">
                        <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
                        <p className="font-bold text-green-700">{score} Correct</p>
                      </div>
                      <div className="bg-red-50 p-4 rounded-2xl">
                        <XCircle className="w-8 h-8 text-red-500 mx-auto mb-2" />
                        <p className="font-bold text-red-700">{selectedQuiz.questions.length - score} Wrong</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 justify-center">
                    <Button
                      onClick={() => handleQuizSelect(selectedQuiz)}
                      className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6"
                    >
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Try Again
                    </Button>
                    <Button
                      onClick={resetQuiz}
                      className="bg-green-500 hover:bg-green-600 text-white rounded-full px-6"
                    >
                      <Target className="w-4 h-4 mr-2" />
                      More Quizzes
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
        
        <Mascot 
          pose={showResult ? "dancing" : "default"}
          message={getTaruMessage()}
          position="floating" 
        />
      </div>
    </div>
  );
}
