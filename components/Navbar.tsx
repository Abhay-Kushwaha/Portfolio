"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";

const Navbar = () => {
    const router = useRouter();
    return (
        <div className="flex items-center justify-between px-4 py-1 bg-[#3C3C3C] text-white text-sm gap-6">
            <div className="flex items-center gap-5">
                <Image
                    src="/vscode.png"
                    alt="VS Code Logo"
                    width={15}
                    height={15}
                    priority
                />
                <div className="space-x-4 hidden md:flex">
                    <Link href="/vscode">
                        <span className="text-xs font-light cursor-pointer">About</span>
                    </Link>
                    <Link href="/vscode/experience">
                        <span className="text-xs font-light cursor-pointer">Experience</span>
                    </Link>
                    <Link href="/vscode/skills">
                        <span className="text-xs font-light cursor-pointer">Skills</span>
                    </Link>
                    <Link href="/vscode/projects">
                        <span className="text-xs font-light cursor-pointer">Projects</span>
                    </Link>
                    <Link href="/vscode/email">
                        <span className="text-xs font-light cursor-pointer">Contact</span>
                    </Link>
                </div>
            </div>
            <div className="hidden md:flex justify-center bg-[#4a4949] text-white w-lg border-1 border-white/20 py-1 rounded-md text-xs font-semibold">
                Abhay-Kushwaha(Workspace)
            </div>
            <div className="hover:bg-red-800 hover:text-white items-center justify-center px-3 pt-1 rounded-xs cursor-pointer">
                <button className="cursor-pointer" onClick={()=>{router.push('/landing')}}><X className="h-4 w-5"/></button>
            </div>
        </div>
    );
};

export default Navbar;
