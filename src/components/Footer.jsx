import { Radio, Mail, Rocket } from "lucide-react";
import { author } from "../data/siteContent";

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-deep-space border-t border-ice-cyan/20 py-16 text-center relative overflow-hidden starfield">
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-ice-cyan/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <Radio size={24} className="text-ice-cyan mx-auto mb-5" />
        <p className="font-mono text-2xl font-bold text-star-white tracking-wider">
          RICHARD J. PRYOR
        </p>
        <p className="terminal-font text-[10px] tracking-[0.4em] uppercase text-ice-cyan/70 mt-3">
          Sci-Fi Author · Vietnam Veteran
        </p>

        <div className="flex justify-center gap-6 mt-10 flex-wrap">
          <button
            onClick={scrollToTop}
            className="terminal-font text-[10px] tracking-widest uppercase text-muted-blue/60 hover:text-ice-cyan transition-colors cursor-pointer"
          >
            Mission
          </button>
          <button
            onClick={() => scrollToSection("council")}
            className="terminal-font text-[10px] tracking-widest uppercase text-muted-blue/60 hover:text-ice-cyan transition-colors cursor-pointer"
          >
            Council
          </button>
          <button
            onClick={() => scrollToSection("project")}
            className="terminal-font text-[10px] tracking-widest uppercase text-muted-blue/60 hover:text-ice-cyan transition-colors cursor-pointer"
          >
            Project Earth
          </button>
          <button
            onClick={() => scrollToSection("tests")}
            className="terminal-font text-[10px] tracking-widest uppercase text-muted-blue/60 hover:text-ice-cyan transition-colors cursor-pointer"
          >
            Tests
          </button>
          <button
            onClick={() => scrollToSection("author")}
            className="terminal-font text-[10px] tracking-widest uppercase text-muted-blue/60 hover:text-ice-cyan transition-colors cursor-pointer"
          >
            Author
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="terminal-font text-[10px] tracking-widest uppercase text-muted-blue/60 hover:text-ice-cyan transition-colors cursor-pointer"
          >
            Transmit
          </button>
        </div>

        <a
          href={`mailto:${author.email}`}
          className="text-muted-blue/60 hover:text-ice-cyan transition-colors text-xs mt-6 inline-flex items-center gap-2 terminal-font"
        >
          <Mail size={12} />
          {author.email}
        </a>

        <div className="flex items-center justify-center gap-4 my-10">
          <div className="w-20 h-[1px] bg-ice-cyan/30" />
          <div className="w-1.5 h-1.5 rotate-45 bg-ice-cyan/60" />
          <div className="w-20 h-[1px] bg-ice-cyan/30" />
        </div>

        <div className="flex justify-center">
          <a
            href="https://buy.stripe.com/7sY5kEdVm6vNfRU8Ey2kw07"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-ice-cyan via-star-white to-ice-cyan text-space-navy text-sm font-mono font-bold py-4 px-10 md:px-12 shadow-2xl shadow-ice-cyan/30 transform transition-all duration-300 hover:scale-105 animate-pulse tracking-widest uppercase border-2 border-ice-cyan"
          >
            <Rocket size={18} />
            Launch & Go-Live Portal
          </a>
        </div>

        <p className="terminal-font text-muted-blue/30 text-[9px] mt-10 tracking-[0.3em] uppercase">
          © {new Date().getFullYear()} Richard J. Pryor · All transmissions
          monitored
        </p>
      </div>
    </footer>
  );
}
