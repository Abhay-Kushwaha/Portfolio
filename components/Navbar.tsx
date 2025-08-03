"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="flex items-center px-4 py-1.25 bg-[#3C3C3C] text-white text-sm gap-6">
            <Image
                src="/vscode.png"
                alt="VS Code Logo"
                width={15}
                height={15}
                priority
            />
            <div className="space-x-4 hidden md:flex">
                <Link href="#about">
                    <span className="text-xs font-light cursor-pointer">About</span>
                </Link>
                <Link href="#experience">
                    <span className="text-xs font-light cursor-pointer">Experience</span>
                </Link>
                <Link href="#skills">
                    <span className="text-xs font-light cursor-pointer">Skills</span>
                </Link>
                <Link href="#projects">
                    <span className="text-xs font-light cursor-pointer">Projects</span>
                </Link>
                <Link href="#contact">
                    <span className="text-xs font-light cursor-pointer">Contact</span>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
