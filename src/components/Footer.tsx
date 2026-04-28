"use client";

import { useState } from "react";

export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--color-line)",
        marginTop: "60px",
        padding: "36px 28px",
        fontFamily: "var(--font-mono)",
        fontSize: "12px",
        color: "var(--color-fg-mute)",
        position: "relative",
        zIndex: 2,
      }}
    >
      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <div>
          <span style={{ color: "var(--color-accent)" }}>▸</span>{" "}
          rafsan@dev:~/portfolio ${" "}
          <span style={{ color: "var(--color-fg-dim)" }}>
            © 2025 Rafsan Jani Dipta · built with care
          </span>
        </div>

        <div style={{ display: "flex", gap: "18px", alignItems: "center" }}>
          <FooterLink href="https://github.com/Rafsan41">github</FooterLink>
          <FooterLink href="https://x.com/RafsanJaniDipta">twitter</FooterLink>
          <FooterLink href="mailto:rafsundipto116@gmail.com">email</FooterLink>
          <TopBtn />
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const [h, setH] = useState(false);
  return (
    <a
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel="noopener noreferrer"
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        color: h ? "var(--color-accent)" : "var(--color-fg-dim)",
        textDecoration: "none",
        transition: "color 0.2s",
      }}
    >
      {children}
    </a>
  );
}

function TopBtn() {
  const [h, setH] = useState(false);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        background: "transparent",
        border: `1px solid ${h ? "var(--color-accent)" : "var(--color-line-2)"}`,
        color: h ? "var(--color-accent)" : "var(--color-fg-dim)",
        fontFamily: "var(--font-mono)",
        fontSize: "12px",
        padding: "8px 14px",
        cursor: "pointer",
        borderRadius: "4px",
        transition: "all 0.2s",
      }}
    >
      ↑ top
    </button>
  );
}
