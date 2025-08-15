'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Code2, FolderKanban, Briefcase, Mail } from "lucide-react";
import Image from 'next/image';
import { Rajdhani } from 'next/font/google';

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['500'],
});

interface RecentPage {
  name: string;
  path: string;
}

const socialLinks = [
  { name: 'LinkedIn Profile', icon: '/linkedin.png', url: 'https://www.linkedin.com/in/abhay-k-5a0902278/' },
  { name: 'Github Page', icon: '/git.png', url: 'https://www.github.com/Abhay-Kushwaha' },
  { name: 'Leetcode Profile', icon: '/leetcode.png', url: 'https://leetcode.com/u/AbhayKushwaha1/' },
  { name: 'Instagram Handle', icon: '/insta.png', url: 'https://www.instagram.com/kush_abhay_1/' },
];

const HomePage: React.FC = () => {
  const [recentPages, setRecentPages] = useState<RecentPage[]>([]);

  useEffect(() => {
    fetch('/api/recent')
      .then(res => res.json())
      .then(data => setRecentPages(data))
      .catch(console.error);
  }, []);

  return (
    <div className="max-w-5/6 bg-[#1e1e1e] text-white md:p-6 flex flex-col md:flex-row md:justify-center md:items-center lg:ml-27 lg:mt-13 gap-20">
      {/* Left Column */}
      <div className="flex flex-col gap-6 w-full md:w-1/2">
        <div>
          <h1 className={`text-5xl md:text-6xl ${rajdhani.className}`}>Abhay Kushwaha</h1>
          <p className="text-lg text-gray-400 mt-1">Software Development & Designer</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Start</h2>
          <ul className="space-y-2 text-blue-400">
            <li className="flex items-center gap-2"><Code2 size={18} /><Link href="/vscode/skills">Skills ...</Link></li>
            <li className="flex items-center gap-2"><FolderKanban size={18} /><Link href="/vscode/projects">Projects ...</Link></li>
            <li className="flex items-center gap-2"><Briefcase size={18} /><Link href="/vscode/experience">Experience ...</Link></li>
            <li className="flex items-center gap-2"><Mail size={18} /><Link href="/vscode/email">Get in Touch ...</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Recent</h2>
          {recentPages.length > 0 ? (
            <ul className="space-y-1 text-sm">
              {recentPages.map((page, idx) => (
                <li key={idx}>
                  <Link href={page.path} className="text-blue-400 mr-2">
                    E:/Abhay-Kushwaha{page.path}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 text-sm">No recent pages yet.</p>
          )}
        </div>

      </div>

      {/* Right Column */}
      <div className="flex-1">
        <h2 className="text-xl font-semibold mb-4">About</h2>
        <div className="flex flex-col gap-3">
          {socialLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#1e1e1e] hover:bg-[#2a2a2a] p-3 rounded-md border-b-4 border-blue-500 transition-all"
            >
              <Image src={item.icon} alt={item.name} height={50} width={50} className="h-6 w-6" />
              <span>{item.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
