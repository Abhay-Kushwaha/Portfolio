'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function LandingPage() {
    return (
        <motion.div
            className="relative h-screen w-screen overflow-hidden font-sans"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
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
            <div className="absolute inset-0 bg-[#7f7f7f]/60 z-10"></div>

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
            <div className="absolute right-20 top-1/3 transform -translate-y-1/2 z-20 text-white font-bold text-left">
                <p className="text-3xl font-medium mb-2 tracking-wide">Student</p>
                <p className="text-4xl font-medium tracking-wide">Designer & Developer</p>
            </div>

            {/* Main name - bottom aligned full-width with high tracking and oversized text */}
            <div className="absolute bottom-30 left-0 w-full z-20 flex justify-center px-4">
                <h1 className="text-white text-[16vw] md:text-[14vw] lg:text-[12vw] xl:text-[10vw] leading-none tracking-[0.09em] whitespace-nowrap text-center font-light">
                    ABHAY KUSHWAHA
                </h1>
            </div>

            {/* Enter CodeBase Button */}
            <div className="absolute bottom-6 right-6 z-20">
                <motion.button
                    className="relative px-6 py-3 rounded-full font-light text-sm tracking-wide uppercase text-white
               bg-black/50 border border-white/10 backdrop-blur-md overflow-hidden group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span className="relative z-10">Enter my CodeBase</span>

                    {/* Glowing Border Animation */}
                    <span className="absolute top-0 left-0 w-full h-full rounded-full z-0 pointer-events-none">
                        <span className="absolute inset-0 border-[1.5px] border-white/20 rounded-full animate-glow"></span>
                    </span>

                    {/* Animated light line */}
                    <span className="absolute w-full h-full rounded-full overflow-hidden">
                        <span className="absolute left-[-100%] top-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent
                       animate-border-light"></span>
                    </span>
                </motion.button>
            </div>
        </motion.div>
    );
}