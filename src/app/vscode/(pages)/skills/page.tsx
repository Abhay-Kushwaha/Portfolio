"use client";

import React, { useEffect } from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandJavascript,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandNextjs,
  IconBrandBootstrap,
  IconBrandGit,
  IconBrandGithub,
  IconBrandMongodb,
  IconBrandNodejs,
  IconBrandPython,
  IconBrandTypescript,
  IconBrandVscode,
  IconBrandFigma,
  IconBrandGithubCopilot,
} from "@tabler/icons-react";
import Image from "next/image";
import { Rajdhani } from "next/font/google";

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['500'],
});

export default function SkillsPage() {
  useEffect(() => {
    fetch('/api/recent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Skills',
        path: '/vscode/skills'
      })
    });
  }, []);

  const Programming = [
    {
      title: "Java",
      icon: <Image src="/java.png" alt="Java" height={50} width={50} className="h-full w-full" />,
      href: "https://docs.oracle.com/en/java/",
    },
    {
      title: "JavaScript",
      icon: <IconBrandJavascript className="h-full w-full text-yellow-400 dark:text-yellow-300" />,
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      title: "TypeScript",
      icon: <IconBrandTypescript className="h-full w-full text-blue-500 dark:text-blue-400" />,
      href: "https://www.typescriptlang.org/docs/",
    },
    {
      title: "Python",
      icon: <IconBrandPython className="h-full w-full text-blue-300 dark:text-blue-200" />,
      href: "https://docs.python.org/3/",
    },
  ];

  const Frontend = [
    {
      title: "Next.js",
      icon: <IconBrandNextjs className="h-full w-full text-white dark:text-gray-200" />,
      href: "https://nextjs.org/docs",
    },
    {
      title: "React",
      icon: <IconBrandReact className="h-full w-full text-sky-400 dark:text-sky-300" />,
      href: "https://react.dev/",
    },
    {
      title: "Tailwind CSS",
      icon: <IconBrandTailwind className="h-full w-full text-cyan-400 dark:text-cyan-300" />,
      href: "https://v2.tailwindcss.com/docs",
    },
    {
      title: "Bootstrap",
      icon: <IconBrandBootstrap className="h-full w-full text-purple-500 dark:text-purple-400" />,
      href: "https://getbootstrap.com/docs/5.0/getting-started/introduction/",
    },
  ]

  const Backend = [
    {
      title: "Express.js",
      icon: <Image src="/express.png" alt="ExpressJS" height={50} width={50} className="h-full w-full" />,
      href: "https://expressjs.com/",
    },
    {
      title: "Python Flask",
      icon: <Image src="/flask.png" alt="Flask" height={50} width={50} className="h-full w-full" />,
      href: "https://flask.palletsprojects.com/",
    },
    {
      title: "Node.js",
      icon: <IconBrandNodejs className="h-full w-full text-green-500 dark:text-green-400" />,
      href: "https://nodejs.org/en/docs",
    },
    {
      title: "JavaScript",
      icon: <IconBrandJavascript className="h-full w-full text-yellow-400 dark:text-yellow-300" />,
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
  ]

  const Database = [
    {
      title: "MongoDB",
      icon: <IconBrandMongodb className="h-full w-full text-green-400 dark:text-green-300" />,
      href: "https://www.mongodb.com/docs/",
    },
    {
      title: "My SQL",
      icon: <Image src="/mysql.png" alt="SQL" height={50} width={50} className="h-full w-full" />,
      href: "https://dev.mysql.com/doc/",
    },
  ]

  const Tools = [
    {
      title: "Visual Studio Code",
      icon: <IconBrandVscode className="h-full w-full text-blue-500 dark:text-blue-400" />,
      href: "https://code.visualstudio.com/docs",
    },
    {
      title: "Postman",
      icon: <Image src="/postman.png" alt="Postman" height={50} width={50} className="h-full w-full" />,
      href: "https://learning.postman.com/docs/introduction/overview/",
    },
    {
      title: "Git",
      icon: <IconBrandGit className="h-full w-full text-orange-500 dark:text-orange-400" />,
      href: "https://git-scm.com/doc",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-white dark:text-gray-300" />,
      href: "https://github.com/",
    },
    {
      title: "Github Copilot",
      icon: <IconBrandGithubCopilot className="h-full w-full text-orange-400 dark:text-orange-300" />,
      href: "https://github.com/features/copilot",
    },
    {
      title: "Figma",
      icon: <IconBrandFigma className="h-full w-full text-white dark:text-gray-300" />,
      href: "https://www.figma.com/",
    },
  ]

  return (
    <section className="min-h-screen md:px-10 md:py-10 flex flex-col text-white">
      <div className="mb-12">
        <h1 className={`text-4xl md:text-6xl font-extrabold ${rajdhani.className}`}>
          Technical Skills
        </h1>
        <p className="text-lg mt-4 text-gray-300 text-left font-light max-w-4xl">
          I specialize in building scalable full-stack applications using modern web technologies.
          From intuitive UIs to robust backend systems and efficient data structures — here&apos;s a snapshot of what I work with.
        </p>
      </div>

      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-2xl font-medium">Programming Languages</h2>
          <FloatingDock
            desktopClassName="bg-neutral-900/80 border border-neutral-800 shadow-md backdrop-blur-md"
            items={Programming}
          />
        </div>

        <div className="flex flex-col items-start gap-4">
          <h2 className="text-2xl font-medium">Frontend</h2>
          <FloatingDock
            desktopClassName="bg-neutral-900/80 border border-neutral-800 shadow-md backdrop-blur-md"
            items={Frontend}
          />
        </div>

        <div className="flex flex-col items-start gap-4">
          <h2 className="text-2xl font-medium">Backend</h2>
          <FloatingDock
            desktopClassName="bg-neutral-900/80 border border-neutral-800 shadow-md backdrop-blur-md"
            items={Backend}
          />
        </div>

        <div className="flex flex-col items-start gap-4">
          <h2 className="text-2xl font-medium">Database</h2>
          <FloatingDock
            desktopClassName="bg-neutral-900/80 border border-neutral-800 shadow-md backdrop-blur-md"
            items={Database}
          />
        </div>

        <div className="flex flex-col items-start gap-4">
          <h2 className="text-2xl font-medium">Tech Tools</h2>
          <FloatingDock
            desktopClassName="bg-neutral-900/80 border border-neutral-800 shadow-md backdrop-blur-md"
            items={Tools}
          />
        </div>
      </div>
    </section>
  );
}
