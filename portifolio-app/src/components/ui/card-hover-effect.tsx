"use client";
import { cn } from "@/lib/utils";
import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    icon: React.ReactNode;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block h-full w-full p-2"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* fundo animado com delay no exit */}
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-slate-800/[0.8] rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 }, // 👈 delay aqui
                }}
              />
            )}
          </AnimatePresence>

          <HoverCard item={item} hovered={hoveredIndex === idx} />
        </div>
      ))}
    </div>
  );
};

const HoverCard = ({
  item,
  hovered,
}: {
  item: {
    title: string;
    icon: React.ReactNode;
  };
  hovered: boolean;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" },
      });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 40, opacity: 0 }}
      animate={controls}
      className={cn(
        "relative z-20 rounded-2xl border border-white/20 bg-gray-900 p-6 shadow-lg transition-all flex flex-col items-center justify-center gap-4",
        hovered && "border-purple-500/50"
      )}
    >
      <div className="w-16 h-16">{item.icon}</div>
      <h3 className="text-2xl font-bold text-white">{item.title}</h3>
    </motion.div>
  );
};
