import { useState, useEffect } from "react";
import { Terminal, Award, BookOpen, Heart, Plane } from "lucide-react";
import { motion } from "framer-motion";
import { author } from "../data/siteContent";
import ScrollReveal from "./ScrollReveal";

export default function AuthorSection() {
  const [logLines, setLogLines] = useState([]);
  const fullLog = [
    "> INITIALIZING AUTHOR PROFILE...",
    "> NAME: RICHARD J. PRYOR",
    "> STATUS: PUBLISHED SCI-FI AUTHOR",
    "> SERVICE: U.S. ARMY · VIETNAM VETERAN",
    "> AWARD: HONORABLE MENTION — 2022 LA TIMES FESTIVAL",
    "> LOCATION: TABLE ROCK LAKE, MISSOURI",
    "> STATUS: ACTIVE",
  ];

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < fullLog.length) {
        setLogLines(fullLog.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="author"
      className="relative min-h-screen flex items-center bg-deep-space overflow-hidden scroll-mt-24"
    >
      <div className="absolute inset-0 hud-grid opacity-15" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-ice-cyan/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 w-full py-16">
        <ScrollReveal animation="fadeUp">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-[1px] bg-ice-cyan" />
              <Terminal size={14} className="text-ice-cyan" />
              <span className="terminal-font text-[10px] tracking-[0.4em] uppercase text-ice-cyan">
                Commander's Log
              </span>
              <Terminal size={14} className="text-ice-cyan" />
              <div className="w-12 h-[1px] bg-ice-cyan" />
            </div>
            <h2 className="font-mono text-4xl md:text-5xl font-bold text-star-white mb-4">
              The <span className="text-ice-cyan">Author</span>
            </h2>
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-ice-cyan to-transparent mx-auto mt-6" />
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* ===== LEFT: PROFILE PHOTO + TERMINAL LOG ===== */}
          <ScrollReveal
            animation="slideRight"
            delay={0.2}
            className="lg:col-span-5"
          >
            <div className="space-y-6">
              {/* Profile Photo */}
              <div className="relative mx-auto max-w-xs">
                {/* HUD corner brackets */}
                <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-ice-cyan/60" />
                <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-ice-cyan/60" />
                <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-ice-cyan/60" />
                <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-ice-cyan/60" />

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative aspect-[4/5] overflow-hidden shadow-2xl border-2 border-ice-cyan/40"
                >
                  <img
                    src="/images/profile.png"
                    alt={author.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextElementSibling.style.display = "flex";
                    }}
                  />
                  {/* Fallback */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-cosmic-blue to-space-navy flex items-center justify-center"
                    style={{ display: "none" }}
                  >
                    <div className="text-center">
                      <Terminal
                        size={80}
                        className="text-ice-cyan/40 mx-auto"
                      />
                      <p className="font-mono text-star-white mt-4 text-sm tracking-widest">
                        RICHARD J. PRYOR
                      </p>
                    </div>
                  </div>

                  {/* Status overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-space-navy/90 to-transparent p-4">
                    <p className="terminal-font text-[9px] tracking-widest text-ice-cyan">
                      ▸ AUTHOR.PROFILE · VERIFIED
                    </p>
                  </div>

                  {/* Top-right status dot */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-space-navy/80 border border-ice-cyan/40 px-2 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="terminal-font text-[8px] tracking-widest text-ice-cyan">
                      ACTIVE
                    </span>
                  </div>
                </motion.div>

                {/* Name badge below photo */}
                <div className="mt-4 text-center">
                  <p className="font-mono text-lg font-bold text-star-white tracking-wider">
                    RICHARD J. PRYOR
                  </p>
                  <p className="terminal-font text-[9px] tracking-widest text-ice-cyan/70 mt-1">
                    SCI-FI AUTHOR · VIETNAM VETERAN
                  </p>
                </div>
              </div>

              {/* Terminal Log */}
              <div className="border border-ice-cyan/40 bg-space-navy/60 backdrop-blur-sm overflow-hidden">
                <div className="flex items-center gap-2 border-b border-ice-cyan/30 bg-deep-space/80 px-4 py-2">
                  <div className="w-2 h-2 rounded-full bg-red-500/70" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
                  <div className="w-2 h-2 rounded-full bg-green-500/70" />
                  <span className="terminal-font text-[9px] tracking-widest text-muted-blue ml-2">
                    PRYOR.LOG · ACTIVE
                  </span>
                </div>

                <div className="p-5 min-h-[200px] terminal-font text-xs text-ice-cyan space-y-1">
                  {logLines.map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="leading-relaxed"
                    >
                      {line}
                    </motion.div>
                  ))}
                  {logLines.length === fullLog.length && (
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="inline-block w-2 h-4 bg-ice-cyan"
                    />
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* ===== RIGHT: BIO ===== */}
          <ScrollReveal
            animation="slideLeft"
            delay={0.4}
            className="lg:col-span-7"
          >
            <div className="space-y-6">
              {/* Award banner */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-4 border border-rare-gold/40 bg-rare-gold/5 px-6 py-4"
              >
                <Award size={24} className="text-rare-gold flex-shrink-0" />
                <div>
                  <p className="terminal-font text-[9px] tracking-widest text-rare-gold/80 uppercase mb-1">
                    Award Recipient
                  </p>
                  <p className="font-serif text-sm text-star-white">
                    {author.award}
                  </p>
                </div>
              </motion.div>

              <p className="font-serif text-lg text-star-white leading-relaxed">
                {author.bio}
              </p>

              <div className="w-16 h-[2px] bg-ice-cyan" />

              <p className="text-muted-blue leading-relaxed">
                {author.bioExtended}
              </p>

              {/* Service + Personal cards */}
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div className="border border-border-blue bg-cosmic-blue/20 p-5">
                  <Plane size={20} className="text-ice-cyan mb-3" />
                  <p className="terminal-font text-[9px] tracking-widest text-ice-cyan/70 uppercase mb-2">
                    Service
                  </p>
                  <p className="text-xs text-muted-blue leading-relaxed">
                    {author.bioService}
                  </p>
                </div>
                <div className="border border-border-blue bg-cosmic-blue/20 p-5">
                  <Heart size={20} className="text-ice-cyan mb-3" />
                  <p className="terminal-font text-[9px] tracking-widest text-ice-cyan/70 uppercase mb-2">
                    Personal
                  </p>
                  <p className="text-xs text-muted-blue leading-relaxed">
                    {author.bioPersonal}
                  </p>
                </div>
              </div>

              {/* Creative influences */}
              <div className="border border-border-blue bg-cosmic-blue/20 p-5">
                <p className="terminal-font text-[9px] tracking-widest text-ice-cyan/60 uppercase mb-3">
                  ▸ Creative Influences
                </p>
                <div className="flex flex-wrap gap-3">
                  {author.influences.map((influence, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-2 border border-ice-cyan/30 bg-space-navy/60 px-3 py-1.5"
                    >
                      <span className="w-1 h-1 bg-rare-gold" />
                      <span className="font-serif text-xs text-star-white">
                        {influence}
                      </span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 pt-2">
                <BookOpen size={16} className="text-rare-gold" />
                <span className="terminal-font text-[10px] tracking-widest text-rare-gold/80 uppercase">
                  {author.location}
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
