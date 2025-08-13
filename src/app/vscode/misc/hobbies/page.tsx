"use client";
import React, { useState } from "react";
import {
    DraggableCardBody,
    DraggableCardContainer,
} from "@/components/ui/draggable-card";
import { Rajdhani } from "next/font/google";

const rajdhani = Rajdhani({
    subsets: ["latin"],
    weight: ["500"],
});

const initialItems = [
    {
        title: "Sketching",
        image: "/pic.jpeg",
        className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
        title: "Movies",
        image: "/pic.jpeg",
        className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
        title: "Tech Exploring",
        image: "/pic.jpeg",
        className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
        title: "Music",
        image: "/pic.jpeg",
        className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
        title: "Anime",
        image: "/pic.jpeg",
        className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
];

export default function HobbiesPage() {
    const [key, setKey] = useState(0);
    const handleReset = () => {
        setKey(prev => prev + 1);
    };

    return (
        <section className="min-h-screen md:px-10 md:py-10 flex flex-col text-white">
            <div className="mb-12">
                <div className="flex justify-between items-center">
                    <h1 className={`text-4xl md:text-6xl font-extrabold ${rajdhani.className}`} >
                        My Hobbies
                    </h1>
                    <button
                        onClick={handleReset}
                        className="px-5 py-2 rounded-lg font-medium text-black transition-all duration-300 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-green-400 hover:via-blue-500 hover:to-purple-600 cursor-pointer"
                    >Reset
                    </button>
                </div>

                <p className="text-lg mt-4 text-gray-300 text-left font-light max-w-5xl">
                    Have a peek into the activities that keep me inspired outside the code editor. This is my Me-time where I explore, learn, and recharge myself. Whether it's sketching, diving into lectures/movies, or simply enjoying the music.
                </p>

                <div className="max-w-5xl max-h-lg border-7 shadow-2xl border-white rounded-3xl my-10">
                    <DraggableCardContainer
                        key={key} // re-renders on reset
                        className="relative flex min-h-screen w-full items-center justify-center overflow-clip"
                    >
                        <p className="absolute top-1/2 mx-auto max-w-xl -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
                            My Hobby Box!! Suggest me something new, so then we will chill together 😂
                        </p>
                        {initialItems.map((item, index) => (
                            <DraggableCardBody key={index} className={item.className}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="pointer-events-none relative z-10 h-80 w-80 object-cover"
                                />
                                <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
                                    {item.title}
                                </h3>
                            </DraggableCardBody>
                        ))}
                    </DraggableCardContainer>
                </div>
            </div>
        </section>
    );
}
