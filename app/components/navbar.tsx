"use client";

import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="relative bg-black border-b border-cyan-500/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand */}

          <div className="flex-shrink-0">
            <Link href="/">
              <h1 className="text-2xl font-bold text-cyan-400 relative group cursor-pointer">
                <span className="relative z-10 font-mono tracking-wider">
                  {"<Ananthcodz/>"}
                </span>
                <span className="absolute inset-0 text-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse">
                  {"<Ananthcodz/>"}
                </span>
                <span className="absolute inset-0 text-cyan-300 opacity-0 group-hover:opacity-50 blur-sm transition-opacity duration-300">
                  {"<Ananthcodz/>"}
                </span>
              </h1>
            </Link>
          </div>

          {/* Navigation Links */}
          <ul className="flex space-x-1 sm:space-x-2">
            {[
              { href: "/work", label: "WORK" },
              { href: "/projects", label: "PROJECTS" },
              { href: "/education", label: "EDUCATION" },
              { href: "/achievements", label: "ACHIEVEMENTS" },
              { href: "/contact", label: "CONTACT" },
            ].map((item, index) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="relative group px-3 py-2 text-xs sm:text-sm font-mono font-semibold text-gray-400 transition-all duration-300 hover:text-cyan-400 block overflow-hidden"
                >
                  {/* Glitch effect layers */}
                  <span className="relative z-10 inline-block group-hover:animate-pulse">
                    {item.label}
                  </span>

                  {/* Glitch duplicate layers */}
                  <span
                    className="absolute inset-0 text-pink-500 opacity-0 group-hover:opacity-70 transition-opacity duration-200 pointer-events-none"
                    style={{
                      clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)",
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    className="absolute inset-0 text-cyan-300 opacity-0 group-hover:opacity-70 transition-opacity duration-200 pointer-events-none"
                    style={{
                      clipPath: "polygon(0 55%, 100% 55%, 100% 100%, 0 100%)",
                    }}
                  >
                    {item.label}
                  </span>

                  {/* Glow effect background */}
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/30 to-pink-500/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></span>

                  {/* Border glow */}
                  <span className="absolute inset-0 border border-transparent group-hover:border-cyan-400/50 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all duration-300"></span>

                  {/* Scanline effect */}
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none overflow-hidden">
                    <span className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent animate-scan"></span>
                  </span>

                  {/* Index number (cyberpunk style) */}
                  <span className="absolute -top-1 -right-1 text-[8px] text-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-mono">
                    [{String(index + 1).padStart(2, "0")}]
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Animated background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34, 211, 238, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.3) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
            animation: "gridMove 20s linear infinite",
          }}
        ></div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
        .animate-scan {
          animation: scan 2s linear infinite;
        }
      `}</style>
    </nav>
  );
}
