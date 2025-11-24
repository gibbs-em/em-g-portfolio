"use client";
import Image from "next/image";
import { motion, type Variants } from "motion/react";
import { useRef, useState, useEffect } from "react";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  console.log("👋 Thanks for dropping by! If you'd like to get in touch, please reach out to me at elgiblett@gmail.com")
  const imageRef = useRef<HTMLDivElement>(null);
  
  const fadeInUp: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  
  const skills = [
    "React",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Git",
    "CMS integration",
    "Vue.js",
    "Ruby on Rails",
    "UX Design",
    "Figma",
    "Workshop facilitation"
  ];
  
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

        </div>
      </nav>

      <main className="w-full pt-16">
        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center justify-center px-6 md:px-16 py-16 md:py-32">
        <motion.div
          className="flex flex-col items-center gap-8 sm:flex-row sm:items-center sm:gap-12 max-w-7xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
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
        </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen flex items-center justify-center px-6 md:px-16 py-20 bg-zinc-50 dark:bg-zinc-900">
        <motion.div
          className="max-w-7xl w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
            <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-12 text-center">Skills</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-6 py-3 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-full border border-zinc-200 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
        </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen flex items-center justify-center px-6 md:px-16 py-20">
          <div className="max-w-7xl w-full">
            <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-12 text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
              >
                <ProjectCard
                  title="Fantasy Premier League App"
                  description="Website and blog for fantasy football players in my league using a custom CMS built with Sanity"
                  techStack={["React", "TypeScript", "Next.js", "Vercel", "Sanity CMS"]}
                  imageSrc="/fpl.png"
                  githubUrl="#"
                  demoUrl="#"
                />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
              >
                <ProjectCard
                  title="Project Two"
                  description="Another exciting project showcasing different skills and technologies."
                  techStack={["Next.js", "Node.js", "MongoDB"]}
                  imageSrc="/project-2.png"
                  githubUrl="#"
                  demoUrl="#"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section id="contact" className="min-h-[50vh] flex items-center justify-center px-6 md:px-16 py-20 bg-zinc-50 dark:bg-zinc-900">
          <motion.div
            className="max-w-3xl w-full text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
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
          </motion.div>
        </section>
      </main>
    </div>
  );
}
