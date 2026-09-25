import { useState, useEffect } from "react";
import { ArrowRight, Radio, Sparkles, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { author, featuredBook } from "../data/siteContent";

export default function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  const scrollToCouncil = () => {
    const el = document.getElementById("council");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Typing animation
  useEffect(() => {
    const fullText = "INCOMING TRANSMISSION — AUTHOR PROFILE";
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 60);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const cursorTimer = setInterval(() => setShowCursor((c) => !c), 500);
    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-mt-24"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-contain bg-center"
        style={{
          backgroundImage: `url('/images/hero-bg2.png')`,
        }}
      />

      {/* Dark cosmic overlay */}
      <div className="absolute inset-0 bg-space-navy/5" />
      <div className="absolute inset-0 bg-gradient-to-b from-space-navy/70 via-space-navy/60 to-space-navy/95" />

      {/* HUD Grid */}
      <div className="absolute inset-0 hud-grid opacity-30" />

      {/* Cyan glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ice-cyan/10 rounded-full blur-[150px]" />

      {/* Rotating rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-ice-cyan/10 rounded-full hidden lg:block"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-ice-cyan/5 rounded-full hidden lg:block"
      />

      {/* Scan line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="scan-line absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-ice-cyan/30 to-transparent" />
      </div>

      {/* Floating stars */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: Math.random() * 2 + 1,
            height: Math.random() * 2 + 1,
            backgroundColor:
              i % 4 === 0 ? "#62D9FF" : i % 7 === 0 ? "#D6B56D" : "#EAF7FF",
            opacity: 0.3 + Math.random() * 0.4,
          }}
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{
            duration: 2 + Math.random() * 4,
            delay: Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* ===== CENTERED CONTENT ===== */}
      <div className="relative max-w-4xl mx-auto px-6 py-32 z-10 w-full text-center">
        {/* Terminal top bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="inline-flex items-center gap-3 border border-ice-cyan/40 bg-cosmic-blue/40 backdrop-blur-sm px-4 py-2 mb-10"
        >
          <Radio size={12} className="text-ice-cyan animate-pulse" />
          <span className="terminal-font text-[10px] tracking-widest text-ice-cyan">
            {displayText}
            <span className={showCursor ? "opacity-100" : "opacity-0"}>_</span>
          </span>
        </motion.div>

        {/* Author small label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="terminal-font text-xs md:text-sm tracking-[0.4em] text-rare-gold uppercase mb-5"
        >
          — Sci-Fi Author · Vietnam Veteran —
        </motion.p>

        {/* Main Author Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="font-mono text-4xl md:text-6xl lg:text-7xl font-bold text-star-white mb-6 leading-tight tracking-tight"
        >
          RICHARD J. <span className="text-ice-cyan">PRYOR</span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="w-16 h-[1px] bg-ice-cyan/60" />
          <Sparkles size={14} className="text-ice-cyan" />
          <div className="w-16 h-[1px] bg-ice-cyan/60" />
        </motion.div>

        {/* Book series info */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="font-serif italic text-lg md:text-2xl text-muted-blue mb-10 leading-relaxed max-w-2xl mx-auto"
        >
          Author of{" "}
          <span className="text-star-white not-italic">
            The High Council of Orthia
          </span>{" "}
          and{" "}
          <span className="text-star-white not-italic">
            Project Earth: Vice or Virtue
          </span>{" "}
          — stories where aliens test man's morality using the seven deadly
          sins.
        </motion.p>

        {/* Award badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="inline-flex items-center gap-3 border border-rare-gold/40 bg-rare-gold/10 backdrop-blur-sm px-5 py-2.5 mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-rare-gold" />
          <span className="terminal-font text-[10px] tracking-widest text-rare-gold uppercase">
            Honorable Mention · 2022 LA Times Festival of Books
          </span>
        </motion.div>

        {/* CTA buttons - centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={scrollToCouncil}
            className="inline-flex items-center justify-center gap-3 bg-ice-cyan hover:bg-star-white text-space-navy px-8 py-4 terminal-font text-xs font-bold tracking-widest uppercase transition-all shadow-xl shadow-ice-cyan/30 hover:scale-105 cursor-pointer"
          >
            <BookOpen size={16} />
            Explore the Books
            <ArrowRight size={16} />
          </button>

          <a
            href="#author"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("author");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center justify-center gap-3 border border-ice-cyan/50 hover:border-ice-cyan hover:bg-ice-cyan/10 text-ice-cyan px-8 py-4 terminal-font text-xs tracking-widest uppercase transition-all"
          >
            <Sparkles size={16} />
            About the Author
          </a>
        </motion.div>

        {/* Small creds row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mt-14 terminal-font text-[9px] tracking-widest uppercase text-muted-blue/70"
        >
          <span>U.S. Army · Vietnam</span>
          <span className="text-ice-cyan/40">|</span>
          <span>Published Sci-Fi Author</span>
          <span className="text-ice-cyan/40">|</span>
          <span>Table Rock Lake, MO</span>
        </motion.div>
      </div>

      {/* Bottom HUD bar */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-ice-cyan/20 bg-deep-space/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between terminal-font text-[9px] tracking-widest text-muted-blue">
          <span>◄ SCANNING... ►</span>
          <span className="text-ice-cyan">SUBJECT: RICHARD J. PRYOR</span>
          <span className="hidden md:inline">◄ STATUS: ACTIVE ►</span>
        </div>
      </div>
    </section>
  );
}
