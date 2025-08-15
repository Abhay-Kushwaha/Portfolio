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

export default function SanjeevaniAIPage() {
    useEffect(() => {
            fetch('/api/recent', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: 'Project/Sanjeevani-AI',
                    path: '/vscode/projects/Sanjeevani-AI'
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
                Sanjeevani.AI
            </motion.h1>

            {/* Hero Image */}
            <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg">
                <Image
                    src="/project_img/Sanjeevani/san1.png"
                    alt="Sanjeevani-AI Preview"
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
                        Sanjeevani.AI is an all-in-one AI-powered healthcare platform that empowers patients
                        to predict diseases, receive tailored medical advice, consult doctors in real time, and
                        even order medicines from the comfort of their home. By centralizing the entire process,
                        it reduces the hassle of jumping across multiple platforms and makes healthcare
                        accessible, efficient, and user-friendly.
                    </p>

                    <h2 className="text-2xl font-semibold font-rajdhani">Key Features</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>AI-powered symptom & MRI-based disease prediction</li>
                        <li>Personalized medical advice including precautions, medication & diet</li>
                        <li>Interactive nurse avatar for guiding patients through treatment</li>
                        <li>Real-time video consultations with certified doctors</li>
                        <li>Auto-generated prescriptions & medicine booking with doorstep delivery</li>
                        <li>Dedicated dashboards for patients, doctors & admins</li>
                        <li>Multilingual support for inclusivity across diverse populations</li>
                    </ul>

                    <h2 className="text-2xl font-semibold font-rajdhani">Tech Stack</h2>
                    <p>
                        <strong>Backend:</strong> Python Django<br />
                        <strong>ML/DL Models:</strong> Scikit-learn, TensorFlow<br />
                        <strong>Text-to-Speech:</strong> gTTS (Google TTS)<br />
                        <strong>Chat & Video:</strong> Jitsi<br />
                        <strong>Frontend:</strong> HTML, CSS, JavaScript, Bootstrap, Tailwind<br />
                        <strong>Payments:</strong> PayStack<br />
                        <strong>Email Authentication:</strong> SMTP<br />
                        <strong>Database:</strong> SQL
                    </p>

                    <div className="flex justify-evenly mt-6">
                        <Link
                            href="https://github.com/Abhay-Kushwaha/Sanjeevni_Ai__Hack_191"
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
                        src="/project_img/Sanjeevani/san2.png"
                        alt="Screenshot 1"
                        width={400}
                        height={250}
                        className="object-fill h-50 w-100 rounded-lg"
                    />
                    <Image
                        src="/project_img/Sanjeevani/san3.png"
                        alt="Screenshot 2"
                        width={400}
                        height={250}
                        className="object-fill h-50 w-100 rounded-lg"
                    />
                    <Image
                        src="/project_img/Sanjeevani/san4.png"
                        alt="Screenshot 3"
                        width={400}
                        height={250}
                        className="object-fill h-50 w-100 rounded-lg"
                    />
                    <Image
                        src="/project_img/Sanjeevani/san5.png"
                        alt="Screenshot 4"
                        width={400}
                        height={250}
                        className="object-fill h-50 w-100 rounded-lg"
                    />
                    <Image
                        src="/project_img/Sanjeevani/san6.png"
                        alt="Screenshot 5"
                        width={400}
                        height={250}
                        className="object-fill h-50 w-100 rounded-lg"
                    />
                    <Image
                        src="/project_img/Sanjeevani/san7.png"
                        alt="Screenshot 6"
                        width={400}
                        height={250}
                        className="object-fill h-50 w-100 rounded-lg"
                    />
                    <Image
                        src="/project_img/Sanjeevani/san8.png"
                        alt="Screenshot 7"
                        width={400}
                        height={250}
                        className="object-fill h-50 w-100 rounded-lg"
                    />
                    <Image
                        src="/project_img/Sanjeevani/san9.png"
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