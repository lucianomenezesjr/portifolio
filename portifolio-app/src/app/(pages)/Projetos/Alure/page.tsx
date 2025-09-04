"use client";

import { AlureLine } from "@/components/AlureLine";
import MacModel from "@/components/MacModel";
import Navbar from "@/components/Navbar";
import { TitleProjects } from "@/components/TitleProjects";
import React from "react";


export default function AlurePage() {
    return (
        <div className="text-white">
            <Navbar className="top-2 z-50" />
            <div className="flex flex-col">
                <TitleProjects titulo="Alure" />
                <div className="flex h-screen w-full">
                    <MacModel />
                </div>
                <div>
                    <AlureLine />
                </div>
            </div>
        </div>
    );
}