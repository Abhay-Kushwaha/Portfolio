"use client";

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandJavascript,
  IconBrandReact,
  IconBrandTailwind,
  IconDatabase,
  IconServer,
  IconBrandNextjs,
  IconBrandBootstrap,
  IconBrandGit,
  IconBrandGithub,
  IconBrandMongodb,
  IconBrandNodejs,
  IconBrandPython,
  IconBrandTypescript,
  IconBrandVscode,
  IconSql,
  IconFlask,
  IconBrandFigma,
  IconBrandGithubCopilot,
  IconCup,
} from "@tabler/icons-react";
import { Rajdhani } from "next/font/google";

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['500'],
});

export default function SkillsFloatingDock() {
  const Programming = [
    {
      title: "Java",
      icon: <img src="/java.png" alt="Java" className="h-full w-full"/>,
      href: "#java",
    },
    {
      title: "JavaScript",
      icon: <IconBrandJavascript className="h-full w-full text-yellow-400 dark:text-yellow-300" />,
      href: "#javascript",
    },
    {
      title: "TypeScript",
      icon: <IconBrandTypescript className="h-full w-full text-blue-500 dark:text-blue-400" />,
      href: "#typescript",
    },
    {
      title: "Python",
      icon: <IconBrandPython className="h-full w-full text-blue-300 dark:text-blue-200" />,
      href: "#python",
    },
  ];

  const Frontend = [
    {
      title: "Next.js",
      icon: <IconBrandNextjs className="h-full w-full text-white dark:text-gray-200" />,
      href: "#nextjs",
    },
    {
      title: "React",
      icon: <IconBrandReact className="h-full w-full text-sky-400 dark:text-sky-300" />,
      href: "#react",
    },
    {
      title: "Tailwind CSS",
      icon: <IconBrandTailwind className="h-full w-full text-cyan-400 dark:text-cyan-300" />,
      href: "#tailwind",
    },
    {
      title: "Bootstrap",
      icon: <IconBrandBootstrap className="h-full w-full text-purple-500 dark:text-purple-400" />,
      href: "#bootstrap",
    },
  ]

  const Backend = [
    {
      title: "Express.js",
      icon: <img src="/express.png" alt="ExpressJS" className="h-full w-full" />,
      href: "#expressjs",
    },
    {
      title: "Python Flask",
      icon: <img src="/flask.png" alt="Flask" className="h-full w-full" />,
      href: "#react",
    },
    {
      title: "Node.js",
      icon: <IconBrandNodejs className="h-full w-full text-green-500 dark:text-green-400" />,
      href: "#node",
    },
    {
      title: "JavaScript",
      icon: <IconBrandJavascript className="h-full w-full text-yellow-400 dark:text-yellow-300" />,
      href: "#javascript",
    },
  ]

  const Database = [
    {
      title: "MongoDB",
      icon: <IconBrandMongodb className="h-full w-full text-green-400 dark:text-green-300" />,
      href: "#mongodb",
    },
    {
      title: "My SQL",
      icon: <img src="/mysql.png" alt="SQL" className="h-full w-full" />,
      href: "#sql",
    },
  ]

  const Tools = [
    {
      title: "Visual Studio Code",
      icon: <IconBrandVscode className="h-full w-full text-blue-500 dark:text-blue-400" />,
      href: "#vscode",
    },
    {
      title: "Postman",
      icon: <img src="/postman.png" alt="Postman" className="h-full w-full" />,
      href: "#postman",
    },
    {
      title: "Git",
      icon: <IconBrandGit className="h-full w-full text-orange-500 dark:text-orange-400" />,
      href: "#git",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-white dark:text-gray-300" />,
      href: "#github",
    },
    {
      title: "Github Copilot",
      icon: <IconBrandGithubCopilot className="h-full w-full text-orange-400 dark:text-orange-300" />,
      href: "#copilot",
    },
    {
      title: "Figma",
      icon: <IconBrandFigma className="h-full w-full text-white dark:text-gray-300" />,
      href: "#figma",
    },
  ]

  return (
    <section className="min-h-screen md:px-10 md:py-10 flex flex-col text-white">
      <div className="mb-12">
        <h1 className={`text-4xl md:text-6xl font-extrabold ${rajdhani.className}`}>
          Technical Skills
        </h1>
        <p className="text-lg mt-4 text-gray-300 text-left font-light max-w-2xl">
          I specialize in building scalable full-stack applications using modern web technologies.
          From intuitive UIs to robust backend systems and efficient data structures — here's a snapshot of what I work with.
        </p>
      </div>

      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-2xl font-medium">Programming Languages</h2>
          <FloatingDock
            mobileClassName="translate-y-20"
            desktopClassName="bg-neutral-900/80 border border-neutral-800 shadow-md backdrop-blur-md"
            items={Programming}
          />
        </div>

        <div className="flex flex-col items-start gap-4">
          <h2 className="text-2xl font-medium">Frontend</h2>
          <FloatingDock
            mobileClassName="translate-y-20"
            desktopClassName="bg-neutral-900/80 border border-neutral-800 shadow-md backdrop-blur-md"
            items={Frontend}
          />
        </div>

        <div className="flex flex-col items-start gap-4">
          <h2 className="text-2xl font-medium">Backend</h2>
          <FloatingDock
            mobileClassName="translate-y-20"
            desktopClassName="bg-neutral-900/80 border border-neutral-800 shadow-md backdrop-blur-md"
            items={Backend}
          />
        </div>

        <div className="flex flex-col items-start gap-4">
          <h2 className="text-2xl font-medium">Database</h2>
          <FloatingDock
            mobileClassName="translate-y-20"
            desktopClassName="bg-neutral-900/80 border border-neutral-800 shadow-md backdrop-blur-md"
            items={Database}
          />
        </div>

        <div className="flex flex-col items-start gap-4">
          <h2 className="text-2xl font-medium">Tech Tools</h2>
          <FloatingDock
            mobileClassName="translate-y-20"
            desktopClassName="bg-neutral-900/80 border border-neutral-800 shadow-md backdrop-blur-md"
            items={Tools}
          />
        </div>
      </div>
    </section>
  );
}
