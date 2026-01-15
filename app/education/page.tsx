"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../components/navbar";

export default function Education() {
  const [activeCard, setActiveCard] = useState(0);

  const education = [
    {
      institution: "Amrita Vishwa Vidyapeetham",
      degree: "Bachelor of Computer Science and Engineering",
      period: "July 2021 – July 2025",
      location: "Coimbatore, India",
      grade: "CGPA: 7.9",
      logoUrl: "/assets/amrita_logo.webp",
      imageUrl: "/assets/amrita_campus.jpeg",
      highlights: [
        "Specialized in application-oriented study with endless lab assessments",
        "Published a research paper in the domain of AI/ML for Blockchain",
        "Built multiple projects including recognition systems and web applications",
        "Gained expertise in Data Structures, Algorithms, and various coding languages",
      ],
      courses: [
        "Data Structures & Algorithms",
        "Object Oriented Paradigms",
        "Database Management Systems",
        "Operating Systems",
        "Software Engineering",
        "Machine Learning",
        "Computer Networks",
        "Distributed Systems",
      ],
      type: "undergraduate",
    },
    {
      institution: "Sree Narayana Mission",
      degree: "Higher Secondary Education",
      period: "June 2016 – June 2021",
      location: "Chennai, India",
      grade: "Higher Education: 89%",
      secondaryGrade: "Secondary Education: 82.8%",
      logoUrl: "/assets/snm_logo.png",
      imageUrl: "/assets/snm_campus.jpg",
      highlights: [
        "Excelled in Mathematics and Computer Science",
        "Developed strong foundation in analytical thinking",
        "Took leadership seriously and led many teams",
        "Achieved consistent score across all subjects",
      ],
      type: "secondary",
    },
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
              &lt;education&gt;
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold font-mono mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-cyan-400 animate-gradient">
              EDUCATION
            </span>
          </h1>
          <p className="text-xl text-gray-400 font-mono">
            <span className="text-cyan-400">{"> "}</span>
            The foundation of my knowledge and growth
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Timeline Navigation */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          {education.map((edu, index) => (
            <button
              key={index}
              onClick={() => setActiveCard(index)}
              className={`relative px-6 py-3 font-mono font-bold transition-all duration-300 overflow-hidden group cursor-pointer ${
                activeCard === index
                  ? "text-black"
                  : "text-gray-400 hover:text-cyan-400"
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                {edu.type === "undergraduate" ? "🎓" : "📚"}
                {edu.type === "undergraduate" ? "UNDERGRAD" : "HIGH SCHOOL"}
                <span className="text-xs">
                  [{String(index + 1).padStart(2, "0")}]
                </span>
              </span>

              {activeCard === index ? (
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

        {/* Education Cards */}
        {education.map((edu, index) => (
          <div
            key={index}
            className={`transition-all duration-500 ${
              activeCard === index ? "block" : "hidden"
            }`}
          >
            {/* Main Card */}
            <div className="mb-12 p-8 bg-gradient-to-br from-cyan-500/5 to-pink-500/5 border border-cyan-500/30 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              <div className="relative z-10">
                {/* Institution Header */}
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-8">
                  {/* Logo */}
                  <div className="flex-shrink-0">
                    <div className="relative w-32 h-32 border-4 border-cyan-500/50 group-hover:border-cyan-400 transition-all duration-300 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10 w-full h-full p-4">
                        <Image
                          src={edu.logoUrl}
                          alt={`${edu.institution} logo`}
                          fill
                          className="object-contain"
                          sizes="128px"
                        />
                      </div>
                      <div className="absolute inset-0 shadow-[0_0_30px_rgba(34,211,238,0.3)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>

                  {/* Institution Info */}
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-3xl font-bold text-white mb-2 font-mono">
                      {edu.institution}
                    </h2>
                    <p className="text-xl text-cyan-400 font-mono mb-4">
                      {edu.degree}
                    </p>

                    <div className="flex flex-wrap gap-6 text-gray-400 font-mono text-sm justify-center md:justify-start mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-cyan-400">📅</span>
                        {edu.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-pink-400">📍</span>
                        {edu.location}
                      </div>
                    </div>

                    {/* Grades */}
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                      <div className="px-4 py-2 bg-green-500/20 border border-green-400 text-green-400 font-mono text-sm">
                        {edu.grade}
                      </div>
                      {edu.secondaryGrade && (
                        <div className="px-4 py-2 bg-cyan-500/20 border border-cyan-400 text-cyan-400 font-mono text-sm">
                          {edu.secondaryGrade}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Campus Image */}
                <div className="mb-8">
                  <div className="relative group overflow-hidden border-2 border-cyan-500/30 hover:border-cyan-400 transition-all duration-300">
                    <div className="relative aspect-video bg-gradient-to-br from-cyan-500/10 to-pink-500/10">
                      <Image
                        src={edu.imageUrl}
                        alt={`${edu.institution} campus`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 1200px"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-pink-500/0 group-hover:from-cyan-500/20 group-hover:to-pink-500/20 transition-all duration-300"></div>
                    <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(34,211,238,0)] group-hover:shadow-[inset_0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300"></div>
                  </div>
                </div>

                {/* Highlights & Courses Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Highlights */}
                  <div>
                    <h3 className="text-2xl font-bold font-mono mb-6 flex items-center gap-3">
                      <span className="text-cyan-400">{"<"}</span>
                      <span className="text-white">HIGHLIGHTS</span>
                      <span className="text-pink-500">{"/>"}</span>
                    </h3>
                    <div className="space-y-3">
                      {edu.highlights.map((highlight, i) => (
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

                  {/* Key Courses */}
                  {edu.courses && (
                    <div>
                      <h3 className="text-2xl font-bold font-mono mb-6 flex items-center gap-3">
                        <span className="text-cyan-400">{"<"}</span>
                        <span className="text-white">KEY COURSES</span>
                        <span className="text-pink-500">{"/>"}</span>
                      </h3>
                      <div className="grid grid-cols-1 gap-3">
                        {edu.courses.map((course, i) => (
                          <div
                            key={i}
                            className="group relative p-3 bg-black/50 border border-pink-500/30 hover:border-pink-400 transition-all duration-300 overflow-hidden"
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-pink-400 font-mono font-bold text-xs">
                                {String(i + 1).padStart(2, "0")}
                              </span>
                              <span className="relative z-10 text-gray-300 group-hover:text-white font-mono text-sm transition-colors duration-300 flex-1">
                                {course}
                              </span>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-pink-500/10 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Publication Section */}
        {!activeCard && (
          <div className="mt-16 p-8 bg-gradient-to-br from-pink-500/5 to-cyan-500/5 border border-pink-500/30 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500/10 to-transparent transform translate-x-full group-hover:-translate-x-full transition-transform duration-1000"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">📄</span>
                <h2 className="text-3xl font-bold font-mono">
                  <span className="text-cyan-400">{"<"}</span>
                  <span className="text-white">PUBLICATION</span>
                  <span className="text-pink-500">{"/>"}</span>
                </h2>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-pink-400 font-mono">
                  GCVAT: A Hybrid Graph Convolution and Attention Model for
                  Smart Contract Vulnerability Detection
                </h3>

                <div className="flex flex-wrap gap-4 text-sm text-gray-400 font-mono">
                  <span className="flex items-center gap-2">
                    <span className="text-cyan-400">📚</span>
                    6th conference on Recent Advances in Information Technology
                    — IEEE Kolkata Section, 2025
                  </span>
                  <a
                    href="https://ieeexplore.ieee.org/abstract/document/11089449/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-cyan-400 hover:text-pink-400 transition-colors duration-300"
                  >
                    <span>Google Scholar</span>
                    <span>→</span>
                  </a>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  Our hybrid model analyzed interactions and dependencies within
                  smart contracts to detect Reentrancy and Infinite Loop
                  vulnerabilities using Tensorflow and Docker-based deployment
                  workflows.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {[
                    "Machine Learning",
                    "Smart Contracts",
                    "Python",
                    "Docker",
                    "Graph Neural Networks",
                  ].map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-pink-500/20 border border-pink-400/50 text-pink-400 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Closing Tag */}
      <div className="text-center py-12 border-t border-cyan-500/30">
        <span className="text-pink-500 font-mono text-sm tracking-widest animate-pulse">
          &lt;/education&gt;
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
