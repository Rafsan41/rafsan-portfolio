"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionLabel } from "./About";

const TIMELINE = [
  {
    date: "2024 — Present",
    title: "Programming Hero · Level 2",
    sub: "Full Stack Web Development Bootcamp",
    current: true,
    items: [
      "Completed 5 assignments with 100% marks",
      "Shipped 2 production apps to Vercel",
      "Implemented OAuth, role-based auth, and admin dashboards",
    ],
    tags: ["React", "Next.js", "Node.js", "PostgreSQL", "Prisma", "REST", "Auth", "Deployment"],
  },
  {
    date: "2023 — 2024",
    title: "Programming Hero · Level 1",
    sub: "Frontend Web Development",
    items: [
      "Built foundation in semantic HTML, modern CSS, and ES6+ JavaScript",
      "Completed introductory React course with hands-on projects",
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "React"],
  },
  {
    date: "Self-taught",
    title: "Independent Projects",
    sub: "Building & shipping production apps",
    items: [
      "GreenRoots & MediStore — designed, built, deployed end-to-end",
      "Continuously debugging, iterating, and shipping under deadline",
    ],
    tags: ["Vercel", "GitHub", "Production"],
  },
];

export function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="experience"
      ref={ref}
      style={{
        maxWidth: "1180px",
        margin: "0 auto",
        padding: "100px 28px",
      }}
    >
      <SectionLabel index="05" label="journey" />

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
        ~/experience.log
      </motion.h2>

      <div
        style={{
          position: "relative",
          paddingLeft: "28px",
          borderLeft: "1px solid var(--color-line-2)",
        }}
      >
        {TIMELINE.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            style={{
              position: "relative",
              paddingBottom: i < TIMELINE.length - 1 ? "36px" : 0,
            }}
          >
            {/* Timeline dot */}
            <div
              style={{
                position: "absolute",
                left: "-33px",
                top: "8px",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: item.current ? "var(--color-accent)" : "var(--color-bg)",
                border: "2px solid var(--color-accent)",
                boxShadow: item.current
                  ? "0 0 0 4px rgba(16,185,129,0.15)"
                  : "none",
              }}
            />

            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                color: "var(--color-accent)",
                marginBottom: "6px",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              {item.date}
            </div>

            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "18px",
                fontWeight: 600,
                color: "var(--color-fg)",
                marginBottom: "4px",
              }}
            >
              {item.title}
            </div>

            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                color: "var(--color-fg-dim)",
                marginBottom: "12px",
              }}
            >
              {item.sub}
            </div>

            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                color: "var(--color-fg-dim)",
                lineHeight: "1.7",
              }}
            >
              {item.items.map((point, j) => (
                <div key={j}>
                  <span style={{ color: "var(--color-accent)", marginRight: "6px" }}>
                    ▸
                  </span>
                  {point}
                </div>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "6px",
                marginTop: "10px",
              }}
            >
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    color: "var(--color-fg-mute)",
                    background: "var(--color-bg-1)",
                    border: "1px solid var(--color-line)",
                    padding: "3px 8px",
                    borderRadius: "3px",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
