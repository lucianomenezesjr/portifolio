"use client";

import React from "react";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { useLanguage } from "@/contexts/LanguageContext";

export function NfExtractionLine() {
  const { t } = useLanguage();
  
  const getContent = () => [
    {
      title: t('projectPages.extraction.sections.summary.title'),
      description: t('projectPages.extraction.sections.summary.description'),
      badge: "",
    },
    {
      title: t('projectPages.extraction.sections.postMethod.title'),
      description: t('projectPages.extraction.sections.postMethod.description'),
      badge: "",
      image: "/GeminiAPI/methodPost.png",
    },
    {
      title: t('projectPages.extraction.sections.getMethod.title'),
      description: t('projectPages.extraction.sections.getMethod.description'),
      badge: "",
      image: "/GeminiAPI/methodGet.png",
    },
    {
      title: t('projectPages.extraction.sections.dockerization.title'),
      description: t('projectPages.extraction.sections.dockerization.description'),
      badge: "",
      image: "/GeminiAPI/methodPostv2.png",
    },
    {
      title: t('projectPages.extraction.sections.geminiIntegration.title'),
      description: t('projectPages.extraction.sections.geminiIntegration.description'),
      badge: "",
    },
  ];

  return (
    <section className="relative z-10 pb-20">
      <TracingBeam className="px-6">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          {getContent().map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                {item.badge}
              </h2>

              <p className="text-xl mb-4">{item.title}</p>

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
    </section>
  );
}
