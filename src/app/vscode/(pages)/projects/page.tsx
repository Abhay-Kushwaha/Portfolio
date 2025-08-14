"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Rajdhani } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

const rajdhani = Rajdhani({
    subsets: ["latin"],
    weight: ["500"],
});

export default function ProjectsPage() {
    useEffect(() => {
                fetch('/api/recent', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: 'Project',
                        path: '/vscode/projects'
                    })
                });
    }, []);
    
    const projects = [
        {
            title: "Visionary OS",
            desc: "Reimagining desktop interfaces with glassmorphism and AI-first workflows.",
            img: "/pic.jpeg",
            tech: ["/react.png", "/typescript.png", "/tailwind.png"],
            git: "https://github.com/example/visionary-os",
        },
        {
            title: "Git Dash",
            desc: "An intuitive GitHub wrapper dashboard for Gen-Z devs who hate terminal fights. An intuitive GitHub wrapper dashboard for Gen-Z devs who hate terminal fights.",
            img: "/git.png",
            tech: ["/next.png", "/node.png", "/docker.png"],
            git: "https://github.com/example/git-dash",
        },
        {
            title: "Portfolio Pro",
            desc: "React-powered dynamic personal site template with themeable components.",
            img: "/pic.jpeg",
            tech: ["/react.png", "/css.png", "/js.png"],
            git: "https://github.com/example/portfolio-pro",
        },
        {
            title: "CodeSync",
            desc: "Real-time collaborative coding with AI suggestions and smart merge.",
            img: "/git.png",
            tech: ["/react.png", "/firebase.png", "/tailwind.png"],
            git: "https://github.com/example/codesync",
        },
        {
            title: "WaveVault",
            desc: "Secure end-to-end audio vault app for encrypted voice memos.",
            img: "/pic.jpeg",
            tech: ["/node.png", "/express.png", "/mongo.png"],
            git: "https://github.com/example/wavevault",
        },
    ];

    return (
        <section className="max-w-8xl mx-auto">
            {/* Heading */}
            <div className="md:px-10 md:pt-10 mb-14">
                <h1
                    className={`${rajdhani.className} text-4xl md:text-6xl font-bold text-white tracking-wide`}
                >
                    Mini Projects
                </h1>
                <p className="text-neutral-400 mt-3 max-w-2xl md:text-lg">
                    Some small fun projects that I created during learning. High on innovation, low on boilerplate.
                </p>
                <p className="pt-3">
                    You can check my major projects from here
                    <span className="text-green-400 ml-2 cursor-pointer hover:underline">
                        <Link href={"https://github.com/Abhay-Kushwaha?tab=repositories"}>
                            Check my Github
                        </Link>
                    </span>
                </p>
            </div>

            {/* Project Grid */}
            <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                {projects.map((project, idx) => (
                    <CardContainer key={idx} className="inter-var">
                        <CardBody className="bg-[#181818] relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-white/[0.3] w-[20rem] sm:w-[22rem] h-auto rounded-xl p-5 border">
                            {/* Title */}
                            <CardItem
                                translateZ="50"
                                className="text-lg font-bold text-white"
                            >
                                {project.title}
                            </CardItem>

                            {/* Description */}
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-400 text-sm max-w-sm mt-2"
                            >
                                {project.desc}
                            </CardItem>

                            {/* Image */}
                            <CardItem translateZ="100" className="w-full mt-4">
                                <Image
                                    src={project.img}
                                    height={600}
                                    width={1000}
                                    className="h-44 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt={project.title}
                                />
                            </CardItem>

                            {/* Footer */}
                            <div className="flex justify-between items-center mt-8">
                                {/* Tech Stack Icons */}
                                <CardItem
                                    translateZ={20}
                                    as="button"
                                    className="p-2 rounded-xl bg-black"
                                >
                                    <div className="flex relative">
                                        {project.tech.map((icon, i) => (
                                            <div
                                                key={i}
                                                className="w-8 h-8 rounded-full border-1 border-white/30 overflow-hidden"
                                                style={{ marginLeft: i === 0 ? 0 : -12 }}
                                            >
                                                <Image
                                                    src={icon}
                                                    alt="tech icon"
                                                    width={32}
                                                    height={32}
                                                    className="object-cover p-1"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </CardItem>
                                <CardItem
                                    translateZ={20}
                                    as="a"
                                    href={project.git}
                                    target="_blank"
                                    className="px-3 rounded-xl text-xs font-normal text-blue-400 hover:underline"
                                >
                                    View Code →
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
                ))}
            </div>
        </section>
    );
}
