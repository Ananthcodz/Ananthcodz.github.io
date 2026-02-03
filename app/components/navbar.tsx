"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { href: "/work", label: "WORK" },
    { href: "/projects", label: "PROJECTS" },
    { href: "/education", label: "EDUCATION" },
    { href: "/achievements", label: "ACHIEVEMENTS" },
    { href: "/resume", label: "RESUME"},
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <>
      {/* Top Navbar */}
      <nav className="relative bg-black border-b border-cyan-500/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
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

            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-1 sm:space-x-2">
              {navItems.map((item, index) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="relative group px-3 py-2 text-xs sm:text-sm font-mono font-semibold text-gray-400 transition-all duration-300 hover:text-cyan-400 block overflow-hidden"
                  >
                    <span className="relative z-10 inline-block group-hover:animate-pulse">
                      {item.label}
                    </span>
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
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/30 to-pink-500/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></span>
                    <span className="absolute inset-0 border border-transparent group-hover:border-cyan-400/50 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all duration-300"></span>
                    <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none overflow-hidden">
                      <span className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent animate-scan"></span>
                    </span>
                    <span className="absolute -top-1 -right-1 text-[8px] text-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-mono">
                      [{String(index + 1).padStart(2, "0")}]
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden relative z-50 p-2 text-cyan-400 hover:text-pink-400 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`block h-0.5 w-full bg-current transform transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-full bg-current transition-all duration-300 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-full bg-current transform transition-all duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                ></span>
              </div>
            </button>
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
      </nav>

      {/* Mobile Sidemenu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
          onClick={closeMenu}
        ></div>
      )}

      {/* Mobile Sidemenu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black border-l-2 border-cyan-500/30 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="p-6 border-b border-cyan-500/30">
            <h2 className="text-xl font-mono font-bold text-cyan-400">
              {"<MENU/>"}
            </h2>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 p-6">
            <ul className="space-y-4">
              {navItems.map((item, index) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className="group relative block p-4 bg-gradient-to-r from-cyan-500/5 to-pink-500/5 border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 overflow-hidden"
                  >
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="font-mono font-semibold text-gray-300 group-hover:text-cyan-400 transition-colors duration-300">
                        {item.label}
                      </span>
                      <span className="text-pink-500 font-mono text-xs">
                        [{String(index + 1).padStart(2, "0")}]
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 shadow-[0_0_15px_rgba(34,211,238,0)] group-hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300"></div>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Menu Footer */}
          <div className="p-6 border-t border-cyan-500/30">
            <p className="text-xs text-gray-500 font-mono text-center">
              &lt;/MENU&gt;
            </p>
          </div>
        </div>

        {/* Animated grid background */}
        <div className="absolute inset-0 pointer-events-none opacity-5 -z-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(34, 211, 238, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.3) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          ></div>
        </div>
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
    </>
  );
}