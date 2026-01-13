"use client";

import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar';


export default function Home() {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Hello, I'm Anantha Krishnan 👋";

  const bio = {
    name: "Ananth",
    role: "Full Stack Developer",
    passion: "Building the future",
    location: "Pune, India",
    philosophy:"Code is poetry written in logic. Every line should serve a purpose,\nevery function should tell a story.",
  }
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid-bg absolute inset-0"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-pink-500/10"></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`
              }}
            ></div>
          ))}
        </div>

        <div className="relative z-10 text-center max-w-5xl">
          <div className="mb-8">
            <span className="text-pink-500 font-mono text-sm tracking-widest">&lt;code&gt;</span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-6 relative">
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-cyan-400 animate-gradient font-mono">
                {text}
              </span>
              {showCursor && <span className="text-cyan-400 animate-pulse">|</span>}
              <span className="absolute inset-0 text-cyan-400 blur-xl opacity-50">{text}</span>
            </span>
          </h1>

          <div className="space-y-4 mb-12">
            <p className="text-xl sm:text-2xl text-gray-300 font-mono glitch-text" data-text="Full Stack Developer">
              <span className="text-cyan-400">{'> '}</span>Full Stack Developer
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Crafting digital experiences with clean code and creative solutions. 
              Specializing in modern web technologies and cyberpunk aesthetics.
            </p>
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#about" className="group relative px-8 py-3 bg-transparent border-2 border-cyan-500 text-cyan-400 font-mono font-bold overflow-hidden transition-all duration-300 hover:text-black">
              <span className="relative z-10">EXPLORE</span>
              <span className="absolute inset-0 bg-cyan-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              <span className="absolute inset-0 border-2 border-cyan-400 animate-pulse opacity-0 group-hover:opacity-100"></span>
              <span className="absolute inset-0 shadow-[0_0_20px_rgba(34,211,238,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
            
            <a href="#contact" className="group relative px-8 py-3 bg-transparent border-2 border-pink-500 text-pink-400 font-mono font-bold overflow-hidden transition-all duration-300 hover:text-black">
              <span className="relative z-10">CONTACT</span>
              <span className="absolute inset-0 bg-pink-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              <span className="absolute inset-0 shadow-[0_0_20px_rgba(236,72,153,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
          </div>

          <div className="mt-8">
            <span className="text-pink-500 font-mono text-sm tracking-widest">&lt;/code&gt;</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/30">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold font-mono mb-4 relative inline-block">
              <span className="text-cyan-400">{'<'}</span>
              <span className="text-white">ABOUT</span>
              <span className="text-pink-500">{'/>'}</span>
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500"></span>
            </h2>
            <p className="text-gray-500 font-mono text-sm">Who am I?</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="group relative p-6 bg-gradient-to-br from-cyan-500/5 to-pink-500/5 border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-pink-500/0 group-hover:from-cyan-500/10 group-hover:to-pink-500/10 transition-all duration-300"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-3 font-mono">const developer = {'{'}</h3>
                  <div className="space-y-2 text-gray-300 font-mono text-sm pl-4">
                    <p><span className="text-pink-400">name:</span> <span className="text-green-400">{bio.name}</span>,</p>
                    <p><span className="text-pink-400">role:</span> <span className="text-green-400">{bio.role}</span>,</p>
                    <p><span className="text-pink-400">passion:</span> <span className="text-green-400">{bio.passion}</span>,</p>
                    <p><span className="text-pink-400">location:</span> <span className="text-green-400">{bio.location}</span></p>
                  </div>
                  <h3 className="text-2xl font-bold text-cyan-400 mt-3 font-mono">{'}'}</h3>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(34,211,238,0.3)]"></div>
                </div>
              </div>

              <div className="p-6 bg-black/50 border border-pink-500/30 backdrop-blur-sm">
                <p className="text-gray-300 leading-relaxed">
                  Am a passionate developer who loves turning complex problems into elegant solutions. 
                  With a keen eye for design and a deep understanding of modern technologies, 
                  I create experiences that are both functional and visually stunning.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-br from-pink-500/5 to-cyan-500/5 border border-pink-500/30 hover:border-pink-400 transition-all duration-300">
                <h3 className="text-xl font-bold text-pink-400 mb-4 font-mono flex items-center gap-2">
                  <span className="text-2xl">⚡</span> CURRENT FOCUS
                </h3>
                <ul className="space-y-3 text-gray-300">
                  {['Building scalable web applications', 'Exploring AI/ML integration', 'Contributing to open source', 'Mastering cloud architecture'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 group cursor-pointer">
                      <span className="text-cyan-400 mt-1 group-hover:text-pink-400 transition-colors">▹</span>
                      <span className="group-hover:text-white group-hover:translate-x-1 transition-all duration-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative p-6 bg-black/50 border border-cyan-500/30 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4 font-mono relative z-10">🎯 PHILOSOPHY</h3>
                <p className="text-gray-300 italic relative z-10">
                  {bio.philosophy}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/30">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold font-mono mb-4 relative inline-block">
              <span className="text-cyan-400">{'<'}</span>
              <span className="text-white">SKILLS</span>
              <span className="text-pink-500">{'/>'}</span>
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500"></span>
            </h2>
            <p className="text-gray-500 font-mono text-sm">Technical Arsenal</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { category: 'Frontend', skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'], color: 'cyan' },
              { category: 'Backend', skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'], color: 'pink' },
              { category: 'DevOps', skills: ['Docker', 'AWS', 'CI/CD', 'Git'], color: 'purple' },
              { category: 'Design', skills: ['Figma', 'UI/UX', 'Responsive', 'Animation'], color: 'green' },
              { category: 'Tools', skills: ['VS Code', 'Postman', 'Linux', 'Agile'], color: 'yellow' },
              { category: 'Learning', skills: ['Rust', 'WebAssembly', 'Three.js', 'AI/ML'], color: 'orange' }
            ].map((item, idx) => (
              <div key={idx} className="group relative p-6 bg-black/50 border border-gray-700 hover:border-cyan-400 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-pink-500/0 group-hover:from-cyan-500/5 group-hover:to-pink-500/5 transition-all duration-300"></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-cyan-400 mb-4 font-mono flex items-center justify-between">
                    {item.category}
                    <span className="text-xs text-gray-500 group-hover:text-cyan-400 transition-colors">[{String(idx + 1).padStart(2, '0')}]</span>
                  </h3>
                  <div className="space-y-2">
                    {item.skills.map((skill, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-pink-500 group-hover:bg-cyan-400 transition-colors duration-300"></div>
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-mono text-sm">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold font-mono mb-4 relative inline-block">
              <span className="text-cyan-400">{'<'}</span>
              <span className="text-white">CONNECT</span>
              <span className="text-pink-500">{'/>'}</span>
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500"></span>
            </h2>
            <p className="text-gray-500 font-mono text-sm">{`Let's build something amazing`}</p>
          </div>

          <div className="p-8 bg-gradient-to-br from-cyan-500/5 to-pink-500/5 border border-cyan-500/30 mb-8">
            <p className="text-xl text-gray-300 mb-6">
              Interested in collaborating or just want to chat about tech?
            </p>
            <a href="mailto:ananth@example.com" className="group inline-block relative px-10 py-4 bg-transparent border-2 border-cyan-500 text-cyan-400 font-mono font-bold text-lg overflow-hidden transition-all duration-300 hover:text-black">
              <span className="relative z-10">GET IN TOUCH</span>
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-pink-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              <span className="absolute inset-0 shadow-[0_0_30px_rgba(34,211,238,0.6)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
          </div>

          <div className="flex justify-center gap-6">
            {['GitHub', 'LinkedIn', 'Twitter', 'Email'].map((platform, i) => (
              <a key={platform} href="#" className="group relative p-4 bg-black border border-gray-700 hover:border-cyan-400 transition-all duration-300">
                <span className="text-gray-400 group-hover:text-cyan-400 font-mono text-sm transition-colors duration-300">{platform}</span>
                <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 shadow-[0_0_15px_rgba(34,211,238,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-4 border-t border-cyan-500/30 text-center">
        <p className="text-gray-500 font-mono text-sm">
          <span className="text-cyan-400">{'</'}</span>
          Designed & Built by Ananth
          <span className="text-pink-500">{' />'}</span>
        </p>
        <p className="text-gray-700 text-xs mt-2">© 2026 All rights reserved</p>
      </footer>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(20px); opacity: 0; }
        }
        .grid-bg {
          background-image: 
            linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
        }
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-float {
          animation: float linear infinite;
        }
        .glitch-text {
          position: relative;
        }
        .glitch-text:hover::before,
        .glitch-text:hover::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .glitch-text:hover::before {
          color: #ec4899;
          animation: glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
          clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
        }
        .glitch-text:hover::after {
          color: #22d3ee;
          animation: glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse infinite;
          clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
        }
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
      `}</style>
    </div>
  );
}