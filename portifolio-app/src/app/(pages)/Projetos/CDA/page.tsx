"use client";

import Navbar from "@/components/Navbar";
import React from "react";
import { IpadCda } from "@/components/IpadCda";
import { ControleFluxoLine } from "@/components/CdaLine";


export default function ControleDeAcesso() {
    return (
        <div className="text-white">
            <Navbar className="top-2 z-50" />
            <div className="flex flex-col">
                <div className="flex h-screen w-full justify-center">
                    <IpadCda />
                </div>
                <div>
                    <ControleFluxoLine />
                </div>
            </div>
        </div>
    );
}