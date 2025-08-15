"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";

type SectionKey = "about" | "sideProjects" | "contact" | "misc";

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [openSections, setOpenSections] = useState<Record<SectionKey, boolean>>({
        about: true,
        sideProjects: true,
        contact: true,
        misc: false,
    });

    const toggleSection = (section: SectionKey) =>
        setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));

    // Auto-collapse on mobile
    useEffect(() => {
        if (typeof window !== "undefined") {
            const isMobile = window.innerWidth < 768;
            if (isMobile) setCollapsed(true);
        }
    }, []);

    const fileLink = (href: string, iconSrc: string, label: string) => (
        <li className="flex items-center gap-2 cursor-pointer hover:bg-white/10 py-1">
            <Link href={href} className="flex items-center gap-2 w-full px-2">
                <Image src={iconSrc} alt={label} width={16} height={16} />
                {label}
            </Link>
        </li>
    );

    return (
        <div className="bg-[#252526] text-white flex h-80vh">
            {/* Left - File Icon & Avatar */}
            <div className="bg-[#333333] flex flex-col justify-between w-12 max-h-50vh">
                <div className="cursor-pointer" onClick={() => setCollapsed((prev) => !prev)}>
                    <Image
                        src="/files.png"
                        alt="Toggle"
                        width={45}
                        height={45}
                        className="hover:opacity-80 border-l-2 px-1 py-1"
                    />
                </div>
                <div className="mb-2">
                    <Link href={'/vscode'}>
                        <Image
                            src="/avatar.png"
                            alt="Avatar"
                            width={35}
                            height={35}
                            className="rounded-full mx-auto"
                        />
                    </Link>
                </div>
            </div>

            {/* Right - Expandable Panel */}
            {!collapsed && (
                <div className="w-64 h-screen flex flex-col justify-between bg-[#252526]">
                    <div className="flex-1 overflow-y-auto p-3 text-sm space-y-3" style={{scrollbarWidth: "thin", scrollbarColor: "#555 #333"}}>
                        <div className="text-xm font-bold text-gray-400 mb-3">EXPLORER</div>
                        {/* About Section */}
                        <div>
                            <div
                                className="flex items-center gap-2 cursor-pointer"
                                onClick={() => toggleSection("about")}
                            >
                                {openSections.about ? (
                                    <ChevronDown size={16} />
                                ) : (
                                    <ChevronRight size={16} />
                                )}
                                <div className="font-semibold">About</div>
                            </div>
                            {openSections.about && (
                                <ul className="pl-5 mt-1 space-y-1">
                                    {fileLink("/vscode", "/html.png", "index.html")}
                                    {fileLink("/vscode/experience", "/css.png", "experience.css")}
                                    {fileLink("/vscode/skills", "/js.png", "skills.js")}
                                    {fileLink("/vscode/projects", "/typescript.png", "mini-projects.ts")}
                                    {fileLink("/vscode/hackathons", "/react.png", "hackathons.tsx")}
                                </ul>
                            )}
                        </div>

                        {/* Projects Section */}
                        <div>
                            <div
                                className="flex items-center gap-2 cursor-pointer"
                                onClick={() => toggleSection("sideProjects")}
                            >
                                {openSections.sideProjects ? (
                                    <ChevronDown size={16} />
                                ) : (
                                    <ChevronRight size={16} />
                                )}
                                <div className="font-semibold">Projects</div>
                            </div>
                            {openSections.sideProjects && (
                                <ul className="pl-5 mt-1 space-y-1">
                                    {fileLink("/vscode/projects/Sanjeevani-AI", "/js.png", "Sanjeevani-AI.js")}
                                    {fileLink("/vscode/projects/Askly-AI", "/react.png", "Askly-AI.tsx")}
                                    {fileLink("/vscode/projects/InnoTracker", "/typescript.png", "InnoTracker.ts")}
                                    {fileLink("/vscode/projects/MockMate-AI", "/js.png", "MockMate-AI.js")}
                                </ul>
                            )}
                        </div>

                        {/* Contact Section */}
                        <div>
                            <div
                                className="flex items-center gap-2 cursor-pointer"
                                onClick={() => toggleSection("contact")}
                            >
                                {openSections.contact ? (
                                    <ChevronDown size={16} />
                                ) : (
                                    <ChevronRight size={16} />
                                )}
                                <div className="font-semibold">Contact</div>
                            </div>
                            {openSections.contact && (
                                <ul className="pl-5 mt-1 space-y-1">
                                    {fileLink("/vscode/email", "/gmail.png", "email@gmail.com")}
                                </ul>
                            )}
                        </div>

                        {/* Misc Section */}
                        <div>
                            <div
                                className="flex items-center gap-2 cursor-pointer"
                                onClick={() => toggleSection("misc")}
                            >
                                {openSections.misc ? (
                                    <ChevronDown size={16} />
                                ) : (
                                    <ChevronRight size={16} />
                                )}
                                <div className="font-semibold">Misc</div>
                            </div>
                            {openSections.misc && (
                                <ul className="pl-5 mt-1 space-y-1">
                                    {fileLink("/vscode/misc/resume", "/html.png", "Resume.html")}
                                    {fileLink("/vscode/misc/figma", "/react.png", "Figma.ts")}
                                    {fileLink("/vscode/misc/hobbies", "/css.png", "Hobbies.css")}
                                    {fileLink("/vscode/misc/sketches", "/typescript.png", "Sketches.tsx")}
                                </ul>
                            )}
                        </div>
                    </div>

                    {/* Footer - Fixed Bottom */}
                    <div className="flex-shrink text-xs text-gray-400 border-t border-white/10 px-3 py-2 mb-15">
                        <div>&copy; All Rights Reserved.</div>
                        <div>Made in 2025</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sidebar;
