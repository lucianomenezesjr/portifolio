"use client"; // Required for client-side animations in Next.js

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedGradientTextProps {
  text: string;
  className?: string;
}

export default function AnimatedGradientText({ text, className }: AnimatedGradientTextProps) {
  return (
    <motion.div
      className={cn(
        "inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {text}
    </motion.div>
  );
}