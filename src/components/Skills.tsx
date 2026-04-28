"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionLabel } from "./About";

const GROUPS = [
  {
    title: "frontend",
    items: [
      { name: "React", icon: ReactIcon },
      { name: "Next.js", icon: NextIcon },
      { name: "TypeScript", icon: TSIcon },
      { name: "Tailwind CSS", icon: TailwindIcon },
      { name: "HTML / CSS", icon: HtmlIcon },
    ],
  },
  {
    title: "backend",
    items: [
      { name: "Node.js", icon: NodeIcon },
      { name: "Express", icon: ExpressIcon },
      { name: "REST APIs", icon: ApiIcon },
      { name: "Better Auth", icon: AuthIcon },
      { name: "OAuth 2.0", icon: OAuthIcon },
    ],
  },
  {
    title: "database",
    items: [
      { name: "PostgreSQL", icon: PgIcon },
      { name: "Prisma ORM", icon: PrismaIcon },
      { name: "MongoDB", icon: MongoIcon },
      { name: "SQL", icon: SqlIcon },
    ],
  },
  {
    title: "devops",
    items: [
      { name: "Git / GitHub", icon: GitIcon },
      { name: "Vercel", icon: VercelIcon },
      { name: "Docker", icon: DockerIcon },
      { name: "CI / CD", icon: CiIcon },
    ],
  },
];

export function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      ref={ref}
      style={{
        maxWidth: "1180px",
        margin: "0 auto",
        padding: "100px 28px",
      }}
    >
      <SectionLabel index="02" label="stack" />

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
        ~/skills.config.ts
      </motion.h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "16px",
        }}
        className="skills-grid"
      >
        {GROUPS.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 + gi * 0.08 }}
          >
            <SkillGroup group={group} />
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .skills-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function SkillGroup({
  group,
}: {
  group: (typeof GROUPS)[number];
}) {
  return (
    <div
      className="skill-group-card"
      style={{
        background: "var(--color-bg-1)",
        border: "1px solid var(--color-line)",
        borderRadius: "6px",
        padding: "24px",
        transition: "all 0.25s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor =
          "var(--color-accent-dim)";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor =
          "var(--color-line)";
        (e.currentTarget as HTMLDivElement).style.transform = "none";
      }}
    >
      <h3
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "13px",
          color: "var(--color-accent)",
          marginBottom: "18px",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          fontWeight: 500,
        }}
      >
        <span style={{ color: "var(--color-fg-mute)" }}>[</span>
        {group.title}
        <span style={{ color: "var(--color-fg-mute)" }}>]</span>
      </h3>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {group.items.map(({ name, icon: Icon }) => (
          <SkillItem key={name} name={name} Icon={Icon} />
        ))}
      </div>
    </div>
  );
}

function SkillItem({
  name,
  Icon,
}: {
  name: string;
  Icon: React.ComponentType;
}) {
  return (
    <div
      className="skill-item"
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "13px",
        color: "var(--color-fg)",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "6px 0",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        const svg = e.currentTarget.querySelector("svg");
        if (svg) svg.style.color = "var(--color-accent)";
      }}
      onMouseLeave={(e) => {
        const svg = e.currentTarget.querySelector("svg");
        if (svg) svg.style.color = "var(--color-fg-dim)";
      }}
    >
      <span
        style={{
          width: "18px",
          height: "18px",
          flexShrink: 0,
          color: "var(--color-fg-dim)",
          transition: "color 0.2s",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Icon />
      </span>
      {name}
    </div>
  );
}

/* ── Inline SVG icons ────────────────────────────── */

function ReactIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <circle cx="12" cy="12" r="2" />
      <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1" />
      <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(120 12 12)" />
    </svg>
  );
}

function NextIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="12" y="15.5" textAnchor="middle" fontFamily="monospace" fontSize="9" fontWeight="700" fill="currentColor">N</text>
    </svg>
  );
}

function TSIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <rect x="2" y="2" width="20" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="12" y="16" textAnchor="middle" fontFamily="monospace" fontSize="10" fontWeight="700" fill="currentColor">TS</text>
    </svg>
  );
}

function TailwindIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18">
      <path d="M3 13c2-5 5-5 8 0s6 5 8 0" strokeLinecap="round" />
      <path d="M3 17c2-5 5-5 8 0s6 5 8 0" strokeLinecap="round" />
    </svg>
  );
}

function HtmlIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M3 3h18l-1.6 18L12 23l-7.4-2L3 3zm14.5 4H6.5l.3 3h10.4l-.4 4h-3l.4 4-2.7-.8-2.7-.8.4-4h3l.2-2H6.6l.3 3h-3z" />
    </svg>
  );
}

function NodeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18">
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" />
      <text x="12" y="14" textAnchor="middle" fontFamily="monospace" fontSize="6" fontWeight="700" fill="currentColor" stroke="none">JS</text>
    </svg>
  );
}

function ExpressIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18">
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <path d="M2 12h20M7 9v6M12 9v6M17 9v6" />
    </svg>
  );
}

function ApiIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18">
      <path d="M5 7h14M5 12h14M5 17h14" />
      <circle cx="5" cy="7" r="1.5" fill="currentColor" />
      <circle cx="5" cy="12" r="1.5" fill="currentColor" />
      <circle cx="5" cy="17" r="1.5" fill="currentColor" />
    </svg>
  );
}

function AuthIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18">
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
      <circle cx="12" cy="16" r="1.5" fill="currentColor" />
    </svg>
  );
}

function OAuthIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18">
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  );
}

function PgIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18">
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
      <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </svg>
  );
}

function PrismaIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M12 2L3 8v8l9 6 9-6V8l-9-6z" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 6L7 9.5v5L12 18l5-3.5v-5L12 6z" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

function MongoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18">
      <path d="M12 2C8 6 6 10 6 14c0 4 3 7 6 7s6-3 6-7c0-4-2-8-6-12z" />
    </svg>
  );
}

function SqlIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 4v16" />
    </svg>
  );
}

function GitIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <circle cx="12" cy="6" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="6" cy="18" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="18" cy="18" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 8.5v3a3 3 0 0 1-3 3H7.5M12 8.5v3a3 3 0 0 0 3 3h1.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function VercelIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M12 3l10 18H2L12 3z" />
    </svg>
  );
}

function DockerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18">
      <rect x="3" y="9" width="4" height="4" />
      <rect x="8" y="9" width="4" height="4" />
      <rect x="13" y="9" width="4" height="4" />
      <rect x="8" y="4" width="4" height="4" />
      <path d="M2 14c2 4 8 5 14 5 3 0 5-1 6-3" strokeLinecap="round" />
    </svg>
  );
}

function CiIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18">
      <path d="M4 17l6-6 4 4 6-6" />
      <path d="M14 5h6v6" />
    </svg>
  );
}
