"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../components/navbar";
import {
  SiPython,
  SiDocker,
  SiReact,
  SiSupabase,
  SiJavascript,
  SiHostinger,
  SiOpencv,
  SiDjango,
  SiMysql,
  SiPostgresql,
  SiHtml5,
  SiCss3,
  SiFlask,
  SiGraphql,
  SiFlutter,
  SiEthereum,
} from "react-icons/si";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "Green Drive Mobility",
      category: "ORGANIZATIONAL PORTFOLIO",
      date: "March 2025 – May 2025",
      type: "Freelance Project",
      description:
        "Developed and deployed a production-ready organizational portfolio web application for Green Drive Mobility - An organization that specializes in EV Logistics. It was built using React.js, Supabase, and included modern UI patterns. The application delivers a robust, scalable user experience hosted on Hostinger. Built a comprehensive Careers module enabling seamless job applications, resume uploads, and admin-side applicant tracking system. Implemented real-time CRUD operations with Supabase authentication and row-level security to ensure data protection and user privacy.",
      highlights: [
        "Production-ready deployment on Hostinger with optimal performance",
        "Full-featured Careers module with applicant tracking system",
        "Real-time CRUD operations with Supabase backend",
        "Reusable UI components for maintainability",
        "Row-level security implementation for data protection",
        "Fully responsive design for mobile and desktop",
      ],
      tech: [
        { name: "React.js", icon: SiReact },
        { name: "Supabase", icon: SiSupabase },
        { name: "JavaScript", icon: SiJavascript },
        { name: "Hostinger", icon: SiHostinger },
        { name: "Responsive Design", icon: SiCss3 },
      ],
      liveLink: "https://greendrivemobility.com",
      linkedinLink:
        "https://www.linkedin.com/posts/greendrivemobility_efficient-logistic-transportation-with-ev-activity-7337150586863198210-k5Nm?utm_source=share&utm_medium=member_desktop&rcm=ACoAADmURokB-5XEQW-AqDNgBzHGfNcsPcq_1Wc",
      image1: "/assets/green_drive_logo.jpg",
      image2: "/assets/green_drive_home.png",
      hasImages: true,
    },
    {
      title: "Drishti",
      category: "FACIAL RECOGNITION SYSTEM",
      date: "May 2022 – July 2022",
      type: "University Project",
      description:
        "Built a facial-recognition-based automated attendance management system using OpenCV and deep-learning facial embeddings to automate classroom entry/exit tracking on a per-slot basis. The system was designed with a multi-camera architecture for high-accuracy detection across various angles, effectively handling boundary cases like occlusions and lighting variations. Implemented comprehensive modules for face detection, timestamp logging, duration computation, and CSV-based reporting. It also included a mobile application that was developed using flutter for role-based managing and attendance tracking. This project won 3rd place at the national Anokha Techfest 2023 among 100+ competing projects.",
      highlights: [
        "Automated attendance tracking with facial recognition",
        "Multi-camera architecture for robust detection",
        "Handles occlusions and varying lighting conditions",
        "Real-time face detection and timestamp logging",
        "CSV-based reporting and analytics",
        "Won 3rd place at National Anokha Techfest 2023",
      ],
      tech: [
        { name: "OpenCV", icon: SiOpencv },
        { name: "Python", icon: SiPython },
        { name: "Deep Learning", icon: SiGraphql },
        { name: "Computer Vision", icon: SiOpencv },
        { name: "Face Recognition", icon: SiOpencv },
        { name: "Flutter", icon: SiFlutter },
      ],
      githubLink: "https://github.com/Ananthcodz/Drishti",
      image1: "/assets/drishti_logo.png",
      image2: "/assets/drishti_avishkar.jpeg",
      hasImages: true,
    },
    {
      title: "GCVAT: Smart Contract Vulnerability Detection",
      category: "RESEARCH PUBLICATION",
      date: "Aug 2024 - Mar 2025",
      type: "IEEE Conference Paper",
      description:
        "Published research paper titled 'GCVAT: A Hybrid Graph Convolution and Attention Model for Smart Contract Vulnerability Detection' at the RAIT (IEEE Kolkata Section) conference in 2025. Our innovative hybrid model combines Graph Convolutional Networks with attention mechanisms to analyze complex interactions and dependencies within smart contracts. The system successfully detects critical vulnerabilities including Reentrancy and Infinite Loop attacks with high accuracy. Implemented using TensorFlow for model training and deployed using Docker-based workflows for scalable vulnerability analysis.",
      highlights: [
        "Published in IEEE RAIT conference proceedings 2025",
        "Hybrid Graph Convolution and Attention architecture",
        "Detects Reentrancy and Infinite Loop vulnerabilities",
        "Analyzes smart contract interactions and dependencies",
        "Docker containerization for deployment scalability",
      ],
      tech: [
        { name: "Graph Neural Networks", icon: SiGraphql },
        { name: "Python", icon: SiPython },
        { name: "Flask", icon: SiFlask },
        { name: "Docker", icon: SiDocker },
        { name: "Deep Learning", icon: SiGraphql },
        { name: "Blockchain Security", icon: SiEthereum },
      ],
      scholarLink: "https://ieeexplore.ieee.org/abstract/document/11089449",
      demoLink:
        "https://drive.google.com/file/d/1juG8YPweEhyhJor8xsqEkL61VuREBUwK/view?usp=sharing",
      image1: "/assets/gcvat_home.png",
      image2: "/assets/presentation_certificate.png",
      hasImages: true,
    },
    {
      title: "MIS - Microirrigation Information System",
      category: "AGRICULTURAL MANAGEMENT",
      date: "May 2023 - June 2023",
      type: "University Project",
      description:
        "Developed a comprehensive web application for agricultural agents across India to access and manage information about microirrigation systems and crop management. The platform serves as a centralized hub for farmers' agents to track irrigation system status, monitor crop health, manage farmer data, and coordinate microirrigation installations. Built with Django framework and MySQL database, the system provides a robust and scalable solution for agricultural data management with role-based access control and real-time updates.",
      highlights: [
        "Centralized platform for microirrigation management",
        "Agent dashboard for farmer data and crop monitoring",
        "Real-time tracking of irrigation system installations",
        "Role-based access control for different user types",
        "MySQL database for efficient data storage and retrieval",
        "Scalable architecture for nationwide deployment",
      ],
      tech: [
        { name: "Django", icon: SiDjango },
        { name: "Python", icon: SiPython },
        { name: "MySQL", icon: SiPython },
        { name: "HTML/CSS", icon: SiHtml5 },
        { name: "JavaScript", icon: SiJavascript },
      ],
      githubLink: "https://github.com/Ananthcodz/MIS",
      image1: "/assets/MIS_logo.png",
      image2: "/assets/MIS_home.png",
      hasImages: true,
    },
    {
      title: "Bcryptic",
      category: "BANKING DEMO APPLICATION",
      date: "July 2020 - Sep 2020",
      type: "High School Project",
      description:
        "Developed during high school as a comprehensive banking website demo to demonstrate full-stack development capabilities using Python Django and PostgreSQL. The application showcases core banking functionalities including user authentication, account management, transaction processing, and balance tracking. Built with the purpose of understanding and implementing secure financial application architecture, database relationships, and transaction handling. This project served as a foundational learning experience in web development and database management.",
      highlights: [
        "Full-stack banking application with authentication",
        "Secure transaction processing and balance management",
        "PostgreSQL database with proper relational design",
        "User account management and role-based access",
        "Clean and intuitive user interface",
        "Early demonstration of full-stack development skills",
      ],
      tech: [
        { name: "Django", icon: SiDjango },
        { name: "Python", icon: SiPython },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "MySQL", icon: SiMysql },
        { name: "HTML", icon: SiHtml5 },
        { name: "CSS", icon: SiCss3 },
      ],
      githubLink: "https://github.com/Ananthcodz/Bcryptic",
      hasImages: false,
    },
  ];

  const stats = [
    { label: "Total Projects", value: "5+", icon: "🚀" },
    { label: "Research Papers", value: "1", icon: "📄" },
    { label: "Freelance Work", value: "1", icon: "💼" },
    { label: "Technologies", value: "15+", icon: "⚡" },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      {/* Header */}
      <div className="relative border-b border-cyan-500/30 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="grid-bg absolute inset-0"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="mb-8">
            <span className="text-pink-500 font-mono text-sm tracking-widest animate-pulse">
              &lt;projects&gt;
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold font-mono mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-cyan-400 animate-gradient">
              PROJECTS
            </span>
          </h1>
          <p className="text-xl text-gray-400 font-mono">
            <span className="text-cyan-400">{"> "}</span>
            Innovative solutions built with cutting-edge technologies
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative p-6 bg-black/50 border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 text-center overflow-hidden"
            >
              <div className="relative z-10">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-cyan-400 font-mono mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-400 font-mono">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Project Navigation */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => setActiveProject(index)}
              className={`relative px-4 py-2 font-mono font-bold text-sm transition-all duration-300 overflow-hidden group cursor-pointer ${
                activeProject === index
                  ? "text-black"
                  : "text-gray-400 hover:text-cyan-400"
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                {project.title}
                <span className="text-xs">
                  [{String(index + 1).padStart(2, "0")}]
                </span>
              </span>

              {activeProject === index ? (
                <>
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-pink-500"></span>
                  <span className="absolute inset-0 shadow-[0_0_20px_rgba(34,211,238,0.5)]"></span>
                </>
              ) : (
                <span className="absolute inset-0 border-2 border-cyan-500/30 group-hover:border-cyan-400/50 transition-colors duration-300"></span>
              )}
            </button>
          ))}
        </div>

        {/* Project Details */}
        {projects.map((project, index) => (
          <div
            key={index}
            className={`transition-all duration-500 ${
              activeProject === index ? "block" : "hidden"
            }`}
          >
            {/* Main Card */}
            <div className="mb-12 p-8 bg-black/50 border border-cyan-500/30 relative overflow-hidden group">
              <div className="relative z-10">
                {/* Header */}
                <div className="mb-8">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-400 text-cyan-400 font-mono font-bold text-sm">
                      {project.category}
                    </span>
                    <span className="px-4 py-2 bg-pink-500/20 border border-pink-400 text-pink-400 font-mono text-sm">
                      {project.type}
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 font-mono">
                    {project.title}
                  </h2>

                  <div className="flex flex-wrap gap-6 text-gray-400 font-mono text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-pink-400">📅</span>
                      {project.date}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Images Grid (if available) */}
                {project.hasImages && (
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {/* Image 1 */}
                    <div className="relative group overflow-hidden border-2 border-cyan-500/30 hover:border-cyan-400 transition-all duration-300">
                      <div className="relative aspect-video bg-black">
                        {project.image1 && (
                          <Image
                            src={project.image1}
                            alt={`${project.title} - Image 1`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        )}
                      </div>
                    </div>

                    {/* Image 2 */}
                    <div className="relative group overflow-hidden border-2 border-pink-500/30 hover:border-pink-400 transition-all duration-300">
                      <div className="relative aspect-video bg-black">
                        {project.image2 && (
                          <Image
                            src={project.image2}
                            alt={`${project.title} - Image 2`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Highlights & Tech Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Highlights */}
                  <div>
                    <h3 className="text-2xl font-bold font-mono mb-6 flex items-center gap-3">
                      <span className="text-cyan-400">{"<"}</span>
                      <span className="text-white">KEY FEATURES</span>
                      <span className="text-pink-500">{"/>"}</span>
                    </h3>
                    <div className="space-y-3">
                      {project.highlights.map((highlight, i) => (
                        <div
                          key={i}
                          className="group p-3 bg-black/50 border-l-4 border-cyan-500/50 hover:border-cyan-400 hover:bg-cyan-500/5 transition-all duration-300"
                        >
                          <div className="flex items-start gap-3">
                            <span className="text-cyan-400 font-mono font-bold text-xs mt-1">
                              [{String(i + 1).padStart(2, "0")}]
                            </span>
                            <p className="text-gray-300 text-sm leading-relaxed flex-1 group-hover:text-white transition-colors duration-300">
                              {highlight}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-2xl font-bold font-mono mb-6 flex items-center gap-3">
                      <span className="text-cyan-400">{"<"}</span>
                      <span className="text-white">TECH STACK</span>
                      <span className="text-pink-500">{"/>"}</span>
                    </h3>
                    <div className="space-y-3 mb-8">
                      {project.tech.map((tech, i) => (
                        <div
                          key={i}
                          className="group relative p-3 bg-black border border-pink-500/30 hover:border-pink-400 transition-all duration-300 overflow-hidden"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">
                              {(() => {
                                const Icon = tech.icon;
                                return <Icon />;
                              })()}
                            </span>
                            <span className="relative z-10 text-gray-300 group-hover:text-pink-400 font-mono text-sm transition-colors duration-300">
                              {tech.name}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="space-y-3">
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group w-full inline-flex items-center justify-center gap-3 px-6 py-3 bg-transparent border-2 border-cyan-500 text-cyan-400 font-mono font-bold overflow-hidden transition-all duration-300 hover:text-black relative"
                        >
                          <span className="relative z-10 flex items-center gap-2">
                            ⚡ VIEW ON GITHUB
                            <span className="group-hover:translate-x-1 transition-transform duration-300">
                              →
                            </span>
                          </span>
                          <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                          <span className="absolute inset-0 shadow-[0_0_20px_rgba(34,211,238,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        </a>
                      )}

                      {project.linkedinLink && (
                        <a
                          href={project.linkedinLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group w-full inline-flex items-center justify-center gap-3 px-6 py-3 bg-transparent border-2 border-pink-500 text-pink-400 font-mono font-bold overflow-hidden transition-all duration-300 hover:text-black relative"
                        >
                          <span className="relative z-10 flex items-center gap-2">
                            💼 VIEW ON LINKEDIN
                            <span className="group-hover:translate-x-1 transition-transform duration-300">
                              →
                            </span>
                          </span>
                          <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-pink-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                          <span className="absolute inset-0 shadow-[0_0_20px_rgba(236,72,153,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        </a>
                      )}
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group w-full inline-flex items-center justify-center gap-3 px-6 py-3 bg-transparent border-2 border-green-500 text-green-400 font-mono font-bold overflow-hidden transition-all duration-300 hover:text-black relative"
                        >
                          <span className="relative z-10 flex items-center gap-2">
                            🌐 VIEW LIVE SITE
                            <span className="group-hover:translate-x-1 transition-transform duration-300">
                              →
                            </span>
                          </span>
                          <span className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                          <span className="absolute inset-0 shadow-[0_0_20px_rgba(34,197,94,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        </a>
                      )}
                      {project.scholarLink && (
                        <a
                          href={project.scholarLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group w-full inline-flex items-center justify-center gap-3 px-6 py-3 bg-transparent border-2 border-yellow-500 text-yellow-400 font-mono font-bold overflow-hidden transition-all duration-300 hover:text-black relative"
                        >
                          <span className="relative z-10 flex items-center gap-2">
                            📚 VIEW ON GOOGLE SCHOLAR
                            <span className="group-hover:translate-x-1 transition-transform duration-300">
                              →
                            </span>
                          </span>
                          <span className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                          <span className="absolute inset-0 shadow-[0_0_20px_rgba(234,179,8,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        </a>
                      )}
                      {project.demoLink && (
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group w-full inline-flex items-center justify-center gap-3 px-6 py-3 bg-transparent border-2 border-purple-500 text-purple-400 font-mono font-bold overflow-hidden transition-all duration-300 hover:text-black relative"
                        >
                          <span className="relative z-10 flex items-center gap-2">
                            🎬 VIEW DEMO
                            <span className="group-hover:translate-x-1 transition-transform duration-300">
                              →
                            </span>
                          </span>
                          <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                          <span className="absolute inset-0 shadow-[0_0_20px_rgba(168,85,247,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Closing Tag */}
      <div className="text-center py-12 border-t border-cyan-500/30">
        <span className="text-pink-500 font-mono text-sm tracking-widest animate-pulse">
          &lt;/projects&gt;
        </span>
        <p className="text-gray-500 font-mono text-sm">
          <span className="text-cyan-400">{"</"}</span>
          Designed & Built by Ananth
          <span className="text-pink-500">{" />"}</span>
        </p>
        <p className="text-gray-700 text-xs mt-2">© 2026 All rights reserved</p>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .grid-bg {
          background-image: linear-gradient(
              rgba(34, 211, 238, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
        }
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
