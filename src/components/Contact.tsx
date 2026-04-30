"use client";

import { useRef, useState, FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import { SectionLabel } from "./About";

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    }, 900);
  }

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        maxWidth: "1180px",
        margin: "0 auto",
        padding: "100px 28px",
      }}
    >
      <SectionLabel index="06" label="connect" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "36px",
          fontWeight: 600,
          letterSpacing: "-0.02em",
          marginBottom: "8px",
          color: "var(--color-fg)",
        }}
      >
        $ ./hire-me.sh
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "14px",
          color: "var(--color-fg-mute)",
          marginBottom: "40px",
        }}
      >
        // Let&apos;s work together. Drop me a message or reach out directly.
      </motion.p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "32px",
        }}
        className="contact-grid"
      >
        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          noValidate
          style={{
            background: "var(--color-bg-1)",
            border: "1px solid var(--color-line)",
            borderRadius: "6px",
            padding: "28px",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "13px",
              color: "var(--color-accent)",
              marginBottom: "20px",
            }}
          >
            // new_message.send()
          </div>

          <FormField
            id="name"
            label="name"
            value={name}
            onChange={setName}
            placeholder="Jane Doe"
          />
          <FormField
            id="email"
            label="email"
            type="email"
            value={email}
            onChange={setEmail}
            placeholder="jane@company.com"
          />
          <div style={{ marginBottom: "16px" }}>
            <label
              htmlFor="message"
              style={{
                display: "block",
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                color: "var(--color-fg-dim)",
                marginBottom: "6px",
              }}
            >
              <span style={{ color: "var(--color-accent)" }}>$ </span>
              message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Hi Rafsan, we're looking for..."
              rows={4}
              style={{
                width: "100%",
                background: "var(--color-bg-2)",
                border: "1px solid var(--color-line-2)",
                color: "var(--color-fg)",
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                padding: "10px 12px",
                borderRadius: "4px",
                outline: "none",
                resize: "vertical",
                minHeight: "110px",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) =>
                (e.currentTarget.style.borderColor = "var(--color-accent)")
              }
              onBlur={(e) =>
                (e.currentTarget.style.borderColor = "var(--color-line-2)")
              }
            />
          </div>

          <SubmitBtn />

          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              marginTop: "10px",
              minHeight: "18px",
              color:
                status === "error"
                  ? "var(--color-warn)"
                  : "var(--color-accent)",
            }}
          >
            {status === "error" && "✗ all fields required"}
            {status === "sending" && "▸ sending..."}
            {status === "sent" && "✓ message sent. response within 24h."}
          </div>
        </motion.form>

        {/* Direct links */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <ContactLink
            href="mailto:rafsundipto116@gmail.com"
            channel="email"
            handle="rafsundipto116@gmail.com"
            icon={<EmailIcon />}
          />
          <ContactLink
            href="tel:+8801325252970"
            channel="phone"
            handle="+880 1325-252970"
            icon={<PhoneIcon />}
          />
          <ContactLink
            href="https://wa.me/8801776610116"
            channel="whatsapp"
            handle="+880 1776-610116"
            icon={<WhatsAppIcon />}
          />
          <ContactLink
            href="https://www.linkedin.com/in/rafsan-jani-dipta"
            channel="linkedin"
            handle="Rafsan Jani Dipta"
            icon={<LinkedInIcon />}
          />
          <ContactLink
            href="https://github.com/Rafsan41"
            channel="github"
            handle="@Rafsan41"
            icon={<GithubIcon />}
          />
          <ContactLink
            href="https://x.com/RafsanJaniDipta"
            channel="x / twitter"
            handle="@RafsanJaniDipta"
            icon={<XIcon />}
          />

          <div
            style={{
              background: "var(--color-bg-1)",
              border: "1px dashed var(--color-line-2)",
              borderRadius: "6px",
              padding: "18px 22px",
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "var(--color-fg-mute)",
            }}
          >
            <div
              style={{
                color: "var(--color-accent)",
                marginBottom: "6px",
              }}
            >
              // status
            </div>
            <div>
              <span style={{ color: "var(--color-fg-dim)" }}>availability:</span>{" "}
              <span style={{ color: "var(--color-accent)" }}>
                open to opportunities
              </span>
            </div>
            <div>
              <span style={{ color: "var(--color-fg-dim)" }}>response_time:</span>{" "}
              <span style={{ color: "var(--color-fg)" }}>&lt; 24h</span>
            </div>
            <div>
              <span style={{ color: "var(--color-fg-dim)" }}>timezone:</span>{" "}
              <span style={{ color: "var(--color-fg)" }}>UTC+6 · Bangladesh</span>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function FormField({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div style={{ marginBottom: "16px" }}>
      <label
        htmlFor={id}
        style={{
          display: "block",
          fontFamily: "var(--font-mono)",
          fontSize: "12px",
          color: "var(--color-fg-dim)",
          marginBottom: "6px",
        }}
      >
        <span style={{ color: "var(--color-accent)" }}>$ </span>
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          width: "100%",
          background: "var(--color-bg-2)",
          border: "1px solid var(--color-line-2)",
          color: "var(--color-fg)",
          fontFamily: "var(--font-mono)",
          fontSize: "13px",
          padding: "10px 12px",
          borderRadius: "4px",
          outline: "none",
          transition: "border-color 0.2s",
        }}
        onFocus={(e) =>
          (e.currentTarget.style.borderColor = "var(--color-accent)")
        }
        onBlur={(e) =>
          (e.currentTarget.style.borderColor = "var(--color-line-2)")
        }
      />
    </div>
  );
}

