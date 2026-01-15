"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../components/navbar";
import {
  SiReact,
  SiAngular,
  SiJest,
  SiPostman,
  SiJira,
  SiHtml5,
  SiSpringboot,
  SiJavascript,
  SiRedux,
  SiGithub,
} from "react-icons/si";
export default function Work() {
  const [activeTab, setActiveTab] = useState(0);

  const workExperience = [
    {
      company: "Tata Technologies Limited",
      role: "Graduate Engineer Trainee — Frontend Development",
      period: "Aug 2025 – Present",
      location: "Pune, India",
      logoUrl: "/assets/ttl_logo.png",
      image1: "/assets/ttl_image.jpg",
      description: [
        "Engineered responsive, scalable web interfaces using React.js, Redux, and modular component design, improving UI performance and maintainability.",
        "Integrated RESTful APIs with robust error handling, caching strategies, and end-to-end data flow consistency across various modules.",
        "Designed adaptive layouts supporting multiple screen resolutions ensuring a seamless UX across devices.",
        "Implemented unit and integration tests using Jest, increasing component reliability and reducing regression issues.",
      ],
      tech: [
        { name: "React.js", icon: SiReact },
        { name: "JavaScript", icon: SiJavascript },
        { name: "Redux", icon: SiRedux },
        { name: "Jest", icon: SiJest },
        { name: "Postman", icon: SiPostman },
        { name: "Git", icon: SiGithub },
        { name: "Responsive Design", icon: SiHtml5 },
        { name: "Agile Methodology", icon: SiJira },
      ],
      linkedin:
        "https://www.linkedin.com/posts/ananthakrishnancancode_engineeringabetterworld-tatatechnologies-activity-7365611285159342080-oUJr?utm_source=share&utm_medium=member_desktop&rcm=ACoAADmURokB-5XEQW-AqDNgBzHGfNcsPcq_1Wc",
      current: true,
      short: "TTL",
    },
    {
      company: "Onward Technologies Limited",
      role: "Web Development Intern",
      period: "Jan 2025 – March 2025",
      location: "Chennai, India",
      logoUrl: "/assets/onward_logo.png",
      image1: "/assets/onward_image.png",
      description: [
        "Developed an application for CapEx/OpEx purchase management, ensuring a seamless experience for employees.",
        "Built Backend services using Spring Boot and integrated REST API functionalities while testing the effectiveness through Postman, optimizing data fetching and state management.",
        "Gained hands-on experience with AngularJS, improving UI responsiveness and integrating dynamic components for better user interaction.",
        "Strengthened understanding of component-based architecture, responsive design, and performance optimization.",
      ],
      tech: [
        { name: "Spring Boot", icon: SiSpringboot },
        { name: "AngularJS", icon: SiAngular },
        { name: "RESTful APIs", icon: SiJavascript },
        { name: "Postman", icon: SiPostman },
        { name: "Agile Methodology", icon: SiJira },
      ],
      certificate: true,
      current: false,
      short: "OTL",
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
              &lt;work_experience&gt;
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold font-mono mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-cyan-400 animate-gradient">
              WORK EXPERIENCE
            </span>
          </h1>
          <p className="text-xl text-gray-400 font-mono">
            <span className="text-cyan-400">{"> "}</span>
            Building the future, one line of code at a time
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Tab Navigation */}
        <div className="flex gap-4 mb-12 flex-wrap">
          {workExperience.map((work, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`relative px-6 py-3 font-mono font-bold transition-all duration-300 overflow-hidden group cursor-pointer ${
                activeTab === index
                  ? "text-black"
                  : "text-gray-400 hover:text-cyan-400"
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                {work.current && (
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                )}
                {work.short}
                <span className="text-xs">
                  [{String(index + 1).padStart(2, "0")}]
                </span>
              </span>

              {activeTab === index ? (
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

        {/* Experience Details */}
        {workExperience.map((work, index) => (
          <div
            key={index}
            className={`transition-all duration-500 ${
              activeTab === index ? "block" : "hidden"
            }`}
          >
            {/* Company Header */}
            <div className="mb-12 p-8 bg-gradient-to-br from-cyan-500/5 to-pink-500/5 border border-cyan-500/30 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
                {/* Logo Section */}
                <div className="flex justify-center md:justify-start">
                  <div className="relative w-48 h-48 border-4 border-cyan-500/50 group-hover:border-cyan-400 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 w-full h-full p-6">
                      <Image
                        src={work.logoUrl}
                        alt={`${work.company} logo`}
                        fill
                        className="object-contain"
                        sizes="192px"
                      />
                    </div>
                    <div className="absolute inset-0 shadow-[0_0_30px_rgba(34,211,238,0.3)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Company Info */}
                <div className="md:col-span-2 space-y-4">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-2 font-mono">
                        {work.company}
                      </h2>
                      <p className="text-xl text-cyan-400 font-mono mb-2">
                        {work.role}
                      </p>
                    </div>
                    {work.current && (
                      <span className="px-4 py-1 bg-green-500/20 border border-green-400 text-green-400 text-sm font-mono">
                        CURRENT
                      </span>
                    )}
                    {work.certificate && (
                      <span className="px-4 py-1 bg-pink-500/20 border border-pink-400 text-pink-400 text-sm font-mono">
                        CERTIFIED
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-6 text-gray-400 font-mono text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-cyan-400">📅</span>
                      {work.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-pink-400">📍</span>
                      {work.location}
                    </div>
                  </div>

                  {work.linkedin && (
                    <a
                      href={work.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-pink-400 transition-colors duration-300 font-mono text-sm group"
                    >
                      <span>View on LinkedIn</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        →
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Images Grid */}
            <div className="flex justify-center mb-12">
              {/* Image 1 */}
              <div className="relative group overflow-hidden border-2 border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 w-full max-w-2xl">
                <div className="relative aspect-video bg-gradient-to-br from-cyan-500/10 to-pink-500/10">
                  <Image
                    src={work.image1}
                    alt={`${work.company} workspace 1`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 896px"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-pink-500/0 group-hover:from-cyan-500/20 group-hover:to-pink-500/20 transition-all duration-300"></div>
                <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(34,211,238,0)] group-hover:shadow-[inset_0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300"></div>
              </div>
            </div>

            {/* Responsibilities */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold font-mono mb-6 flex items-center gap-3">
                <span className="text-cyan-400">{"<"}</span>
                <span className="text-white">RESPONSIBILITIES</span>
                <span className="text-pink-500">{"/>"}</span>
              </h3>
              <div className="space-y-4">
                {work.description.map((desc, i) => (
                  <div
                    key={i}
                    className="group p-4 bg-black/50 border-l-4 border-cyan-500/50 hover:border-cyan-400 hover:bg-cyan-500/5 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-cyan-400 font-mono font-bold mt-1 text-sm">
                        [{String(i + 1).padStart(2, "0")}]
                      </span>
                      <p className="text-gray-300 leading-relaxed flex-1 group-hover:text-white transition-colors duration-300">
                        {desc}
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
              <div className="flex flex-wrap gap-3">
                {work.tech.map((tech, i) => {
                  const IconComponent = tech.icon;
                  return (
                    <div
                      key={i}
                      className="group relative px-4 py-2 bg-black border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center gap-2 text-gray-300 group-hover:text-cyan-400 font-mono text-sm transition-colors duration-300">
                        <IconComponent className="w-4 h-4" />
                        {tech.name}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute inset-0 shadow-[0_0_15px_rgba(34,211,238,0)] group-hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300"></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Closing Tag */}
      <div className="text-center py-12 border-t border-cyan-500/30">
        <span className="text-pink-500 font-mono text-sm tracking-widest animate-pulse">
          &lt;/work_experience&gt;
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
