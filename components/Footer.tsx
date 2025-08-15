"use client";
import React, { useEffect, useState } from "react";

const Footer = () => {
    const [dateTime, setDateTime] = useState<string>("");
    useEffect(() => {
        const updateDateTime = () => {
            setDateTime(
                new Date().toLocaleString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric",
                    hour12: true,
                })
            );
        };
        updateDateTime();
        const interval = setInterval(updateDateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-[#007acc] text-white text-xs px-4 py-1.25 flex justify-between items-center">
            {/* Left side */}
            <div className="flex items-center space-x-2">
                <span>Made with Love by</span>
                <span className="font-medium pl-16 sm:pl-0">ABHAY KUSHWAHA</span>
                <span className="hidden md:flex">NEXT.JS</span>
                <span className="hidden md:flex">TypeScript</span>
            </div>

            {/* Right side - only for md+ */}
            <div className="hidden md:flex md:items-center md:space-x-12 lg:space-x-4">
                <div>{dateTime}</div>
                <div className="flex items-center space-x-4">
                    <span>UTF-8</span>
                    <span>PORT:5000</span>
                </div>
            </div>
        </div>

    );
};

export default Footer;
