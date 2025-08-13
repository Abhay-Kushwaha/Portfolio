"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import dynamic from "next/dynamic";

const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), {
    ssr: false,
});

interface FormData {
    name: string;
    email: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
}

export default function ContactForm() {
    const [form, setForm] = useState<FormData>({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState<FormErrors>({});
    const [status, setStatus] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!form.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!form.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = "Please enter a valid email";
        }

        if (!form.message.trim()) {
            newErrors.message = "Message is required";
        } else if (form.message.length < 10) {
            newErrors.message = "Message must be at least 10 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });

        // Clear error when user starts typing
        if (errors[name as keyof FormErrors]) {
            setErrors({ ...errors, [name]: undefined });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsLoading(true);
        setStatus("Sending your message...");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (res.ok) {
                setStatus("✨ Message sent successfully!");
                setForm({ name: "", email: "", message: "" });
            } else {
                setStatus("❌ Failed to send message. Please try again.");
            }
        } catch (error) {
            setStatus("❌ Network error. Please check your connection.");
        } finally {
            setIsLoading(false);
        }
    };

    const globeConfig = {
        pointSize: 4,
        globeColor: "#062056",
        showAtmosphere: true,
        atmosphereColor: "#FFFFFF",
        atmosphereAltitude: 0.1,
        emissive: "#062056",
        emissiveIntensity: 0.1,
        shininess: 0.9,
        polygonColor: "rgba(255,255,255,0.7)",
        ambientLight: "#38bdf8",
        directionalLeftLight: "#ffffff",
        directionalTopLight: "#ffffff",
        pointLight: "#ffffff",
        arcTime: 1000,
        arcLength: 0.9,
        rings: 1,
        maxRings: 3,
        // initialPosition: { lat: 45, lng: 0 }, // Position to show top hemisphere
        autoRotate: true,
        autoRotateSpeed: 0.5,
    };

    const colors = ["#8b5cf6", "#a855f7", "#c084fc", "#e879f9"];
    const sampleArcs = [
        {
            order: 1,
            startLat: -19.885592,
            startLng: -43.951191,
            endLat: -22.9068,
            endLng: -43.1729,
            arcAlt: 0.1,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 1,
            startLat: 28.6139,
            startLng: 77.209,
            endLat: 3.139,
            endLng: 101.6869,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 1,
            startLat: -19.885592,
            startLng: -43.951191,
            endLat: -1.303396,
            endLng: 36.852443,
            arcAlt: 0.5,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 2,
            startLat: 1.3521,
            startLng: 103.8198,
            endLat: 35.6762,
            endLng: 139.6503,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 2,
            startLat: 51.5072,
            startLng: -0.1276,
            endLat: 3.139,
            endLng: 101.6869,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 2,
            startLat: -15.785493,
            startLng: -47.909029,
            endLat: 36.162809,
            endLng: -115.119411,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 3,
            startLat: -33.8688,
            startLng: 151.2093,
            endLat: 22.3193,
            endLng: 114.1694,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 3,
            startLat: 21.3099,
            startLng: -157.8581,
            endLat: 40.7128,
            endLng: -74.006,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 3,
            startLat: -6.2088,
            startLng: 106.8456,
            endLat: 51.5072,
            endLng: -0.1276,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 4,
            startLat: 11.986597,
            startLng: 8.571831,
            endLat: -15.595412,
            endLng: -56.05918,
            arcAlt: 0.5,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 4,
            startLat: -34.6037,
            startLng: -58.3816,
            endLat: 22.3193,
            endLng: 114.1694,
            arcAlt: 0.7,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 4,
            startLat: 51.5072,
            startLng: -0.1276,
            endLat: 48.8566,
            endLng: -2.3522,
            arcAlt: 0.1,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 5,
            startLat: 14.5995,
            startLng: 120.9842,
            endLat: 51.5072,
            endLng: -0.1276,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 5,
            startLat: 1.3521,
            startLng: 103.8198,
            endLat: -33.8688,
            endLng: 151.2093,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 5,
            startLat: 34.0522,
            startLng: -118.2437,
            endLat: 48.8566,
            endLng: -2.3522,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 6,
            startLat: -15.432563,
            startLng: 28.315853,
            endLat: 1.094136,
            endLng: -63.34546,
            arcAlt: 0.7,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 6,
            startLat: 37.5665,
            startLng: 126.978,
            endLat: 35.6762,
            endLng: 139.6503,
            arcAlt: 0.1,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 6,
            startLat: 22.3193,
            startLng: 114.1694,
            endLat: 51.5072,
            endLng: -0.1276,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 7,
            startLat: -19.885592,
            startLng: -43.951191,
            endLat: -15.595412,
            endLng: -56.05918,
            arcAlt: 0.1,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 7,
            startLat: 48.8566,
            startLng: -2.3522,
            endLat: 52.52,
            endLng: 13.405,
            arcAlt: 0.1,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 7,
            startLat: 52.52,
            startLng: 13.405,
            endLat: 34.0522,
            endLng: -118.2437,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 8,
            startLat: -8.833221,
            startLng: 13.264837,
            endLat: -33.936138,
            endLng: 18.436529,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 8,
            startLat: 49.2827,
            startLng: -123.1207,
            endLat: 52.3676,
            endLng: 4.9041,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 8,
            startLat: 1.3521,
            startLng: 103.8198,
            endLat: 40.7128,
            endLng: -74.006,
            arcAlt: 0.5,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 9,
            startLat: 51.5072,
            startLng: -0.1276,
            endLat: 34.0522,
            endLng: -118.2437,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 9,
            startLat: 22.3193,
            startLng: 114.1694,
            endLat: -22.9068,
            endLng: -43.1729,
            arcAlt: 0.7,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 9,
            startLat: 1.3521,
            startLng: 103.8198,
            endLat: -34.6037,
            endLng: -58.3816,
            arcAlt: 0.5,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 10,
            startLat: -22.9068,
            startLng: -43.1729,
            endLat: 28.6139,
            endLng: 77.209,
            arcAlt: 0.7,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 10,
            startLat: 34.0522,
            startLng: -118.2437,
            endLat: 31.2304,
            endLng: 121.4737,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 10,
            startLat: -6.2088,
            startLng: 106.8456,
            endLat: 52.3676,
            endLng: 4.9041,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 11,
            startLat: 41.9028,
            startLng: 12.4964,
            endLat: 34.0522,
            endLng: -118.2437,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 11,
            startLat: -6.2088,
            startLng: 106.8456,
            endLat: 31.2304,
            endLng: 121.4737,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 11,
            startLat: 22.3193,
            startLng: 114.1694,
            endLat: 1.3521,
            endLng: 103.8198,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 12,
            startLat: 34.0522,
            startLng: -118.2437,
            endLat: 37.7749,
            endLng: -122.4194,
            arcAlt: 0.1,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 12,
            startLat: 35.6762,
            startLng: 139.6503,
            endLat: 22.3193,
            endLng: 114.1694,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 12,
            startLat: 22.3193,
            startLng: 114.1694,
            endLat: 34.0522,
            endLng: -118.2437,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 13,
            startLat: 52.52,
            startLng: 13.405,
            endLat: 22.3193,
            endLng: 114.1694,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 13,
            startLat: 11.986597,
            startLng: 8.571831,
            endLat: 35.6762,
            endLng: 139.6503,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 13,
            startLat: -22.9068,
            startLng: -43.1729,
            endLat: -34.6037,
            endLng: -58.3816,
            arcAlt: 0.1,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 14,
            startLat: -33.936138,
            startLng: 18.436529,
            endLat: 21.395643,
            endLng: 39.883798,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
    ];

    return (
        <div className="min-h-screen py-[-4] relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            </div>

            {/* Globe Background */}
            <div className="absolute left-1/2 transform -translate-x-1/2 overflow-clip">
                <div className="relative w-500 h-290 md:h-290 z-20">
                    <World data={sampleArcs} globeConfig={globeConfig} />
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex justify-center min-h-screen px-4 py-5">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full max-w-lg"
                >
                    <form
                        onSubmit={handleSubmit}
                        className="relative backdrop-blur-xl bg-white/10 border border-white/20 p-8 md:p-10 rounded-2xl shadow-2xl space-y-8"
                        style={{
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)'
                        }}
                    >
                        {/* Decorative elements */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="text-center space-y-2"
                        >
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                                Get In <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
                            </h1>
                            <p className="text-gray-300 text-lg">Let's start a conversation</p>
                        </motion.div>

                        <div className="space-y-6">
                            {/* Name Field */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="relative group"
                            >
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className={`peer w-full border-b-2 ${errors.name ? 'border-red-400' : 'border-gray-500'} bg-transparent py-3 px-2 text-white text-lg placeholder-transparent focus:border-purple-400 focus:outline-none transition-all duration-300 group-hover:border-purple-300`}
                                    placeholder="Your Name"
                                    required
                                />
                                <label className={`absolute left-2 transition-all duration-300 ${form.name ? '-top-6 text-sm text-purple-400' : 'top-3 text-lg text-gray-400'} peer-focus:-top-6 peer-focus:text-purple-400 peer-focus:text-sm`}>
                                    Your Name
                                </label>
                                {errors.name && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-red-400 text-sm mt-1"
                                    >
                                        {errors.name}
                                    </motion.p>
                                )}
                            </motion.div>

                            {/* Email Field */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="relative group"
                            >
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className={`peer w-full border-b-2 ${errors.email ? 'border-red-400' : 'border-gray-500'} bg-transparent py-3 px-2 text-white text-lg placeholder-transparent focus:border-purple-400 focus:outline-none transition-all duration-300 group-hover:border-purple-300`}
                                    placeholder="Email Address"
                                    required
                                />
                                <label className={`absolute left-2 transition-all duration-300 ${form.email ? '-top-6 text-sm text-purple-400' : 'top-3 text-lg text-gray-400'} peer-focus:-top-6 peer-focus:text-purple-400 peer-focus:text-sm`}>
                                    Email Address
                                </label>
                                {errors.email && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-red-400 text-sm mt-1"
                                    >
                                        {errors.email}
                                    </motion.p>
                                )}
                            </motion.div>

                            {/* Message Field */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                className="relative group"
                            >
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className={`peer w-full border-b-2 ${errors.message ? 'border-red-400' : 'border-gray-500'} bg-transparent py-3 px-2 text-white text-lg placeholder-transparent focus:border-purple-400 focus:outline-none transition-all duration-300 resize-none group-hover:border-purple-300`}
                                    placeholder="Your Message"
                                    required
                                ></textarea>
                                <label className={`absolute left-2 transition-all duration-300 ${form.message ? '-top-6 text-sm text-purple-400' : 'top-3 text-lg text-gray-400'} peer-focus:-top-6 peer-focus:text-purple-400 peer-focus:text-sm`}>
                                    Your Message
                                </label>
                                {errors.message && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-red-400 text-sm mt-1"
                                    >
                                        {errors.message}
                                    </motion.p>
                                )}
                            </motion.div>
                        </div>

                        {/* Submit Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                        >
                            <button
                                type="submit"
                                disabled={isLoading}
                                className={`group relative w-full py-2 px-8 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold text-lg rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/25 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${isLoading ? 'animate-pulse' : ''}`}
                            >
                                <span className="relative z-10 flex items-center justify-center">
                                    {isLoading ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                                            </svg>
                                        </>
                                    )}
                                </span>
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                            </button>
                        </motion.div>

                        {/* Status Message */}
                        {status && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                                className="text-center"
                            >
                                <p className={`text-lg font-medium px-4 py-2 rounded-lg ${status.includes('✨') ? 'text-green-400 bg-green-400/10' : status.includes('❌') ? 'text-red-400 bg-red-400/10' : 'text-blue-400 bg-blue-400/10'}`}>
                                    {status}
                                </p>
                            </motion.div>
                        )}
                    </form>
                </motion.div>
            </div>

            <style jsx>{`
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
            `}</style>
        </div>
    );
}