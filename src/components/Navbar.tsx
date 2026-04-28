"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#experience", label: "experience" },
  { href: "#contact", label: "contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backdropFilter: "blur(12px)",
        background: scrolled
          ? "rgba(10,10,10,0.9)"
          : "rgba(10,10,10,0.7)",
        borderBottom: "1px solid var(--color-line)",
        fontFamily: "var(--font-mono)",
        fontSize: "13px",
        transition: "background 0.3s",
      }}
    >
      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "14px 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span
            className="dot-pulse"
            style={{
              width: "8px",
              height: "8px",
              background: "var(--color-accent)",
              borderRadius: "50%",
              boxShadow: "0 0 10px var(--color-accent)",
              display: "inline-block",
              flexShrink: 0,
            }}
          />
          <span style={{ color: "var(--color-fg)", fontWeight: 600 }}>
            rafsan@dev:~
          </span>
        </div>

        {/* Desktop Links */}
        <ul
          style={{
            display: "flex",
            gap: "28px",
            listStyle: "none",
          }}
          className="hidden-mobile"
        >
          {links.map((link) => (
            <li key={link.href}>
              <NavLink href={link.href}>{link.label}</NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          style={{
            display: "none",
            background: "transparent",
            border: "none",
            color: "var(--color-fg-dim)",
            cursor: "pointer",
            padding: "4px",
          }}
          className="mobile-toggle"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              overflow: "hidden",
              borderTop: "1px solid var(--color-line)",
              background: "rgba(10,10,10,0.95)",
            }}
          >
            <ul
              style={{
                listStyle: "none",
                padding: "12px 28px 16px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {links.map((link) => (
                <li key={link.href}>
                  <NavLink
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 640px) {
          .hidden-mobile { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </motion.nav>
  );
}

function NavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        color: hovered ? "var(--color-fg)" : "var(--color-fg-dim)",
        textDecoration: "none",
        transition: "color 0.2s",
        display: "inline-flex",
        alignItems: "center",
        gap: "2px",
      }}
    >
      <motion.span
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: hovered ? 1 : 0, width: hovered ? "auto" : 0 }}
        transition={{ duration: 0.15 }}
        style={{
          color: "var(--color-accent)",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        ./
      </motion.span>
      {children}
    </a>
  );
}
