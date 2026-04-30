"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionLabel } from "./About";

const TECHS = [
  { name: "JavaScript",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "TypeScript",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "React",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Next.js",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "Node.js",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "Express",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
  { name: "PostgreSQL",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "Prisma",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" },
  { name: "Tailwind CSS",icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Docker",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "Git",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "GitHub",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
  { name: "Vercel",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
  { name: "VS Code",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
  { name: "Postman",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
];

export function Technologies() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="technologies"
      ref={ref}
      style={{
        maxWidth: "1180px",
        margin: "0 auto",
        padding: "100px 28px",
      }}
    >
      <SectionLabel index="02" label="technologies" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "36px",
          fontWeight: 600,
          letterSpacing: "-0.02em",
          marginBottom: "12px",
          color: "var(--color-fg)",
        }}
      >
        ~/tech-stack/
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.15 }}
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "13px",
          color: "var(--color-fg-mute)",
          marginBottom: "48px",
        }}
      >
        // tools and technologies I work with
      </motion.p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {TECHS.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.15 + i * 0.04 }}
          >
            <TechCard tech={tech} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function TechCard({ tech }: { tech: { name: string; icon: string } }) {
  return (
    <div
      className="tech-card"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        const circle = e.currentTarget.querySelector(".tech-circle") as HTMLDivElement;
        if (circle) {
          circle.style.borderColor = "var(--color-accent)";
          circle.style.boxShadow = "0 0 20px rgba(16,185,129,0.3)";
          circle.style.transform = "translateY(-4px)";
          circle.style.background = "var(--color-bg-1)";
        }
        const label = e.currentTarget.querySelector(".tech-label") as HTMLSpanElement;
        if (label) label.style.color = "var(--color-accent)";
      }}
      onMouseLeave={(e) => {
        const circle = e.currentTarget.querySelector(".tech-circle") as HTMLDivElement;
        if (circle) {
          circle.style.borderColor = "var(--color-line-2)";
          circle.style.boxShadow = "none";
          circle.style.transform = "translateY(0)";
          circle.style.background = "var(--color-bg-1)";
        }
        const label = e.currentTarget.querySelector(".tech-label") as HTMLSpanElement;
        if (label) label.style.color = "var(--color-fg-mute)";
      }}
    >
      <div
        className="tech-circle"
        style={{
          width: "72px",
          height: "72px",
          borderRadius: "50%",
          background: "var(--color-bg-1)",
          border: "1px solid var(--color-line-2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.25s ease",
          padding: "16px",
        }}
      >
        <img
          src={tech.icon}
          alt={tech.name}
          width={36}
          height={36}
          style={{
            width: "36px",
            height: "36px",
            objectFit: "contain",
            display: "block",
            /* invert GitHub/Vercel/Express icons so they show on dark bg */
            filter: ["GitHub", "Vercel", "Express", "Next.js", "Prisma"].includes(tech.name)
              ? "invert(1)"
              : "none",
          }}
        />
      </div>
      <span
        className="tech-label"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          color: "var(--color-fg-mute)",
          transition: "color 0.2s",
          textAlign: "center",
          maxWidth: "72px",
        }}
      >
        {tech.name}
      </span>
    </div>
  );
}
