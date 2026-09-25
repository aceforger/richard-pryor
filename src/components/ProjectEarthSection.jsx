import { useState } from "react";
import {
  ExternalLink,
  ShoppingBag,
  AlertTriangle,
  CheckCircle,
  XCircle,
  BookOpen,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { projectEarth, humanAchievements } from "../data/siteContent";
import ScrollReveal from "./ScrollReveal";

export default function ProjectEarthSection() {
  const [activeTab, setActiveTab] = useState("mission");

  const tabs = [
    { id: "mission", label: "Mission Brief", icon: AlertTriangle },
    { id: "achievements", label: "Human Record", icon: CheckCircle },
    { id: "verdict", label: "Verdict", icon: XCircle },
  ];

  return (
    <section
      id="project"
      className="relative min-h-screen flex items-center bg-cosmic-blue/30 overflow-hidden scroll-mt-24"
    >
      <div className="absolute inset-0 hud-grid opacity-15" />

      <div className="relative max-w-7xl mx-auto px-6 w-full py-16">
        <ScrollReveal animation="fadeUp">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-[1px] bg-ice-cyan" />
              <BookOpen size={14} className="text-ice-cyan" />
              <span className="terminal-font text-[10px] tracking-[0.4em] uppercase text-ice-cyan">
                Book II · Classified Dossier
              </span>
              <BookOpen size={14} className="text-ice-cyan" />
              <div className="w-12 h-[1px] bg-ice-cyan" />
            </div>
            <h2 className="font-mono text-4xl md:text-5xl font-bold text-star-white mb-4">
              PROJECT <span className="text-ice-cyan">EARTH</span>
            </h2>
            <p className="font-serif italic text-muted-blue">
              {projectEarth.subtitle}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* LEFT - BOOK COVER */}
          <ScrollReveal
            animation="slideRight"
            delay={0.2}
            className="lg:col-span-4"
          >
            <div className="relative sticky top-24">
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-rare-gold/60" />
              <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-rare-gold/60" />
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-rare-gold/60" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-rare-gold/60" />

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-sm overflow-hidden shadow-2xl border-2 border-rare-gold/40 max-w-xs mx-auto"
              >
                <img
                  src={projectEarth.cover}
                  alt={projectEarth.title}
                  className="w-full h-full object-cover aspect-[2/3]"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.classList.add(
                      "bg-gradient-to-br",
                      "from-cosmic-blue",
                      "to-space-navy",
                      "flex",
                      "items-center",
                      "justify-center",
                      "aspect-[2/3]",
                    );
                    e.target.parentElement.innerHTML = `<div class="text-center p-6"><div class="text-6xl mb-4">🌍</div><p class="font-mono text-star-white">${projectEarth.title}</p></div>`;
                  }}
                />
              </motion.div>

              <div className="text-center mt-5">
                <p className="terminal-font text-[9px] tracking-widest text-rare-gold/60">
                  CLEARANCE: LEVEL 5 · HIGH COUNCIL ONLY
                </p>
              </div>

              <motion.a
                href={projectEarth.purchaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-between gap-4 w-full mt-6 bg-rare-gold hover:bg-star-white text-space-navy px-6 py-4 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <ShoppingBag size={18} />
                  <span className="terminal-font text-xs font-bold tracking-widest uppercase">
                    Acquire Record
                  </span>
                </div>
                <ExternalLink
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.a>
            </div>
          </ScrollReveal>

          {/* RIGHT - TABS */}
          <ScrollReveal
            animation="slideLeft"
            delay={0.4}
            className="lg:col-span-8"
          >
            <div>
              {/* Tab navigation */}
              <div className="flex flex-wrap gap-2 mb-8">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`inline-flex items-center gap-2 px-5 py-3 terminal-font text-[10px] tracking-widest uppercase transition-all cursor-pointer border ${
                        isActive
                          ? "bg-ice-cyan/10 border-ice-cyan text-ice-cyan"
                          : "border-border-blue text-muted-blue hover:border-ice-cyan/50 hover:text-ice-cyan"
                      }`}
                    >
                      <Icon size={12} />
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Tab content */}
              <div className="border border-border-blue bg-space-navy/40 backdrop-blur-sm p-8 md:p-10 min-h-[400px]">
                <AnimatePresence mode="wait">
                  {activeTab === "mission" && (
                    <motion.div
                      key="mission"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-6"
                    >
                      <div className="terminal-font text-[9px] tracking-widest text-ice-cyan/60 mb-4">
                        ▸ MISSION.BRIEF.TXT
                      </div>
                      <h3 className="font-mono text-2xl font-bold text-star-white">
                        {projectEarth.title}
                      </h3>
                      <div className="w-16 h-[2px] bg-ice-cyan" />
                      <p className="font-serif text-lg text-star-white leading-relaxed">
                        {projectEarth.description}
                      </p>
                      <p className="font-serif text-base text-muted-blue leading-relaxed">
                        {projectEarth.descriptionFull}
                      </p>
                      <p className="font-serif text-base text-muted-blue leading-relaxed">
                        {projectEarth.descriptionFinal}
                      </p>
                    </motion.div>
                  )}

                  {activeTab === "achievements" && (
                    <motion.div
                      key="achievements"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="terminal-font text-[9px] tracking-widest text-ice-cyan/60 mb-6">
                        ▸ NANOBOT.RECORDS · {humanAchievements.length} ENTRIES
                      </div>
                      <h3 className="font-mono text-xl font-bold text-star-white mb-6">
                        Human Development Observed
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {humanAchievements.map((item, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="flex items-center gap-4 border border-border-blue bg-cosmic-blue/20 p-3"
                          >
                            <span className="terminal-font text-xs text-rare-gold font-bold min-w-[50px]">
                              {item.year}
                            </span>
                            <span className="text-xs text-muted-blue leading-tight">
                              {item.event}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "verdict" && (
                    <motion.div
                      key="verdict"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                      className="text-center py-8"
                    >
                      <div className="terminal-font text-[9px] tracking-widest text-ice-cyan/60 mb-6">
                        ▸ VERDICT.PENDING
                      </div>
                      <div className="w-24 h-24 mx-auto mb-8 relative">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="absolute inset-0 border-2 border-dashed border-ice-cyan/40 rounded-full"
                        />
                        <div className="absolute inset-3 border border-rare-gold/60 rounded-full flex items-center justify-center">
                          <span className="text-4xl">?</span>
                        </div>
                      </div>
                      <h3 className="font-mono text-3xl md:text-4xl font-bold text-star-white mb-6">
                        Vice <span className="text-rare-gold">or</span> Virtue?
                      </h3>
                      <p className="font-serif text-lg text-muted-blue max-w-xl mx-auto leading-relaxed">
                        If man passes the test, he will be accepted. If not, he
                        will be left uninvited and totally alone for further
                        development or possible extinction.
                      </p>
                      <div className="mt-10 inline-flex items-center gap-3 border border-rare-gold/40 bg-rare-gold/5 px-6 py-3">
                        <span className="terminal-font text-[10px] tracking-widest text-rare-gold uppercase">
                          The Council Awaits Your Answer
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
