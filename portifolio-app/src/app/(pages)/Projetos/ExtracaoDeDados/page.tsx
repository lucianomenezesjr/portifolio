"use client";

import Navbar from "@/components/Navbar";
import React from "react";
import { GeminiMac } from "@/components/GeminiMac";
import { NfExtractionLine } from "@/components/NfExtractionLine";
import { TitleProjects } from "@/components/TitleProjects";
import { LanguageToggle } from "@/components/LanguageToggle";


export default function GeminiAPI() {
    return (
        <div className="text-white">
            <Navbar className="top-2 z-50" />
            
            {/* Botão de idioma centralizado abaixo da navbar */}
            <div className="fixed top-20 m-5 inset-x-0 z-40 flex justify-center">
                <LanguageToggle />
            </div>
            
            <div className="flex flex-col mt-32">
                <div className="flex h-2/3 w-full justify-center">
                    <GeminiMac projectKey="extraction" />
                </div>
                <div>
                    <NfExtractionLine />
                </div>
            </div>
        </div>
    );
}