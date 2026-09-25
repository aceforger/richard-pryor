import { useState } from "react";
import { Send, CheckCircle, Radio, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { author } from "../data/siteContent";
import ScrollReveal from "./ScrollReveal";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center bg-space-navy overflow-hidden scroll-mt-24"
    >
      <div className="absolute inset-0 hud-grid opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-ice-cyan/8 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-6 w-full py-16">
        <ScrollReveal animation="fadeUp">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-[1px] bg-ice-cyan" />
              <Radio size={14} className="text-ice-cyan" />
              <span className="terminal-font text-[10px] tracking-[0.4em] uppercase text-ice-cyan">
                Open Transmission
              </span>
              <Radio size={14} className="text-ice-cyan" />
              <div className="w-12 h-[1px] bg-ice-cyan" />
            </div>
            <h2 className="font-mono text-4xl md:text-5xl font-bold text-star-white mb-4">
              Transmit <span className="text-ice-cyan">Message</span>
            </h2>
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-ice-cyan to-transparent mx-auto mt-6" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Left - Contact info */}
          <ScrollReveal
            animation="slideRight"
            delay={0.2}
            className="md:col-span-2"
          >
            <div className="space-y-4">
              <div className="border border-ice-cyan/30 bg-cosmic-blue/20 p-5">
                <Radio size={20} className="text-ice-cyan mb-3" />
                <p className="terminal-font text-[9px] tracking-widest text-ice-cyan/60 uppercase mb-2">
                  Direct Channel
                </p>
                <a
                  href={`mailto:${author.email}`}
                  className="text-sm text-star-white hover:text-ice-cyan transition-colors break-all"
                >
                  {author.email}
                </a>
              </div>

              <div className="border border-rare-gold/30 bg-rare-gold/5 p-5">
                <p className="terminal-font text-[9px] tracking-widest text-rare-gold/70 uppercase mb-2">
                  Signal Strength
                </p>
                <div className="flex items-center gap-2">
                  <motion.span
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-2 h-2 rounded-full bg-green-400"
                  />
                  <span className="font-serif text-sm text-star-white">
                    Strong
                  </span>
                </div>
              </div>

              <div className="border border-border-blue bg-cosmic-blue/20 p-5">
                <p className="terminal-font text-[9px] tracking-widest text-muted-blue/70 uppercase mb-2">
                  Response Time
                </p>
                <p className="font-serif text-sm text-star-white">
                  Within 1-2 Earth Days
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Form */}
          <ScrollReveal
            animation="slideLeft"
            delay={0.4}
            className="md:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="border border-ice-cyan/30 bg-cosmic-blue/10 backdrop-blur-sm p-8 space-y-5"
            >
              {/* Terminal header */}
              <div className="flex items-center gap-2 border-b border-ice-cyan/20 pb-3 mb-2">
                <span className="terminal-font text-[9px] tracking-widest text-ice-cyan/60">
                  ▸ TRANSMISSION.FORM
                </span>
              </div>

              <div>
                <label className="block terminal-font text-[9px] tracking-widest text-ice-cyan/70 uppercase mb-2">
                  Operator Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full bg-space-navy/60 border border-border-blue px-4 py-3 text-star-white terminal-font text-sm placeholder:text-muted-blue/40 focus:outline-none focus:border-ice-cyan transition-all"
                  placeholder="> enter your name_"
                />
              </div>

              <div>
                <label className="block terminal-font text-[9px] tracking-widest text-ice-cyan/70 uppercase mb-2">
                  Frequency (Email)
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full bg-space-navy/60 border border-border-blue px-4 py-3 text-star-white terminal-font text-sm placeholder:text-muted-blue/40 focus:outline-none focus:border-ice-cyan transition-all"
                  placeholder="> enter your email_"
                />
              </div>

              <div>
                <label className="block terminal-font text-[9px] tracking-widest text-ice-cyan/70 uppercase mb-2">
                  Message Payload
                </label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  className="w-full bg-space-navy/60 border border-border-blue px-4 py-3 text-star-white terminal-font text-sm placeholder:text-muted-blue/40 focus:outline-none focus:border-ice-cyan transition-all resize-none"
                  placeholder="> type your message_"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending" || status === "success"}
                className={`w-full inline-flex items-center justify-center gap-3 py-4 terminal-font text-xs font-bold tracking-widest uppercase transition-all ${
                  status === "success"
                    ? "bg-green-600 text-star-white cursor-default"
                    : "bg-ice-cyan hover:bg-star-white text-space-navy shadow-lg shadow-ice-cyan/30"
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {status === "sending" ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <Send size={14} />
                  </motion.div>
                ) : status === "success" ? (
                  <CheckCircle size={14} />
                ) : (
                  <Send size={14} />
                )}
                {status === "idle" && "◄ Transmit Message ►"}
                {status === "sending" && "Transmitting..."}
                {status === "success" && "✓ Signal Received"}
              </button>

              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-xs terminal-font text-ice-cyan"
                >
                  &gt; Transmission successful. Await response.
                </motion.p>
              )}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
