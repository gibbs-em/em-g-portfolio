"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { useRef } from "react";

export default function Home() {
  const imageRef = useRef<HTMLDivElement>(null);
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:gap-12">
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              Hi, I'm Em
            </h1>
            <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-320">
              I'm a UX fanatic and software developer based in London. I'm currently building micro-frontends for <a className="text-white hover:underline"href="https://www.dunelm.com" target="_blank" rel="noopener noreferrer">Dunelm</a>
            </p>
            <div className="flex flex-row gap-4">
              <a href="https://www.linkedin.com/in/emily-giblett/" target="_blank" rel="noopener noreferrer">
                <Image src="/linkedin.png" alt="LinkedIn" width={32} height={32} className="hover:opacity-80 transition-opacity"/>
              </a>
              <a href="https://github.com/gibbs-em" target="_blank" rel="noopener noreferrer">
                <Image src="/github.png" alt="GitHub" width={32} height={32} className="hover:opacity-80 transition-opacity"/>
              </a>
              <a href="https://www.instagram.com/gibbo_codes/" target="_blank" rel="noopener noreferrer">
                <Image src="/instagram.png" alt="Instagram" width={32} height={32} className="hover:opacity-80 transition-opacity"/>
              </a>
            </div>
          </div>
          <motion.div
            ref={imageRef}
            animate={{
              y: [0, -10, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Image src="/portfolio-profile.png" alt="A picture of Em surrounded by cartoon clouds" width={600} height={600}/>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
