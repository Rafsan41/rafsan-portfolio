"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { label: "Projects shipped", value: "3+", sub: "in production" },
  { label: "Bootcamp grade", value: "100%", sub: "· 5/5" },
  { label: "Years coding", value: "2+" },
  { label: "Coffee / day", value: "∞" },
];

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      style={{
        maxWidth: "1180px",
        margin: "0 auto",
        padding: "100px 28px",
        position: "relative",
      }}
    >
      <SectionLabel index="01" label="about" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "36px",
          fontWeight: 600,
          letterSpacing: "-0.02em",
          marginBottom: "48px",
          color: "var(--color-fg)",
        }}
      >
        ~/about.md
      </motion.h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.1fr",
          gap: "56px",
          alignItems: "start",
        }}
        className="about-grid"
      >
        {/* Left — filetree + stats */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Profile photo */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "20px" }}>
            <div style={{ position: "relative", width: "72px", height: "72px", flexShrink: 0 }}>
              {/* Blurred glow behind */}
              <div
                style={{
                  position: "absolute",
                  inset: "-14px",
                  borderRadius: "50%",
                  background: "rgba(16,185,129,0.6)",
                  filter: "blur(24px)",
                  zIndex: 0,
                }}
              />
              <div
                style={{
                  position: "relative",
                  width: "72px",
                  height: "72px",
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
            <div style={{ fontFamily: "var(--font-mono)" }}>
              <div style={{ fontSize: "15px", fontWeight: 600, color: "var(--color-fg)" }}>Rafsan Jani Dipta</div>
              <div style={{ fontSize: "12px", color: "var(--color-accent)", marginTop: "2px" }}>Full Stack Developer</div>
              <div style={{ fontSize: "11px", color: "var(--color-fg-mute)", marginTop: "2px" }}>Bangladesh 🇧🇩</div>
            </div>
          </div>

          {/* File tree */}
          <div
            style={{
              background: "var(--color-bg-1)",
              border: "1px solid var(--color-line)",
              borderRadius: "6px",
              padding: "22px 24px",
              fontFamily: "var(--font-mono)",
              fontSize: "13px",
              color: "var(--color-fg-dim)",
              lineHeight: "1.85",
            }}
          >
            <div
              style={{
                color: "var(--color-fg-mute)",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                marginBottom: "10px",
                paddingBottom: "10px",
                borderBottom: "1px solid var(--color-line)",
              }}
            >
              // $ tree -L 2 ~/rafsan
            </div>
            <div style={{ color: "var(--color-accent)", fontWeight: 500 }}>
              rafsan/
            </div>
            <div style={{ paddingLeft: "16px" }}>
              <TreeRow folder>brain/</TreeRow>
              <div style={{ paddingLeft: "16px" }}>
                <TreeRow>
                  debug<span style={{ color: "var(--color-fg-mute)" }}>.skill</span>
                </TreeRow>
                <TreeRow>
                  ship<span style={{ color: "var(--color-fg-mute)" }}>.skill</span>
                </TreeRow>
                <TreeRow last>
                  solve<span style={{ color: "var(--color-fg-mute)" }}>.skill</span>
                </TreeRow>
              </div>
              <TreeRow folder>stack/</TreeRow>
              <div style={{ paddingLeft: "16px" }}>
                <TreeRow>
                  frontend<span style={{ color: "var(--color-fg-mute)" }}>.ts</span>
                </TreeRow>
                <TreeRow>
                  backend<span style={{ color: "var(--color-fg-mute)" }}>.ts</span>
                </TreeRow>
                <TreeRow last>
                  database<span style={{ color: "var(--color-fg-mute)" }}>.sql</span>
                </TreeRow>
              </div>
              <TreeRow>
                resume<span style={{ color: "var(--color-fg-mute)" }}>.pdf</span>
              </TreeRow>
              <TreeRow last>
                availability
                <span style={{ color: "var(--color-fg-mute)" }}>.json</span>
                {" "}
                <span style={{ color: "var(--color-accent)" }}>// open</span>
              </TreeRow>
            </div>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "12px",
              marginTop: "24px",
              fontFamily: "var(--font-mono)",
              fontSize: "13px",
            }}
          >
            {stats.map((s) => (
              <div
                key={s.label}
                style={{
                  border: "1px solid var(--color-line)",
                  padding: "14px 16px",
                  background: "var(--color-bg-1)",
                  borderRadius: "4px",
                }}
              >
                <div
                  style={{
                    color: "var(--color-fg-mute)",
                    fontSize: "11px",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: "6px",
                  }}
                >
                  {s.label}
                </div>
                <div
                  style={{
                    color: "var(--color-fg)",
                    fontSize: "18px",
                    fontWeight: 500,
                  }}
                >
                  <span style={{ color: "var(--color-accent)" }}>{s.value}</span>
                  {s.sub && (
                    <span style={{ fontSize: "13px", color: "var(--color-fg-dim)" }}>
                      {" "}
                      {s.sub}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — bio */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            background: "var(--color-bg-1)",
            border: "1px solid var(--color-line)",
            borderRadius: "6px",
            padding: "28px",
            fontFamily: "var(--font-mono)",
            fontSize: "14px",
            lineHeight: "1.75",
            color: "var(--color-fg-dim)",
          }}
        >
          <p>
            I&apos;m{" "}
            <strong style={{ color: "var(--color-fg)", fontWeight: 500 }}>
              Rafsan
            </strong>
            , a full-stack developer from{" "}
            <strong style={{ color: "var(--color-fg)", fontWeight: 500 }}>
              Bangladesh
            </strong>
            . I started with the basics and pushed through to build real
            production-ready applications.
          </p>
          <p style={{ marginTop: "14px" }}>
            In my latest project, I built{" "}
            <span style={{ color: "var(--color-accent)", fontWeight: 500 }}>
              GreenRoots
            </span>{" "}
            — a full herbal e-commerce platform with{" "}
            <strong style={{ color: "var(--color-fg)", fontWeight: 500 }}>
              Next.js, Node.js, PostgreSQL, Google OAuth
            </strong>
            , and live Vercel deployment.
          </p>
          <p style={{ marginTop: "14px" }}>
            I don&apos;t just write code — I{" "}
            <strong style={{ color: "var(--color-fg)", fontWeight: 500 }}>
              debug, ship, and solve real problems under pressure
            </strong>
            . Now I&apos;m ready to bring that same energy to a professional team.
          </p>
          <p style={{ marginTop: "14px" }}>
            Outside of coding, I enjoy{" "}
            <span style={{ color: "var(--color-accent)" }}>watching tech talks & dev vlogs</span>
            , playing casual games, and{" "}
            <span style={{ color: "var(--color-accent)" }}>exploring new tools</span>{" "}
            that make developers more productive. I also love breaking down complex topics
            and explaining them in simple terms — it sharpens my own understanding.
          </p>
          <p
            style={{
              marginTop: "24px",
              fontSize: "12px",
              color: "var(--color-fg-mute)",
              fontStyle: "italic",
            }}
          >
            // currently looking for: junior / mid frontend or fullstack roles
          </p>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}

export function SectionLabel({
  index,
  label,
}: {
  index: string;
  label: string;
}) {
  return (
    <div
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "13px",
        color: "var(--color-accent)",
        marginBottom: "24px",
        display: "flex",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <span style={{ color: "var(--color-fg-mute)" }}>//</span>
      {index} / {label}
      <span
        style={{
          flex: 1,
          height: "1px",
          background:
            "linear-gradient(90deg, var(--color-line-2), transparent)",
          marginLeft: "8px",
        }}
      />
    </div>
  );
}

function TreeRow({
  children,
  folder,
  last,
}: {
  children: React.ReactNode;
  folder?: boolean;
  last?: boolean;
}) {
  return (
    <div style={{ color: folder ? "var(--color-accent)" : "var(--color-fg-dim)" }}>
      <span style={{ color: "var(--color-fg-mute)" }}>{last ? "└─ " : "├─ "}</span>
      {children}
    </div>
  );
}
