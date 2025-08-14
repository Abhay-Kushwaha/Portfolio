"use client";

import React from "react";
import Sidebar from "@/../components/Sidebar";
import Navbar from "@/../components/Navbar";
import Footer from "@/../components/Footer";

const VscodeLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex h-screen w-screen overflow-hidden">
            <div className="flex flex-col flex-1 bg-[#1E1E1E] text-white">
                <Navbar />
                <div className="flex flex-1 min-h-0">
                    <Sidebar />
                    <main className="flex-1 overflow-y-auto p-4"
                        style={{ scrollbarWidth: "thin", scrollbarColor: "#555 #333" }}>{children}</main>
                </div>
                <div className="flex-shrink-0">
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default VscodeLayout;
