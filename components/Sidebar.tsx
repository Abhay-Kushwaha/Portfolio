"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronRight, FileText } from "lucide-react"; // or use SVGs

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [openSections, setOpenSections] = useState({
        about: true,
        sideProjects: true,
        contact: false,
        misc: false,
    });

    const toggleSection = (section: string) =>
        setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));

    return (
        <div className={`bg-[#252526] text-white flex ${collapsed ? "w-12" : "w-55"} transition-all duration-300`}>
            <div className="flex flex-col items-center justify-between py-2 px-2 cursor-pointer" onClick={() => setCollapsed(!collapsed)}>
                <Image src="/files.png" alt="Toggle" width={20} height={20} />
                <Image src="/avatar.png" alt="Toggle" width={20} height={20} />
            </div>

            <div>
                {/* Header */}
                <div className="p-2 flex items-center gap-2">
                    {!collapsed && <span className="text-sm">EXPLORER</span>}
                </div>

                {!collapsed && (
                    <div className="space-y-2 text-sm">
                        {/* About Section */}
                        <div>
                            <div className="flex items-center gap-2 cursor-pointer" onClick={() => toggleSection("about")}>
                                {openSections.about ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                                <div className="font-semibold">About</div>
                            </div>
                            {openSections.about && (
                                <ul className="pl-5 mt-1 space-y-1">
                                    <li className="flex items-center gap-2 cursor-pointer hover:bg-white/10 py-1">
                                        <img src="/html.png" className="w-4 h-4" />
                                        index.html
                                    </li>
                                    <li className="flex items-center gap-2 cursor-pointer hover:bg-white/10 py-1">
                                        <img src="/css.png" className="w-4 h-4" />
                                        experience.css
                                    </li>
                                    <li className="flex items-center gap-2 cursor-pointer hover:bg-white/10 py-1">
                                        <img src="/js.png" className="w-4 h-4" />
                                        skills.js
                                    </li>
                                    <li className="flex items-center gap-2 cursor-pointer hover:bg-white/10 py-1">
                                        <img src="/typescript.png" className="w-4 h-4" />
                                        mini projects.ts
                                    </li>
                                </ul>
                            )}
                        </div>

                        {/* Side Projects Section */}
                        <div>
                            <div className="flex items-center gap-2 cursor-pointer" onClick={() => toggleSection("sideProjects")}>
                                {openSections.sideProjects ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                                <div className="font-semibold">Projects</div>
                            </div>
                            {openSections.sideProjects && (
                                <ul className="pl-5 mt-1 space-y-1">
                                    <li className="flex items-center gap-2 cursor-pointer hover:bg-white/10 py-1">
                                        <img src="/js.png" className="w-4 h-4" />
                                        Sanjeevani-AI.js
                                    </li>
                                    <li className="flex items-center gap-2 cursor-pointer hover:bg-white/10 py-1">
                                        <img src="/react.png" className="w-4 h-4" />
                                        Askly-AI.tsx
                                    </li>
                                    <li className="flex items-center gap-2 cursor-pointer hover:bg-white/10 py-1">
                                        <img src="/typescript.png" className="w-4 h-4" />
                                        InnoTracker.ts
                                    </li>
                                    <li className="flex items-center gap-2 cursor-pointer hover:bg-white/10 py-1">
                                        <img src="/js.png" className="w-4 h-4" />
                                        MockMate-AI.js
                                    </li>
                                </ul>
                            )}
                        </div>

                        {/* Contact Section */}
                        <div>
                            <div className="flex items-center gap-2 cursor-pointer" onClick={() => toggleSection("contact")}>
                                {openSections.contact ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                                <div className="font-semibold">Contact</div>
                            </div>
                            {openSections.contact && (
                                <ul className="pl-5 mt-1 space-y-1">
                                    <li className="flex items-center gap-2 cursor-pointer hover:bg-white/10 py-1">
                                        <img src="/gmail.png" className="w-4 h-4" />
                                        Email@gmail.com
                                    </li>
                                </ul>
                            )}
                        </div>

                        {/* Misc Section */}
                        <div>
                            <div className="flex items-center gap-2 cursor-pointer" onClick={() => toggleSection("misc")}>
                                {openSections.misc ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                                <div className="font-semibold">Misc</div>
                            </div>
                            {openSections.misc && (
                                <ul className="pl-5 mt-1 space-y-1">
                                    <li className="flex items-center gap-2 cursor-pointer hover:bg-white/10 py-1">
                                        <img src="/css.png" className="w-4 h-4" />
                                        Hobbies.css
                                    </li>
                                    <li className="flex items-center gap-2 cursor-pointer hover:bg-white/10 py-1">
                                        <img src="/react.png" className="w-4 h-4" />
                                        Figma.ts
                                    </li>
                                    <li className="flex items-center gap-2 cursor-pointer hover:bg-white/10 py-1">
                                        <img src="/js.png" className="w-4 h-4" />
                                        Anime.js
                                    </li>
                                    <li className="flex items-center gap-2 cursor-pointer hover:bg-white/10 py-1">
                                        <img src="/typescript.png" className="w-4 h-4" />
                                        Sketches.tsx
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                )}

                {/* Footer */}
                {!collapsed && (
                    <div className="bottom-0 left-0 w-full text-xs text-gray-400 border-t border-white/10 px-3 py-2">
                        <div>All Rights Reserved.</div>
                        <div>Made in 2025.</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Sidebar;
