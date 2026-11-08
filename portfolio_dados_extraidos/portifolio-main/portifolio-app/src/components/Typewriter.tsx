"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

// Novo componente Typewriter com loop infinito
export const InfiniteTypewriter = ({ 
  words, 
  className,
  cursorClassName 
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    if (currentWordIndex >= words.length) {
      setCurrentWordIndex(0);
      return;
    }

    const currentWord = words[currentWordIndex].text;
    const wordClass = words[currentWordIndex].className || "";

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Digitação
        if (currentIndex < currentWord.length) {
          setCurrentText(prev => prev + currentWord[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        } else {
          // Espera no final da palavra
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        // Apagando
        if (currentText.length > 0) {
          setCurrentText(prev => prev.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex(0);
          setCurrentWordIndex(prev => (prev + 1) % words.length);
          setSpeed(150);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isDeleting, currentWordIndex, words, speed]);

  return (
    <div className={cn(
      "text-4xl md:text-7xl font-bold text-center",
      className
    )}>
      <span className={words[currentWordIndex].className || "text-white"}>
        {currentText}
      </span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-8 md:h-12 bg-blue-500 ml-1",
          cursorClassName
        )}
      />
    </div>
  );
};