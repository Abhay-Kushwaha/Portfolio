"use client";

import React, { useEffect, useState } from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

export default function ExperiencePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const openImage = (src: string) => {
    setSelectedImage(src);
  };
  const closeImage = () => {
    setSelectedImage(null);
  };

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
          <h1 className="text-xl font-medium pb-4">
            Indibus Software Solutions Pvt. Ltd.
          </h1>
          <p className="mb-8 text-xs font-normal text-gray-200 md:text-sm dark:text-neutral-200">
            Working as a Frontend Developer Intern, building responsive user interfaces using Next.js, TypeScript, Tailwind CSS, and REST APIs while collaborating with cross-functional teams in an agile environment. Contributed to reusable components, dashboard features, and performance optimization for production-grade web applications.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {["/certificates/Frontend_intern_1.jpg", "/certificates/Frontend_intern_2.jpg"].map(
              (src, idx) => (
                <Image
                  key={idx}
                  src={src}
                  alt="certificate"
                  width={500}
                  height={300}
                  onClick={() => openImage(src)}
                  className="h-20 w-full rounded-lg object-cover border-2 border-white/50 shadow-lg cursor-pointer transition-transform hover:scale-105 md:h-44 lg:h-60"
                />
              )
            )}
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
          <h1 className="text-xl font-medium pb-4">
            Indibus Software Solutions Pvt. Ltd.
          </h1>
          <p className="mb-8 text-xs font-normal text-gray-200 md:text-sm dark:text-neutral-200">
            I worked as a UI/UX design intern at INDIBUS Software Solutions Pvt
            Ltd, creating website UIs for clients, which were finalized before
            development. This experience strengthened my teamwork,
            industry-level collaboration, and ability to meet strict deadlines.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {["/certificates/UIUX_intern_1.png", "/certificates/UIUX_intern_2.png"].map(
              (src, idx) => (
                <Image
                  key={idx}
                  src={src}
                  alt="certificate"
                  width={500}
                  height={300}
                  onClick={() => openImage(src)}
                  className="h-20 w-full rounded-lg object-cover border-2 border-white/50 shadow-lg cursor-pointer transition-transform hover:scale-105 md:h-44 lg:h-60"
                />
              )
            )}
          </div>
        </div>
      ),
    },
  ];

  useEffect(() => {
    fetch("/api/recent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Experience",
        path: "/vscode/experience",
      }),
    });
  }, []);

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />

      {/* Modal Dialog */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={closeImage}
        >
          <div
            className="relative max-w-4xl max-h-2xl w-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Certificate Preview"
              width={1200}
              height={800}
              className="w-full max-h-screen object-contain bg-black/80 rounded-lg border-2 border-white/50 shadow-2xl"
            />
            <button
              className="absolute top-7 right-7 bg-white/80 text-black px-3 py-1 rounded-full font-bold hover:bg-white cursor-pointer"
              onClick={closeImage}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
