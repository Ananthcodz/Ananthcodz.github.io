"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/navbar";

export default function Achievements() {
  const [activeAchievement, setActiveAchievement] = useState(0);

  const achievements = [
    {
      title: "3rd Place - National Techfest Anokha 2023",
      category: "PROJECT COMPETITION",
      date: "2023",
      position: "3rd Place",
      event: "Anokha Techfest",
      level: "National",
      description:
        "Secured 3rd place in a prestigious national techfest with our project Drishti - an automated attendance system using facial recognition. Competing against 100 projects from across the nation, our team of 4 members presented a flawless demonstration that impressed the judges and earned us this recognition.",
      highlights: [
        "Competed against 100+ projects from universities nationwide",
        "Developed facial recognition-based attendance automation system",
        "Flawless project demonstration and presentation",
        "Cash reward and certificate of excellence",
        "Team of 4 members working in perfect coordination",
      ],
      tech: [
        "OpenCV",
        "Python",
        "Deep Learning",
        "Facial Recognition",
        "Computer Vision",
      ],
      projectLink: "https://github.com/Ananthcodz/Drishti",
      image1: "/assets/drishti_logo.png",
      image2: "/assets/drishti_certificate.jpg",
      hasImages: true,
      reward: "Cash Prize + Certificate",
    },
    {
      title: "1st Place - Blog Writing Competition",
      category: "TECHNICAL WRITING",
      date: "University Level",
      position: "1st Place",
      event: "Intel IoT Club Competition",
      level: "University",
      description:
        "Won first place in a university-level blog writing competition organized by the Intel IoT Club. The blog titled 'Will Humanoids Replace Humans?' explored the philosophical and technical implications of humanoid robotics and artificial intelligence, examining the future of human-AI coexistence.",
      highlights: [
        "First place among all university participants",
        "Explored intersection of AI, robotics, and human society",
        "Analyzed technical feasibility and ethical implications",
        "Published and recognized by Intel IoT Club",
        "Combined technical knowledge with philosophical insight",
      ],
      tech: ["AI", "Robotics", "IoT", "Technical Writing", "Future Tech"],
      blogLink:
        "https://medium.com/@ananth2003/will-humanoids-replace-humans-c1a16f0f793e",
      hasImages: false,
      reward: "Cash Prize + Certificate",
    },
  ];

  const stats = [
    { label: "Competitions Won", value: "2", icon: "🏆" },
    { label: "National Recognition", value: "1", icon: "🌟" },
    { label: "Team Projects", value: "1", icon: "👥" },
    { label: "Technical Blogs", value: "1", icon: "✍️" },
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
              &lt;achievements&gt;
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold font-mono mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-cyan-400 animate-gradient">
              ACHIEVEMENTS
            </span>
          </h1>
          <p className="text-xl text-gray-400 font-mono">
            <span className="text-cyan-400">{"> "}</span>
            Milestones and recognitions earned through dedication
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
        {/* Achievement Navigation */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {achievements.map((achievement, index) => (
            <button
              key={index}
              onClick={() => setActiveAchievement(index)}
              className={`relative px-6 py-3 font-mono font-bold transition-all duration-300 overflow-hidden group cursor-pointer ${
                activeAchievement === index
                  ? "text-black"
                  : "text-gray-400 hover:text-cyan-400"
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                {achievement.position === "1st Place" ? "🥇" : "🥉"}
                {achievement.category}
                <span className="text-xs">
                  [{String(index + 1).padStart(2, "0")}]
                </span>
              </span>

              {activeAchievement === index ? (
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

        {/* Achievement Details */}
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className={`transition-all duration-500 ${
              activeAchievement === index ? "block" : "hidden"
            }`}
          >
            {/* Main Card */}
            <div className="mb-12 p-8 bg-black/50 border border-cyan-500/30 relative overflow-hidden group">
              <div className="relative z-10">
                {/* Header */}
                <div className="mb-8">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400 text-yellow-400 font-mono font-bold text-sm">
                      {achievement.position}
                    </span>
                    <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-400 text-cyan-400 font-mono text-sm">
                      {achievement.level} Level
                    </span>
                    <span className="px-4 py-2 bg-pink-500/20 border border-pink-400 text-pink-400 font-mono text-sm">
                      {achievement.reward}
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 font-mono">
                    {achievement.title}
                  </h2>

                  <div className="flex flex-wrap gap-6 text-gray-400 font-mono text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-cyan-400">🎯</span>
                      {achievement.event}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-pink-400">📅</span>
                      {achievement.date}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {achievement.description}
                  </p>
                </div>

                {/* Images Grid (if available) */}
                {achievement.hasImages && (
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {/* Image 1 */}
                    <div className="relative group overflow-hidden border-2 border-cyan-500/30 hover:border-cyan-400 transition-all duration-300">
                      <div className="relative aspect-video bg-black">
                        {achievement.image1 ? (
                          <Image
                            src={achievement.image1}
                            alt={`${achievement.title} - Image 1`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center text-gray-400">
                            No image available
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Image 2 */}
                    <div className="relative group overflow-hidden border-2 border-pink-500/30 hover:border-pink-400 transition-all duration-300">
                      <div className="relative aspect-video bg-black">
                        {achievement.image2 ? (
                          <Image
                            src={achievement.image2}
                            alt={`${achievement.title} - Image 2`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center text-gray-400">
                            No image available
                          </div>
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
                      <span className="text-white">KEY HIGHLIGHTS</span>
                      <span className="text-pink-500">{"/>"}</span>
                    </h3>
                    <div className="space-y-3">
                      {achievement.highlights.map((highlight, i) => (
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
                      <span className="text-white">TECHNOLOGIES</span>
                      <span className="text-pink-500">{"/>"}</span>
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {achievement.tech.map((tech, i) => (
                        <div
                          key={i}
                          className="group relative px-4 py-2 bg-black border border-pink-500/30 hover:border-pink-400 transition-all duration-300 overflow-hidden"
                        >
                          <span className="relative z-10 text-gray-300 group-hover:text-pink-400 font-mono text-sm transition-colors duration-300">
                            {tech}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Project/Blog Link */}
                    {achievement.projectLink && (
                      <a
                        href={achievement.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-10 group w-full inline-flex items-center justify-center gap-3 px-6 py-3 bg-transparent border-2 border-pink-500 text-pink-400 font-mono font-bold overflow-hidden transition-all duration-300 hover:text-black relative"
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          VIEW PROJECT
                          <span className="group-hover:translate-x-1 transition-transform duration-300">
                            →
                          </span>
                        </span>
                        <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-pink-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                        <span className="absolute inset-0 shadow-[0_0_20px_rgba(236,72,153,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      </a>
                    )}

                    {achievement.blogLink && (
                      <a
                        href={achievement.blogLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-10 group w-full inline-flex items-center justify-center gap-3 px-6 py-3 bg-transparent border-2 border-purple-500 text-purple-400 font-mono font-bold overflow-hidden transition-all duration-300 hover:text-black relative"
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          VIEW BLOG
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
        ))}
      </div>

      {/* Closing Tag */}
      <div className="text-center py-12 border-t border-cyan-500/30">
        <span className="text-pink-500 font-mono text-sm tracking-widest animate-pulse">
          &lt;/achievements&gt;
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
