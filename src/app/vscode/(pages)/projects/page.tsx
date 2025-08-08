"use client";

import { useState } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import { Rajdhani } from "next/font/google";
import Link from "next/link";

const rajdhani = Rajdhani({
    subsets: ['latin'],
    weight: ['500'],
});

export default function ProjectsPage() {
    const [hovering, setHovering] = useState(false);

    const projects = [
        {
            title: "Visionary OS",
            desc: "Reimagining desktop interfaces with glassmorphism and AI-first workflows.",
            img: "/pic.jpeg",
        },
        {
            title: "Git Dash",
            desc: "An intuitive GitHub wrapper dashboard for Gen-Z devs who hate terminal fights.",
            img: "/git.png",
        },
        {
            title: "Portfolio Pro",
            desc: "React-powered dynamic personal site template with themeable components.",
            img: "/pic.jpeg",
        },
        {
            title: "CodeSync",
            desc: "Real-time collaborative coding with AI suggestions and smart merge.",
            img: "/git.png",
        },
        {
            title: "WaveVault",
            desc: "Secure end-to-end audio vault app for encrypted voice memos.",
            img: "/pic.jpeg",
        },
    ];

    return (
        <section className="max-w-8xl mx-auto">

            {/* Heading */}
            <div className="md:px-10 md:pt-10 mb-14">
                <h1 className={`${rajdhani.className} text-4xl md:text-6xl font-bold text-white tracking-wide`}>
                    Mini Projects
                </h1>
                <p className="text-neutral-400 mt-3 max-w-2xl md:text-lg">
                    Some small fun projects that i basically created during learning. A curated showcase of things I’ve built, broken, and iterated on — high on innovation, low on boilerplate.
                </p>
                <p className="pt-3">You can check my major projects from here
                    <span className="text-green-400 ml-2 cursor-pointer hover:underline">
                        <Link href={"https://github.com/Abhay-Kushwaha?tab=repositories"}>Check my Github</Link>
                    </span>
                </p>
            </div>

            {/* Project Grid */}
            {/* <div className="grid gap-10 md:grid-cols-3 sm:grid-cols-2 grid-cols-1"> */}
            <CardContainer className="inter-var">
                <CardBody className="bg-[#181818] relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-white/[0.3] w-[30rem] sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                    <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-white"
                    >
                        title
                    </CardItem>
                    <CardItem
                        as="p"
                        translateZ="60"
                        className="text-neutral-400 text-sm max-w-sm mt-2"
                    >
                        desc
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mt-4">
                        <img
                            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            height="1000"
                            width="1000"
                            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                        />
                    </CardItem>
                    <div className="flex justify-between items-center mt-20">
                        <CardItem
                            translateZ={20}
                            as="button"
                            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                        >
                            TechStacks
                        </CardItem>
                        <CardItem
                            translateZ={20}
                            as="a"
                            href="#"
                            target="__blank"
                            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                        >
                            View Code →
                        </CardItem>
                    </div>
                </CardBody>
            </CardContainer>
            {/* </div> */}
        </section>
    );
}
