"use client";

import React, { useState } from "react";
import Navbar from "../components/navbar";
import Image from "next/image";

export default function Resume() {
  const resumeFile = {
    name: "Anantha_Krishnan_Resume.pdf",
    path: "/assets/Anantha_Krishnan_Resume.pdf",
    thumbnail: "/assets/resume_thumbnail.png",
    size: "152 KB",
    lastUpdated: "January 2026"
  };

  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => setIsDownloading(false), 2000);
  };

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
              &lt;resume&gt;
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold font-mono mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-cyan-400 animate-gradient">
              RESUME
            </span>
          </h1>
          <p className="text-xl text-gray-400 font-mono">
            <span className="text-cyan-400">{"> "}</span>
            Download my professional resume
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Resume Card */}
        <div className="mb-12 p-8 bg-gradient-to-br from-cyan-500/5 to-pink-500/5 border border-cyan-500/30 relative overflow-hidden group">
          <div className="relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Resume Thumbnail */}
              <div className="relative">
                <div className="relative border-4 border-cyan-500/50 group-hover:border-cyan-400 transition-all duration-300 overflow-hidden bg-white">
                  <div className="relative aspect-[8.5/11]">
                    <Image
                      src={resumeFile.thumbnail}
                      alt="Resume Thumbnail"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(34,211,238,0)] group-hover:shadow-[inset_0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300"></div>
                </div>
              </div>

              {/* Resume Info */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold font-mono mb-4 text-white flex items-center gap-3">
                    <span className="text-cyan-400">{"<"}</span>
                    DOCUMENT
                    <span className="text-pink-500">{"/>"}</span>
                  </h2>
                  
                  <div className="space-y-3 mb-6">
                    <div className="p-3 bg-black/50 border-l-4 border-cyan-500/50">
                      <p className="text-gray-400 text-sm font-mono mb-1">File Name:</p>
                      <p className="text-white font-mono">{resumeFile.name}</p>
                    </div>
                    
                    <div className="p-3 bg-black/50 border-l-4 border-pink-500/50">
                      <p className="text-gray-400 text-sm font-mono mb-1">Size:</p>
                      <p className="text-white font-mono">{resumeFile.size}</p>
                    </div>
                    
                    <div className="p-3 bg-black/50 border-l-4 border-cyan-500/50">
                      <p className="text-gray-400 text-sm font-mono mb-1">Last Updated:</p>
                      <p className="text-white font-mono">{resumeFile.lastUpdated}</p>
                    </div>
                  </div>

                  {/* Download Button */}
                  <a
                    href={resumeFile.path}
                    download={resumeFile.name}
                    onClick={handleDownload}
                    className="group relative w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-cyan-500 text-cyan-400 font-mono font-bold text-lg overflow-hidden transition-all duration-300 hover:text-black"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      {isDownloading ? (
                        <>
                          <span className="animate-spin">⚡</span>
                          DOWNLOADING...
                        </>
                      ) : (
                        <>
                          📥 DOWNLOAD RESUME
                          <span className="group-hover:translate-x-1 transition-transform duration-300">
                            →
                          </span>
                        </>
                      )}
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-pink-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                    <span className="absolute inset-0 shadow-[0_0_30px_rgba(34,211,238,0.6)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </a>

                  {/* View in Browser Button */}
                  <a
                    href={resumeFile.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-full inline-flex items-center justify-center gap-3 px-8 py-4 mt-4 bg-transparent border-2 border-pink-500 text-pink-400 font-mono font-bold overflow-hidden transition-all duration-300 hover:text-black"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      👁️ VIEW IN BROWSER
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        →
                      </span>
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-cyan-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                    <span className="absolute inset-0 shadow-[0_0_30px_rgba(236,72,153,0.6)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Info Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Format", value: "PDF", icon: "📄" },
            { label: "Pages", value: "1", icon: "📑" },
            { label: "Language", value: "English", icon: "🌐" },
            { label: "Version", value: "Latest", icon: "✨" },
          ].map((stat, index) => (
            <div
              key={index}
              className="group relative p-6 bg-black/50 border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 text-center overflow-hidden"
            >
              <div className="relative z-10">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-cyan-400 font-mono mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-400 font-mono">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="p-8 bg-black/50 border border-pink-500/30">
          <h3 className="text-2xl font-bold font-mono mb-6 flex items-center gap-3">
            <span className="text-cyan-400">{"<"}</span>
            {`WHAT'S INSIDE`}
            <span className="text-pink-500">{"/>"}</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Professional Summary",
              "Work Experience",
              "Technical Skills",
              "Education Background",
              "Projects & Achievements",
              "Certifications & Publications",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 bg-gradient-to-r from-cyan-500/5 to-pink-500/5 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300"
              >
                <span className="text-cyan-400 font-mono font-bold text-sm">
                  [{String(i + 1).padStart(2, "0")}]
                </span>
                <span className="text-gray-300 font-mono text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Closing Tag */}
      <div className="text-center py-12 border-t border-cyan-500/30">
        <span className="text-pink-500 font-mono text-sm tracking-widest animate-pulse">
          &lt;/resume&gt;
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