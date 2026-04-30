"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useTheme } from "./ThemeProvider";

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const nameRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    setMounted(true);
  }, []);

  // GSAP floating animation — starts after mount
  useEffect(() => {
    if (!mounted || !nameRef.current) return;
    const el = nameRef.current;

    // Fade + rise in
    gsap.fromTo(
      el,
      { opacity: 0, y: 18 },
      { opacity: 1, y: 0, duration: 0.9, delay: 0.7, ease: "power3.out" }
    );

    // Infinite gentle float
    gsap.to(el, {
      y: "-10px",
      duration: 2.8,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: 1.6,
    });
  }, [mounted]);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "48px 1fr 48px",
        background: "var(--color-bg)",
        paddingTop: "56px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* ── Left vertical strip ─────────────────────── */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRight: "1px solid var(--color-line)",
        gap: "0",
        padding: "40px 0",
        position: "relative",
      }}>
        {/* Vertical line top */}
        <div style={{ width: "1px", flex: 1, background: "var(--color-line)", marginBottom: "16px" }} />

        <motion.div
          initial={{ opacity: 0 }}
          animate={mounted ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <span style={{
            fontFamily: "var(--font-mono)",
            fontSize: "9px",
            fontWeight: 400,
            color: "var(--color-fg-mute)",
            textTransform: "uppercase",
            letterSpacing: "0.22em",
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            lineHeight: 1,
          }}>Full Stack</span>
          <span style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            fontWeight: 700,
            color: "var(--color-fg-dim)",
            textTransform: "uppercase",
            letterSpacing: "0.22em",
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            lineHeight: 1,
          }}>Developer</span>
        </motion.div>

        {/* Scroll indicator */}
        <div style={{ width: "1px", flex: 1, background: "var(--color-line)", marginTop: "16px" }} />
        <motion.div
          initial={{ opacity: 0 }}
          animate={mounted ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            paddingTop: "16px",
          }}
        >
          <div style={{
            width: "1px",
            height: "36px",
            background: "linear-gradient(to bottom, var(--color-accent), transparent)",
          }} />
        </motion.div>
      </div>

      {/* ── Main center area ────────────────────────── */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1.05fr 0.95fr",
        minHeight: "calc(100vh - 56px)",
        position: "relative",
      }}
      className="hero-center"
      >
        {/* ── Floating name — spans full center, sits at junction ── */}
        <div
          ref={nameRef}
          style={{
            position: "absolute",
            top: "28%",
            left: "58%",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
            pointerEvents: "none",
            userSelect: "none",
            opacity: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            whiteSpace: "nowrap",
          }}
        >
          {/* Bold RAFSAN — highlighted */}
          <div style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(52px, 6.5vw, 96px)",
            fontWeight: 900,
            letterSpacing: "0.12em",
            lineHeight: 1,
            textTransform: "uppercase",
            // Dark: white with green glow | Light: dark with accent underline glow
            color: isDark ? "#ffffff" : "#0d0d0d",
            textShadow: isDark
              ? "0 2px 40px rgba(0,0,0,0.95), 0 0 60px rgba(16,185,129,0.35)"
              : "0 2px 24px rgba(0,0,0,0.18), 0 0 40px rgba(5,150,105,0.2)",
          }}>
            Rafsan
          </div>

          {/* Ghost "Jani Dipta" */}
          <div style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(18px, 2.2vw, 32px)",
            fontWeight: 300,
            color: isDark ? "rgba(255,255,255,0.42)" : "rgba(0,0,0,0.38)",
            letterSpacing: "0.35em",
            lineHeight: 1,
            marginTop: "18px",
            textTransform: "uppercase",
            textShadow: isDark
              ? "0 1px 12px rgba(0,0,0,0.8)"
              : "0 1px 8px rgba(255,255,255,0.6)",
          }}>
            J a n i &nbsp; D i p t a
          </div>

        </div>
        {/* Photo column */}
        <div style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 24px 40px 32px",
          overflow: "visible",
        }}>
          {/* Photo container — names live inside this */}
          <motion.div
            initial={{ opacity: 0, scale: 1.03 }}
            animate={mounted ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "420px",
              aspectRatio: "3/4",
              borderRadius: "6px",
              overflow: "hidden",
              boxShadow: "0 40px 80px -20px rgba(0,0,0,0.8)",
            }}
          >
            <img
              src="/rafsan-profile.jfif"
              alt="Rafsan Jani Dipta"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                display: "block",
                filter: "grayscale(20%) contrast(1.08) brightness(0.88)",
              }}
            />

            {/* Gradient overlay */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to bottom, rgba(10,10,10,0.25) 0%, rgba(10,10,10,0.3) 40%, rgba(10,10,10,0.55) 100%)",
            }} />
          </motion.div>

          {/* ── Tech bubbles around photo ── */}
          <TechBubbles isDark={isDark} mounted={mounted} />

          {/* Quote card — bottom left */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 1.0 }}
            style={{
              position: "absolute",
              bottom: "10%",
              left: "6%",
              background: "rgba(12,12,12,0.88)",
              backdropFilter: "blur(14px)",
              border: "1px solid var(--color-line-2)",
              borderRadius: "8px",
              padding: "14px 18px",
              maxWidth: "220px",
              zIndex: 4,
            }}
          >
            <p style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--color-fg-dim)",
              lineHeight: "1.6",
              marginBottom: "10px",
              fontStyle: "italic",
            }}>
              &ldquo;I turn ideas into full-stack reality&rdquo;
            </p>
            {/* Mini stat row */}
            <div style={{ display: "flex", gap: "12px" }}>
              {[
                { v: "2+", l: "yrs" },
                { v: "2", l: "apps" },
                { v: "100%", l: "grade" },
              ].map(({ v, l }) => (
                <div key={l} style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "13px", fontWeight: 700, color: "var(--color-accent)" }}>{v}</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--color-fg-mute)", textTransform: "uppercase", letterSpacing: "0.1em" }}>{l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right content column */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "60px 32px 72px 40px",
          gap: "20px",
        }}>
          {/* Cycling text animation */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={mounted ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.52 }}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "13px",
              color: "var(--color-fg-dim)",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              minHeight: "22px",
            }}
          >
            <span style={{ color: "var(--color-accent)" }}>I&apos;m a</span>
            <TypingText />
          </motion.div>

          {/* Meta info */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={mounted ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.58 }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
            }}
          >
            {[
              { k: "stack:", v: "next.js · node · postgres" },
              { k: "based:", v: "bangladesh 🇧🇩" },
              { k: "status:", v: "open_to_work ✅" },
            ].map(({ k, v }) => (
              <div key={k} style={{ display: "flex", gap: "8px" }}>
                <span style={{ color: "var(--color-fg-dim)" }}>{k}</span>
                <span style={{ color: "var(--color-accent)" }}>{v}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={mounted ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.66 }}
            style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
          >
            <HeroBtn href="#projects" primary>View My Work →</HeroBtn>
            <HeroBtn href="#contact">$ contact --me</HeroBtn>
            <HeroBtn href="https://drive.google.com/file/d/1UDaCPr1z5iMrux8jqiXKiFEVL1kQaZoP/view?usp=sharing" newTab>↗ View Resume</HeroBtn>
          </motion.div>

          {/* Social row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={mounted ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            style={{ display: "flex", gap: "10px", marginTop: "4px" }}
          >
            {SOCIALS.map((s) => (
              <SocialChip key={s.href} href={s.href} label={s.label}>
                {s.icon}
              </SocialChip>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Right social strip ───────────────────────── */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderLeft: "1px solid var(--color-line)",
        gap: "14px",
        padding: "40px 0",
      }}
      className="hero-right-strip"
      >
        {SOCIALS.map((s, i) => (
          <motion.a
            key={s.href}
            href={s.href}
            target={s.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            aria-label={s.label}
            initial={{ opacity: 0, x: 12 }}
            animate={mounted ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.65 + i * 0.07 }}
            style={{
              width: "30px", height: "30px",
              display: "flex", alignItems: "center", justifyContent: "center",
              border: "1px solid var(--color-line-2)",
              borderRadius: "4px",
              color: "var(--color-fg-dim)",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--color-accent)";
              e.currentTarget.style.color = "var(--color-accent)";
              e.currentTarget.style.background = "rgba(16,185,129,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--color-line-2)";
              e.currentTarget.style.color = "var(--color-fg-dim)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            {s.icon}
          </motion.a>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-center { grid-template-columns: 1fr !important; }
          .hero-right-strip { display: none !important; }
        }
        @media (max-width: 560px) {
          section#home { grid-template-columns: 32px 1fr 0px !important; }
        }
      `}</style>
    </section>
  );
}

/* ── Data ──────────────────────────────────────────── */
const SOCIALS = [
  {
    href: "https://github.com/Rafsan41",
    label: "GitHub",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.35-3.37-1.35-.46-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.4 9.4 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/in/rafsan-jani-dipta",
    label: "LinkedIn",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: "https://x.com/RafsanJaniDipta",
    label: "Twitter/X",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.86l-5.37-6.66L4.6 22H1.34l8.04-9.18L1 2h7.05l4.83 6.13L18.24 2zm-1.2 18h1.84L7.04 4H5.07l11.97 16z" />
      </svg>
    ),
  },
  {
    href: "mailto:rafsundipto116@gmail.com",
    label: "Email",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
  },
];

/* ── Sub-components ─────────────────────────────────── */
function HeroBtn({ href, children, primary, download, newTab }: {
  href: string; children: React.ReactNode; primary?: boolean; download?: string; newTab?: boolean;
}) {
  const [h, setH] = useState(false);
  return (
    <a
      href={href}
      download={download}
      target={download || newTab ? "_blank" : undefined}
      rel={download || newTab ? "noopener noreferrer" : undefined}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        fontFamily: "var(--font-mono)", fontSize: "12px",
        padding: "10px 18px",
        border: `1px solid ${h ? (primary ? "var(--color-fg)" : "var(--color-accent)") : (primary ? "var(--color-accent)" : "var(--color-line-2)")}`,
        background: h ? (primary ? "var(--color-fg)" : "var(--color-accent)") : (primary ? "var(--color-accent)" : "transparent"),
        color: h ? "#000" : primary ? "#000" : "var(--color-fg)",
        textDecoration: "none",
        display: "inline-flex", alignItems: "center", gap: "6px",
        transition: "all 0.2s ease",
        fontWeight: primary ? 600 : 400,
        borderRadius: "2px",
      }}
    >
      {children}
    </a>
  );
}

function SocialChip({ href, children, label }: { href: string; children: React.ReactNode; label: string }) {
  const [h, setH] = useState(false);
  return (
    <a
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel="noopener noreferrer"
      aria-label={label}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        display: "flex", alignItems: "center", justifyContent: "center",
        width: "30px", height: "30px",
        border: `1px solid ${h ? "var(--color-accent)" : "var(--color-line-2)"}`,
        borderRadius: "4px",
        color: h ? "var(--color-accent)" : "var(--color-fg-dim)",
        textDecoration: "none",
        transition: "all 0.2s",
        background: h ? "rgba(16,185,129,0.08)" : "transparent",
      }}
    >
      {children}
    </a>
  );
}

/* ── Typing / cycling text ──────────────────────────── */
const ROLES = [
  "Full Stack Developer",
  "Problem Solver",
  "Tech Enthusiast",
  "Next.js Developer",
  "UI Craftsman",
  "API Builder",
  "Open to Work 🚀",
];

function TypingText() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];

    if (paused) {
      const t = setTimeout(() => { setPaused(false); setDeleting(true); }, 1600);
      return () => clearTimeout(t);
    }

    if (!deleting) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        setPaused(true);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % ROLES.length);
      }
    }
  }, [displayed, deleting, paused, roleIndex]);

  return (
    <span style={{ color: "var(--color-fg)", display: "inline-flex", alignItems: "center" }}>
      <span>{displayed}</span>
      <span style={{
        display: "inline-block",
        width: "2px",
        height: "14px",
        background: "var(--color-accent)",
        marginLeft: "2px",
        animation: "blink 1s step-end infinite",
      }} />
      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </span>
  );
}

/* ── Tech Bubbles ───────────────────────────────────── */
const TECHS = [
  { label: "React",      top: "8%",   left: "-10%", delay: 0 },
  { label: "Next.js",    top: "22%",  left: "88%",  delay: 0.4 },
  { label: "TypeScript", top: "-4%",  left: "55%",  delay: 0.8 },
  { label: "Node.js",    top: "62%",  left: "-12%", delay: 0.2 },
  { label: "Postgres",   top: "78%",  left: "86%",  delay: 0.6 },
  { label: "Tailwind",   top: "48%",  left: "92%",  delay: 1.0 },
  { label: "Prisma",     top: "92%",  left: "30%",  delay: 0.3 },
  { label: "Docker",     top: "-6%",  left: "20%",  delay: 0.9 },
];

const TECH_ICONS: Record<string, React.ReactNode> = {
  "React": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" width="22" height="22">
      <circle cx="12" cy="12" r="2.2" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="10" ry="3.8" />
      <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(120 12 12)" />
    </svg>
  ),
  "Next.js": (
    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
      <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.049-.106.005-4.703.007-4.705.073-.091a.637.637 0 0 1 .174-.143c.096-.047.134-.052.54-.052.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0z" />
    </svg>
  ),
  "TypeScript": (
    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
    </svg>
  ),
  "Node.js": (
    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
      <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.605.065-.037.151-.023.218.017l2.256 1.339c.082.045.198.045.272 0l8.795-5.076c.082-.047.134-.141.134-.238V6.921c0-.099-.052-.19-.137-.242l-8.791-5.072c-.081-.047-.189-.047-.271 0L3.075 6.68c-.087.05-.139.144-.139.243v10.149c0 .097.052.19.137.236l2.408 1.392c1.308.654 2.107-.116 2.107-.891V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.111.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675c-.57-.329-.922-.943-.922-1.604V6.921c0-.659.352-1.275.922-1.603l8.795-5.082c.557-.315 1.296-.315 1.848 0l8.794 5.082c.57.329.924.944.924 1.603v10.15c0 .659-.354 1.273-.924 1.604l-8.794 5.077c-.28.163-.601.247-.925.247z" />
    </svg>
  ),
  "Postgres": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="22" height="22">
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
      <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </svg>
  ),
  "Tailwind": (
    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
      <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.51 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 17.85 9.49 19 12 19c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.51 12 7 12z" />
    </svg>
  ),
  "Prisma": (
    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
      <path d="M21.8074 18.2228L13.4319 1.02760C13.1516 0.401199 12.5167 0 11.8119 0C11.107 0 10.4721 0.401199 10.1918 1.02760L2.19259 18.2228C1.84543 18.9913 2.08463 19.9039 2.76072 20.4004L11.1371 26.6259C11.6458 26.9982 12.3462 26.9982 12.855 26.6259L21.2313 20.4004C21.9074 19.9039 22.1466 18.9913 21.8074 18.2228Z" transform="scale(0.9) translate(1.2, 0)" />
    </svg>
  ),
  "Docker": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="22" height="22">
      <rect x="3" y="9" width="4" height="4" />
      <rect x="8" y="9" width="4" height="4" />
      <rect x="13" y="9" width="4" height="4" />
      <rect x="8" y="4" width="4" height="4" />
      <path d="M2 14c2 4 8 5 14 5 3 0 5-1 6-3" strokeLinecap="round" />
    </svg>
  ),
};

function TechBubbles({ isDark, mounted }: { isDark: boolean; mounted: boolean }) {
  const bubbleRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!mounted) return;
    bubbleRefs.current.forEach((el, i) => {
      if (!el) return;
      const t = TECHS[i];
      // Fade in
      gsap.fromTo(el,
        { opacity: 0, scale: 0.6 },
        { opacity: 1, scale: 1, duration: 0.5, delay: 0.8 + t.delay, ease: "back.out(1.7)" }
      );
      // Continuous float — each bubble moves differently
      gsap.to(el, {
        y: i % 2 === 0 ? "-12px" : "10px",
        x: i % 3 === 0 ? "6px" : "-6px",
        duration: 2.4 + i * 0.3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 1.2 + t.delay,
      });
    });
  }, [mounted]);

  return (
    <>
      {TECHS.map((tech, i) => (
        <div
          key={tech.label}
          ref={(el) => { bubbleRefs.current[i] = el; }}
          style={{
            position: "absolute",
            top: tech.top,
            left: tech.left,
            opacity: 0,
            zIndex: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4px",
            pointerEvents: "none",
          }}
        >
          <div style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            background: isDark
              ? "rgba(15,15,15,0.85)"
              : "rgba(245,245,240,0.88)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: `1px solid ${isDark ? "rgba(16,185,129,0.25)" : "rgba(5,150,105,0.3)"}`,
            boxShadow: isDark
              ? "0 4px 20px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)"
              : "0 4px 20px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--color-accent)",
            transition: "border-color 0.3s, box-shadow 0.3s",
          }}>
            {TECH_ICONS[tech.label]}
          </div>
          <span style={{
            fontFamily: "var(--font-mono)",
            fontSize: "9px",
            color: isDark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.45)",
            letterSpacing: "0.06em",
            textAlign: "center",
            whiteSpace: "nowrap",
          }}>
            {tech.label}
          </span>
        </div>
      ))}
    </>
  );
}
