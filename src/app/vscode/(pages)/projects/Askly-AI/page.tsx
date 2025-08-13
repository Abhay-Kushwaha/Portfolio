"use client";
import React from "react";
import { motion } from "motion/react";
import { LampContainer } from "@/components/ui/lamp";
import Image from "next/image";
import { Rajdhani } from "next/font/google";

const rajdhani = Rajdhani({
    subsets: ["latin"],
    weight: ["500"],
});

export default function SanjeevaniAIPage() {
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
                className={`text-center ${rajdhani.className} text-4xl md:text-6xl font-bold text-white`}
            >
                Askly.AI
            </motion.h1>

            {/* Hero Image */}
            <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg">
                <Image
                    src="/pic.jpeg"
                    alt="Askly.AI Preview"
                    width={1400}
                    height={100}
                    className="w-full max-h-3xl mt-20 rounded-2xl"
                />
            </div>

            {/* Project Description */}
            <div className="mt-[-60] bg-[#0e0e0e] p-6 md:p-10 rounded-xl text-left text-white max-w-4xl mx-auto shadow-2xl space-y-4">
                <h2 className="text-2xl font-semibold font-rajdhani">Overview</h2>
                <p>
                    Askly.AI is a cutting-edge medical assistant platform designed to help patients
                    understand symptoms, recommend specialists, and generate prescriptions using AI. Built
                    for scalability and accessibility across rural and urban India.
                </p>

                <h2 className="text-2xl font-semibold font-rajdhani">Key Features</h2>
                <ul className="list-disc list-inside space-y-1">
                    <li>AI-powered symptom checker</li>
                    <li>Doctor recommendation and specialization matching</li>
                    <li>Prescription generation</li>
                    <li>Multilingual support</li>
                </ul>

                <h2 className="text-2xl font-semibold font-rajdhani">Tech Stack</h2>
                <p>
                    <strong>Frontend:</strong> React.js, Tailwind CSS<br />
                    <strong>Backend:</strong> Node.js, Express, MongoDB<br />
                    <strong>AI/ML:</strong> OpenAI, Google Translate API<br />
                    <strong>Deployment:</strong> Vercel + Railway
                </p>

                <div className="flex gap-4 mt-6">
                    <a
                        href="https://github.com/your-repo/askly-ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-300 transition"
                    >
                        GitHub Repo
                    </a>
                    <a
                        href="https://askly-ai.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-cyan-600 transition"
                    >
                        Live Demo
                    </a>
                </div>
            </div>

            {/* Screenshot Gallery */}
            <div className="mt-14 max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-semibold font-rajdhani text-white mb-6">
                    Screenshots
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {/* Replace these with actual screenshots */}
                    <Image
                        src="/pic.jpeg"
                        alt="Screenshot 1"
                        width={400}
                        height={250}
                        className="rounded-lg"
                    />
                    <Image
                        src="/pic.jpeg"
                        alt="Screenshot 2"
                        width={400}
                        height={250}
                        className="rounded-lg"
                    />
                    <Image
                        src="/pic.jpeg"
                        alt="Screenshot 3"
                        width={400}
                        height={250}
                        className="rounded-lg"
                    />
                    <Image
                        src="/pic.jpeg"
                        alt="Screenshot 2"
                        width={400}
                        height={250}
                        className="rounded-lg"
                    />
                    <Image
                        src="/pic.jpeg"
                        alt="Screenshot 3"
                        width={400}
                        height={250}
                        className="rounded-lg"
                    />
                </div>
            </div>
        </LampContainer>
    );
}
