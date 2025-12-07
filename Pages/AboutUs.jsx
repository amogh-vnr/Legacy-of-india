import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Heart,
  Users,
  Target,
  Sparkles,
  Award,
  Globe,
  MessageSquare,
  Send,
  Star,
  Mail,
  Share2,
  UserPlus
} from 'lucide-react';

export default function AboutUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    ageGroup: '',
    message: '',
    favoriteState: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    setShowSuccess(true);
    setIsSubmitting(false);

    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        ageGroup: '',
        message: '',
        favoriteState: ''
      });
      setShowSuccess(false);
    }, 3000);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Legacy of India',
        text: 'Discover India\'s amazing heritage and culture!',
        url: window.location.origin,
      });
    } else {
      navigator.clipboard.writeText(window.location.origin);
      alert('Link copied! Share it with friends! 🎉');
    }
  };

  const ageGroups = [
    { value: 'below-12', label: '🎈 Below 12 years', description: 'Young explorers' },
    { value: '12-18', label: '🎓 12-18 years', description: 'Teen learners' },
    { value: 'above-18', label: '👨‍🎓 Above 18 years', description: 'Adult enthusiasts' }
  ];

  return (
    <div className="min-h-screen py-12 px-4 bg-gradient-to-br from-[#FFF7E9] to-[#EAD9C6]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6 text-[#4E342E]"
          >
            💖 About Legacy of India
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#3E2C24] max-w-3xl mx-auto leading-relaxed"
          >
            Where tradition meets design — celebrating India's timeless heritage
          </motion.p>
          <div className="h-1 w-32 mx-auto mt-6 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
        </div>

        {/* Our Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-3xl p-8 md:p-12 text-[#4E342E] shadow-2xl mb-12 border-4 border-[#4E342E]"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-[#FFF7E9] rounded-full flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-[#D4AF37]" />
            </div>
            <h2 className="text-3xl font-display font-bold">Our Story</h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              When Nakshatra moved from Pune to Hyderabad, she expected the usual — new friends, new school, a new city to adjust to. What she did not expect was the silence she noticed in conversations.
            </p>

            <p>
              Her classmates were brilliant and deeply connected to global culture. They could spend hours debating K-pop biases, anime arcs, Hollywood characters, and the latest global trends. Memes, aesthetics, fandoms — they knew it all. Every story felt modern and alive.
            </p>

            <p>
              But the moment someone mentioned India, its heroes, festivals, gods, legends, a quietness slipped in. Not because they were not interested… but because they did not really know what to say.
            </p>

            <p>
              For Nakshatra, this felt strange. She was raised on stories that breathed life into everyday moments. Her grandfather could narrate the Ramayana like a time-travel experience. Her grandmother used Mahabharata tales to explain kindness, bravery, every decision that mattered. To her, India's stories were not "old chapters." They were living memories.
            </p>

            <p className="italic">
              So why did they feel invisible to her peers?
            </p>

            <p>
              One day, a question struck her: <span className="font-semibold">"Why does the world celebrate its culture so beautifully, while ours feels hidden behind dust?"</span>
            </p>

            <p>
              K-pop had fandoms. Anime had global communities. Western stories were everywhere, fun, stylish, exciting. But India's cultural richness? It did not have a home that felt modern, magical, or made for today's generation.
            </p>

            <p className="font-bold text-xl">
              That thought became a spark. 🪔
            </p>

            <p>
              Nakshatra began sketching ideas: experiences, features, characters, stories. Not coding a ton, just shaping a vision. She dreamed of a place where India felt alive again.
            </p>

            <p>
              Soon after, <span className="font-semibold">Siri</span> joined. She understood emotion and connection. She could take that idea and tell it in a way that made people instantly feel a sense of pride. She designed, wrote, imagined, turning the spark into something people could believe in.
            </p>

            <p>
              Then came <span className="font-semibold">Amogh</span>. He organized, refined, and strengthened everything. He took ideas that lived as fragments and made them flow together: clear, stable, meaningful.
            </p>

            <p>
              They did not just divide the work. <span className="font-bold">They blended their strengths.</span> Nakshatra imagined and created. Siri shaped the voice and experience. Amogh built structure and clarity.
            </p>

            <p>
              Slowly, scattered notes became a project. Random ideas became features and stories. And then more people joined. Friends, classmates, mentors, designers, writers, culture-lovers, each adding their own spark. What began as three voices grew into a shared passion.
            </p>

            <p className="font-bold text-xl text-center">
              That is how Legacy of India was born. ✨
            </p>

            <p>
              Not as a company. Not as a school project. But as a promise: <span className="font-semibold">To help India feel loved again by its own people.</span>
            </p>

            <p>
              Today, LOI is a digital home for India's living heritage, where kids explore culture like a game, teenagers reconnect with identity, and adults rediscover the warmth of the stories they grew up with.
            </p>

            <p className="font-bold text-xl text-center mt-8">
              At its heart, LOI believes something simple: India isn't history. It's legacy. A heritage that still beats, bold, beautiful, and alive. And it deserves to be celebrated with pride, wonder, and a modern spirit. 🇮🇳
            </p>
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#EAD9C6] rounded-3xl p-8 md:p-12 shadow-2xl mb-12 border-4 border-[#D4AF37]"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-full flex items-center justify-center">
              <Target className="w-8 h-8 text-[#4E342E]" />
            </div>
            <h2 className="text-3xl font-display font-bold text-[#4E342E]">Our Mission</h2>
          </div>
          <p className="text-lg text-[#3E2C24] leading-relaxed">
            To inspire every child, teenager, and adult to discover, celebrate, and preserve India's magnificent heritage through beautiful design, interactive experiences, and heartfelt storytelling. We believe that knowing our roots makes us stronger, and celebrating our culture makes us prouder.
          </p>
        </motion.div>

        {/* Developer Studio Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          {/* Studio Header */}
          <div className="text-center mb-8">
            <motion.div
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block"
            >
              <h2 className="text-4xl font-display font-bold text-[#4E342E] mb-2">
                🚀 LOI Developer Studio
              </h2>
              <p className="text-[#3E2C24] font-mono text-sm">{"<building_the_future />"}</p>
            </motion.div>
          </div>

          {/* Developer Studio Frame */}
          <div className="relative bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f23] rounded-3xl p-8 mb-12 border-2 border-[#D4AF37] overflow-hidden">
            {/* Animated Code Lines Background */}
            <div className="absolute inset-0 overflow-hidden opacity-20">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ x: '-100%' }}
                  animate={{ x: '200%' }}
                  transition={{ duration: 8 + i * 2, repeat: Infinity, delay: i * 0.5 }}
                  className="absolute h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
                  style={{ top: `${10 + i * 12}%`, width: '50%' }}
                />
              ))}
            </div>

            {/* Terminal Window Header */}
            <div className="bg-[#2d2d3a] rounded-t-xl p-3 flex items-center gap-2 mb-4 border-b border-[#D4AF37]/30">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-[#D4AF37] font-mono text-sm ml-4">~/legacy-of-india/team</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-[#D4AF37] font-mono"
              >▊</motion.span>
            </div>

            {/* Floating Skill Icons */}
            <div className="absolute top-20 right-8 flex flex-col gap-4">
              {['⚛️', '🔧', '📊', '🎨'].map((icon, i) => (
                <motion.span
                  key={i}
                  animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  className="text-2xl"
                >{icon}</motion.span>
              ))}
            </div>

            {/* Constellation Map Background */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
              <motion.line
                x1="25%" y1="50%" x2="50%" y2="50%"
                stroke="#D4AF37" strokeWidth="2"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.line
                x1="50%" y1="50%" x2="75%" y2="50%"
                stroke="#D4AF37" strokeWidth="2"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
            </svg>

            {/* Core Stars - Developers */}
            <div className="relative z-10">
              <div className="text-center mb-6">
                <motion.span 
                  animate={{ 
                    boxShadow: ['0 0 20px #D4AF37', '0 0 40px #FFD700', '0 0 20px #D4AF37'],
                    textShadow: ['0 0 10px #D4AF37', '0 0 20px #FFD700', '0 0 10px #D4AF37']
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-[#1a1a2e] px-8 py-3 rounded-full font-bold text-lg"
                >
                  <motion.span animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>⚙️</motion.span>
                  CORE STARS
                  <motion.span animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>✨</motion.span>
                </motion.span>
              </div>

              <p className="text-center text-[#EAD9C6] mb-8 max-w-2xl mx-auto font-mono text-sm">
                {"// The architects behind LOI's technology stack"}
              </p>

              {/* Developer Cards - Constellation Nodes */}
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Nakshatra T",
                    starTitle: "⭐ Core Star",
                    role: "Founder & Lead Developer",
                    description: "The visionary powering LOI's codebase.",
                    icon: "💻",

                    color: "from-[#FFD700] to-[#D4AF37]"
                  },
                  {
                    name: "Amogh B",
                    starTitle: "🧭 Navigator Star",
                    role: "Strategist & Developer",
                    description: "Architecting the future of heritage tech.",
                    icon: "💡",

                    color: "from-[#D4AF37] to-[#B8941F]"
                  },
                  {
                    name: "Siri Vadlamudi",
                    starTitle: "🔨 Builder Star",
                    role: "Communications & Developer",
                    description: "Crafting digital experiences with code.",
                    icon: "✏️",

                    color: "from-[#B8941F] to-[#C4A972]"
                  }
                ].map((dev, index) => (
                  <motion.div
                    key={dev.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ scale: 1.08, y: -15 }}
                    className="group relative"
                  >
                    {/* Glow Effect */}
                    <motion.div
                      animate={{ 
                        boxShadow: ['0 0 30px rgba(212,175,55,0.4)', '0 0 60px rgba(255,215,0,0.6)', '0 0 30px rgba(212,175,55,0.4)']
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute inset-0 rounded-3xl"
                    />
                    
                    <div className="relative bg-gradient-to-br from-[#2d2d3a] to-[#1a1a2e] rounded-3xl border-2 border-[#D4AF37] overflow-hidden">
                      {/* Gold Bar */}
                      <div className="h-2 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37]"></div>
                      
                      {/* Star Title */}
                      <div className="text-center pt-4">
                        <motion.span
                          animate={{ textShadow: ['0 0 5px #FFD700', '0 0 15px #FFD700', '0 0 5px #FFD700'] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="text-[#FFD700] font-bold text-sm"
                        >
                          {dev.starTitle}
                        </motion.span>
                      </div>

                      {/* Icon with Glow */}
                      <div className={`h-40 bg-gradient-to-br ${dev.color} mx-4 mt-4 rounded-2xl flex items-center justify-center relative overflow-hidden`}>
                        <motion.div
                          animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.1, 1] }}
                          transition={{ duration: 4, repeat: Infinity }}
                          className="text-8xl drop-shadow-2xl"
                        >
                          {dev.icon}
                        </motion.div>
                        {/* Floating particles */}
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{ y: [-20, -40], opacity: [0, 1, 0] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                            className="absolute text-xs"
                            style={{ left: `${20 + i * 15}%`, bottom: '20%' }}
                          >✨</motion.div>
                        ))}
                      </div>

                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-[#FFD700] mb-1 text-center">
                          {dev.name}
                        </h3>
                        <motion.p 
                          animate={{ opacity: [0.7, 1, 0.7] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="text-[#D4AF37] font-mono text-center mb-3 text-sm"
                        >
                          {dev.role}
                        </motion.p>
                        <p className="text-[#EAD9C6] text-center text-sm mb-4">
                          {dev.description}
                        </p>

                        {/* Hover Detail */}
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          whileHover={{ opacity: 1, height: 'auto' }}
                          className="overflow-hidden"
                        >
                          <p className="text-center text-[#FFD700] text-xs italic border-t border-[#D4AF37]/30 pt-3 mt-4 font-mono">
                            "They build and power LOI's vision."
                          </p>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Community Partners Strip */}
          <div className="bg-[#EAD9C6]/50 rounded-2xl p-6 border border-[#D4AF37]/40">
            <div className="text-center mb-4">
              <span className="inline-flex items-center gap-2 text-[#4E342E] font-semibold text-sm">
                🤝 Community Partners
              </span>
              <p className="text-[#3E2C24] text-xs mt-1">Supporting and amplifying LOI's mission</p>
            </div>

            <div className="flex justify-center gap-6 flex-wrap">
              {[
                { name: "Samyuktha", role: "Campaign Lead", icon: "🪔" },
                { name: "B Vaseekar", role: "Outreach", icon: "🤝" },
                { name: "DAL Merlyn", role: "Marketing", icon: "📣" }
              ].map((partner, index) => (
                <motion.div
                  key={partner.name}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/60 rounded-xl px-6 py-4 border border-[#D4AF37]/30 flex items-center gap-3"
                >
                  {/* Silver Bar */}
                  <div className="w-1 h-10 bg-gradient-to-b from-[#C0C0C0] to-[#A0A0A0] rounded-full"></div>
                  <span className="text-2xl">{partner.icon}</span>
                  <div>
                    <p className="font-semibold text-[#4E342E] text-sm">{partner.name}</p>
                    <p className="text-[#3E2C24] text-xs">{partner.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: Heart,
              title: "Love for Heritage",
              description: "We celebrate India's timeless traditions with passion and authenticity",
              color: "from-[#D4AF37] to-[#B8941F]"
            },
            {
              icon: Users,
              title: "Community Spirit",
              description: "Bringing people together to share and learn about our cultural roots",
              color: "from-[#B8941F] to-[#9A7A1A]"
            },
            {
              icon: Globe,
              title: "Cultural Pride",
              description: "Inspiring the next generation to appreciate and preserve our legacy",
              color: "from-[#C4A972] to-[#A68D56]"
            }
          ].map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#EAD9C6] rounded-2xl p-6 shadow-xl border-2 border-[#D4AF37]"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                <value.icon className="w-7 h-7 text-[#4E342E]" />
              </div>
              <h3 className="text-xl font-bold text-[#4E342E] mb-3 text-center">{value.title}</h3>
              <p className="text-[#3E2C24] text-center leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Registration Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#EAD9C6] rounded-3xl shadow-2xl border-4 border-[#D4AF37] p-8 md:p-12 mb-12"
        >
          <div className="flex items-center gap-4 mb-8 justify-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-full flex items-center justify-center">
              <UserPlus className="w-8 h-8 text-[#4E342E]" />
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-display font-bold text-[#4E342E]">Join Our Community</h2>
              <p className="text-[#3E2C24]">Register and become part of the Legacy family!</p>
            </div>
          </div>

          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-6 p-4 rounded-2xl border-2 border-[#D4AF37] bg-[#FFF7E9] flex gap-3"
            >
              <Heart className="h-5 w-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
              <p className="text-[#4E342E]">
                🎉 Welcome to the Legacy family! Thank you for joining us in celebrating India's incredible heritage!
              </p>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-[#4E342E] font-semibold block text-lg">
                  Your Name *
                </label>
                <input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Enter your name"
                  required
                  className="w-full h-14 rounded-2xl border-2 border-[#D4AF37] bg-[#FFF7E9] text-[#4E342E] placeholder:text-[#3E2C24]/50 px-4 focus:border-[#B8941F] focus:outline-none text-lg"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-[#4E342E] font-semibold block text-lg">
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="your.email@example.com"
                  required
                  className="w-full h-14 rounded-2xl border-2 border-[#D4AF37] bg-[#FFF7E9] text-[#4E342E] placeholder:text-[#3E2C24]/50 px-4 focus:border-[#B8941F] focus:outline-none text-lg"
                />
              </div>
            </div>

            {/* Age Group Selection */}
            <div className="space-y-3">
              <label className="text-[#4E342E] font-semibold block text-lg">
                Select Your Age Group *
              </label>
              <div className="grid md:grid-cols-3 gap-4">
                {ageGroups.map((group) => (
                  <motion.button
                    key={group.value}
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleInputChange('ageGroup', group.value)}
                    className={`p-4 rounded-2xl border-2 transition-all duration-200 text-left ${
                      formData.ageGroup === group.value
                        ? 'border-[#D4AF37] bg-[#D4AF37] text-[#4E342E]'
                        : 'border-[#D4AF37] bg-[#FFF7E9] text-[#3E2C24] hover:bg-[#D4AF37]/20'
                    }`}
                  >
                    <div className="text-2xl mb-2">{group.label.split(' ')[0]}</div>
                    <div className="font-bold mb-1">{group.label.substring(2)}</div>
                    <div className="text-sm opacity-80">{group.description}</div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Favorite State */}
            <div className="space-y-2">
              <label htmlFor="favoriteState" className="text-[#4E342E] font-semibold block text-lg">
                Favorite State or Topic (Optional)
              </label>
              <input
                id="favoriteState"
                value={formData.favoriteState}
                onChange={(e) => handleInputChange('favoriteState', e.target.value)}
                placeholder="Which part of India interests you most?"
                className="w-full h-14 rounded-2xl border-2 border-[#D4AF37] bg-[#FFF7E9] text-[#4E342E] placeholder:text-[#3E2C24]/50 px-4 focus:border-[#B8941F] focus:outline-none text-lg"
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-[#4E342E] font-semibold block text-lg">
                Your Message (Optional)
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                placeholder="Tell us what excites you about India's heritage, or ask us anything!"
                className="w-full h-32 rounded-2xl border-2 border-[#D4AF37] bg-[#FFF7E9] text-[#4E342E] placeholder:text-[#3E2C24]/50 p-4 focus:border-[#B8941F] focus:outline-none resize-none text-lg"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || !formData.name || !formData.email || !formData.ageGroup}
              className="w-full bg-gradient-to-r from-[#4E342E] to-[#3E2C24] hover:from-[#3E2C24] hover:to-[#2E1C14] text-[#D4AF37] h-16 rounded-2xl font-bold text-xl disabled:opacity-50 border-2 border-[#D4AF37] shadow-xl transition-all flex items-center justify-center gap-3"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-[#D4AF37] border-t-transparent rounded-full animate-spin" />
                  Joining the Legacy...
                </>
              ) : (
                <>
                  <Send className="w-6 h-6" />
                  Join Legacy of India
                </>
              )}
            </button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#D4AF37] to-[#B8941F] rounded-3xl p-8 text-[#4E342E] shadow-2xl text-center border-4 border-[#4E342E]"
        >
          <Mail className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
          <p className="text-lg mb-4">Have questions? Want to share feedback? We'd love to hear from you!</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:hello@legacyofindia.com"
              className="bg-[#4E342E] text-[#D4AF37] px-6 py-3 rounded-full font-semibold hover:bg-[#3E2C24] transition-colors border-2 border-[#FFF7E9]"
            >
              📧 Email Us
            </a>
            <a
              href="https://chat.whatsapp.com/DvlevnRHhaOAqRivQUfa8a"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#4E342E] text-[#D4AF37] px-6 py-3 rounded-full font-semibold hover:bg-[#3E2C24] transition-colors border-2 border-[#FFF7E9]"
            >
              💬 WhatsApp Community
            </a>
            <a
              href="https://www.instagram.com/legacyofindia"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#4E342E] text-[#D4AF37] px-6 py-3 rounded-full font-semibold hover:bg-[#3E2C24] transition-colors border-2 border-[#FFF7E9]"
            >
              📸 Instagram
            </a>
          </div>
        </motion.div>

        {/* Call to Action with Share */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-[#EAD9C6] rounded-3xl p-8 text-center shadow-xl border-4 border-[#D4AF37]"
        >
          <Award className="w-16 h-16 text-[#D4AF37] mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-[#4E342E] mb-4">
            Together, Let's Light the Legacy
          </h2>
          <p className="text-lg text-[#3E2C24] max-w-2xl mx-auto leading-relaxed mb-6">
            Every story you read, every state you explore, every quiz you ace — you're keeping India's incredible legacy alive and glowing. Thank you for being part of this beautiful journey! 🪔✨
          </p>
          <button
            onClick={handleShare}
            className="bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-[#4E342E] px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 mx-auto hover:from-[#B8941F] hover:to-[#9A7A1A] border-2 border-[#4E342E] shadow-lg"
          >
            <Share2 className="w-6 h-6" />
            Share Legacy of India
          </button>
        </motion.div>
      </div>
    </div>
  );
}
