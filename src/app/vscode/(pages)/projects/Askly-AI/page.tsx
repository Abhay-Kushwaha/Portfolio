"use client";
import React, { useEffect } from "react";
import { motion } from "motion/react";
import { LampContainer } from "@/components/ui/lamp";
import { Meteors } from "@/components/ui/meteors"
import Image from "next/image";
import { Rajdhani } from "next/font/google";
import Link from "next/link";

const rajdhani = Rajdhani({
    subsets: ["latin"],
    weight: ["500"],
});

export default function AsklyAIPage() {
    useEffect(() => {
        fetch('/api/recent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: 'Project/Askly-AI',
                path: '/vscode/projects/Askly-AI'
            })
        });
    }, []);

    return (
        <LampContainer>
            {/* Project Name */}
            <motion.h1
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeIn",
                }}
                className={`text-center ${rajdhani.className} text-7xl font-bold text-white`}
            >
                Askly-AI
            </motion.h1>

            {/* Hero Image */}
            <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg">
                <Image
                    src="/project_img/Askly/ask1.png"
                    alt="Askly-AI Preview"
                    width={1400}
                    height={100}
                    className="w-full h-60 md:h-130 object-fill mt-20 rounded-2xl"
                />
            </div>

            {/* Project Description */}
            <div className="relative w-full mt-[-20px] md:mt-[-100] max-w-3xl lg:max-w-4xl mx-auto z-10">
                {/* Background Glow */}
                <div className="absolute inset-0 h-full w-full scale-[0.85] transform rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 blur-3xl opacity-30" />

                {/* Main Card */}
                <div className="relative flex flex-col justify-start overflow-hidden rounded-xl border border-gray-800 bg-[#010130] p-6 md:p-10 shadow-2xl space-y-4 text-white">
                    <h2 className="text-2xl font-semibold font-rajdhani">Overview</h2>
                    <p>
                        Askly-AI is an intelligent learning companion that transforms the way students
                        study and prepare for their future. It enables users to upload notes or PDFs,
                        get AI-generated summaries, ask contextual questions, create interactive quizzes,
                        and even build professional resumes & cover letters — all in one seamless platform.
                        With its modern stack and AI-first approach, Askly-AI redefines personalized learning.
                    </p>

                    <h2 className="text-2xl font-semibold font-rajdhani">Key Features</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Secure authentication & user management via Clerk.dev</li>
                        <li>Upload and summarize PDFs with AI-powered note extraction</li>
                        <li>Interactive Q&A chatbot for contextual learning</li>
                        <li>Quiz generation and performance tracking for self-assessment</li>
                        <li>Downloadable summaries and reports as PDF</li>
                        <li>AI-assisted Resume & Cover-letter creation optimized for ATS</li>
                        <li>Vector DB integration for semantic search across notes</li>
                    </ul>

                    <h2 className="text-2xl font-semibold font-rajdhani">Tech Stack</h2>
                    <p>
                        <strong>Frontend:</strong> Next.js, TypeScript, Tailwind CSS, ShadCN UI, Radix UI<br />
                        <strong>Backend:</strong> Next.js API Routes, Drizzle ORM, Axios<br />
                        <strong>Database:</strong> Neon Serverless PostgreSQL, PostgreSQL, Pinecone<br />
                        <strong>AI/ML:</strong> OpenAI API, Google Generative AI, OpenAI Edge<br />
                        <strong>Auth:</strong> Clerk<br />
                    </p>

                    <div className="flex justify-evenly mt-6">
                        <Link
                            href="https://github.com/Abhay-Kushwaha/Askly-AI-Note-Taker"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-300 transition"
                        >
                            GitHub Repo
                        </Link>
                        <Link
                            href="#"
                            aria-disabled="true"
                            onClick={(e) => e.preventDefault()} // prevent navigation
                            className="bg-gray-400 text-black px-4 py-2 rounded-md cursor-not-allowed opacity-70"
                        >
                            Live Demo
                        </Link>
                    </div>

                    {/* Meteor Effect */}
                    <Meteors number={20} />
                </div>
            </div>

            {/* Screenshot Gallery */}
            <div className="mt-14 max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-semibold font-rajdhani text-white mb-6">
                    Screenshots
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <Image
                        src="/project_img/Askly/ask2.png"
                        alt="Screenshot 1"
                        width={400}
                        height={250}
                        className="object-fill h-50 w-100 rounded-lg"
                    />
                    <Image
                        src="/project_img/Askly/ask3.png"
                        alt="Screenshot 2"
                        width={400}
                        height={250}
                        className="object-fill h-50 w-100 rounded-lg"
                    />
                    <Image
                        src="/project_img/Askly/ask4.png"
                        alt="Screenshot 3"
                        width={400}
                        height={250}
                        className="object-fill h-50 w-100 rounded-lg"
                    />
                    <Image
                        src="/project_img/Askly/ask5.png"
                        alt="Screenshot 4"
                        width={400}
                        height={250}
                        className="object-fill h-50 w-100 rounded-lg"
                    />
                    <Image
                        src="/project_img/Askly/ask6.png"
                        alt="Screenshot 5"
                        width={400}
                        height={250}
                        className="object-fill h-50 w-100 rounded-lg"
                    />
                    <Image
                        src="/project_img/Askly/ask7.png"
                        alt="Screenshot 6"
                        width={400}
                        height={250}
                        className="object-fill h-50 w-100 rounded-lg"
                    />
                    <Image
                        src="/project_img/Askly/ask8.png"
                        alt="Screenshot 7"
                        width={400}
                        height={250}
                        className="object-fill h-50 w-100 rounded-lg"
                    />
                </div>
            </div>
        </LampContainer>
    );
}