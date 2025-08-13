import React from "react";
import { cn } from "@/lib/utils";
import { Lens } from "@/components/ui/lens";
import { motion } from "motion/react";
import { Spotlight } from "@/components/ui/spotlight";
import { Rajdhani } from "next/font/google";

const rajdhani = Rajdhani({
    subsets: ['latin'],
    weight: ['500'],
});

export default function SpotlightPreview() {
    return (
        <div className="relative flex h-[40rem] w-full overflow-hidden rounded-md bg-[radial-gradient(circle,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.4)_40%,rgba(0,0,0,0.2)_60%,transparent_100%)] [background-repeat:no-repeat] [background-size:100%_100%] antialiased my-[-16px] ml-[-16px]">
            <div
                className={cn(
                    "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
                    "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
                )}
            />

            <Spotlight
                className="-top-40 left-0 md:left-60"
                fill="white"
            />
            <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
                <section className="min-h-screen md:px-10 md:py-15 flex flex-col text-white">
                    <div className="mb-12">
                        <h1 className={`text-4xl md:text-6xl font-extrabold ${rajdhani.className}`}>
                            Hackathons
                        </h1>
                        <p className="text-lg mt-4 text-gray-300 text-left font-light max-w-2xl">
                            A gallery of my hackathon adventures, flexing my certificates from every caffeine-fueled, code-packed event I’ve survived. Proof of hands-on learning, collaboration, and the occasional 3 AM bug meltdown.
                        </p>
                        <div>
                            <Lens>
                                <div className="w-full relative rounded-3xl overflow-hidden max-w-md mx-auto bg-gradient-to-r from-[#1D2235] to-[#121318] p-8 my-10">
                                    <div className="relative z-10">
                                        <img
                                            src="https://images.unsplash.com/photo-1713869820987-519844949a8a?q=80&w=3500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                            alt="image"
                                            width={500}
                                            height={500}
                                            className="rounded-2xl"
                                        />
                                        <h2 className="text-white text-2xl text-left font-bold">
                                            Apple Vision Pro
                                        </h2>
                                    </div>
                                </div>
                            </Lens>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
