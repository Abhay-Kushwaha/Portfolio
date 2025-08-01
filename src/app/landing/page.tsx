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
    const [step, setStep] = useState(0); // 0: initial, 1: some straight, 2: all straight

    useEffect(() => {
        const timers = [
            setTimeout(() => setStep(1), 1000),  // first wave at 1 second
            setTimeout(() => setStep(2), 1500), // second wave at 2 seconds
        ];
        return () => timers.forEach(clearTimeout);
    }, []);

    // Letters to tilt initially (indexes)
    const firstWave = [0, 8, 2, 11, 7, 5, 9];  // some letters
    const secondWave = [13, 3, 10, 4, 6, 1, 12];  // rest

    return (
        <motion.div
            className="relative h-screen w-screen overflow-hidden font-sans bg-black"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 50, damping: 10 }}
        >
            {/* Background image */}
            <Image
                src="/pic.jpeg"
                alt="Background"
                fill
                className="object-cover z-0"
                priority
            />

            {/* Overlay for contrast */}
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            {/* <div className="absolute inset-0 bg-[#7f7f7f]/60 z-10"></div> */}

            {/* Top-left © text */}
            <div className="absolute top-6 left-6 z-20 text-white text-md font-light">
                © Code by Abhay
            </div>

            {/* Location Badge */}
            <div className="absolute top-1/3 z-20 bg-black/80 text-white rounded-tr-full rounded-br-full px-4 py-2 flex items-center space-x-3">
                <div>
                    <p className="text-md leading-tight font-light pr-5 py-2">Located<br />in the<br />Ghaziabad</p>
                </div>
                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Right side content */}
            <div className="absolute right-20 top-27/70 transform -translate-y-1/2 z-20 text-white font-bold text-left">
                <p className="text-3xl font-medium mb-2 tracking-wide">Student</p>
                <p className="text-4xl font-medium tracking-wide">Designer & Developer</p>
            </div>

            {/* Main name - bottom aligned full-width with high tracking and oversized text */}
            <div className="absolute bottom-30 left-0 w-full z-20 flex justify-center px-4">
                {/* <h1 className="text-white text-[16vw] md:text-[14vw] lg:text-[12vw] xl:text-[10vw] leading-none tracking-[0.09em] whitespace-nowrap text-center font-light">
                    ABHAY KUSHWAHA
                </h1> */}
                <h1 className={`text-white text-[16vw] md:text-[14vw] lg:text-[12vw] xl:text-[10vw] leading-none tracking-[0.09em] whitespace-nowrap text-center font-light ${spaceGrotesk.className}`}>
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
                                    delay: firstWave.includes(index) ? 1 : (secondWave.includes(index) ? 2 : 0),
                                }}
                                className={`inline-block ${letter === ' ' ? '' : ''}`}
                            >
                                {letter !== ' ' ? letter : '\u00A0'}
                            </motion.span>
                        );
                    })}
                </h1>
            </div>

            {/* Codebase Button */}
            <div className='absolute bottom-6 right-6 z-20'>
                <button className="cybr-btn px-4" onClick={() => router.push('/vscode')}>
                    Enter My CodeBase<span aria-hidden>_</span>
                    <span aria-hidden className="cybr-btn__glitch">Enter My CodeBase_</span>
                    <span aria-hidden className="cybr-btn__tag">R25</span>
                </button>
            </div>
        </motion.div>
    );
}

// Util: random angle between -20 and 20 degrees
function getRandomTilt() {
    return Math.random() > 0.5
        ? Math.floor(Math.random() * 25 + 15) // +15 to +40 degrees
        : -Math.floor(Math.random() * 25 + 15); // -15 to -40 degrees
}