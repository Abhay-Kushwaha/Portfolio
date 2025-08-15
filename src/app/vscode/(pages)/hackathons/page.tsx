"use client"

import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { Lens } from "@/components/ui/lens";
import { Spotlight } from "@/components/ui/spotlight";
import { Rajdhani } from "next/font/google";
import Image from "next/image";

const rajdhani = Rajdhani({
    subsets: ['latin'],
    weight: ['500'],
});

const certificates = [
    {
        name: "Smart India Hackathon 2024 (IIT Tirupati)",
        img: "/certificates/SIH_hack.jpg",
    },
    {
        name: "FoodoScope FORK IT Challenge 2024 (IIIT Delhi)",
        img: "/certificates/FoodoScope_hack.jpg",
    },
    {
        name: "TCS CodeVITA Season XII 2024 (Online)",
        img: "/certificates/TCS_CodeVita.png",
    },
    {
        name: "AKTU AI Tech Confluence 2025 (Online)",
        img: "/certificates/Guvi_hack.png",
    },
    {
        name: "CODEARAMBH 3.0 2025 (HI-TECH Institute of Engg. & Technology)",
        img: "/certificates/CODEARAMBH3.0.jpg",
    },
    {
        name: "Hackaccino_3.0 2025 (Bennett University)",
        img: "/certificates/Hackaccino_3.0.png",
    },
    {
        name: "Hacknovate 5.0 2024 (ABES Institute of Technology)",
        img: "/certificates/Hacknovate_5.0.png",
    },
    {
        name: "HackBVP@5.0 2023 (Bharati Vidyapeeth)",
        img: "/certificates/HackBVP@5.0.jpg",
    },
    {
        name: "HackUnicorn 2023 (GTBIT)",
        img: "/certificates/HackUnicorn.png",
    },
    {
        name: "Cryptic Hunt 2023 (DTU)",
        img: "/certificates/Cryptic_Hunt.jpg",
    },
];

export default function HackathonsPage() {
    useEffect(() => {
        fetch('/api/recent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: 'Hackathons',
                path: '/vscode/hackathons'
            })
        });
    }, []);
    
    return (
        <div className="relative flex w-full rounded-md bg-fixed bg-[radial-gradient(circle,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.4)_40%,rgba(0,0,0,0.2)_60%,transparent_100%)] [background-repeat:no-repeat] [background-size:100%_100%] antialiased my-[-16px] md:mx-[-14px]">
            <div
                className={cn(
                    "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
                    "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
                )}
            />

            <Spotlight className="-top-40 left-0 h-screen md:left-60" fill="white" />

            <div className="relative z-10 w-full p-4 md:pt-4 md:pl-4">
                <section className="min-h-screen lg:px-10 lg:py-15 flex flex-col text-white">
                    <div className="mb-12 max-w-2xl lg:max-w-full">
                        <h1 className={`text-4xl md:text-6xl font-extrabold ${rajdhani.className}`}>
                            Hackathons
                        </h1>
                        <p className="text-lg mt-4 text-gray-300 text-left font-light max-w-4xl">
                            A gallery of my hackathon adventures, flexing my certificates from every caffeine-fueled, code-packed event I’ve survived. Proof of hands-on learning, collaboration, and the occasional 3 AM bug meltdown.
                        </p>

                        {/* Certificates Grid */}
                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {certificates.map((cert, index) => (
                                <Lens key={index}>
                                    <div className="w-full relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#1D2235] to-[#121318] p-4 hover:scale-[1.02] transition-transform duration-300 border border-gray-700 shadow-lg">
                                        <div className="relative z-10">
                                            <Image
                                                src={cert.img}
                                                alt={cert.name}
                                                width={400}
                                                height={250}
                                                className="rounded-xl h-48 w-full object-fill"
                                            />
                                            <h2 className="text-white text-lg text-left font-bold mt-3">
                                                {cert.name}
                                            </h2>
                                        </div>
                                    </div>
                                </Lens>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
