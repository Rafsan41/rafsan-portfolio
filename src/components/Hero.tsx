"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TERMINAL_LINES = [
  { type: "prompt", text: "▸ cat about.json" },
  { type: "punc", text: "{" },
  { type: "kv", key: '"name"', val: '"Rafsan Jani Dipta"', comma: true },
  { type: "kv", key: '"role"', val: '"Full Stack Developer"', comma: true },
  { type: "kv", key: '"location"', val: '"Bangladesh"', comma: true },
  { type: "arr-open", key: '"stack"' },
  {
    type: "arr-item",
    text: '    "Next.js", "Node.js", "TypeScript",',
  },
  {
    type: "arr-item",
    text: '    "PostgreSQL", "Prisma", "Tailwind"',
  },
  { type: "arr-close" },
  {
    type: "kv",
    key: '"shipping"',
    val: '"production apps on Vercel"',
    comma: true,
  },
  { type: "kv", key: '"available"', val: "true", bool: true },
  { type: "punc", text: "}" },
  { type: "cursor" },
];

const ITEM_DELAY_MS = 90;

export function Hero() {
  const [revealed, setRevealed] = useState(0);

  useEffect(() => {
    if (revealed >= TERMINAL_LINES.length) return;
    const t = setTimeout(
      () => setRevealed((v) => v + 1),
      revealed === 0 ? 400 : ITEM_DELAY_MS
    );
    return () => clearTimeout(t);
  }, [revealed]);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        maxWidth: "1180px",
        margin: "0 auto",
        padding: "120px 28px 80px",
        display: "grid",
        gridTemplateColumns: "1.4fr 1fr",
        gap: "64px",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* Left */}
      <div style={{ minWidth: 0 }}>
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ marginBottom: "24px", display: "inline-block" }}
        >
          <div style={{ position: "relative", width: "80px", height: "80px" }}>
            {/* Blurred glow behind */}
            <div
              style={{
                position: "absolute",
                inset: "-16px",
                borderRadius: "50%",
                background: "rgba(16,185,129,0.6)",
                filter: "blur(28px)",
                zIndex: 0,
              }}
            />
            <div
              style={{
                position: "relative",
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                border: "2px solid var(--color-accent)",
                overflow: "hidden",
                zIndex: 1,
              }}
            >
              <img
                src="/rafsan-profile.jfif"
                alt="Rafsan Jani Dipta"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "13px",
            color: "var(--color-fg-dim)",
            marginBottom: "24px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span style={{ color: "var(--color-accent)" }}>▸</span>
          <span>whoami</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(40px, 6vw, 78px)",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            marginBottom: "20px",
            color: "var(--color-fg)",
          }}
        >
          Rafsan Jani
          <br />
          <span style={{ color: "var(--color-accent)" }}>Dipta</span>
          <span
            className="cursor-blink"
            style={{
              display: "inline-block",
              width: "0.55ch",
              height: "0.85em",
              background: "var(--color-accent)",
              marginLeft: "4px",
              verticalAlign: "text-bottom",
            }}
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "18px",
            color: "var(--color-fg-dim)",
            marginBottom: "16px",
            maxWidth: "560px",
          }}
        >
          <span style={{ color: "var(--color-accent)", fontStyle: "italic" }}>
            &quot;
          </span>
          I turn ideas into full-stack reality
          <span style={{ color: "var(--color-accent)", fontStyle: "italic" }}>
            &quot;
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "14px",
            color: "var(--color-fg-mute)",
            marginBottom: "40px",
            display: "flex",
            flexWrap: "wrap",
            gap: "8px 20px",
          }}
        >
          {[
            { k: "role:", v: "full_stack_dev" },
            { k: "stack:", v: "next.js · node · postgres" },
            { k: "based:", v: "bangladesh 🇧🇩" },
            { k: "status:", v: "open_to_work" },
          ].map(({ k, v }) => (
            <span
              key={k}
              style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
            >
              <span style={{ color: "var(--color-fg-dim)" }}>{k}</span>
              <span style={{ color: "var(--color-accent)" }}>{v}</span>
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            marginBottom: "48px",
          }}
        >
          <HeroBtn href="#projects" primary>
            View My Work →
          </HeroBtn>
          <HeroBtn href="#contact">$ contact --me</HeroBtn>
          <HeroBtn href="/resume.html" download="Rafsan_Dipta_Resume">
            ↓ Download CV
          </HeroBtn>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "13px",
            display: "flex",
            gap: "24px",
          }}
        >
          {[
            { href: "https://github.com/Rafsan41", label: "[github]" },
            {
              href: "https://x.com/RafsanJaniDipta",
              label: "[twitter/x]",
            },
            {
              href: "mailto:rafsundipto116@gmail.com",
              label: "[email]",
            },
          ].map((s) => (
            <SocialLink key={s.href} href={s.href}>
              {s.label}
            </SocialLink>
          ))}
        </motion.div>
      </div>

      {/* Right — Terminal */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div
          style={{
            background: "var(--color-bg-1)",
            border: "1px solid var(--color-line-2)",
            borderRadius: "6px",
            overflow: "hidden",
            boxShadow:
              "0 30px 60px -20px rgba(0,0,0,0.6), 0 0 0 1px var(--color-line) inset",
            fontFamily: "var(--font-mono)",
            fontSize: "13px",
            lineHeight: "1.7",
          }}
        >
          {/* Terminal bar */}
          <div
            style={{
              background: "var(--color-bg-2)",
              padding: "10px 14px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              borderBottom: "1px solid var(--color-line)",
            }}
          >
            <div style={{ display: "flex", gap: "6px" }}>
              {["#ef4444", "#f59e0b", "#10b981"].map((c) => (
                <div
                  key={c}
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: c,
                  }}
                />
              ))}
            </div>
            <div
              style={{
                flex: 1,
                textAlign: "center",
                fontSize: "12px",
                color: "var(--color-fg-mute)",
              }}
            >
              ~/portfolio/about.json
            </div>
          </div>

          {/* Terminal body */}
          <div
            style={{
              padding: "18px 20px",
              color: "var(--color-fg-dim)",
              minHeight: "280px",
            }}
          >
            {TERMINAL_LINES.slice(0, revealed).map((line, i) => (
              <TermLine key={i} line={line} isLast={i === revealed - 1} />
            ))}
          </div>
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 900px) {
          section#home {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 560px) {
          section#home h1 {
            font-size: 44px !important;
          }
        }
      `}</style>
    </section>
  );
}

function TermLine({
  line,
  isLast,
}: {
  line: (typeof TERMINAL_LINES)[number];
  isLast: boolean;
}) {
  const acc = "var(--color-accent)";
  const blue = "var(--color-blue)";
  const warn = "var(--color-warn)";
  const mute = "var(--color-fg-mute)";
  const fg = "var(--color-fg)";
  const dim = "var(--color-fg-dim)";

  if (line.type === "cursor") {
    return (
      <div style={{ whiteSpace: "pre-wrap" }}>
        <span style={{ color: acc }}>▸</span>{" "}
        <span style={{ color: fg }}>_</span>
        <span
          className="cursor-blink"
          style={{
            display: "inline-block",
            width: "8px",
            height: "14px",
            background: acc,
            verticalAlign: "-2px",
            marginLeft: "2px",
          }}
        />
      </div>
    );
  }

  if (line.type === "prompt") {
    return (
      <div style={{ whiteSpace: "pre-wrap" }}>
        <span style={{ color: acc }}>▸</span>{" "}
        <span style={{ color: fg }}>{line.text?.replace("▸ ", "")}</span>
      </div>
    );
  }

  if (line.type === "punc") {
    return (
      <div style={{ whiteSpace: "pre-wrap" }}>
        <span style={{ color: mute }}>{line.text}</span>
      </div>
    );
  }

  if (line.type === "kv" && "key" in line) {
    const isStr = line.val?.startsWith('"');
    return (
      <div style={{ whiteSpace: "pre-wrap" }}>
        {"  "}
        <span style={{ color: blue }}>{line.key}</span>
        <span style={{ color: mute }}>: </span>
        <span style={{ color: isStr ? warn : acc }}>{line.val}</span>
        {line.comma && <span style={{ color: mute }}>,</span>}
      </div>
    );
  }

  if (line.type === "arr-open" && "key" in line) {
    return (
      <div style={{ whiteSpace: "pre-wrap" }}>
        {"  "}
        <span style={{ color: blue }}>{line.key}</span>
        <span style={{ color: mute }}>: [</span>
      </div>
    );
  }

  if (line.type === "arr-item") {
    return (
      <div style={{ whiteSpace: "pre-wrap", color: warn }}>
        {line.text}
        {isLast && <span style={{ color: mute }}>,</span>}
      </div>
    );
  }

  if (line.type === "arr-close") {
    return (
      <div style={{ whiteSpace: "pre-wrap" }}>
        <span style={{ color: mute }}>  ],</span>
      </div>
    );
  }

  return (
    <div style={{ whiteSpace: "pre-wrap", color: dim }}>
      {line.text}
    </div>
  );
}

function HeroBtn({
  href,
  children,
  primary,
  download,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
  download?: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      download={download}
      target={download ? "_blank" : undefined}
      rel={download ? "noopener noreferrer" : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "14px",
        padding: "14px 22px",
        border: `1px solid ${
          hovered
            ? primary
              ? "var(--color-fg)"
              : "var(--color-accent)"
            : primary
            ? "var(--color-accent)"
            : "var(--color-line-2)"
        }`,
        background: hovered
          ? primary
            ? "var(--color-fg)"
            : "var(--color-accent)"
          : primary
          ? "var(--color-accent)"
          : "transparent",
        color: hovered ? "#000" : primary ? "#000" : "var(--color-fg)",
        textDecoration: "none",
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        transition: "all 0.2s ease",
        fontWeight: primary ? 600 : 400,
      }}
    >
      {children}
    </a>
  );
}

function SocialLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        color: hovered ? "var(--color-accent)" : "var(--color-fg-dim)",
        textDecoration: "none",
        borderBottom: `1px dashed ${
          hovered ? "var(--color-accent)" : "var(--color-line-2)"
        }`,
        paddingBottom: "2px",
        transition: "all 0.2s",
      }}
    >
      {children}
    </a>
  );
}
