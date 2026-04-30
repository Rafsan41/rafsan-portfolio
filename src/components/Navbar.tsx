"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";

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
  const { theme, toggle } = useTheme();

  const isDark = theme === "dark";
  const navBg = scrolled
    ? isDark ? "rgba(8,8,8,0.85)" : "rgba(245,245,240,0.88)"
    : isDark ? "rgba(8,8,8,0.45)" : "rgba(245,245,240,0.55)";

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
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        background: navBg,
        borderBottom: `1px solid var(--color-line)`,
        boxShadow: scrolled ? `0 8px 32px ${isDark ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0.08)"}` : "none",
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

        {/* Theme toggle + mobile toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            style={{
              width: "36px",
              height: "20px",
              borderRadius: "10px",
              border: "1px solid var(--color-line-2)",
              background: theme === "dark" ? "var(--color-bg-2)" : "var(--color-accent)",
              cursor: "pointer",
              position: "relative",
              transition: "background 0.3s ease",
              flexShrink: 0,
            }}
          >
            {/* Track icons */}
            <span style={{
              position: "absolute",
              left: "4px",
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: "9px",
              lineHeight: 1,
              opacity: theme === "light" ? 0 : 1,
              transition: "opacity 0.2s",
            }}>🌙</span>
            <span style={{
              position: "absolute",
              right: "4px",
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: "9px",
              lineHeight: 1,
              opacity: theme === "light" ? 1 : 0,
              transition: "opacity 0.2s",
            }}>☀️</span>
            {/* Thumb */}
            <span style={{
              position: "absolute",
              top: "2px",
              left: theme === "dark" ? "2px" : "18px",
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              background: theme === "dark" ? "var(--color-fg-mute)" : "#fff",
              transition: "left 0.3s ease, background 0.3s ease",
              boxShadow: "0 1px 4px rgba(0,0,0,0.3)",
            }} />
          </button>

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
              background: isDark ? "rgba(10,10,10,0.97)" : "rgba(245,245,240,0.97)",
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
