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
        title: "Aceternity UI",
        description: "Customizable Tailwind CSS and Framer Motion Components.",
        href: "https://twitter.com/mannupaaji",
        image: "/pic.jpeg",
    },
    {
        title: "Portfolio Redesign",
        description: "A bold portfolio layout with smooth animations.",
        href: "https://example.com",
        image: "/pic.jpeg",
    },
    {
        title: "E-Commerce UI Kit",
        description: "Modern e-commerce components built in Figma.",
        href: "https://example.com",
        image: "/pic.jpeg",
    },
    {
        title: "Dashboard Concept",
        description: "A sleek and minimal dashboard interface.",
        href: "https://example.com",
        image: "/pic.jpeg",
    },
    {
        title: "Landing Page Template",
        description: "High-converting landing page design.",
        href: "https://example.com",
        image: "/pic.jpeg",
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
        <section className="min-h-screen md:px-10 md:py-10 flex flex-col text-white">
            <div className="mb-12">
                <h1 className={`text-4xl md:text-6xl font-extrabold ${rajdhani.className}`}>
                    Figma Designs
                </h1>
                <p className="text-lg mt-4 text-gray-300 text-left font-light max-w-4xl">
                    The Box of my UI/UX creations in Figma, blending functionality with sleek aesthetics.
                    Every frame tells a story, pixel by pixel. These designs were crafted while learning UI/UX
                    and applying skills in real-world layouts.
                </p>

                <div className="my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
                    {designCards.map((card, index) => (
                        <PinContainer key={index} title={card.title} href={card.href}>
                            <div className="flex basis-full flex-col p-4 tracking-tight border-2 border-white/30 shadow-2xl rounded-2xl text-slate-100/50 w-[20rem] h-[20rem]">
                                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                                    {card.title}
                                </h3>
                                <div className="text-base !m-0 !p-0 font-normal">
                                    <span className="text-slate-500">{card.description}</span>
                                </div>
                                <Image
                                    className={`flex flex-1 w-full rounded-lg mt-4`}
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
