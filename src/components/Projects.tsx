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
    challenges: "Integrating Better Auth with Google OAuth while maintaining role-based access control across admin and user flows was the trickiest part — required careful session handling and middleware guards.",
    future: "Add product reviews, wishlist feature, email notifications for order updates, and a mobile app with React Native.",
  },
  {
    id: "medistore",
    file: "project_02.tsx",
    name: "MediStore",
    symbol: "▸",
    desc: "Multi-role medicine e-commerce platform with separate Admin, Seller, and Customer dashboards. Features inventory management, order tracking, prescription uploads, and secure checkout — deployed live on Vercel.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "Tailwind", "RBAC"],
    live: "https://medicinestores.vercel.app",
    repo: "https://github.com/Rafsan41/L2B6A4",
    liveUrl: "medicinestores.vercel.app",
    preview: <MediStorePreview />,
    challenges: "Designing a clean RBAC system where Admin, Seller, and Customer have isolated views with shared routes was complex — solved with middleware-level role guards and per-role layout wrappers.",
    future: "Integrate payment gateway (SSLCommerz), add real-time order tracking, and build a mobile companion app.",
  },
  {
    id: "portfolio",
    file: "project_03.tsx",
    name: "Dev Portfolio",
    symbol: "▸",
    desc: "This portfolio — a terminal-aesthetic developer site built with Next.js 15, TypeScript, and Framer Motion. Zero UI library dependencies. Every animation, layout, and component hand-crafted from scratch.",
    tech: ["Next.js 15", "TypeScript", "Framer Motion", "CSS Variables", "Vercel"],
    live: "https://rafsandev.vercel.app",
    repo: "https://github.com/Rafsan41",
    liveUrl: "rafsandev.vercel.app",
    preview: <PortfolioPreview />,
    challenges: "Building a fully responsive terminal-aesthetic UI without any component library — every layout, animation, and dark-theme token required custom CSS and careful Framer Motion orchestration.",
    future: "Add a blog powered by MDX, dark/light theme toggle, and an interactive CLI command easter egg.",
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
      <SectionLabel index="04" label="featured work" />

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
  const [expanded, setExpanded] = useState(false);

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
          minHeight: "410px",
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
            {["#ef4444", "#f59e0b", "#10b981"].map((c, i) => (
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
        <div style={{ height: "360px", position: "relative", overflow: "hidden" }}>
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
          {(project.challenges || project.future) && (
            <button
              onClick={() => setExpanded(!expanded)}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                padding: "10px 16px",
                border: "1px solid var(--color-line-2)",
                background: "transparent",
                color: "var(--color-fg-dim)",
                cursor: "pointer",
                transition: "all 0.2s",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--color-accent-dim)";
                e.currentTarget.style.color = "var(--color-accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--color-line-2)";
                e.currentTarget.style.color = "var(--color-fg-dim)";
              }}
            >
              {expanded ? "▲ less" : "▼ details"}
            </button>
          )}
        </div>

        {/* Expandable details */}
        {expanded && (project.challenges || project.future) && (
          <div style={{
            marginTop: "16px",
            borderTop: "1px solid var(--color-line)",
            paddingTop: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}>
            {project.challenges && (
              <div>
                <div style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  color: "var(--color-accent)",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  marginBottom: "5px",
                }}>
                  // challenges_faced
                </div>
                <p style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  color: "var(--color-fg-dim)",
                  lineHeight: "1.65",
                  margin: 0,
                }}>
                  {project.challenges}
                </p>
              </div>
            )}
            {project.future && (
              <div>
                <div style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  color: "var(--color-accent)",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  marginBottom: "5px",
                }}>
                  // future_plans
                </div>
                <p style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  color: "var(--color-fg-dim)",
                  lineHeight: "1.65",
                  margin: 0,
                }}>
                  {project.future}
                </p>
              </div>
            )}
          </div>
        )}
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

function SitePreview({ url, fallback }: { url: string; fallback: string }) {
  return (
    <div style={{ height: "100%", overflow: "hidden", position: "relative", background: "#fff" }}>
      <iframe
        src={url}
        title={url}
        scrolling="no"
        style={{
          width: "1280px",
          height: "800px",
          border: "none",
          transform: "scale(0.453)",
          transformOrigin: "top left",
          pointerEvents: "none",
        }}
        onError={(e) => {
          const parent = (e.currentTarget as HTMLIFrameElement).parentElement;
          if (parent) {
            (e.currentTarget as HTMLIFrameElement).style.display = "none";
            const img = document.createElement("img");
            img.src = fallback;
            img.style.cssText = "width:100%;height:100%;object-fit:cover;object-position:top;display:block;";
            parent.appendChild(img);
          }
        }}
      />
    </div>
  );
}

function GreenRootsPreview() {
  return <SitePreview url="https://greenroots-mauve.vercel.app" fallback="/greenRoots_1.jpg" />;
}

function MediStorePreview() {
  return <SitePreview url="https://medicinestores.vercel.app" fallback="/medistiore.jpg" />;
}

function PortfolioPreview() {
  return <SitePreview url="https://rafsandev.vercel.app" fallback="/rafsan-profile.jfif" />;
}
