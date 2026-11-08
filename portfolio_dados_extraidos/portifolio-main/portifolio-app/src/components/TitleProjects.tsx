"use client";
import React from "react";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { useLanguage } from "@/contexts/LanguageContext";

// Definindo o tipo para as props
interface TitleProjectsProps {
  projectKey: string; // Mudando de titulo para projectKey
}

export function TitleProjects({ projectKey }: TitleProjectsProps) {
  const { t } = useLanguage();
  
  return (
    <div className="relative flex w-full h-1/3 flex-col items-start justify-start overflow-hidden">
      <BackgroundRippleEffect />
      <div className="mt-45 w-full">
        <h2 className="relative z-10 mx-auto pb-16 max-w-4xl text-center text-2xl font-bold md:text-4xl lg:text-7xl text-neutral-100">
          {t(`projectPages.${projectKey}.title`)}
        </h2>
      </div>
    </div>
  );
}
