"use client";

import Navbar from "@/components/Navbar";
import React from "react";
import { IpadCda } from "@/components/IpadCda";
import { ControleFluxoLine } from "@/components/CdaLine";
import { TitleProjects } from "@/components/TitleProjects";
import { LanguageToggle } from "@/components/LanguageToggle";


export default function ControleDeAcesso() {
    return (
        <div className="text-white">
            <Navbar className="top-2 z-50" />
            
            {/* Botão de idioma centralizado abaixo da navbar */}
            <div className="fixed top-20 m-5 inset-x-0 z-40 flex justify-center">
                <LanguageToggle />
            </div>
            
            <div className="flex flex-col mt-32">
                <TitleProjects projectKey="cda" />
                <div className="flex h-screen w-full justify-center">
                    <IpadCda projectKey="cda" />
                </div>
                <div>
                    <ControleFluxoLine />
                </div>
            </div>
        </div>
    );
}