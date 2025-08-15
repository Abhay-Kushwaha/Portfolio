"use client";

import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Rajdhani } from "next/font/google";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["500"],
});

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        setHeight(ref.current.scrollHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.2", "end 0.5"],
  });

  // const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <div
      className="max-w-2xl lg:max-w-full lg:w-full font-sans lg:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto lg:pt-10">
        <h2
          className={`text-4xl ${rajdhani.className} md:text-6xl mb-4 text-white dark:text-white max-w-4xl`}
        >
          Work Experience
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-4xl">
          A quick glimpse into the places where I&apos;ve honed my craft, built exciting and impactful projects, collaborated with talented minds, and embraced challenges that pushed me to grow. Each experience has been a stepping stone, shaping my skills, creativity, and problem-solving mindset while creating memorable moments along the   way.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start md:pt-30 md:gap-10"
          >
            {/* Sticky timeline marker */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-24 md:top-32 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="hidden sm:h-10 sm:absolute sm:left-3 md:left-3 sm:w-10 sm:rounded-full sm:bg-black sm:flex sm:items-center sm:justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-gray-200 dark:text-gray-200">
                {item.title}
              </h3>
            </div>

            {/* Content section */}
            <div className="relative pt-10 lg:pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-gray-200 dark:text-gray-200">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        {/* Timeline vertical line */}
        <div
          style={{ height: `${height}px` }}
          className="hidden md:flex sm:absolute md:left-8 sm:left-8 sm:top-0 sm:overflow-hidden sm:w-[2px] sm:pointer-events-none"
        >
          <motion.div
            style={{
              // height: heightTransform,
              opacity: opacityTransform,
            }}
            className="w-full bg-gradient-to-t from-purple-500 via-blue-500 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
