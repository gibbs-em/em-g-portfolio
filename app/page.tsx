"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { useRef, useState, useEffect } from "react";

export default function Home() {
  const imageRef = useRef<HTMLDivElement>(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true' || 
                   (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans dark:bg-black">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex gap-8">
            <a href="#about" className="text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors">
              About
            </a>
            <a href="#skills" className="text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors">
              Contact
            </a>
          </div>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <svg className="w-5 h-5 text-zinc-900 dark:text-zinc-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-zinc-900 dark:text-zinc-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      <main className="w-full pt-16">
        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center justify-center px-6 md:px-16 py-16 md:py-32">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-center sm:gap-12 max-w-7xl">
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-zinc-900 dark:text-zinc-50">
              Hi, I'm Em
            </h1>
            <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              I'm a UX fanatic and software developer based in London. I'm currently building micro-frontends for <a className="text-blue-600 dark:text-blue-400 hover:underline"href="https://www.dunelm.com" target="_blank" rel="noopener noreferrer">Dunelm</a>
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
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen flex items-center justify-center px-6 md:px-16 py-20 bg-zinc-50 dark:bg-zinc-900">
          <div className="max-w-7xl w-full">
            <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-12 text-center">Skills</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-6 py-3 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-full border border-zinc-200 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors cursor-default">
                React
              </span>
              <span className="px-6 py-3 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-full border border-zinc-200 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors cursor-default">
                TypeScript
              </span>
              <span className="px-6 py-3 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-full border border-zinc-200 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors cursor-default">
                Next.js
              </span>
              <span className="px-6 py-3 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-full border border-zinc-200 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors cursor-default">
                Tailwind CSS
              </span>
              <span className="px-6 py-3 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-full border border-zinc-200 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors cursor-default">
                Node.js
              </span>
              <span className="px-6 py-3 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-full border border-zinc-200 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors cursor-default">
                Git
              </span>
              <span className="px-6 py-3 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-full border border-zinc-200 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors cursor-default">
                UX Design
              </span>
              <span className="px-6 py-3 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-full border border-zinc-200 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors cursor-default">
                Figma
              </span>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen flex items-center justify-center px-6 md:px-16 py-20">
          <div className="max-w-7xl w-full">
            <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-12 text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project Card 1 */}
              <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-linear-to-br from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-800"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">Project One</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                    A brief description of this amazing project and what it does for users.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full">React</span>
                    <span className="px-3 py-1 text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full">TypeScript</span>
                    <span className="px-3 py-1 text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full">Tailwind</span>
                  </div>
                  <div className="flex gap-4">
                    <a href="#" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">GitHub</a>
                    <a href="#" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">Live Demo</a>
                  </div>
                </div>
              </div>

              {/* Project Card 2 */}
              <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-linear-to-br from-purple-400 to-purple-600 dark:from-purple-600 dark:to-purple-800"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">Project Two</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                    Another exciting project showcasing different skills and technologies.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full">Next.js</span>
                    <span className="px-3 py-1 text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full">Node.js</span>
                    <span className="px-3 py-1 text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full">MongoDB</span>
                  </div>
                  <div className="flex gap-4">
                    <a href="#" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">GitHub</a>
                    <a href="#" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">Live Demo</a>
                  </div>
                </div>
              </div>

              {/* Project Card 3 */}
              <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-linear-to-br from-green-400 to-green-600 dark:from-green-600 dark:to-green-800"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">Project Three</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                    A creative solution built with modern tools and best practices.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full">Vue.js</span>
                    <span className="px-3 py-1 text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full">Firebase</span>
                    <span className="px-3 py-1 text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full">Figma</span>
                  </div>
                  <div className="flex gap-4">
                    <a href="#" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">GitHub</a>
                    <a href="#" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">Live Demo</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="min-h-[50vh] flex items-center justify-center px-6 md:px-16 py-20 bg-zinc-50 dark:bg-zinc-900">
          <div className="max-w-3xl w-full text-center">
            <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">Get In Touch</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <a 
              href="mailto:elgiblett@gmail.com"
              className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors mb-8"
            >
              Send me an email
            </a>
            <div className="flex justify-center gap-6">
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
        </section>
      </main>
    </div>
  );
}
