"use client";
import React from "react";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { useLanguage } from "@/contexts/LanguageContext";

export function ControleFluxoLine() {
  const { t } = useLanguage();
  
  const getContent = () => [
    {
      title: t('projectPages.cda.sections.summary.title'),
      description: t('projectPages.cda.sections.summary.description'),
      badge: "",
    },
    {
      title: t('projectPages.cda.sections.home.title'),
      description: t('projectPages.cda.sections.home.description'),
      badge: "",
      image: "/CdaImagens/home_cda.png",
    },
    {
      title: t('projectPages.cda.sections.registration.title'),
      description: t('projectPages.cda.sections.registration.description'),
      badge: "",
      image: "/CdaImagens/cadastro_cda.png",
    },
    {
      title: t('projectPages.cda.sections.login.title'),
      description: t('projectPages.cda.sections.login.description'),
      badge: "",
      image: "/CdaImagens/login_cda.png",
    },
  ];

  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {getContent().map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className="text-xl mb-4">
              {item.title}
            </p>

            <div className="text-sm prose prose-sm dark:prose-invert">
              {item?.image && (
                <img
                  src={item.image}
                  alt="screenshot"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}
