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
        name: "Apple Vision Pro Hackathon",
        img: "/pic.jpeg",
    },
    {
        name: "AI Innovation Sprint",
        img: "/pic.jpeg",
    },
    {
        name: "Full Stack Hackfest",
        img: "/pic.jpeg",
    },
    {
        name: "ML Marathon",
        img: "/pic.jpeg",
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
        <div className="relative flex w-full rounded-md bg-fixed bg-[radial-gradient(circle,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.4)_40%,rgba(0,0,0,0.2)_60%,transparent_100%)] [background-repeat:no-repeat] [background-size:100%_100%] antialiased my-[-16px] ml-[-16px]">
            <div
                className={cn(
                    "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
                    "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
                )}
            />

            <Spotlight className="-top-40 left-0 h-screen md:left-60" fill="white" />

            <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
                <section className="min-h-screen md:px-10 md:py-15 flex flex-col text-white">
                    <div className="mb-12">
                        <h1 className={`text-4xl md:text-6xl font-extrabold ${rajdhani.className}`}>
                            Hackathons
                        </h1>
                        <p className="text-lg mt-4 text-gray-300 text-left font-light max-w-2xl">
                            A gallery of my hackathon adventures, flexing my certificates from every caffeine-fueled, code-packed event I’ve survived. Proof of hands-on learning, collaboration, and the occasional 3 AM bug meltdown.
                        </p>

                        {/* Certificates Grid */}
                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {certificates.map((cert, index) => (
                                <Lens key={index}>
                                    <div className="w-full relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#1D2235] to-[#121318] p-4 hover:scale-[1.02] transition-transform duration-300 border border-gray-700 shadow-lg">
                                        <div className="relative z-10">
                                            <Image
                                                src={cert.img}
                                                alt={cert.name}
                                                width={400}
                                                height={250}
                                                className="rounded-xl h-48 w-full object-cover"
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
