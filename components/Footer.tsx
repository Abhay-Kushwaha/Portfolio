"use client";
import React from "react";

const Footer = () => {
    return (
        <div className="bg-[#007acc] text-white text-xs px-4 py-1.25 flex justify-between items-center">
            <div className="flex justify-between items-center space-x-4">
                <span>Made with Love by</span>
                <span className="font-medium">ABHAY KUSHWAHA</span>
                <span className="hidden md:flex">NEXT.JS</span>
                <span className="hidden md:flex">TypeScript</span>
            </div>
            <div className="hidden md:flex md:justify-between md:items-center md:space-x-4">
                <div>
                    {new Date().toLocaleString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric",
                        hour12: true,
                    })}
                </div>
                <div className="flex justify-between items-center space-x-4">
                    <span>UTF-8</span>
                    <span>PORT:5000</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
