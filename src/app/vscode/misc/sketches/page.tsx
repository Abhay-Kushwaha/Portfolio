"use client";
import React, { useEffect } from "react";
import { FocusCards } from "@/components/ui/focus-cards";
import { Rajdhani } from "next/font/google";

const rajdhani = Rajdhani({
    subsets: ['latin'],
    weight: ['500'],
});

const cards = [
    {
        title: "Nidhi Narwal",
        src: "/arts/Nidhi_Narwal.jpg",
    },
    {
        title: "Mother Canvas",
        src: "/arts/mom.jpg",
    },
    {
        title: "Anime Girl",
        src: "/arts/anime_girl.jpg",
    },
    {
        title: "Anime Guy",
        src: "/arts/anime_guy.jpg",
    },
    {
        title: "Spiderman",
        src: "/arts/spidy.jpg",
    },
    {
        title: "Tom Holland",
        src: "/arts/holland.jpg",
    },
    {
        title: "Naruto Uzumaki",
        src: "/arts/naruto.jpg",
    },
    {
        title: "Saturo Gojo",
        src: "/arts/gojo.jpg",
    },
    {
        title: "Naoya Zenin",
        src: "/arts/ishida.jpg",
    },
    {
        title: "Jungkook",
        src: "/arts/JK.webp",
    },
    {
        title: "Itachi Uchiha",
        src: "/arts/itachi.jpg",
    },
    {
        title: "Anime Girl",
        src: "/arts/girl.jpg",
    },
];

export default function SketchPage() {
    useEffect(() => {
        fetch('/api/recent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: 'Sketches',
                path: '/vscode/misc/sketches'
            })
        });
    }, []);

    return (
        <section className="min-h-screen lg:px-10 lg:py-10 flex flex-col text-white">
            <div className="mb-12 max-w-2xl lg:max-w-full">
                <h1 className={`text-4xl md:text-6xl font-extrabold ${rajdhani.className}`}>
                    My Sketches
                </h1>
                <p className="text-lg mt-4 text-gray-300 text-left font-light max-w-4xl">
                    I am a self-taugth artist. Sketching and art is something that makes me feel home went something is going out of hands in this restless world. These are Hand-drawn ideas, doodles, and detailed illustrations straight from my sketchbook.
                </p>
                <div className="mt-18">
                    <FocusCards cards={cards} />
                </div>
            </div>
        </section>
    );
}
