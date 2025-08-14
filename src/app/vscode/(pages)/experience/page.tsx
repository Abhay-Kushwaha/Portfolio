"use client"

import React, { useEffect } from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

export default function ExperiencePage() {
  const data = [
    {
      title: "March,2025 - Present",
      content: (
        <div>
          <div className="flex gap-2 mb-4">
            <div>
              <Image
                src="/indibus.png"
                alt="Indibus Logo"
                width={30}
                height={30}
              />
            </div>
            <h1 className="text-2xl font-medium">Frontend Intern</h1>
          </div>
          <h1 className="text-xl font-medium pb-4">Indibus Software Solutions Pvt. Ltd.</h1>
          <p className="mb-8 text-xs font-normal text-gray-200 md:text-sm dark:text-neutral-200">
            Working as a Frontend Developer Intern, building responsive user interfaces using Next.js, TypeScript, Tailwind CSS, and REST APIs while collaborating with cross-functional teams in an agile environment. Contributed to reusable components, dashboard features, and performance optimization for production-grade web applications.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/pic.jpeg"
              alt="certificate"
              width={500}
              height={300}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/pic.jpeg"
              alt="certificate"
              width={500}
              height={300}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "May,2024 - July,2024",
      content: (
        <div>
          <div className="flex gap-2 mb-4">
            <div>
              <Image
                src="/indibus.png"
                alt="Indibus Logo"
                width={30}
                height={30}
              />
            </div>
            <h1 className="text-2xl font-medium">UI/UX Designer</h1>
          </div>
          <h1 className="text-xl font-medium pb-4">Indibus Software Solutions Pvt. Ltd.</h1>
          <p className="mb-8 text-xs font-normal text-gray-200 md:text-sm dark:text-neutral-200">
            I worked as a UI/UX design intern at a INDIBUS Softwares Solutions Pvt Ltd , creating website UIs for clients, which were finalized before development. This experience strengthened my teamwork, industry-level collaboration, and ability to meet strict deadlines.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/pic.jpeg"
              alt="certificate"
              width={500}
              height={300}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/pic.jpeg"
              alt="certificate"
              width={500}
              height={300}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];

  useEffect(() => {
    fetch('/api/recent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Experience',
        path: '/vscode/experience'
      })
    });
  }, []);
  
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}