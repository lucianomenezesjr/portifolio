"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { useLanguage } from "@/contexts/LanguageContext";

interface IpadCdaProps {
  projectKey?: 'alure' | 'cda' | 'extraction';
}

export function IpadCda({ projectKey = 'cda' }: IpadCdaProps) {
  const { t } = useLanguage();
  
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white">
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                {t(`projectPages.${projectKey}.title`)}
              </span>
            </h1>
          </>
        }
      >
        <img
          src={`/CdaImagens/home_cda.png`}
          alt="hero"
          height={720}
          width={1400}
          className="rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
