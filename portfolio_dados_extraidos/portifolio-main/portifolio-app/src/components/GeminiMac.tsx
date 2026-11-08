import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { useLanguage } from "@/contexts/LanguageContext";

interface GeminiMacProps {
  projectKey?: 'alure' | 'cda' | 'extraction';
}

export function GeminiMac({ projectKey = 'extraction' }: GeminiMacProps) {
  const { t } = useLanguage();
  
  return (
    <div className="w-full h-full overflow-hidden bg-[#0B0B0F]">
      <MacbookScroll
        title={
          <span>
            {t(`projectPages.${projectKey}.title`)}
          </span>
        }
        src={`/GeminiAPI/methodPostv2.png`}
        showGradient={false}
      />
    </div>
  );
}

