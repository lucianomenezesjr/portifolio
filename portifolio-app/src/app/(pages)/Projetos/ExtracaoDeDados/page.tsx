"use client";

import Navbar from "@/components/Navbar";
import React from "react";
import { GeminiMac } from "@/components/GeminiMac";
import { NfExtractionLine } from "@/components/NfExtractionLine";


export default function GeminiAPI() {
    return (
        <div className="text-white">
            <Navbar className="top-2 z-50" />
            <div className="flex flex-col">
                <div className="flex h-2/3 w-full justify-center">
                    <GeminiMac />
                </div>
                <div>
                    <NfExtractionLine />
                </div>
            </div>
        </div>
    );
}