"use client";
import Navbar from "@/components/Navbar";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { InfiniteTypewriter } from "@/components/Typewriter";
import Image from "next/image";
import AboutMe from "@/components/About";
import { motion } from "framer-motion";
import ProjectsSection from "@/components/ProjectSection";
import { TechCards } from "@/components/TechCards";
import ContactForms from "@/components/ContactForms";
import { CvButton } from "@/components/CvButton";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";

export default function Home() {
  const { t } = useLanguage();
  
  const typewriterWords = [
    { text: t('roles.fullstack'), className: "text-white" },
    { text: t('roles.backend'), className: "text-blue-400" },
    { text: t('roles.frontend'), className: "text-purple-400" },
  ];

  return (
    <div className="relative w-full bg-black/[0.96] flex overflow-hidden min-h-screen">
      <Spotlight />
      <Navbar className="top-2 z-50" />
      
      {/* Botão de idioma centralizado abaixo da navbar */}
      <div className="fixed top-20 m-5 inset-x-0 z-40 flex justify-center">
        <LanguageToggle />
      </div>
      
      <div className="w-full rounded-md flex flex-col items-center justify-start mt-48 bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">

        {/* Container principal em coluna */}
        <div className="flex flex-col items-center gap-8 relative z-10 w-full max-w-4xl">
          
          {/* Texto + Imagem */}
          <div className="flex flex-col md:flex-row items-center gap-6 w-6xl">
            
            {/* Texto com animação */}
            <motion.div
              initial={{ x: -150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="p-4 flex flex-col w-4xl max-w-4xl text-center md:text-left"
            >
              <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                {t('name')}
              </h1>
              <div className="flex justify-center md:justify-start h-20 md:h-28 mt-4 mx-2">
                <InfiniteTypewriter words={typewriterWords} />
              </div>
            </motion.div>

            {/* Imagem com animação da direita */}
            <motion.div
              initial={{ x: 150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg"
            >
              <Image
                src="/me2.jpeg"
                alt="eu"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Sobre Mim com animação da esquerda */}
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="w-full h-full mt-8 shadow-2xl"
          >
            <AboutMe />
          </motion.div>
          <div className="bg-[#1c0f2741] w-screen py-4">
            <ProjectsSection />
          </div>
          <TechCards />
          <div id="contato" className="bg-[#1c0f27a1] w-screen py-4 flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-center underline text-white">{t('contact')}</h1>
            <ContactForms />
          </div>
          
          <div className="mb-6" />
        </div>
      </div>
    </div>
  );
}
