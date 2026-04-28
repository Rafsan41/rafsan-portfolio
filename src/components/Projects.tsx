"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { SectionLabel } from "./About";

const PROJECTS = [
  {
    id: "greenroots",
    file: "project_01.tsx",
    name: "GreenRoots",
    symbol: "▸",
    desc: "Full-stack herbal e-commerce platform with auth, cart, orders, and an admin dashboard. Live on Vercel.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "Better Auth", "Google OAuth", "Tailwind"],
    live: "https://greenroots-mauve.vercel.app",
    repo: "https://github.com/Rafsan41/L2B6A5-GreenRoots-Client",
    liveUrl: "greenroots-mauve.vercel.app",
    preview: <GreenRootsPreview />,
  },
  {
    id: "medistore",
    file: "project_02.tsx",
    name: "MediStore",
    symbol: "▸",
    desc: "Full-stack medicine store with role-based dashboards, inventory tracking, and secure checkout flow.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "Tailwind", "RBAC"],
    live: "https://medicinestores.vercel.app",
    repo: "https://github.com/Rafsan41/L2B6A4",
    liveUrl: "medicinestores.vercel.app",
    preview: <MediStorePreview />,
  },
];

export function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="projects"
      ref={ref}
      style={{
        maxWidth: "1180px",
        margin: "0 auto",
        padding: "100px 28px",
      }}
    >
      <SectionLabel index="03" label="featured work" />

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
        ~/projects/
      </motion.h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.2 + i * 0.12 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof PROJECTS)[number] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: `1px solid ${hovered ? "var(--color-accent-dim)" : "var(--color-line)"}`,
        borderRadius: "6px",
        background: "var(--color-bg-1)",
        overflow: "hidden",
        display: "grid",
        gridTemplateColumns: "1.1fr 1fr",
        transition: "all 0.3s ease",
        boxShadow: hovered
          ? "0 20px 50px -20px rgba(16,185,129,0.15)"
          : "none",
      }}
      className="project-card"
    >
      {/* Preview pane */}
      <div
        style={{
          background: "var(--color-bg-2)",
          position: "relative",
          minHeight: "340px",
          overflow: "hidden",
          borderRight: "1px solid var(--color-line)",
        }}
        className="project-preview-pane"
      >
        {/* Browser chrome */}
        <div
          style={{
            background: "var(--color-bg-1)",
            padding: "10px 14px",
            borderBottom: "1px solid var(--color-line)",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "var(--color-fg-mute)",
          }}
        >
          <div style={{ display: "flex", gap: "5px" }}>
            {["#3f3f3f", "#3f3f3f", "#3f3f3f"].map((c, i) => (
              <span
                key={i}
                style={{
                  width: "9px",
                  height: "9px",
                  borderRadius: "50%",
                  background: c,
                  display: "inline-block",
                }}
              />
            ))}
          </div>
          <div
            style={{
              flex: 1,
              background: "var(--color-bg-2)",
              padding: "4px 10px",
              borderRadius: "3px",
              color: "var(--color-fg-dim)",
              fontSize: "11px",
              textAlign: "center",
              border: "1px solid var(--color-line)",
            }}
          >
            {project.liveUrl}
          </div>
        </div>
        {/* Canvas */}
        <div style={{ height: "290px", position: "relative", overflow: "hidden" }}>
          {project.preview}
        </div>
      </div>

      {/* Info pane */}
      <div
        style={{
          padding: "32px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            color: "var(--color-fg-mute)",
            marginBottom: "12px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span>{project.file}</span>
          <span
            style={{
              color: "var(--color-accent)",
              border: "1px solid var(--color-accent-dim)",
              padding: "2px 8px",
              borderRadius: "3px",
              fontSize: "10px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            ★ Featured
          </span>
        </div>

        <h3
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "28px",
            fontWeight: 600,
            color: "var(--color-fg)",
            marginBottom: "8px",
            letterSpacing: "-0.02em",
          }}
        >
          <span style={{ color: "var(--color-accent)", marginRight: "6px" }}>
            {project.symbol}
          </span>
          {project.name}
        </h3>

        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "14px",
            color: "var(--color-fg-dim)",
            lineHeight: "1.6",
            marginBottom: "22px",
          }}
        >
          {project.desc}
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "6px",
            marginBottom: "24px",
          }}
        >
          {project.tech.map((t) => (
            <TechBadge key={t}>{t}</TechBadge>
          ))}
        </div>

        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {project.live && (
            <ActionBtn href={project.live} primary>
              Live Demo ↗
            </ActionBtn>
          )}
          <ActionBtn href={project.repo}>$ git clone</ActionBtn>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .project-card { grid-template-columns: 1fr !important; }
          .project-preview-pane { border-right: none !important; border-bottom: 1px solid var(--color-line) !important; }
        }
      `}</style>
    </div>
  );
}

function TechBadge({ children }: { children: React.ReactNode }) {
  const [h, setH] = useState(false);
  return (
    <span
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
        color: h ? "var(--color-accent)" : "var(--color-fg-dim)",
        background: "var(--color-bg-2)",
        border: `1px solid ${h ? "var(--color-accent-dim)" : "var(--color-line)"}`,
        padding: "4px 10px",
        borderRadius: "3px",
        transition: "all 0.15s",
        cursor: "default",
      }}
    >
      {children}
    </span>
  );
}

function ActionBtn({
  href,
  children,
  primary,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
}) {
  const [h, setH] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "13px",
        padding: "10px 16px",
        border: `1px solid ${
          h
            ? primary
              ? "var(--color-fg)"
              : "var(--color-accent)"
            : primary
            ? "var(--color-accent)"
            : "var(--color-line-2)"
        }`,
        background: h
          ? primary
            ? "var(--color-fg)"
            : "var(--color-accent)"
          : primary
          ? "var(--color-accent)"
          : "transparent",
        color: h ? "#000" : primary ? "#000" : "var(--color-fg)",
        textDecoration: "none",
        transition: "all 0.2s",
        fontWeight: primary ? 600 : 400,
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
      }}
    >
      {children}
    </a>
  );
}

/* ── Project preview mockups ─────────────────────── */

function GreenRootsPreview() {
  return (
    <div style={{ height: "100%", overflow: "hidden", position: "relative" }}>
      <img
        src="/greenRoots_1.jpg"
        alt="GreenRoots hero"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "top",
          display: "block",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, transparent 60%, rgba(10,10,10,0.5) 100%)",
        }}
      />
    </div>
  );
}

function MediStorePreview() {
  return (
    <div style={{ height: "100%", overflow: "hidden", position: "relative" }}>
      <img
        src="/medistiore.jpg"
        alt="MediStore hero"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "top",
          display: "block",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, transparent 60%, rgba(10,10,10,0.5) 100%)",
        }}
      />
    </div>
  );
}
