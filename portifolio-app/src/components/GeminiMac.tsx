import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";

export function GeminiMac() {
  return (
    <div className="w-full h-full overflow-hidden bg-[#0B0B0F]">
      <MacbookScroll
        title={
          <span>
            This Macbook is built with Tailwindcss. <br /> No kidding.
          </span>
        }
        src={`/GeminiAPI/methodPostv2.png`}
        showGradient={false}
      />
    </div>
  );
}

