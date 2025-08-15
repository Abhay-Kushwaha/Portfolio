"use client";
import React, { useEffect, useState } from "react";
import {
    DraggableCardBody,
    DraggableCardContainer,
} from "@/components/ui/draggable-card";
import { Rajdhani } from "next/font/google";
import Image from "next/image";

const rajdhani = Rajdhani({
    subsets: ["latin"],
    weight: ["500"],
});

const initialItems = [
    {
        title: "Coffee Adiction",
        image: "/Hobby_box/coffee.jpg",
        className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
        title: "Travel",
        image: "/Hobby_box/travel.jpg",
        className: "absolute top-32 left-[5%] rotate-[-20deg]",
    },
    {
        title: "Movies",
        image: "/Hobby_box/movie.jpg",
        className: "absolute top-40 left-[55%] rotate-[-7deg]",
    },
    {
        title: "Anime",
        image: "/Hobby_box/anime.png",
        className: "absolute top-15 right-[55%] rotate-[-18deg]",
    },
    {
        title: "Sketching",
        image: "/Hobby_box/draw.jpg",
        className: "absolute top-50 left-[20%] rotate-[-5deg]",
    },
    {
        title: "Tech Exploring",
        image: "/Hobby_box/techevent.jpg",
        className: "absolute top-5 left-[65%] rotate-[8deg]",
    },
    {
        title: "Listening Music",
        image: "/Hobby_box/music.jpg",
        className: "absolute top-62 left-[45%] rotate-[10deg]",
    },
    {
        title: "UI Designing",
        image: "/Hobby_box/UI_pic.jpg",
        className: "absolute top-20 right-[35%] rotate-[20deg]",
    },
];

export default function HobbiesPage() {
    useEffect(() => {
        fetch('/api/recent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: 'Hobbies',
                path: '/vscode/misc/hobbies'
            })
        });
    }, []);

    const [key, setKey] = useState(0);
    const handleReset = () => {
        setKey(prev => prev + 1);
    };

    return (
        <section className="min-h-screen lg:px-10 lg:py-10 flex flex-col text-white">
            <div className="mb-12">
                <div className="max-w-2xl lg:max-w-full flex justify-between items-center">
                    <h1 className={`text-4xl md:text-6xl font-extrabold ${rajdhani.className}`} >
                        My Hobbies
                    </h1>
                    <button
                        onClick={handleReset}
                        className="px-5 py-2 rounded-lg font-medium text-black transition-all duration-300 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-green-400 hover:via-blue-500 hover:to-purple-600 cursor-pointer"
                    >Reset
                    </button>
                </div>

                <p className="text-lg mt-4 text-gray-300 text-left font-light max-w-xl lg:max-w-4xl">
                    Have a peek into the activities that keep me inspired outside the code editor. This is my Me-time where I explore, learn, and recharge myself. Whether it&apos;s sketching, diving into lectures/movies, or simply enjoying the music.
                </p>

                <div className="max-w-2xl lg:max-w-5xl max-h-md border-7 shadow-2xl border-white rounded-3xl my-10">
                    <DraggableCardContainer
                        key={key} // re-renders on reset
                        className="relative flex min-h-screen w-full items-center justify-center overflow-clip"
                    >
                        <p className="absolute top-1/2 mx-auto max-w-xl -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
                            My Hobby Box!! Suggest me something new, I would love to chill together 😂
                        </p>
                        {initialItems.map((item, index) => (
                            <DraggableCardBody key={index} className={item.className}>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    height={800}
                                    width={500}
                                    className="pointer-events-none relative z-10 h-40 md:h-80 w-40 md:w-80 object-cover"
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
