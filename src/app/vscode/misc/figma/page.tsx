"use client";
import React, { useEffect } from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import Image from "next/image"
import { Rajdhani } from "next/font/google";

const rajdhani = Rajdhani({
    subsets: ["latin"],
    weight: ["500"],
});

interface DesignCard {
    title: string;
    description: string;
    href: string;
    image: string;
}

const designCards: DesignCard[] = [
    {
        title: "SynthStage",
        description: "An immersive NFT music-verse hero section, blending futuristic visuals with sonic vibes.",
        href: "https://www.figma.com/design/wHw4Ar4MDGnsfTHanRGDMN/New-Designs?t=mwbgvhvgm04BJyMc-1",
        image: "/figmaUI/SynthStage.png",
    },
    {
        title: "NeuroNexis",
        description: "A bold and dynamic portfolio layout with sleek, mind-bending animations.",
        href: "https://www.figma.com/design/wHw4Ar4MDGnsfTHanRGDMN/New-Designs?t=mwbgvhvgm04BJyMc-1",
        image: "/figmaUI/NeuroNexis.png",
    },
    {
        title: "Bolt2Engine",
        description: "High-performance e-commerce UI kit with a modern, turbo-charged aesthetic.",
        href: "https://www.figma.com/design/wHw4Ar4MDGnsfTHanRGDMN/New-Designs?t=mwbgvhvgm04BJyMc-1",
        image: "/figmaUI/Bolt2Engine.png",
    },
    {
        title: "Goat Watches",
        description: "A premium watch store design that screams luxury, precision, and timeless appeal.",
        href: "https://www.figma.com/design/wHw4Ar4MDGnsfTHanRGDMN/New-Designs?t=mwbgvhvgm04BJyMc-1",
        image: "/figmaUI/Goat.png",
    },
    {
        title: "Melodiverse",
        description: "A sleek music platform landing page designed during UI/UX Internship.",
        href: "https://www.figma.com/design/wHw4Ar4MDGnsfTHanRGDMN/New-Designs?t=mwbgvhvgm04BJyMc-1",
        image: "/figmaUI/Melodiverse.png",
    },
    {
        title: "Deel website Clone",
        description: "A pixel-perfect redesign of Deel website landing page with sharp UI elements.",
        href: "https://www.figma.com/design/wHw4Ar4MDGnsfTHanRGDMN/New-Designs?t=mwbgvhvgm04BJyMc-1",
        image: "/figmaUI/Deel.png",
    },
    {
        title: "Revelo Website Clone",
        description: "A clean, modern Revelo platform with intuitive Landing Page, designed while Learning",
        href: "https://www.figma.com/design/wHw4Ar4MDGnsfTHanRGDMN/New-Designs?t=mwbgvhvgm04BJyMc-1",
        image: "/figmaUI/Revelo.png",
    },
    {
        title: "Spiderman Landing",
        description: "A Marvel character Spiderman landing page which is my favorite superhero.",
        href: "https://www.figma.com/design/wHw4Ar4MDGnsfTHanRGDMN/New-Designs?t=mwbgvhvgm04BJyMc-1",
        image: "/figmaUI/Spiderman.png",
    },
];

export default function FigmaPage() {
    useEffect(() => {
        fetch('/api/recent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: 'Figma',
                path: '/vscode/misc/figma'
            })
        });
    }, []);

    return (
        <section className="min-h-screen lg:px-10 lg:py-10 flex flex-col text-white">
            <div className="mb-12 max-w-2xl lg:max-w-full">
                <h1 className={`text-4xl md:text-6xl font-extrabold ${rajdhani.className}`}>
                    Figma Designs
                </h1>
                <p className="text-lg mt-4 text-gray-300 text-left font-light max-w-4xl">
                    The Box of my UI/UX creations in Figma, blending functionality with sleek aesthetics.
                    Every frame tells a story, pixel by pixel. These designs were crafted while learning UI/UX
                    and applying skills in real-world layouts.
                </p>

                <div className="my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-20">
                    {designCards.map((card, index) => (
                        <PinContainer key={index} title={card.title} href={card.href}>
                            <div className="flex basis-full min-h-85 flex-col p-4 tracking-tight border-2 border-white/30 shadow-2xl rounded-2xl text-slate-100/50 w-[16rem] h-[16rem] lg:w-[20rem] lg:h-[20rem]">
                                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                                    {card.title}
                                </h3>
                                <div className="text-base !m-0 !p-0 font-normal">
                                    <span className="text-slate-500">{card.description}</span>
                                </div>
                                <Image
                                    className={`flex flex-1 object-fill rounded-lg mt-4`}
                                    alt="Hobbies"
                                    height={100}
                                    width={500}
                                    src={`${card.image}`}
                                />
                            </div>
                        </PinContainer>
                    ))}
                </div>
            </div>
        </section>
    );
}
