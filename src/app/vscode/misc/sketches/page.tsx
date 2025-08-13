"use client";
import React from "react";
import { FocusCards } from "@/components/ui/focus-cards";
import { Rajdhani } from "next/font/google";

const rajdhani = Rajdhani({
    subsets: ['latin'],
    weight: ['500'],
});

const cards = [
    {
        title: "Forest Adventure",
        src: "/pic.jpeg",
    },
    {
        title: "Valley of life",
        src: "/git.png",
    },
    {
        title: "Sala behta hi jayega",
        src: "/react.png",
    },
    {
        title: "Camping is for pros",
        src: "/pic.jpeg",
    },
    {
        title: "The road not taken",
        src: "/pic.jpeg",
    },
    {
        title: "The First Rule",
        src: "/pic.jpeg",
    },
];

export default function SketchPage() {
    return (
        <section className="min-h-screen md:px-10 md:py-10 flex flex-col text-white">
            <div className="mb-12">
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
