"use client";
import React from "react";

import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { useLanguage } from "@/contexts/LanguageContext";

export function AlureLine() {
  const { t } = useLanguage();
  
  const getContent = () => [
    {
      title: t('projectPages.alure.sections.home.title'),
      description: t('projectPages.alure.sections.home.description'),
      badge: "",
      image: "/alureImgs/alure_home.png",
    },
    {
      title: t('projectPages.alure.sections.products.title'),
      description: t('projectPages.alure.sections.products.description'),
      badge: "",
      image: "/alureImgs/alure_produtos.png",
    },
    {
      title: t('projectPages.alure.sections.productDetails.title'),
      description: t('projectPages.alure.sections.productDetails.description'),
      badge: "",
      image: "/alureImgs/alure_produto_detalhes.png",
    },
    {
      title: t('projectPages.alure.sections.reviews.title'),
      description: t('projectPages.alure.sections.reviews.description'),
      badge: "",
      image: "/alureImgs/alure_avaliacao.png",
    },
    {
      title: t('projectPages.alure.sections.productRegistration.title'),
      description: t('projectPages.alure.sections.productRegistration.description'),
      badge: "",
      image: "/alureImgs/cadastro_produtos.png",
    },
    {
      title: t('projectPages.alure.sections.login.title'),
      description: t('projectPages.alure.sections.login.description'),
      badge: "",
      image: "/alureImgs/alure_login.png",
    },
    {
      title: t('projectPages.alure.sections.userRegistration.title'),
      description: t('projectPages.alure.sections.userRegistration.description'),
      badge: "",
      image: "/alureImgs/alure_cadastro.png",
    },
    {
      title: t('projectPages.alure.sections.jwtExplanation.title'),
      description: t('projectPages.alure.sections.jwtExplanation.description'),
      badge: "",
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
                  alt="blog thumbnail"
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