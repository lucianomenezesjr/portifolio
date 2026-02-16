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
            <div className="flex flex-col items-center">
                <TitleProjects projectKey="alure" />
                <div className="flex h-96 w-2/3 p-5">
                    <MacModel />
                </div>
                <div>
                    <AlureLine />
                </div>
            </div>
        </div>
    );
}