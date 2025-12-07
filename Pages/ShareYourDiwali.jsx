import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DiwaliSubmission } from '@/entities/DiwaliSubmission';
import { base44 } from '@/api/base44Client';
import { 
  Upload, 
  Send, 
  Heart, 
  Sparkles, 
  Star,
  Instagram,
  MessageCircle,
  Camera,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

export default function ShareYourDiwali() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    photo_url: '',
    message: '',
    allow_feature: true
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [submissions, setSubmissions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [uploadingFile, setUploadingFile] = useState(false);

  useEffect(() => {
    loadSubmissions();
  }, []);

  const loadSubmissions = async () => {
    try {
      const data = await DiwaliSubmission.filter({ is_featured: true }, '-created_date', 12);
      setSubmissions(data);
    } catch (error) {
      console.error('Error loading submissions:', error);
    }
    setIsLoading(false);
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploadingFile(true);
    try {
      const result = await base44.integrations.Core.UploadFile({ file });
      setFormData({ ...formData, photo_url: result.file_url });
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Failed to upload image. Please try again.');
    }
    setUploadingFile(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await DiwaliSubmission.create({
        ...formData,
        submission_date: new Date().toISOString()
      });
      
      setShowThankYou(true);
      setFormData({
        name: '',
        email: '',
        photo_url: '',
        message: '',
        allow_feature: true
      });
      
      setTimeout(() => {
        setShowThankYou(false);
        loadSubmissions();
      }, 4000);
    } catch (error) {
      console.error('Error submitting:', error);
      alert('Failed to submit. Please try again.');
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen py-12 px-4 bg-gradient-to-br from-[#FFF7E9] via-[#EAD9C6] to-[#F3E8D9] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 opacity-10">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="80" fill="none" stroke="#D4AF37" strokeWidth="2" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="#D4AF37" strokeWidth="1" />
          <circle cx="100" cy="100" r="40" fill="none" stroke="#D4AF37" strokeWidth="1" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-96 h-96 opacity-10 rotate-45">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="80" fill="none" stroke="#D4AF37" strokeWidth="2" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="#D4AF37" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section 1: Intro Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 relative"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl opacity-20"
          >
            🪔
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-[#4E342E] leading-tight">
            This Diwali, let your light shine<br />with Legacy of India!
          </h1>
          
          <p className="text-2xl text-[#3E2C24] max-w-4xl mx-auto leading-relaxed mb-8">
            Upload your festive pictures, share your message, and be featured in our community wall and Instagram stories.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={() => document.getElementById('upload-section').scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-[#D4AF37] to-[#B8941F] hover:from-[#B8941F] hover:to-[#9A7A1A] text-[#4E342E] px-12 py-7 rounded-full text-xl font-bold shadow-2xl border-4 border-[#4E342E] gold-glow"
            >
              <Camera className="w-6 h-6 mr-3" />
              Share My Diwali Moment
            </Button>
          </motion.div>
        </motion.div>

        {/* Section 2: Upload Area */}
        <motion.div
          id="upload-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#EAD9C6] rounded-3xl shadow-2xl border-4 border-[#D4AF37] p-8 md:p-12 mb-16 relative overflow-hidden"
        >
          {/* Decorative diyas */}
          <div className="absolute top-4 left-4 text-4xl opacity-30">🪔</div>
          <div className="absolute top-4 right-4 text-4xl opacity-30">🪔</div>
          <div className="absolute bottom-4 left-4 text-4xl opacity-30">🪔</div>
          <div className="absolute bottom-4 right-4 text-4xl opacity-30">🪔</div>

          <div className="text-center mb-8">
            <h2 className="text-4xl font-display font-bold text-[#4E342E] mb-4">
              ✨ Share Your Light
            </h2>
            <p className="text-lg text-[#3E2C24]">
              Your Diwali memories make our community brighter!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[#4E342E] font-semibold text-lg">
                  Your Name *
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  required
                  className="h-14 rounded-2xl border-2 border-[#D4AF37] bg-[#FFF7E9] text-[#4E342E] focus:border-[#B8941F] text-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#4E342E] font-semibold text-lg">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  required
                  className="h-14 rounded-2xl border-2 border-[#D4AF37] bg-[#FFF7E9] text-[#4E342E] focus:border-[#B8941F] text-lg"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="photo" className="text-[#4E342E] font-semibold text-lg">
                Upload Your Diwali Photo *
              </Label>
              <div className="relative">
                <Input
                  id="photo"
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  required={!formData.photo_url}
                  className="h-14 rounded-2xl border-2 border-[#D4AF37] bg-[#FFF7E9] text-[#4E342E] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#D4AF37] file:text-[#4E342E] hover:file:bg-[#B8941F]"
                />
                {uploadingFile && (
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <div className="w-6 h-6 border-2 border-[#D4AF37] border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
              </div>
              {formData.photo_url && (
                <div className="mt-4 flex justify-center">
                  <img src={formData.photo_url} alt="Preview" className="max-h-48 rounded-2xl border-2 border-[#D4AF37]" />
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-[#4E342E] font-semibold text-lg">
                Your Message or Feedback *
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Share your Diwali wishes, memories, or thoughts about Legacy of India..."
                required
                className="h-32 rounded-2xl border-2 border-[#D4AF37] bg-[#FFF7E9] text-[#4E342E] focus:border-[#B8941F] resize-none text-lg"
              />
            </div>

            <div className="flex items-center space-x-3 bg-[#FFF7E9] p-4 rounded-2xl border-2 border-[#D4AF37]">
              <Checkbox
                id="allow"
                checked={formData.allow_feature}
                onCheckedChange={(checked) => setFormData({ ...formData, allow_feature: checked })}
                className="border-[#D4AF37]"
              />
              <Label htmlFor="allow" className="text-[#3E2C24] cursor-pointer leading-relaxed">
                I allow my photo to be featured on Legacy of India's dashboard and Instagram.
              </Label>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting || uploadingFile || !formData.photo_url}
              className="w-full bg-gradient-to-r from-[#4E342E] to-[#3E2C24] hover:from-[#3E2C24] hover:to-[#2E1C14] text-[#D4AF37] h-16 rounded-2xl font-bold text-xl disabled:opacity-50 border-2 border-[#D4AF37] shadow-xl"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-[#D4AF37] border-t-transparent rounded-full animate-spin mr-3" />
                  Submitting Your Legacy...
                </>
              ) : (
                <>
                  <Send className="w-6 h-6 mr-3" />
                  Submit My Legacy
                </>
              )}
            </Button>
          </form>
        </motion.div>

        {/* Thank You Popup */}
        <AnimatePresence>
          {showThankYou && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="fixed inset-0 bg-[#4E342E]/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                className="bg-gradient-to-br from-[#EAD9C6] to-[#F3E8D9] rounded-3xl p-12 max-w-lg text-center shadow-2xl border-4 border-[#D4AF37] relative"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 10, 0], scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5 }}
                  className="text-8xl mb-6"
                >
                  🌸
                </motion.div>
                <h3 className="text-3xl font-display font-bold text-[#4E342E] mb-4">
                  Thank you for sharing your light!
                </h3>
                <p className="text-xl text-[#3E2C24] leading-relaxed mb-2">
                  Your Diwali moment has been sent to the Legacy team.
                </p>
                <p className="text-lg text-[#3E2C24] font-semibold">
                  Stay tuned — it might be featured soon!
                </p>
                <div className="mt-6 flex justify-center gap-3">
                  <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity }}>🪔</motion.div>
                  <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}>✨</motion.div>
                  <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}>🪔</motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Section 3: Community Feed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-[#4E342E] mb-4">
              🌟 Our Glowing Community
            </h2>
            <p className="text-xl text-[#3E2C24]">
              Beautiful Diwali moments from our Legacy of India family
            </p>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array(8).fill(0).map((_, i) => (
                <div key={i} className="bg-[#EAD9C6] rounded-2xl h-80 animate-pulse border-2 border-[#D4AF37]"></div>
              ))}
            </div>
          ) : submissions.length === 0 ? (
            <div className="text-center py-20 bg-[#EAD9C6] rounded-3xl border-4 border-[#D4AF37]">
              <Star className="w-16 h-16 text-[#D4AF37] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[#4E342E] mb-2">Be the first to shine!</h3>
              <p className="text-lg text-[#3E2C24]">Share your Diwali moment and light up our community.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {submissions.map((submission, index) => (
                <motion.div
                  key={submission.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(212, 175, 55, 0.3)" }}
                  className="bg-[#EAD9C6] rounded-2xl overflow-hidden shadow-xl border-4 border-[#D4AF37] relative group"
                >
                  <div className="aspect-square overflow-hidden relative">
                    <img 
                      src={submission.photo_url} 
                      alt={submission.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-[#D4AF37]/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-4 h-4 text-[#4E342E]" />
                      <span className="text-[#4E342E] text-sm font-bold">Featured</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-lg text-[#4E342E] mb-2">{submission.name}</h4>
                    <p className="text-[#3E2C24] text-sm line-clamp-3 leading-relaxed">{submission.message}</p>
                  </div>
                  {/* Diya separator */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-2xl">
                    🪔
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Section 4: Join Our Community */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#D4AF37] to-[#B8941F] rounded-3xl p-12 shadow-2xl border-4 border-[#4E342E] text-center mb-16 relative overflow-hidden"
        >
          {/* Mandala outline */}
          <div className="absolute inset-0 opacity-10">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <circle cx="100" cy="100" r="90" fill="none" stroke="#4E342E" strokeWidth="2" />
              <circle cx="100" cy="100" r="70" fill="none" stroke="#4E342E" strokeWidth="1" />
              <circle cx="100" cy="100" r="50" fill="none" stroke="#4E342E" strokeWidth="1" />
              <circle cx="100" cy="100" r="30" fill="none" stroke="#4E342E" strokeWidth="1" />
            </svg>
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl font-display font-bold text-[#4E342E] mb-6">
              💬 Join Our Growing Community
            </h2>
            <p className="text-2xl text-[#3E2C24] mb-4 leading-relaxed max-w-3xl mx-auto">
              Be part of our growing community of heritage lovers.
            </p>
            <p className="text-xl text-[#3E2C24] mb-8 max-w-2xl mx-auto">
              Join us, share your stories, and celebrate the legacy of India together.
            </p>
            
            <motion.a
              href="https://chat.whatsapp.com/DvlevnRHhaOAqRivQUfa8a"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-[#4E342E] hover:bg-[#3E2C24] text-[#D4AF37] px-12 py-7 rounded-full text-xl font-bold shadow-2xl border-4 border-[#FFF7E9]">
                <MessageCircle className="w-6 h-6 mr-3" />
                Join Our Community
              </Button>
            </motion.a>
          </div>
        </motion.div>

        {/* Section 5: Instagram Integration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#EAD9C6] rounded-3xl p-8 shadow-xl border-4 border-[#D4AF37] text-center mb-16"
        >
          <Instagram className="w-16 h-16 text-[#D4AF37] mx-auto mb-4" />
          <h3 className="text-3xl font-display font-bold text-[#4E342E] mb-4">
            ✨ Follow Us on Instagram
          </h3>
          <p className="text-lg text-[#3E2C24] mb-6 max-w-2xl mx-auto leading-relaxed">
            We regularly feature your photos on our Instagram page and inside the app's dashboard. Follow us to see your light shine!
          </p>
          <motion.a
            href="https://www.instagram.com/legacyofindia"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-gradient-to-r from-[#D4AF37] to-[#B8941F] hover:from-[#B8941F] hover:to-[#9A7A1A] text-[#4E342E] px-10 py-6 rounded-full text-lg font-bold shadow-xl border-2 border-[#4E342E]">
              <Instagram className="w-5 h-5 mr-2" />
              Follow @legacyofindia
            </Button>
          </motion.a>
        </motion.div>

        {/* Closing Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#4E342E] to-[#3E2C24] rounded-3xl p-12 text-center shadow-2xl border-4 border-[#D4AF37] relative overflow-hidden"
        >
          {/* Glowing diyas at bottom edge */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-around py-4">
            {[...Array(7)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  y: [0, -5, 0],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
                className="text-3xl"
              >
                🪔
              </motion.div>
            ))}
          </div>

          <div className="relative z-10 mb-8">
            <h2 className="text-4xl font-display font-bold text-[#D4AF37] mb-6 leading-relaxed">
              "This Diwali, may every diya you light bring<br />peace, pride, and a story worth sharing."
            </h2>
            <p className="text-2xl text-[#EAD9C6] font-semibold">
              – Team Legacy of India
            </p>
          </div>

          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-6xl mb-4"
          >
            🙏
          </motion.div>

          <p className="text-xl text-[#FFF7E9] max-w-2xl mx-auto leading-relaxed">
            Thank you for sharing your light with us.<br />
            Together, we keep India's legacy glowing.
          </p>
        </motion.div>
      </div>
    </div>
  );
}