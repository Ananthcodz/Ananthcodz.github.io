"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import { SiGithub, SiLinkedin, SiGmail, SiDiscord } from "react-icons/si";

export default function Contact() {
  type Particle = {
    left: string;
    top: string;
    animationDelay: string;
    animationDuration: string;
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: SiGithub,
      url: "https://github.com/Ananthcodz",
      color: "cyan",
      description: "Check out my code",
    },
    {
      name: "LinkedIn",
      icon: SiLinkedin,
      url: "https://linkedin.com/in/ananthakrishnancancode",
      color: "pink",
      description: "Connect professionally",
    },
    {
      name: "Gmail",
      icon: SiGmail,
      url: "mailto:ananth2003.professional@gmail.com",
      color: "cyan",
      description: "ananth2003.professional@gmail.com",
    },
    {
      name: "Discord",
      icon: SiDiscord,
      url: "https://discord.com",
      color: "pink",
      description: "Add me on Discord! ananth9039",
    },
  ];

  const contactInfo = [
    {
      label: "Location",
      value: "Pune, Maharashtra, IN",
      icon: "📍",
    },
    {
      label: "Gmail",
      value: "ananth2003.professional@gmail.com",
      icon: "📧",
    },
    {
      label: "Availability",
      value: "Open to opportunities around the globe",
      icon: "✨",
    },
  ];

  const [particles] = useState<Particle[]>(() =>
    Array.from({ length: 15 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${5 + Math.random() * 10}s`,
    }))
  );

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      {/* Header */}
      <div className="relative border-b border-cyan-500/30 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="grid-bg absolute inset-0"></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float"
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: particle.animationDelay,
                animationDuration: particle.animationDuration,
              }}
            ></div>
          ))}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <span className="text-pink-500 font-mono text-sm tracking-widest animate-pulse">
              &lt;contact&gt;
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold font-mono mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-cyan-400 animate-gradient">
              GET IN TOUCH
            </span>
          </h1>
          <p className="text-xl text-gray-400 font-mono max-w-2xl mx-auto">
            <span className="text-cyan-400">{"> "}</span>
            {`Let's collaborate and build something amazing together`}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact Info & Social Links */}
        <div className="space-y-8">
          {/* Contact Information */}
          <div>
            <div className="mb-6">
              <h2 className="text-3xl font-bold font-mono mb-4 flex items-center gap-3">
                <span className="text-cyan-400">{"<"}</span>
                <span className="text-white">CONTACT INFO</span>
                <span className="text-pink-500">{"/>"}</span>
              </h2>
              <p className="text-gray-500 font-mono text-sm">{`// Ways to reach me`}</p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="group p-6 bg-gradient-to-br from-cyan-500/5 to-pink-500/5 border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <div className="relative z-10 flex items-start gap-4">
                    <span className="text-3xl">{info.icon}</span>
                    <div>
                      <h3 className="text-cyan-400 font-mono font-bold mb-1">
                        {info.label}
                      </h3>
                      <p className="text-gray-300 font-mono text-sm">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <div className="mb-6">
              <h2 className="text-3xl font-bold font-mono mb-4 flex items-center gap-3">
                <span className="text-cyan-400">{"<"}</span>
                <span className="text-white">SOCIAL LINKS</span>
                <span className="text-pink-500">{"/>"}</span>
              </h2>
              <p className="text-gray-500 font-mono text-sm">{`// Connect with me online`}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-6 bg-black border-2 ${
                    link.color === "cyan"
                      ? "border-cyan-500/30 hover:border-cyan-400"
                      : "border-pink-500/30 hover:border-pink-400"
                  } transition-all duration-300 overflow-hidden`}
                >
                  <div
                    className={`absolute inset-0 ${
                      link.color === "cyan"
                        ? "bg-cyan-500/0 group-hover:bg-cyan-500/10"
                        : "bg-pink-500/0 group-hover:bg-pink-500/10"
                    } transition-all duration-300`}
                  ></div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">
                        {(() => {
                          const Icon = link.icon;
                          return <Icon />;
                        })()}
                      </span>
                      <h3
                        className={`font-mono font-bold ${
                          link.color === "cyan"
                            ? "text-cyan-400"
                            : "text-pink-400"
                        }`}
                      >
                        {link.name}
                      </h3>
                    </div>
                    <p className="text-gray-400 text-sm font-mono">
                      {link.description}
                    </p>
                  </div>

                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      link.color === "cyan"
                        ? "shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                        : "shadow-[0_0_20px_rgba(236,72,153,0.3)]"
                    }`}
                  ></div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Response Box */}
          <div className="p-6 bg-gradient-to-br from-pink-500/5 to-cyan-500/5 border border-pink-500/30 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500/10 to-transparent transform translate-x-full group-hover:-translate-x-full transition-transform duration-1000"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">⚡</span>
                <h3 className="text-xl font-bold text-pink-400 font-mono">
                  QUICK RESPONSE
                </h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                I typically respond within 24-48 hours. For urgent matters, feel
                free to reach out via LinkedIn or email directly!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Closing Tag */}
      <div className="text-center py-12 border-t border-cyan-500/30">
        <span className="text-pink-500 font-mono text-sm tracking-widest animate-pulse">
          &lt;/contact&gt;
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
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(20px);
            opacity: 0;
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
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
}