function SubmitBtn() {
  const [h, setH] = useState(false);
  return (
    <button
      type="submit"
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        width: "100%",
        fontFamily: "var(--font-mono)",
        fontSize: "14px",
        padding: "14px 22px",
        border: `1px solid ${h ? "var(--color-fg)" : "var(--color-accent)"}`,
        background: h ? "var(--color-fg)" : "var(--color-accent)",
        color: "#000",
        cursor: "pointer",
        transition: "all 0.2s",
        fontWeight: 600,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        borderRadius: "2px",
      }}
    >
      <span>Send Message</span>
      <span>→</span>
    </button>
  );
}

function ContactLink({
  href,
  channel,
  handle,
  icon,
}: {
  href: string;
  channel: string;
  handle: string;
  icon: React.ReactNode;
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
        display: "flex",
        alignItems: "center",
        gap: "18px",
        background: h ? "var(--color-bg-2)" : "var(--color-bg-1)",
        border: `1px solid ${h ? "var(--color-accent-dim)" : "var(--color-line)"}`,
        borderRadius: "6px",
        padding: "18px 22px",
        textDecoration: "none",
        color: "var(--color-fg)",
        transition: "all 0.2s",
        fontFamily: "var(--font-mono)",
        transform: h ? "translateX(4px)" : "none",
      }}
    >
      <div
        style={{
          width: "36px",
          height: "36px",
          border: "1px solid var(--color-line-2)",
          borderRadius: "4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--color-accent)",
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div>
        <div
          style={{
            fontSize: "11px",
            color: "var(--color-fg-mute)",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: "2px",
          }}
        >
          {channel}
        </div>
        <div
          style={{
            fontSize: "14px",
            color: h ? "var(--color-accent)" : "var(--color-fg)",
            transition: "color 0.2s",
          }}
        >
          {handle}
        </div>
      </div>
      <span
        style={{
          marginLeft: "auto",
          color: h ? "var(--color-accent)" : "var(--color-fg-mute)",
          transform: h ? "translateX(4px)" : "none",
          transition: "all 0.2s",
        }}
      >
        →
      </span>
    </a>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.06 6.06l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.35-3.37-1.35-.46-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.4 9.4 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.86l-5.37-6.66L4.6 22H1.34l8.04-9.18L1 2h7.05l4.83 6.13L18.24 2zm-1.2 18h1.84L7.04 4H5.07l11.97 16z" />
    </svg>
  );
}
