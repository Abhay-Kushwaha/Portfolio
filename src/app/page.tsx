'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const messages = [
  'Welcome to my PORTFOLIO',              // English
  'मेरे पोर्टफोलियो में आपका स्वागत है',  // Hindi
  '¡Bienvenido a mi PORTAFOLIO!',         // Spanish
  '私のポートフォリオへようこそ',         // Japanese
  '제 포트폴리오에 오신 것을 환영합니다',   // Korean
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const router = useRouter();

  // Typing effect
  useEffect(() => {
    if (index < messages.length) {
      if (charIndex < messages[index].length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + messages[index][charIndex]);
          setCharIndex(charIndex + 1);
        }, 50); // Typing speed
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIndex(index + 1);
          setDisplayedText('');
          setCharIndex(0);
        }, 900); // Pause after a full message
        return () => clearTimeout(timeout);
      }
    } else {
      setTimeout(() => {
        // router.push('/landing');
        window.location.href = '/landing'; // Redirect to landing page
      }, 900);
    }
  }, [charIndex, index]);

  return (
    <motion.div
      className="h-screen w-screen flex items-center justify-center bg-black text-white text-3xl md:text-5xl text-center font-mono"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.span
        key={index}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {displayedText}
        <span className="animate-pulse">|</span>
      </motion.span>
    </motion.div>
  );
}
