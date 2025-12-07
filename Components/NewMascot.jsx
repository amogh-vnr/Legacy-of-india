import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function NewMascot({ pose = 'default', message, position = 'bottom-right' }) {
  const [isVisible, setIsVisible] = useState(true);

  const taruPoses = {
    default: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c6b284b529b667d4fc8344/c443765be_image-removebg-preview11.png",
    family: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c6b284b529b667d4fc8344/72594edf1_Taru_fam_-removebg-preview.png",
    dancing: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c6b284b529b667d4fc8344/ddc2c0228_taru_dancing_-removebg-preview.png",
    hiding: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c6b284b529b667d4fc8344/1b05c83b8_Taru_hiding-removebg-preview.png",
    sweets: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c6b284b529b667d4fc8344/ce2568eaf_taru_sweets-removebg-preview.png"
  };
  
  const positionClasses = {
    "bottom-right": "fixed bottom-6 right-6 z-50",
    "bottom-left": "fixed bottom-6 left-6 z-50",
    "floating": "fixed bottom-20 right-6 z-50"
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        className={positionClasses[position]}
      >
        <div className="relative">
          {/* Message Bubble */}
          {message && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bottom-full mb-4 right-0 w-80 max-w-[90vw]"
            >
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-5 shadow-2xl border-3 border-yellow-600 relative">
                {/* Close Button */}
                <button
                  onClick={() => setIsVisible(false)}
                  className="absolute top-2 right-2 bg-amber-900 text-amber-100 rounded-full p-1 hover:bg-amber-800 transition-colors z-10"
                  aria-label="Close message"
                >
                  <X className="w-4 h-4" />
                </button>
                
                <p className="text-amber-900 font-serif text-base leading-relaxed pr-6">
                  {message}
                </p>
                {/* Speech bubble arrow */}
                <div className="absolute top-full right-8 w-0 h-0 border-l-[15px] border-r-[15px] border-t-[15px] border-transparent border-t-yellow-600"></div>
                <div className="absolute top-full right-8 w-0 h-0 border-l-[13px] border-r-[13px] border-t-[13px] border-transparent border-t-amber-100 mt-[-2px]"></div>
              </div>
            </motion.div>
          )}
          
          {/* Mascot Character */}
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 2, 0, -2, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative w-40 h-40 cursor-pointer"
            onClick={() => message && setIsVisible(!isVisible)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-xl opacity-40"></div>
            <img 
              src={taruPoses[pose]}
              alt="Taru - Your Guide"
              className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
            />
            
            {/* Christmas decoration */}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-2 -right-2 text-2xl"
            >
              🎄
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}