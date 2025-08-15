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

export default function CruxCRMPage() {
    useEffect(() => {
        fetch('/api/recent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: 'Project/CruxCRM',
                path: '/vscode/projects/CruxCRM'
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
                CruxCRM
            </motion.h1>

            {/* Hero Image */}
            <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg">
                <Image
                    src="/project_img/CruxCRM/crm1.png"
                    alt="CruxCRM Preview"
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
                    <p className="text-justify">
                        CruxCRM is a modern lead management platform designed to streamline sales workflows
                        through clear role-based collaboration between Managers and Workers. Managers take
                        charge of organizing campaigns, categorizing leads, and assigning tasks, while Workers
                        actively engage with leads, log follow-ups, and maintain conversations. Built for efficiency,
                        transparency, and scalability, CruxCRM ensures no lead goes unnoticed and every
                        opportunity is maximized.
                    </p>

                    <h2 className="text-2xl font-semibold font-rajdhani">Key Features</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Role-based access with Manager and Worker functionalities</li>
                        <li>Lead categorization and campaign management</li>
                        <li>Lead assignment and progress tracking</li>
                        <li>Follow-up scheduling and conversation history</li>
                        <li>Real-time updates and status management</li>
                        <li>Data-driven insights for conversion optimization</li>
                    </ul>

                    <h2 className="text-2xl font-semibold font-rajdhani">Tech Stack</h2>
                    <p>
                        <strong>Frontend:</strong> Next.js, Tailwind CSS, Typescript<br />
                        <strong>Backend:</strong> Express.js, MongoDB, Nodemailer<br />
                        <strong>Deployment:</strong> Vercel + Railway
                    </p>

                    <div className="flex justify-evenly mt-6">
                        <Link
                            href="https://github.com/Abhay-Kushwaha/CruxCRM-Frontend"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-300 transition"
                        >
                            GitHub Repo
                        </Link>
                        <Link
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-cyan-600 transition"
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
                        src="/project_img/CruxCRM/crm2.png"
                        alt="Screenshot 1"
                        width={400}
                        height={250}
                        className="object-fill h-50 w-100 rounded-lg"
                    />
                    <Image
                        src="/project_img/CruxCRM/crm3.png"
                        alt="Screenshot 2"
                        width={400}
                        height={250}
                        className="object-fill h-50 w-100 rounded-lg"
                    />
                    <Image
                        src="/project_img/CruxCRM/crm4.png"
                        alt="Screenshot 3"
                        width={400}
                        height={250}
                        className="object-fill h-50 w-100 rounded-lg"
                    />
                    <Image
                        src="/project_img/CruxCRM/crm5.png"
                        alt="Screenshot 4"
                        width={400}
                        height={250}
                        className="object-fill h-50 w-100 rounded-lg"
                    />
                    <Image
                        src="/project_img/CruxCRM/crm6.png"
                        alt="Screenshot 5"
                        width={400}
                        height={250}
                        className="object-fill h-50 w-100 rounded-lg"
                    />
                    <Image
                        src="/project_img/CruxCRM/crm7.png"
                        alt="Screenshot 6"
                        width={400}
                        height={250}
                        className="object-fill h-50 w-100 rounded-lg"
                    />
                    <Image
                        src="/project_img/CruxCRM/crm8.png"
                        alt="Screenshot 7"
                        width={400}
                        height={250}
                        className="object-fill h-50 w-100 rounded-lg"
                    />
                    <Image
                        src="/project_img/CruxCRM/crm9.png"
                        alt="Screenshot 8"
                        width={400}
                        height={250}
                        className="object-fill h-50 w-100 rounded-lg"
                    />
                </div>
            </div>
        </LampContainer>
    );
}
