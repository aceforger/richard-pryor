import { motion } from "framer-motion";
import { Users, Sparkles, BookOpen, ExternalLink } from "lucide-react";
import { elders, featuredBook } from "../data/siteContent";
import ScrollReveal from "./ScrollReveal";

export default function CouncilSection() {
  return (
    <section
      id="council"
      className="relative min-h-screen flex items-center bg-deep-space overflow-hidden scroll-mt-24"
    >
      <div className="absolute inset-0 hud-grid opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-ice-cyan/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 w-full py-16">
        <ScrollReveal animation="fadeUp">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-[1px] bg-ice-cyan" />
              <Users size={14} className="text-ice-cyan" />
              <span className="terminal-font text-[10px] tracking-[0.4em] uppercase text-ice-cyan">
                Main Feature · Book I
              </span>
              <Users size={14} className="text-ice-cyan" />
              <div className="w-12 h-[1px] bg-ice-cyan" />
            </div>
            <h2 className="font-mono text-4xl md:text-6xl font-bold text-star-white mb-4">
              THE HIGH COUNCIL
            </h2>
            <h3 className="font-mono text-2xl md:text-3xl font-bold text-ice-cyan mb-6">
              OF ORTHIA
            </h3>
            <p className="font-serif italic text-muted-blue max-w-2xl mx-auto">
              Enlightened vessels of truth and light — possessors of the total
              sum of all knowledge and wisdom ever gathered since their sentient
              life began eons ago.
            </p>
            <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-ice-cyan to-transparent mx-auto mt-6" />
          </div>
        </ScrollReveal>
        {/* ===== BOOK + DIRECTIVE ===== */}
        <div className="grid lg:grid-cols-12 gap-12 mb-20 items-center">
          {/* Book cover */}
          <ScrollReveal
            animation="slideRight"
            delay={0.2}
            className="lg:col-span-4"
          >
            <div className="relative mx-auto max-w-xs">
              {/* HUD frames */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-ice-cyan/60" />
              <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-ice-cyan/60" />
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-ice-cyan/60" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-ice-cyan/60" />

              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                className="relative rounded-sm overflow-hidden shadow-2xl border-2 border-ice-cyan/40"
              >
                <img
                  src={featuredBook.cover}
                  alt={featuredBook.title}
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
                    e.target.parentElement.innerHTML = `<div class="text-center p-6"><div class="text-6xl mb-4">🛸</div><p class="font-mono text-star-white">${featuredBook.title}</p></div>`;
                  }}
                />
              </motion.div>

              <div className="text-center mt-5">
                <p className="terminal-font text-[9px] tracking-widest text-ice-cyan/60">
                  {featuredBook.series.toUpperCase()}
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Directive text */}
          <ScrollReveal
            animation="slideLeft"
            delay={0.4}
            className="lg:col-span-8"
          >
            <div className="border border-ice-cyan/30 bg-cosmic-blue/20 backdrop-blur-sm p-8 md:p-10 relative">
              <div className="absolute top-2 left-3 terminal-font text-[9px] tracking-widest text-ice-cyan/50">
                ▸ COUNCIL.DIRECTIVE
              </div>
              <div className="absolute top-2 right-3 terminal-font text-[9px] tracking-widest text-ice-cyan/50">
                ACTIVE ▸
              </div>

              <h3 className="font-mono text-2xl md:text-3xl font-bold text-star-white mb-6 mt-2">
                {featuredBook.title}
              </h3>

              <div className="w-16 h-[2px] bg-ice-cyan mb-6" />

              <p className="font-serif text-lg text-star-white leading-relaxed mb-4">
                {featuredBook.shortDescription}
              </p>
              <p className="font-serif text-base text-muted-blue leading-relaxed mb-4">
                {featuredBook.description}
              </p>
              <p className="font-serif text-base text-muted-blue leading-relaxed">
                {featuredBook.descriptionFull}
              </p>

              <motion.a
                href={featuredBook.purchaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 mt-8 bg-ice-cyan hover:bg-star-white text-space-navy px-6 py-3 terminal-font text-xs font-bold tracking-widest uppercase transition-all group"
              >
                <BookOpen size={14} />
                Acquire Record
                <ExternalLink
                  size={12}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.a>
            </div>
          </ScrollReveal>
        </div>
        {/* ===== FIVE ELDERS ===== */}
        <ScrollReveal animation="fadeUp" delay={0.5}>
          <div className="text-center mb-10">
            <p className="terminal-font text-[10px] tracking-[0.4em] uppercase text-ice-cyan/70">
              ▸ The Five Gray Elders of the Council
            </p>
          </div>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {elders.map((elder, index) => (
            <ScrollReveal key={elder.id} animation="fadeUp" delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                className="group relative h-full bg-cosmic-blue/20 backdrop-blur-sm border border-border-blue hover:border-ice-cyan/60 p-6 transition-all overflow-hidden"
              >
                {/* Elder number */}
                <div className="absolute top-2 right-3 terminal-font text-[9px] tracking-widest text-ice-cyan/40">
                  0{elder.id}
                </div>

                {/* Gray alien avatar */}
                <div className="w-16 h-16 mx-auto mb-5 relative">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <ellipse
                      cx="50"
                      cy="45"
                      rx="30"
                      ry="38"
                      fill="#9DB5C7"
                      opacity="0.3"
                    />
                    <ellipse
                      cx="50"
                      cy="45"
                      rx="30"
                      ry="38"
                      fill="none"
                      stroke="#62D9FF"
                      strokeWidth="1.5"
                    />
                    <ellipse cx="38" cy="42" rx="6" ry="9" fill="#07111F" />
                    <ellipse cx="62" cy="42" rx="6" ry="9" fill="#07111F" />
                    <ellipse cx="38" cy="42" rx="2" ry="3" fill="#62D9FF" />
                    <ellipse cx="62" cy="42" rx="2" ry="3" fill="#62D9FF" />
                    <path
                      d="M42,62 Q50,66 58,62"
                      fill="none"
                      stroke="#62D9FF"
                      strokeWidth="1"
                    />
                  </svg>
                  <motion.div
                    animate={{
                      opacity: [0.2, 0.6, 0.2],
                      scale: [0.9, 1.1, 0.9],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                    className="absolute inset-0 bg-ice-cyan/30 rounded-full blur-xl"
                  />
                </div>

                <h3 className="font-mono text-lg font-bold text-star-white text-center tracking-widest mb-1 group-hover:text-ice-cyan transition-colors">
                  {elder.name}
                </h3>

                <p className="terminal-font text-[9px] tracking-widest text-rare-gold text-center uppercase mb-4">
                  {elder.role}
                </p>

                <div className="w-8 h-[1px] bg-ice-cyan/40 mx-auto mb-4" />

                <p className="text-xs text-muted-blue text-center leading-relaxed">
                  {elder.description}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
        {/* Bottom mission statement */}
        <ScrollReveal animation="fadeUp" delay={0.7}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 border border-rare-gold/40 bg-rare-gold/5 px-6 py-3">
              <Sparkles size={14} className="text-rare-gold" />
              <span className="terminal-font text-[10px] tracking-widest text-rare-gold uppercase">
                Prime Directive: A Higher Order for All Life Forms
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
