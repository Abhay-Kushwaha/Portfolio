"use client";
import React from "react";
import { Rajdhani } from "next/font/google";
import { Download } from "lucide-react";

const rajdhani = Rajdhani({
    subsets: ["latin"],
    weight: ["500"],
});

export default function ResumePage() {
    const resumeUrl = "/resume.pdf";

    return (
        <div className="w-full h-85vh flex flex-col items-center gap-4 pt-4 pl-4 overflow-hidden">
            {/* Header */}
            <div className="flex w-full justify-between flex-wrap">
                <span className={`text-3xl sm:text-4xl md:text-6xl font-extrabold ${rajdhani.className}`} >
                    Resume
                </span>
            </div>

            {/* PDF Viewer */}
            <iframe
                src={resumeUrl}
                className="w-full md:w-3/4 h-[60vh] md:h-[73vh] mb-0 border-none rounded-lg shadow-lg"
                style={{ scrollbarWidth: "thin", scrollbarColor: "#555 #333" }}
                title="Resume"
            />
        </div>
    );
}
