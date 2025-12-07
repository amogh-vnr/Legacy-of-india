import React from 'react';
import { motion } from 'framer-motion';
import { Instagram as InstagramIcon, ExternalLink, Heart, MessageCircle, Share2 } from 'lucide-react';
import NewMascot from '../Components/NewMascot';

export default function Instagram() {
  const instagramUrl = 'https://www.instagram.com/legacy_.of.india/';

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Legacy of India on Instagram',
        text: 'Follow us on Instagram for daily heritage posts! 📸✨',
        url: instagramUrl,
      });
    } else {
      navigator.clipboard.writeText(instagramUrl);
      alert('Instagram link copied! 🎉');
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 bg-gradient-to-br from-[#FFF7E9] to-[#EAD9C6]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-20 h-20 bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-2xl"
            >
              <InstagramIcon className="w-10 h-10 text-white" />
            </motion.div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
            Follow Us on Instagram
          </h1>
          <p className="text-xl text-[#3E2C24] max-w-3xl mx-auto mb-6">
            Join our Instagram family for daily heritage posts, stories, and celebrations! 📸✨
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:shadow-2xl transition-all shadow-lg border-2 border-white"
            >
              <InstagramIcon className="w-6 h-6" />
              <span>@legacy_.of.india</span>
              <ExternalLink className="w-5 h-5" />
            </a>

            <button
              onClick={handleShare}
              className="bg-[#EAD9C6] hover:bg-[#D4AF37] text-[#4E342E] px-8 py-4 rounded-full font-bold flex items-center gap-3 border-2 border-[#4E342E] shadow-lg"
            >
              <Share2 className="w-6 h-6" />
              <span>Share</span>
            </button>
          </div>
        </motion.div>

        {/* Instagram Embed Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-[#D4AF37] mb-12"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#4E342E] mb-4">
              Our Latest Posts
            </h2>
            <p className="text-[#3E2C24]">
              See what we're sharing about India's incredible heritage!
            </p>
          </div>

          {/* Instagram Feed Embed */}
          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <iframe
                src="https://www.instagram.com/legacy_.of.india/embed"
                className="w-full h-[600px] border-0 rounded-2xl shadow-lg"
                title="Instagram Feed"
                allowFullScreen
              />
            </div>
          </div>
        </motion.div>

        {/* Why Follow Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-[#4E342E] mb-8 text-center">
            Why Follow Us? ✨
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl p-8 border-4 border-pink-300 shadow-xl"
            >
              <div className="text-5xl mb-4 text-center">📸</div>
              <h3 className="text-xl font-bold text-pink-800 mb-3 text-center">
                Daily Heritage Posts
              </h3>
              <p className="text-pink-700 text-center">
                Beautiful photos and stories about India's monuments, culture, and traditions
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-purple-100 to-orange-100 rounded-3xl p-8 border-4 border-purple-300 shadow-xl"
            >
              <div className="text-5xl mb-4 text-center">🎉</div>
              <h3 className="text-xl font-bold text-purple-800 mb-3 text-center">
                Festival Celebrations
              </h3>
              <p className="text-purple-700 text-center">
                Join us in celebrating India's colorful festivals throughout the year
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-orange-100 to-pink-100 rounded-3xl p-8 border-4 border-orange-300 shadow-xl"
            >
              <div className="text-5xl mb-4 text-center">👥</div>
              <h3 className="text-xl font-bold text-orange-800 mb-3 text-center">
                Community Stories
              </h3>
              <p className="text-orange-700 text-center">
                Share your heritage moments and connect with fellow culture enthusiasts
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 rounded-3xl p-12 text-white text-center shadow-2xl border-4 border-[#4E342E]"
        >
          <div className="text-6xl mb-6">🇮🇳</div>
          <h2 className="text-4xl font-bold mb-4">
            Join Our Instagram Family!
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Don't miss out on daily doses of India's rich heritage, stories, and celebrations!
          </p>

          <div className="flex gap-4 justify-center items-center flex-wrap">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-600 px-10 py-5 rounded-full font-bold text-lg flex items-center gap-3 hover:scale-105 transition-transform shadow-2xl"
            >
              <InstagramIcon className="w-7 h-7" />
              <span>Follow @legacy_.of.india</span>
            </a>
          </div>
        </motion.div>
      </div>

      <NewMascot
        pose="dancing"
        message="Hey! Come check out our Instagram! 📸 We post amazing photos of India's monuments, festivals, and culture every day. Don't forget to follow and share with your friends! 🎉✨"
        position="bottom-right"
      />
    </div>
  );
}