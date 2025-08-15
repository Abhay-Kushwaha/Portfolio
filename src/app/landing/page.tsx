'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Rajdhani } from 'next/font/google';
import '@/app/globals.css';
import { useRouter } from 'next/navigation';

const name = 'ABHAY KUSHWAHA';

const spaceGrotesk = Rajdhani({
    subsets: ['latin'],
    weight: ['400'],
});

export default function LandingPage() {
    const router = useRouter();
    const [step, setStep] = useState(0);

    useEffect(() => {
        const timers = [
            setTimeout(() => setStep(1), 1000),
            setTimeout(() => setStep(2), 1500),
        ];
        return () => timers.forEach(clearTimeout);
    }, []);

    const firstWave = [0, 8, 2, 11, 7, 5, 9];
    const secondWave = [13, 3, 10, 4, 6, 1, 12];

    return (
        <motion.div
            className="relative min-h-screen w-screen overflow-hidden font-sans bg-black"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 50, damping: 10 }}
        >
            {/* Background */}
            <Image
                src="/pic.jpeg"
                alt="Background"
                fill
                className="object-cover z-0"
                priority
            />
            <div className="absolute inset-0 bg-black/60 z-10"></div>

            {/* Top-left text */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 text-white text-sm sm:text-md font-light">
                © Code by Abhay
            </div>

            {/* Location Badge */}
            <div className="absolute top-67 md:top-1/3 sm:left-0 z-20 bg-black/80 text-white rounded-tr-full rounded-br-full px-3 sm:px-4 py-2 flex items-center space-x-3 max-w-[80%] sm:max-w-none">
                <div>
                    <p className="text-xs sm:text-sm md:text-md leading-tight font-light pr-2 sm:pr-5 py-1 sm:py-2">
                        Located<br />in the<br />Ghaziabad
                    </p>
                </div>
                <div className="w-10 h-10 sm:w-16 sm:h-16 bg-gray-300 rounded-full flex items-center justify-center">
                    <div className="w-5 h-5 sm:w-8 sm:h-8 bg-gray-600 rounded-full flex items-center justify-center">
                        <div className="w-2.5 h-2.5 sm:w-4 sm:h-4 bg-white rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Right-side content */}
            <div className="absolute right-4 top-1/2 sm:top-[38%] transform -translate-y-1/2 z-20 text-white font-bold text-right lg:text-left max-w-[60%] sm:max-w-none">
                <p className="text-lg sm:text-3xl font-medium mb-1 sm:mb-2 tracking-wide">
                    Student
                </p>
                <p className="text-xl md:text-5xl font-medium tracking-wide">
                    Designer & Developer
                </p>
            </div>

            {/* Main name */}
            <div className="absolute bottom-30 md:bottom-28 left-0 w-full z-20 flex justify-center px-4">
                <h1
                    className={`text-white leading-none tracking-0 lg:tracking-[0.09em] whitespace-nowrap text-center font-light ${spaceGrotesk.className}`}
                    style={{ fontSize: 'clamp(2rem, 12vw, 8rem)' }}
                >
                    {name.split('').map((letter, index) => {
                        let initialTilt = 0;
                        if (step === 0) {
                            if (firstWave.includes(index)) initialTilt = getRandomTilt();
                            if (secondWave.includes(index)) initialTilt = getRandomTilt();
                        } else if (step === 1) {
                            if (secondWave.includes(index)) initialTilt = getRandomTilt();
                        }

                        return (
                            <motion.span
                                key={index}
                                initial={{ rotate: initialTilt }}
                                animate={{ rotate: 0 }}
                                transition={{
                                    duration: 0.5,
                                    ease: 'easeInOut',
                                    delay: firstWave.includes(index)
                                        ? 1
                                        : secondWave.includes(index)
                                            ? 2
                                            : 0,
                                }}
                                className="inline-block"
                            >
                                {letter !== ' ' ? letter : '\u00A0'}
                            </motion.span>
                        );
                    })}
                </h1>
            </div>

            {/* Button */}
            <div className="absolute bottom-6 right-39 translate-x-1/2 sm:translate-x-0 sm:right-4 z-20">
                <button
                    className="cybr-btn"
                    onClick={() => router.push('/vscode')}
                >
                    Enter My CodeBase<span aria-hidden>_</span>
                    <span aria-hidden className="cybr-btn__glitch">Enter My CodeBase_</span>
                    <span aria-hidden className="cybr-btn__tag">R25</span>
                </button>
            </div>
        </motion.div>
    );
}

function getRandomTilt() {
    return Math.random() > 0.5
        ? Math.floor(Math.random() * 25 + 15)
        : -Math.floor(Math.random() * 25 + 15);
}
