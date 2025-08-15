"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Rajdhani } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import {
    IconBrandHtml5,
    IconBrandCss3,
    IconBrandJavascript,
    IconBrandReact,
    IconBrandPython,
    IconBrandBootstrap,
    IconBrandMongodb,
    IconBrandTailwind,
    IconApi,
    IconBrandDjango,

} from "@tabler/icons-react";

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
            title: "InnoTracker",
            desc: "Portal for tracking Innovation (Patents, Publications, StartUps, Govt awards etc.) and streamline the monitoring across educational and research institutions. It serves as a multi-role platform catering to students, faculty, colleges, and govt officials.",
            img: "/project_img/Inno.png",
            tech: [
                <IconBrandReact key="html" size={20} />,
                <IconBrandCss3 key="css" size={20} />,
                <IconBrandJavascript key="js" size={20} />,
                <IconBrandMongodb key="react" size={20} />,
            ],
            git: "https://github.com/Abhay-Kushwaha/InnoTracker",
        },
        {
            title: "Kisaan.AI",
            desc: "An integrated AI-powered platform designed to empower Indian farmers and rural communities with smart agriculture and health solutions. Functions like Crop Recommendations, Crop Price Predictions, Fertilizer Suggestions, and Disease Prediction.",
            img: "/git.png",
            tech: [
                <IconBrandHtml5 key="html" size={20} />,
                <IconBrandJavascript key="js" size={20} />,
                <IconBrandPython key="react" size={20} />,
                <Image src={"/flask2.png"} height={20} width={20} alt="flask" key="react" size={20} className="object-fit" />,
            ],
            git: "https://github.com/Abhay-Kushwaha/Kisaan.AI",
        },
        {
            title: "MoodFork",
            desc: "A Flavor-Driven Recipe Recommender for Mood Enhancement — a tool that suggests recipes based on your mood detected via facial expressions. Leveraging advanced emotion detection and a flavor database.",
            img: "/project_img/moodfork.jpg",
            tech: [
                <IconBrandHtml5 key="html" size={20} />,
                <IconBrandBootstrap key="css" size={20} />,
                <IconBrandJavascript key="js" size={20} />,
                <IconBrandPython key="react" size={20} />,
            ],
            git: "https://github.com/Abhay-Kushwaha/MoodFork",
        },
        {
            title: "Study Planner",
            desc: "An AI-powered study companion that intelligently generates personalized study schedules for students. Users can input subjects, number of chapters, and exam dates, and the planner automatically creates an optimized timetable. It also tracks progress ensuring productivity before exams.",
            img: "/project_img/study.png",
            tech: [
                <IconBrandReact key="html" size={20} />,
                <IconBrandTailwind key="css" size={20} />,
                <IconApi key="js" size={20} />,
                <IconBrandPython key="react" size={20} />,
            ],
            git: "https://github.com/Abhay-Kushwaha/Study-Planner",
        },
        {
            title: "ML Health App",
            desc: "ML Based Disease Prediction System, the virtual healthcare buddy. This project predicts a range of diseases based on User Inputs, Suggests Medicines, Diet plans & precautions and also features an AI Talking Nurse that reads out the results for an interactive experience.",
            img: "/project_img/health.png",
            tech: [
                <IconBrandPython key="html" size={20} />,
                <IconBrandBootstrap key="css" size={20} />,
                <IconBrandJavascript key="js" size={20} />,
                <Image src={"/flask2.png"} height={20} width={20} alt="flask" key="react" size={20} className="object-fit" />,
            ],
            git: "https://github.com/Abhay-Kushwaha/ML-for-Health-App",
        },
        {
            title: "Steganography",
            desc: "This project implements Steganography that is Cryptography for text data. It allowing users to encrypt any text message inside an image and generate an output image. The same output image with the hidden message can then be uploaded to decrypt and retrieve the original message.",
            img: "/project_img/Stagno.png",
            tech: [
                <IconBrandHtml5 key="html" size={20} />,
                <IconBrandCss3 key="css" size={20} />,
                <IconBrandJavascript key="js" size={20} />,
                <Image src={"/flask2.png"} height={20} width={20} alt="flask" key="react" size={20} className="object-fit" />,
            ],
            git: "https://github.com/Abhay-Kushwaha/Steganography",
        },
        {
            title: "AI ChatBot",
            desc: "A web-based chatbot application developed using Django, enhanced with Bootstrap. The project features modern dark-theme for improved user experience. It includes persistent search history, allowing users to revisit past queries and responses at any time. Designed as part of my 2nd Year Mini Project.",
            img: "/project_img/chatbot.png",
            tech: [
                <IconBrandHtml5 key="html" size={20} />,
                <IconBrandBootstrap key="css" size={20} />,
                <IconBrandDjango key="js" size={20} />,
            ],
            git: "hhttps://github.com/Abhay-Kushwaha/ChatBot-II-year",
        },
        {
            title: "Quiz Game",
            desc: "This is a simple quiz game built using HTML, CSS, and JavaScript. The game randomly selects 5 questions from a pool of questions stored in a JSON file. Players are given 15 seconds to answer each question. They earn 10 points for every correct answer. The game also keeps track of the Top 5 High Scores.",
            img: "/project_img/quiz.png",
            tech: [
                <IconBrandHtml5 key="html" size={20} />,
                <IconBrandCss3 key="css" size={20} />,
                <IconBrandJavascript key="js" size={20} />,
            ],
            git: "https://github.com/Abhay-Kushwaha/Quiz-Game",
        },
        {
            title: "Weather App",
            desc: "A responsive weather application leveraging a weather API from RapidAPI. It fetches and displays real-time weather details for any city worldwide, including temperature, humidity, and conditions. The clean UI ensures an intuitive experience across devices.",
            img: "/project_img/weather.jpg",
            tech: [
                <IconBrandHtml5 key="html" size={20} />,
                <IconBrandCss3 key="css" size={20} />,
                <IconBrandJavascript key="js" size={20} />,
                <IconApi key="react" size={20} />,
            ],
            git: "https://github.com/Abhay-Kushwaha/Weather-API-",
        },
    ];

    return (
        <section className="max-w-8xl mx-auto">
            {/* Heading */}
            <div className="lg:px-10 lg:pt-10 mb-14">
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
            <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                {projects.map((project, idx) => (
                    <CardContainer key={idx} className="inter-var">
                        <CardBody className="bg-[#181818] relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-white/[0.3] w-[20rem] sm:w-[22rem] rounded-xl p-5 border">
                            <div className="flex flex-col items-center">
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
                                    className="text-neutral-400 text-sm text-justify max-w-sm mt-2"
                                >
                                    {project.desc}
                                </CardItem>

                                {/* Image */}
                                <CardItem translateZ="100" className="w-full mt-4">
                                    <Image
                                        src={project.img}
                                        height={600}
                                        width={1000}
                                        className="h-44 my-2 w-full object-fill rounded-xl group-hover/card:shadow-xl"
                                        alt={project.title}
                                    />
                                </CardItem>
                            </div>

                            {/* Footer */}
                            <div className="flex justify-between items-center mt-8">
                                {/* Tech Stack Icons */}
                                <CardItem translateZ={20} as="div" className="flex relative space-x-[-12px]">
                                    {project.tech.map((IconComponent, i) => (
                                        <div
                                            key={i}
                                            className="bg-gray-800 p-2 rounded-full border border-white/30 text-white"
                                        >
                                            {IconComponent}
                                        </div>
                                    ))}
                                </CardItem>
                                <CardItem
                                    translateZ={20}
                                    as="a"
                                    href={project.git}
                                    target="_blank"
                                    className="px-3 rounded-xl text-sm font-normal text-blue-400 hover:underline"
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
