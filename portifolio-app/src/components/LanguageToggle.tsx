"use client";
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <>      
      
      <motion.button
        onClick={toggleLanguage}
        className="language-toggle bg-purple-600 hover:bg-purple-700 active:bg-purple-800 text-white px-2.5 py-1.5 rounded-full font-medium transition-all duration-200 shadow-lg border border-purple-500/30
                    cursor-pointer
                    sm:px-3 sm:py-2
                    text-xs sm:text-sm
                    min-w-[45px] sm:min-w-[55px]
                    h-8 sm:h-9
                    backdrop-blur-sm
                    hover:shadow-purple-500/25 hover:shadow-xl
                    focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50
                    transform hover:scale-105 active:scale-95
                    flex items-center justify-center gap-1 sm:gap-1.5"
        role="button"
        aria-label={`Change language to ${language === 'en' ? 'Portuguese' : 'English'}`}
        whileHover={{ 
          scale: 1.05,
          transition: { duration: 0.2 }
        }}
        whileTap={{ 
          scale: 0.95,
          transition: { duration: 0.1 }
        }}
      >
      <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-hidden="true" />
        <span className="font-semibold">
          {language === 'en' ? 'PT' : 'EN'}
        </span>
      </motion.button>
    </>
  );
};
