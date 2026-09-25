import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Skull, Sparkles } from "lucide-react";
import { sevenTests } from "../data/siteContent";
import ScrollReveal from "./ScrollReveal";

export default function SevenTestsSection() {
  const [activeTest, setActiveTest] = useState(null);

  return (
    <section
      id="tests"
      className="relative min-h-screen flex items-center bg-space-navy overflow-hidden scroll-mt-24"
    >
      <div className="absolute inset-0 hud-grid opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ice-cyan/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 w-full py-16">
        <ScrollReveal animation="fadeUp">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-[1px] bg-rare-gold" />
              <Skull size={14} className="text-rare-gold" />
              <span className="terminal-font text-[10px] tracking-[0.4em] uppercase text-rare-gold">
                Interstellar Experiment
              </span>
              <Skull size={14} className="text-rare-gold" />
              <div className="w-12 h-[1px] bg-rare-gold" />
            </div>
            <h2 className="font-mono text-4xl md:text-5xl font-bold text-star-white mb-4">
              The <span className="text-ice-cyan">Seven</span> Tests
            </h2>
            <p className="font-serif italic text-muted-blue max-w-2xl mx-auto">
              Using a sixth-dimension portal, the Grays record all outcomes for
              seven human test subjects — capturing their virtues and vices.
            </p>
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-rare-gold to-transparent mx-auto mt-6" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-12">
          {sevenTests.map((test, index) => (
            <ScrollReveal key={test.id} animation="fadeUp" delay={index * 0.08}>
              <motion.button
                onClick={() =>
                  setActiveTest(activeTest?.id === test.id ? null : test)
                }
                whileHover={{ y: -6 }}
                className={`w-full aspect-[3/4] border transition-all p-4 flex flex-col items-center justify-center text-center group cursor-pointer relative overflow-hidden ${
                  activeTest?.id === test.id
                    ? "bg-ice-cyan/10 border-ice-cyan"
                    : "bg-cosmic-blue/20 border-border-blue hover:border-ice-cyan/60"
                }`}
              >
                <span className="terminal-font text-[10px] tracking-widest text-ice-cyan/60 mb-3">
                  {test.number}
                </span>

                <span
                  className={`font-mono text-sm md:text-base font-bold tracking-widest transition-colors ${
                    activeTest?.id === test.id
                      ? "text-ice-cyan"
                      : "text-star-white group-hover:text-ice-cyan"
                  }`}
                >
                  {test.name}
                </span>

                <span className="font-serif italic text-[10px] text-muted-blue mt-2">
                  {test.latin}
                </span>

                {activeTest?.id === test.id && (
                  <motion.div
                    layoutId="activeTest"
                    className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-ice-cyan"
                  />
                )}
              </motion.button>
            </ScrollReveal>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeTest && (
            <motion.div
              key={activeTest.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="max-w-3xl mx-auto border border-ice-cyan/40 bg-cosmic-blue/30 backdrop-blur-sm p-8 md:p-10 relative"
            >
              <div className="absolute top-2 left-3 terminal-font text-[9px] tracking-widest text-ice-cyan/60">
                ▸ TEST.{activeTest.number}
              </div>
              <div className="absolute top-2 right-3 terminal-font text-[9px] tracking-widest text-ice-cyan/60">
                {activeTest.latin.toUpperCase()}
              </div>

              <div className="text-center">
                <h3 className="font-mono text-3xl md:text-4xl font-bold text-ice-cyan mb-3 tracking-widest">
                  {activeTest.name}
                </h3>
                <div className="w-16 h-[2px] bg-rare-gold mx-auto mb-6" />
                <p className="font-serif text-lg text-star-white leading-relaxed">
                  {activeTest.description}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <ScrollReveal animation="fadeUp" delay={0.4}>
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 border border-ice-cyan/30 bg-cosmic-blue/20 px-6 py-3">
              <Sparkles size={14} className="text-ice-cyan" />
              <span className="terminal-font text-[10px] tracking-widest text-ice-cyan/80 uppercase">
                Outcome Unknown · Data Being Recorded
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
