import { useState, useEffect } from "react";
import { Menu, X, Radio, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { author, navLinks } from "../data/siteContent";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const h = String(d.getUTCHours()).padStart(2, "0");
      const m = String(d.getUTCMinutes()).padStart(2, "0");
      const s = String(d.getUTCSeconds()).padStart(2, "0");
      setTime(`${h}:${m}:${s} UTC`);
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    setOpen(false);
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToTop = () => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-space-navy/95 backdrop-blur-md border-b border-ice-cyan/30 shadow-lg shadow-ice-cyan/5"
          : "bg-transparent"
      }`}
    >
      {/* HUD Top Bar */}
      <div className="border-b border-ice-cyan/20 bg-deep-space/60">
        <div className="max-w-7xl mx-auto px-6 py-1.5 flex items-center justify-between text-[9px] terminal-font tracking-widest text-muted-blue">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-ice-cyan animate-pulse" />
              ORTHIAN-LINK ACTIVE
            </span>
            <span className="hidden md:inline text-ice-cyan/60">|</span>
            <span className="hidden md:inline">SECTOR: MILKY-WAY / G2V</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden md:inline text-rare-gold/70">
              STARDATE: {time}
            </span>
            <span className="hidden md:inline text-ice-cyan/60">|</span>
            <span>
              SCAN: <span className="text-ice-cyan">ONLINE</span>
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-3 cursor-pointer text-left"
        >
          <div className="relative w-11 h-11 border border-ice-cyan/50 flex items-center justify-center bg-cosmic-blue/30 group-hover:border-ice-cyan transition-all">
            <Radio size={18} className="text-ice-cyan" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-ice-cyan animate-pulse" />
          </div>
          <div>
            <span className="font-mono text-sm md:text-base font-bold text-star-white leading-none block tracking-wider uppercase">
              Richard J. Pryor
            </span>
            <p className="text-[9px] terminal-font text-ice-cyan/70 uppercase tracking-[0.3em] mt-1">
              Sci-Fi Author
            </p>
          </div>
        </button>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.sectionId}
              onClick={() => scrollToSection(link.sectionId)}
              className="relative px-3 py-2 terminal-font text-xs tracking-widest text-muted-blue hover:text-ice-cyan transition-colors group cursor-pointer uppercase"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-ice-cyan group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </div>

        <a
          href={`mailto:${author.email}`}
          className="hidden lg:flex items-center gap-2 border border-ice-cyan/50 hover:bg-ice-cyan text-ice-cyan hover:text-space-navy px-4 py-2 terminal-font text-[10px] tracking-widest uppercase transition-all"
        >
          <Mail size={12} />
          Transmit
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-star-white p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-space-navy/98 backdrop-blur-md border-t border-ice-cyan/30 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.sectionId}
                  onClick={() => scrollToSection(link.sectionId)}
                  className="flex items-center gap-3 terminal-font text-sm text-muted-blue hover:text-ice-cyan py-3 px-3 border-l-2 border-transparent hover:border-ice-cyan transition-all w-full text-left cursor-pointer uppercase tracking-widest"
                >
                  <span className="w-1 h-1 bg-ice-cyan/60" />
                  {link.label}
                </button>
              ))}
              <div className="h-[1px] bg-ice-cyan/20 my-4" />
              <a
                href={`mailto:${author.email}`}
                className="flex items-center justify-center gap-2 terminal-font text-sm text-space-navy py-3 px-3 bg-ice-cyan tracking-widest uppercase"
              >
                <Mail size={14} />
                Transmit Message
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
