"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import AboutFooter from "@/components/AboutFooter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutMe() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="bg-[#141313] rounded-xl text-gray-200 py-8 px-6 shadow-[0_0_25px_rgba(168,85,247,0.3)]"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-start">

        {/* Texto */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {t('aboutSection.title')}
          </h2>

          <p 
            className="text-lg text-gray-300 leading-relaxed mb-6"
            dangerouslySetInnerHTML={{ __html: t('aboutSection.intro') }}
          />

          <p 
            className="text-lg text-gray-300 leading-relaxed mb-6"
            dangerouslySetInnerHTML={{ __html: t('aboutSection.experience') }}
          />

          <p 
            className="text-lg text-gray-300 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t('aboutSection.interests') }}
          />
        </div>

        <AboutFooter />
      </div>
    </section>
  );
}
