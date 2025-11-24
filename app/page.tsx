"use client";
import Image from "next/image";
import { motion, type Variants } from "motion/react";
import { useRef, useState, useEffect } from "react";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
	console.log(
		"👋 Thanks for dropping by! If you'd like to get in touch, please reach out to me at elgiblett@gmail.com",
	);
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
		"AWS",
		"Storybook",
		"CMS integration",
		"Vue.js",
		"Ruby on Rails",
		"UX Design",
		"Figma",
		"Workshop facilitation",
	];

	const softSkills = [
		{
			icon: "💬",
			title: "Communication",
			description:
				"I excel at translating complex technical concepts into clear, actionable insights for stakeholders and team members alike.",
		},
		{
			icon: "👥",
			title: "User Focus",
			description:
				"I prioritize user needs in every decision, leveraging UX research and testing to create intuitive, accessible experiences.",
		},
		{
			icon: "🤝",
			title: "Collaboration",
			description:
				"I thrive in cross-functional teams, facilitating workshops and fostering open dialogue to align diverse perspectives toward shared goals.",
		},
		{
			icon: "🧩",
			title: "Problem Solving",
			description:
				"I approach challenges with curiosity and creativity, breaking down complex problems into manageable solutions that deliver real value.",
		},
	];

	return (
		<div className="min-h-screen bg-white font-sans dark:bg-black">
			{/* Fixed Navigation */}
			<nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black border-b border-zinc-200 dark:border-zinc-800">
				<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
					<div className="flex gap-8">
						<a
							href="#about"
							className="text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors"
						>
							About
						</a>
						<a
							href="#skills"
							className="text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors"
						>
							Skills
						</a>
						<a
							href="#projects"
							className="text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors"
						>
							Projects
						</a>
						<a
							href="#contact"
							className="text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors"
						>
							Contact
						</a>
					</div>
				</div>
			</nav>

			<main className="w-full pt-16">
				{/* About Section */}
				<section
					id="about"
					className="min-h-screen flex items-center justify-center px-6 md:px-16 py-16 md:py-32"
				>
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
								I'm a UX fanatic and software developer based in London. I'm
								currently building micro-frontends for{" "}
								<a
									className="text-blue-600 dark:text-blue-400 hover:underline"
									href="https://www.dunelm.com"
									target="_blank"
									rel="noopener noreferrer"
								>
									Dunelm
								</a>
							</p>
							<div className="flex flex-row gap-4">
								<a
									href="https://www.linkedin.com/in/emily-giblett/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Image
										src="/linkedin.png"
										alt="LinkedIn"
										width={32}
										height={32}
										className="hover:opacity-80 transition-opacity"
									/>
								</a>
								<a
									href="https://github.com/gibbs-em"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Image
										src="/github.png"
										alt="GitHub"
										width={32}
										height={32}
										className="hover:opacity-80 transition-opacity"
									/>
								</a>
								<a
									href="https://www.instagram.com/gibbo_codes/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Image
										src="/instagram.png"
										alt="Instagram"
										width={32}
										height={32}
										className="hover:opacity-80 transition-opacity"
									/>
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
								ease: "easeInOut",
							}}
						>
							<Image
								src="/portfolio-profile.png"
								alt="A picture of Em surrounded by cartoon clouds"
								width={600}
								height={600}
							/>
						</motion.div>
					</motion.div>
				</section>

				{/* Skills Section */}
				<section
					id="skills"
					className="min-h-screen flex items-center justify-center px-6 md:px-16 py-12 bg-zinc-50 dark:bg-zinc-900"
				>
					<motion.div
						className="max-w-7xl w-full"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.2 }}
						variants={fadeInUp}
					>
						<h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-12 text-center">
							Skills
						</h2>

						{/* Technical and Soft Skills Container */}
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
							{/* Technical Skills - Left Column */}
							<div className="flex flex-col">
								<h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-6">
									Technical Skills
								</h3>
								<div className="flex flex-wrap gap-4">
									{skills.map((skill) => (
										<span
											key={skill}
											className="px-6 py-3 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-full border border-zinc-200 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors cursor-default"
										>
											{skill}
										</span>
									))}
								</div>
							</div>

							{/* Soft Skills - Right Column */}
							<div className="flex flex-col">
								<h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-6">
									Soft Skills
								</h3>
								<div className="flex flex-col gap-6">
									{softSkills.map((skill) => (
										<div key={skill.title} className="flex items-start gap-4">
											<span className="text-3xl shrink-0">{skill.icon}</span>
											<div className="flex flex-col">
												<h4 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-1">
													{skill.title}
												</h4>
												<p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
													{skill.description}
												</p>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>

						{/* Brand Banner */}
						<div className="relative w-full overflow-hidden py-12 border-t border-zinc-200 dark:border-zinc-800">
							<h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-16 text-center">
								Brands I've Worked With
							</h3>
							<div className="relative">
								<motion.div
									className="flex gap-20 items-center"
									animate={{
										x: [0, -960],
									}}
									transition={{
										x: {
											repeat: Infinity,
											repeatType: "loop",
											duration: 20,
											ease: "linear",
										},
									}}
								>
									<div className="shrink-0 w-40 h-20 flex items-center justify-center">
										<Image
											src="/itvx.svg"
											alt="ITVX"
											width={160}
											height={80}
											className="object-contain brightness-0 dark:brightness-0 dark:invert"
										/>
									</div>
									<div className="shrink-0 w-40 h-20 flex items-center justify-center">
										<Image
											src="/dunelm.svg"
											alt="Dunelm"
											width={160}
											height={80}
											className="object-contain brightness-0 dark:brightness-0 dark:invert"
										/>
									</div>
									<div className="shrink-0 w-40 h-15 flex items-center justify-center">
										<Image
											src="/wellcome.svg"
											alt="Wellcome Trust"
											width={120}
											height={80}
											className="object-contain brightness-0 dark:brightness-0 dark:invert"
										/>
									</div>
									<div className="shrink-0 w-40 h-20 flex items-center justify-center">
										<Image
											src="/cruk.svg"
											alt="Cancer Research UK"
											width={160}
											height={80}
											className="object-contain brightness-0 dark:brightness-0 dark:invert"
										/>
									</div>
									<div className="shrink-0 w-40 h-20 flex items-center justify-center">
										<Image
											src="/itvx.svg"
											alt="ITVX"
											width={160}
											height={80}
											className="object-contain brightness-0 dark:brightness-0 dark:invert"
										/>
									</div>
									<div className="shrink-0 w-40 h-20 flex items-center justify-center">
										<Image
											src="/dunelm.svg"
											alt="Dunelm"
											width={160}
											height={80}
											className="object-contain brightness-0 dark:brightness-0 dark:invert"
										/>
									</div>
									<div className="shrink-0 w-40 h-15 flex items-center justify-center">
										<Image
											src="/wellcome.svg"
											alt="Wellcome Trust"
											width={120}
											height={80}
											className="object-contain brightness-0 dark:brightness-0 dark:invert"
										/>
									</div>
									<div className="shrink-0 w-40 h-20 flex items-center justify-center">
										<Image
											src="/cruk.svg"
											alt="Cancer Research UK"
											width={160}
											height={80}
											className="object-contain brightness-0 dark:brightness-0 dark:invert"
										/>
									</div>
									<div className="shrink-0 w-40 h-20 flex items-center justify-center">
										<Image
											src="/itvx.svg"
											alt="ITVX"
											width={160}
											height={80}
											className="object-contain brightness-0 dark:brightness-0 dark:invert"
										/>
									</div>
									<div className="shrink-0 w-40 h-20 flex items-center justify-center">
										<Image
											src="/dunelm.svg"
											alt="Dunelm"
											width={160}
											height={80}
											className="object-contain brightness-0 dark:brightness-0 dark:invert"
										/>
									</div>
									<div className="shrink-0 w-40 h-15 flex items-center justify-center">
										<Image
											src="/wellcome.svg"
											alt="Wellcome Trust"
											width={120}
											height={80}
											className="object-contain brightness-0 dark:brightness-0 dark:invert"
										/>
									</div>
									<div className="shrink-0 w-40 h-20 flex items-center justify-center">
										<Image
											src="/cruk.svg"
											alt="Cancer Research UK"
											width={160}
											height={80}
											className="object-contain brightness-0 dark:brightness-0 dark:invert"
										/>
									</div>
								</motion.div>
							</div>
						</div>
					</motion.div>
				</section>

				{/* Projects Section */}
				<section
					id="projects"
					className="min-h-screen flex items-center justify-center px-6 md:px-16 pt-12 pb-20"
				>
					<div className="max-w-7xl w-full">
						<h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-12 text-center">
							Projects
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<motion.div
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.2 }}
								variants={fadeInUp}
							>
								<ProjectCard
									title="Fantasy Premier League App"
									description="Website and blog for fantasy football players in my league using a custom CMS built with Sanity"
									techStack={[
										"React",
										"TypeScript",
										"Next.js",
										"Vercel",
										"Sanity CMS",
									]}
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

				<section
					id="contact"
					className="min-h-[50vh] flex items-center justify-center px-6 md:px-16 py-20 bg-zinc-50 dark:bg-zinc-900"
				>
					<motion.div
						className="max-w-3xl w-full text-center"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.2 }}
						variants={fadeInUp}
					>
						<h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
							Get In Touch
						</h2>
						<p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
							I'm always open to new opportunities and collaborations. Feel free
							to reach out!
						</p>
						<a
							href="mailto:elgiblett@gmail.com"
							className="inline-block px-8 py-4 bg-linear-to-r from-purple-900 to-purple-800 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(147,51,234,0.6)] mb-8"
						>
							Send me an email
						</a>
						<div className="flex justify-center gap-6">
							<a
								href="https://www.linkedin.com/in/emily-giblett/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Image
									src="/linkedin.png"
									alt="LinkedIn"
									width={32}
									height={32}
									className="hover:opacity-80 transition-opacity"
								/>
							</a>
							<a
								href="https://github.com/gibbs-em"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Image
									src="/github.png"
									alt="GitHub"
									width={32}
									height={32}
									className="hover:opacity-80 transition-opacity"
								/>
							</a>
							<a
								href="https://www.instagram.com/gibbo_codes/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Image
									src="/instagram.png"
									alt="Instagram"
									width={32}
									height={32}
									className="hover:opacity-80 transition-opacity"
								/>
							</a>
						</div>
					</motion.div>
				</section>
			</main>
		</div>
	);
}
