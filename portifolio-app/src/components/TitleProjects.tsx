"use client";
import React from "react";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

export function TitleProjects() {
  return (
    <div className="relative flex w-full h-1/3 flex-col items-start justify-start overflow-hidden">
      <BackgroundRippleEffect />
      <div className="mt-45 w-full">
        <h2 className="relative z-10 mx-auto pb-16 max-w-4xl text-center text-2xl font-bold md:text-4xl lg:text-7xl text-neutral-100">
          Alure App
        </h2>
      </div>
    </div>
  );
}
