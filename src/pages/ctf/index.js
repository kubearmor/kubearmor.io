import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { FaGithub, FaLinkedinIn, FaSlack, FaXTwitter } from "react-icons/fa6";
import styles from "./styles.module.css";

const cx = (...names) =>
  names
    .filter(Boolean)
    .map((name) => styles[name])
    .join(" ");

const Ic = {
  arrow: (props) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  ),
  flag: (props) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 22V4M4 4h13l-2 4 2 4H4" />
    </svg>
  ),
  check: (props) => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  ),
  trophy: (props) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4Z" />
      <path d="M17 4h3v3a3 3 0 0 1-3 3M7 4H4v3a3 3 0 0 0 3 3" />
    </svg>
  ),
  gift: (props) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13M5 12v9h14v-9M7.5 8a2.5 2.5 0 1 1 0-5C10 3 12 8 12 8s2-5 4.5-5a2.5 2.5 0 1 1 0 5" />
    </svg>
  ),
  medal: (props) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M7 3l5 8 5-8M7 3h10M9 11l-3 3M15 11l3 3" />
      <circle cx="12" cy="16" r="5" />
    </svg>
  ),
  spark: (props) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2l1.8 6.4L20 10l-6.2 1.6L12 18l-1.8-6.4L4 10l6.2-1.6L12 2z" />
    </svg>
  ),
  browser: (props) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18" />
      <path d="M8 6.5h.01M11 6.5h.01" />
    </svg>
  ),
  users: (props) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  share: (props) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="M8.6 13.5l6.8 4" />
      <path d="M15.4 6.5l-6.8 4" />
    </svg>
  ),
  repo: (props) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 5a2 2 0 0 1 2-2h11l3 3v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
      <path d="M14 3v4h4" />
      <path d="M8 13h8M8 17h6" />
    </svg>
  ),
  message: (props) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
    </svg>
  ),
  route: (props) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="6" cy="19" r="3" />
      <path d="M9 19h5a4 4 0 0 0 4-4V5" />
      <path d="m13 8 5-5 5 5" />
    </svg>
  ),
  key: (props) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="7.5" cy="15.5" r="5.5" />
      <path d="m21 2-9.6 9.6" />
      <path d="m15 8 3 3" />
      <path d="m17 6 3 3" />
    </svg>
  ),
  shield: (props) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 2l8 3v6c0 5.25-3.5 9.74-8 11-4.5-1.26-8-5.75-8-11V5l8-3z" />
    </svg>
  ),
  terminal: (props) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M7 9l4 4-4 4" />
      <path d="M13 17h4" />
    </svg>
  ),
  calendar: (props) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  ),
  chatWarning: (props) => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path d="M12 8v4M12 16h.01" />
    </svg>
  ),
  brokenChain: (props) => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  ),
  endpoint: (props) => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="11" width="18" height="10" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      <circle cx="12" cy="16" r="1" fill="currentColor" />
    </svg>
  ),
  puzzle: (props) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M20.5 4c-.83 0-1.5.67-1.5 1.5v1H17V4c0-.55-.45-1-1-1h-2.5V1.5a1.5 1.5 0 1 0-3 0V3H8c-.55 0-1 .45-1 1v2.5H5.5a1.5 1.5 0 1 0 0 3H7V12H4c-.55 0-1 .45-1 1v2.5H1.5a1.5 1.5 0 1 0 0 3H3V21c0 .55.45 1 1 1h4v-1.5a1.5 1.5 0 1 1 3 0V22h2c.55 0 1-.45 1-1v-3h1.5a1.5 1.5 0 1 0 0-3H15v-2h2.5c.55 0 1-.45 1-1V9h1.5a1.5 1.5 0 1 0 0-3H19V4.5c0-.27.22-.5.5-.5z" />
    </svg>
  ),
  gear: (props) => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
  mask: (props) => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
      <path d="M9.5 9.5c.5.5 2 .5 2.5 0M12 9.5c.5.5 2 .5 2.5 0" />
    </svg>
  ),
  memoryChip: (props) => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="7" y="7" width="10" height="10" rx="1" />
      <path d="M7 9H5M7 12H5M7 15H5M17 9h2M17 12h2M17 15h2M9 7V5M12 7V5M15 7V5M9 17v2M12 17v2M15 17v2" />
    </svg>
  ),
  inject: (props) => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" />
    </svg>
  ),
  wrench: (props) => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  searchIcon: (props) => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  ),
  skipForward: (props) => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polygon points="5 4 15 12 5 20 5 4" />
      <line x1="19" y1="5" x2="19" y2="19" />
    </svg>
  ),
  edit: (props) => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  ),
  database: (props) => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  eye: (props) => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  packageIcon: (props) => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="21 8 21 21 3 21 3 8" />
      <rect x="1" y="3" width="22" height="5" />
      <line x1="10" y1="12" x2="14" y2="12" />
    </svg>
  ),
  zap: (props) => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  questionMark: (props) => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  tools: (props) => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  certDoc: (props) => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  ),
};

const AmazonCardVisual = () => (
  <svg
    width="54"
    height="36"
    viewBox="0 0 54 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ filter: "drop-shadow(0 4px 10px rgba(255,140,0,0.45))", flexShrink: 0 }}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="amz-grad" x1="0" y1="0" x2="54" y2="36" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFB347" />
        <stop offset="100%" stopColor="#E07800" />
      </linearGradient>
      <linearGradient id="amz-shine" x1="0" y1="0" x2="0" y2="36" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="rgba(255,255,255,0.22)" />
        <stop offset="50%" stopColor="rgba(255,255,255,0)" />
      </linearGradient>
    </defs>
    <rect width="54" height="36" rx="4" fill="url(#amz-grad)" />
    <rect width="54" height="36" rx="4" fill="url(#amz-shine)" />
    <rect x="1" y="1" width="52" height="34" rx="3.5" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="0.8" />
    <text x="6" y="16" fontSize="7.5" fontFamily="Arial, sans-serif" fontWeight="bold" fill="white" opacity="0.95">amazon</text>
    <path d="M6 18.5c4 1.8 8 1.8 12 0" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
    <rect x="6" y="22" width="20" height="1.5" rx="0.75" fill="rgba(255,255,255,0.5)" />
    <rect x="6" y="25.5" width="14" height="1.5" rx="0.75" fill="rgba(255,255,255,0.35)" />
    <rect x="32" y="8" width="16" height="10" rx="2" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
    <text x="34" y="16" fontSize="6" fontFamily="Arial, sans-serif" fill="white" opacity="0.9">GIFT</text>
  </svg>
);

const HoodieIcon = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12 5C12 5 9.5 6.5 8 8L4 10.5l-1.5 11H7v6h16v-6h4.5L26 10.5 22 8C20.5 6.5 18 5 18 5" stroke="#5297fe" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 5c0 1.66 1.34 3 3 3s3-1.34 3-3" stroke="#5297fe" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M7.5 11.5h15" stroke="#5297fe" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.55" />
    <circle cx="15" cy="12.5" r="1" fill="#5297fe" opacity="0.6" />
  </svg>
);

const StickerIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="11" cy="11" r="9.5" stroke="#5297fe" strokeWidth="1.4" fill="rgba(82,151,254,0.08)" />
    <path d="M11 5.5l1.5 4.5H17l-3.8 2.8 1.5 4.5L11 14.3l-3.7 2.5 1.5-4.5L5 9.5h4.5L11 5z" fill="#5297fe" opacity="0.75" />
  </svg>
);

const BottleIcon = () => (
  <svg width="18" height="28" viewBox="0 0 18 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M6.5 3.5h5v3l2 2.5v14a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2V9l2-2.5V3.5z" stroke="#5297fe" strokeWidth="1.5" strokeLinejoin="round" fill="rgba(82,151,254,0.07)" />
    <rect x="7.5" y="1" width="3" height="3" rx="1" stroke="#5297fe" strokeWidth="1.2" />
    <path d="M4.5 12.5h9" stroke="#5297fe" strokeWidth="0.8" opacity="0.45" />
    <path d="M4.5 17h9" stroke="#5297fe" strokeWidth="0.8" opacity="0.45" />
  </svg>
);

const RegForm = ({ tallyUrl }) => {
  useEffect(() => {
    const d = document;
    const scriptSrc = "https://tally.so/widgets/embed.js";
    const loadEmbeds = () => {
      if (typeof window.Tally !== "undefined") {
        window.Tally.loadEmbeds();
        return;
      }
      d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((iframe) => {
        iframe.src = iframe.dataset.tallySrc;
      });
    };
    if (typeof window.Tally !== "undefined") {
      loadEmbeds();
      return;
    }
    if (!d.querySelector(`script[src="${scriptSrc}"]`)) {
      const script = d.createElement("script");
      script.src = scriptSrc;
      script.onload = loadEmbeds;
      script.onerror = loadEmbeds;
      d.body.appendChild(script);
      return;
    }
    loadEmbeds();
  }, [tallyUrl]);

  return (
    <div className={cx("reg-card")} id="register">
      <div className={cx("reg-reward-strip")}>
        <div className={cx("reg-reward-item")}>
          <AmazonCardVisual />
        </div>
        <div className={cx("reg-reward-swag")}>
          <HoodieIcon />
          <StickerIcon />
          <BottleIcon />
        </div>
        <div className={cx("reg-reward-label")}>
          <span className={cx("reg-reward-text")}>Win $100 + premium swag</span>
          <span className={cx("reg-reward-sub")}>Top 3 finishers</span>
        </div>
      </div>
      <div className={cx("reg-body")}>
        <h3 className={cx("reg-title")}>Join the challenger list</h3>
        <p className={cx("reg-sub")}>Coming next month: 4-day CTF event. Save your spot now.</p>
        <iframe
          data-tally-src={tallyUrl}
          loading="lazy"
          width="100%"
          height="520"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="KubeArmor AI-CTF"
          style={{ border: "none", display: "block" }}
        />
      </div>
    </div>
  );
};

const Hero = ({ tallyUrl }) => (
  <section className={cx("hero")} id="overview">
    <div className={cx("hero-grid-bg")} />
    <div className={cx("hero-float-shield")} aria-hidden="true">
      <Ic.shield width="68" height="68" />
    </div>
    <div className={cx("hero-float-api")} aria-hidden="true">
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
        <circle cx="26" cy="26" r="24" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" />
        <circle cx="26" cy="26" r="4" fill="currentColor" opacity="0.35" />
        <circle cx="26" cy="3" r="2.5" fill="currentColor" opacity="0.25" />
        <circle cx="49" cy="26" r="2.5" fill="currentColor" opacity="0.25" />
        <circle cx="26" cy="49" r="2.5" fill="currentColor" opacity="0.25" />
        <circle cx="3" cy="26" r="2.5" fill="currentColor" opacity="0.25" />
        <line x1="26" y1="6" x2="26" y2="22" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
        <line x1="30" y1="26" x2="46" y2="26" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
      </svg>
    </div>
    <div className={cx("hero-float-term")} aria-hidden="true">
      <svg width="56" height="34" viewBox="0 0 56 34" fill="none">
        <rect width="56" height="34" rx="5" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.18" />
        <circle cx="8" cy="8" r="2" fill="currentColor" opacity="0.2" />
        <circle cx="14" cy="8" r="2" fill="currentColor" opacity="0.15" />
        <circle cx="20" cy="8" r="2" fill="currentColor" opacity="0.1" />
        <path d="M8 17l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4" />
        <path d="M19 27h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.3" />
      </svg>
    </div>
    <div className={cx("shell", "hero-inner")}>
      <div>
        <div className={cx("hero-badge")}>
          <Ic.trophy width="13" height="13" />
          Top 3 win $100 + swag
        </div>
        <div className={cx("eyebrow")}>
          <span className={cx("dot")} /> Coming soon next month | 4-day CTF event
        </div>
        <h1 className={cx("hero-title")}>
          Break AI Attack Paths.{" "}
          <span className={cx("hero-mark")}>Defend With Clarity.</span>
        </h1>
        <p className={cx("hero-sub")}>3 tracks. 18 flags. 4 days. Real attack paths.</p>
        <div className={cx("proof-strip")}>
          <div className={cx("proof-cell")}>
            <div className={cx("proof-ic")}>
              <Ic.flag width="16" height="16" />
            </div>
            <div>
              <div className={cx("proof-title")}>18 flags</div>
              <div className={cx("proof-copy")}>Across 3 tracks</div>
            </div>
          </div>
          <div className={cx("proof-cell")}>
            <div className={cx("proof-ic")}>
              <Ic.calendar width="16" height="16" />
            </div>
            <div>
              <div className={cx("proof-title")}>4-day event</div>
              <div className={cx("proof-copy")}>Live next month</div>
            </div>
          </div>
          <div className={cx("proof-cell")}>
            <div className={cx("proof-ic")}>
              <Ic.terminal width="16" height="16" />
            </div>
            <div>
              <div className={cx("proof-title")}>Sandbox</div>
              <div className={cx("proof-copy")}>Browser-based, no setup</div>
            </div>
          </div>
          <div className={cx("proof-cell")}>
            <div className={cx("proof-ic")}>
              <Ic.trophy width="16" height="16" />
            </div>
            <div>
              <div className={cx("proof-title")}>Leaderboard</div>
              <div className={cx("proof-copy")}>Ranked + rewards</div>
            </div>
          </div>
        </div>
      </div>
      <RegForm tallyUrl={tallyUrl} />
    </div>
  </section>
);

const flowSteps = [
  { id: "01", title: "Save Spot", copy: "Submit interest now", icon: <Ic.users width="18" height="18" /> },
  { id: "02", title: "Enter Sandbox", copy: "ctf.kubearmor.io", icon: <Ic.terminal width="18" height="18" />, platform: "ctf" },
  { id: "03", title: "Solve Challenges", copy: "18 flags, 3 tracks", icon: <Ic.puzzle width="18" height="18" />, platform: "ctf", workHere: true },
  { id: "04", title: "Submit Flags", copy: "kubearmor.ctfd.io", icon: <Ic.flag width="18" height="18" />, platform: "ctfd" },
  { id: "05", title: "Get Ranked", copy: "Leaderboard + rewards", icon: <Ic.trophy width="18" height="18" />, isEnd: true },
];

const EventFlow = () => (
  <section className={cx("event-flow")} id="event-flow">
    <div className={cx("shell")}>
      <div className={cx("section-head")}>
        <div className={cx("kicker")}>4-day event flow</div>
        <h2>Clear Path to <span className={cx("tone")}>Play and Submit.</span></h2>
        <p>Both platforms are work in progress, launching alongside the event.</p>
      </div>
      <div className={cx("flow-wrap")}>
        <div className={cx("flow-horizontal")}>
          {flowSteps.map((step, i) => (
            <React.Fragment key={step.id}>
              <div className={cx("flow-node", step.workHere && "flow-node-highlight", step.isEnd && "flow-node-end")}>
                <div className={cx("flow-node-ic")}>{step.icon}</div>
                <div className={cx("flow-node-id")}>{step.id}</div>
                <div className={cx("flow-node-title")}>{step.title}</div>
                <div className={cx("flow-node-copy")}>{step.copy}</div>
                {step.platform === "ctf" && <div className={cx("flow-platform-badge", "flow-badge-ctf")}>ctf.kubearmor.io</div>}
                {step.platform === "ctfd" && <div className={cx("flow-platform-badge", "flow-badge-ctfd")}>kubearmor.ctfd.io</div>}
              </div>
              {i < flowSteps.length - 1 && (
                <div className={cx("flow-arrow")} aria-hidden="true">
                  <svg width="28" height="14" viewBox="0 0 28 14">
                    <path d="M0 7h22" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
                    <path d="M19 3l6 4-6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className={cx("flow-reward-panel")}>
          <AmazonCardVisual />
          <div className={cx("flow-reward-panel-text")}>
            <span className={cx("flow-reward-panel-label")}>Top 3 Win</span>
            <span className={cx("flow-reward-panel-value")}>$100 + Premium Swag</span>
          </div>
        </div>
      </div>
      <div className={cx("flow-annotation")}>
        <span className={cx("flow-annotation-line")} />
        <span className={cx("flow-annotation-text")}><Ic.terminal width="12" height="12" /> Work happens here (steps 02-03)</span>
        <span className={cx("flow-annotation-line")} />
      </div>
    </div>
  </section>
);

const challengeIconMap = {
  "System Override": <Ic.gear />,
  "Persona Drift": <Ic.mask />,
  "Memory Drift": <Ic.memoryChip />,
  "Indirect Injection": <Ic.inject />,
  "Tool Confusion": <Ic.wrench />,
  "Tool Roulette": <Ic.wrench />,
  "Search Poison": <Ic.searchIcon />,
  "Approval Skip": <Ic.skipForward />,
  "Plan Rewrite": <Ic.edit />,
  "Memory Corruption": <Ic.database />,
  "Debug Echo": <Ic.terminal />,
  "Safety Mode Tamper": <Ic.zap />,
  "Transcript Leak": <Ic.eye />,
  "Header Smuggle": <Ic.packageIcon />,
  "Rate-Limit Slip": <Ic.skipForward />,
};

const trackData = [
  {
    num: "01",
    trackIcon: <Ic.chatWarning />,
    name: "Prompt Injection",
    desc: "Override system prompts, drift personas, and recover leaked secrets.",
    posterTitle: (<>Prompt <span className={cx("accent")}>Injection</span></>),
    posterSub: "Adversarial chat, indirect inputs",
    challenges: ["System Override", "Persona Drift", "Memory Drift", "Indirect Injection", "Tool Confusion"],
  },
  {
    num: "02",
    trackIcon: <Ic.brokenChain />,
    name: "Agent Hijack",
    desc: "Poison search, reroute tools, and bypass approval checks.",
    posterTitle: (<>Agent <span className={cx("accent")}>Hijack</span></>),
    posterSub: "Tool calls, multi-step coercion",
    challenges: ["Tool Roulette", "Search Poison", "Approval Skip", "Plan Rewrite", "Memory Corruption"],
  },
  {
    num: "03",
    trackIcon: <Ic.endpoint />,
    name: "Hidden API & Guardrail Bypass",
    desc: "Inspect browser traffic to find hidden endpoints and flip safety modes.",
    posterTitle: (<>Hidden <span className={cx("accent")}>API</span></>),
    posterSub: "Shadow endpoints, safety toggles",
    challenges: ["Debug Echo", "Safety Mode Tamper", "Transcript Leak", "Header Smuggle", "Rate-Limit Slip"],
  },
];

const Tracks = () => (
  <section className={cx("tracks-bg")} id="tracks">
    <div className={cx("shell")}>
      <div className={cx("section-head")}>
        <div className={cx("kicker")}>Three tracks</div>
        <h2>Pick One. Or <span className={cx("tone")}>Play All Three.</span></h2>
        <p>Five challenges plus a bonus completion flag in each track. 1,000 points apiece.</p>
      </div>
      <div className={cx("tracks-grid")}>
        {trackData.map((track) => (
          <div className={cx("track-card")} key={track.num}>
            <div className={cx("track-poster")}>
              <div className={cx("poster-grid")} />
              <div className={cx("poster-glow")} />
              <span className={cx("poster-tag")}><span className={cx("dot")} /> TRACK {track.num}</span>
              <span className={cx("poster-icon")}>{track.trackIcon}</span>
              <div className={cx("poster-title")}>{track.posterTitle}</div>
              <div className={cx("poster-sub")}>{track.posterSub}</div>
              <div className={cx("poster-progress")}>
                <div className={cx("poster-progress-bar")} />
                <span>6 challenges</span>
              </div>
            </div>
            <div className={cx("track-body")}>
              <ul className={cx("track-challenges")}>
                {track.challenges.map((challenge, index) => (
                  <li key={challenge} className={cx("challenge-pill")}>
                    <span className={cx("challenge-pill-icon")}>{challengeIconMap[challenge] || <Ic.flag width="11" height="11" />}</span>
                    <span className={cx("num")}>{String(index + 1).padStart(2, "0")}</span>
                    <span className={cx("name")}>{challenge}</span>
                  </li>
                ))}
                <li className={cx("bonus")}>
                  <span className={cx("num")}><Ic.flag /></span>
                  <span className={cx("name")}>Bonus completion flag</span>
                </li>
              </ul>
              <div className={cx("track-foot")}>
                <span className={cx("track-pts")}>
                  1,000 pts total <span className={cx("track-pts-badge")}>=3k max</span>
                </span>
                <span className={cx("track-count")}>6 flags</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const rewardTiers = [
  {
    key: "tier-1", className: "tier-highlight", rank: "Top 3", title: "$100 + Premium Swag",
    value: "Winner bundle with community spotlight", icon: <Ic.trophy />,
    image: "/img/ctf/rewards/reward-top3.svg", imageAlt: "Reward placeholder card for top three winners",
    bulletIcon: "gift",
    details: ["$100 Amazon gift card", "One premium swag item (hoodie or T-shirt)", "Stickers + notebook or bottle"],
  },
  {
    key: "tier-2", className: "", rank: "Ranks 4-8", title: "$30 Gift Card",
    value: "Strong finishers", icon: <Ic.medal />,
    image: "/img/ctf/rewards/reward-rank4-8.svg", imageAlt: "Reward placeholder card for ranks four through eight",
    bulletIcon: "gift",
    details: ["$30 Amazon gift card each", "Priority certificate delivery", "Included in post-event shoutout"],
  },
  {
    key: "tier-3", className: "", rank: "All contestants", title: "Verified Certificate",
    value: "Digital certificate for every participant", icon: <Ic.certDoc />,
    image: "/img/ctf/rewards/reward-all.svg", imageAlt: "Reward placeholder card for all contestants",
    bulletIcon: "cert",
    details: ["Name, date, completion note", "Event title and organizer signature", "Shared after challenge window closes"],
  },
];

const bulletIconMap = {
  gift: <Ic.gift width="13" height="13" />,
  cert: <Ic.certDoc width="13" height="13" />,
};

const Rewards = () => (
  <section className={cx("rewards")} id="rewards">
    <div className={cx("rw-grid-bg")} />
    <div className={cx("shell")}>
      <div className={cx("section-head")}>
        <div className={cx("kicker")}><Ic.spark /> Rewards</div>
        <h2>Rewards With Clear Terms.</h2>
        <p>Rank-based rewards with explicit rules, plus certificates for all contestants.</p>
      </div>
      <div className={cx("tier-validation-bar")}>
        <Ic.check width="13" height="13" />
        Rewards distributed after leaderboard validation
      </div>
      <div className={cx("tier-grid")}>
        {rewardTiers.map((tier) => (
          <article className={cx("tier-card", tier.className)} key={tier.key}>
            {tier.className === "tier-highlight" && <div className={cx("tier-ribbon")}>Top 3</div>}
            <div className={cx("tier-media")}>
              <img src={tier.image} alt={tier.imageAlt} loading="lazy" />
            </div>
            <div className={cx("tier-top")}>
              <div className={cx("tier-icon")}>{tier.icon}</div>
              <p className={cx("tier-rank")}>{tier.rank}</p>
            </div>
            <h3>{tier.title}</h3>
            <p className={cx("tier-value")}>{tier.value}</p>
            <ul>
              {tier.details.map((line) => (
                <li key={line}>
                  <span className={cx("tier-bullet-icon")}>{bulletIconMap[tier.bulletIcon] || <Ic.check width="13" height="13" />}</span>
                  {line}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const eligibilityRules = [
  {
    key: "participate", text: "Participate in the CTF",
    helper: "Submit at least one valid flag during the event window.",
    icon: <Ic.flag width="18" height="18" />, actionLabel: "Submit flag",
    actionHref: "https://kubearmor.ctfd.io",
  },
  {
    key: "slack", text: "Join KubeArmor CNCF Slack",
    helper: "Be present in the channel for announcements and updates.",
    icon: <FaSlack />, actionLabel: "Join Slack",
    actionHref: "https://cloud-native.slack.com/archives/C02R319HVL3",
  },
  {
    key: "github", text: "Star the KubeArmor repository",
    helper: "Use your GitHub account before reward verification.",
    icon: <FaGithub />, actionLabel: "Star repo",
    actionHref: "https://github.com/kubearmor/kubearmor",
    brandLogo: "/img/kubearmor/kubearmor-light-bg.svg", brandLogoAlt: "KubeArmor logo",
  },
  {
    key: "share", text: "Share with #KubeArmorCTF",
    helper: "Post on X and LinkedIn tagging @kubearmor.",
    icon: <Ic.share width="18" height="18" />, actionLabel: "Post update",
    socialLinks: [
      { label: "X", href: "https://x.com", icon: <FaXTwitter /> },
      { label: "LinkedIn", href: "https://www.linkedin.com", icon: <FaLinkedinIn /> },
    ],
  },
];

const UnlockChecklist = () => (
  <section className={cx("unlock-section")} id="unlock">
    <div className={cx("shell")}>
      <div className={cx("section-head")}>
        <div className={cx("kicker")}>Unlock rewards</div>
        <h2>Complete <span className={cx("tone")}>All Four.</span></h2>
        <p>All four steps required to be eligible for ranked rewards and certificates.</p>
      </div>
      <div className={cx("unlock-progress-wrap")}>
        <div className={cx("unlock-progress-label")}>Complete 4/4 to unlock rewards</div>
        <div className={cx("unlock-progress-track")}>
          <div className={cx("unlock-progress-fill")} />
        </div>
      </div>
      <div className={cx("unlock-grid")}>
        {eligibilityRules.map((rule, i) => (
          <article className={cx("unlock-item")} key={rule.key}>
            <div className={cx("unlock-item-left")}>
              <div className={cx("unlock-status")}>
                <span className={cx("unlock-status-num")}>{String(i + 1).padStart(2, "0")}</span>
              </div>
            </div>
            <div className={cx("unlock-item-center")}>
              <div className={cx("unlock-item-icon")}>{rule.icon}</div>
              <div>
                <h4 className={cx("unlock-item-title")}>{rule.text}</h4>
                <p className={cx("unlock-item-desc")}>{rule.helper}</p>
                {rule.brandLogo && (
                  <img className={cx("eligibility-brand")} src={rule.brandLogo} alt={rule.brandLogoAlt} loading="lazy" />
                )}
              </div>
            </div>
            <div className={cx("unlock-item-right")}>
              {rule.socialLinks ? (
                <div className={cx("eligibility-social")}>
                  {rule.socialLinks.map((item) => (
                    <a key={item.label} className={cx("social-chip")} href={item.href} target="_blank" rel="noopener noreferrer">
                      {item.icon}<span>{item.label}</span>
                    </a>
                  ))}
                </div>
              ) : (
                rule.actionHref && (
                  <a className={cx("unlock-action-btn")} href={rule.actionHref} target="_blank" rel="noopener noreferrer">
                    <span>{rule.actionLabel}</span><Ic.arrow className={cx("arr")} />
                  </a>
                )
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const faqCategories = [
  {
    title: "Getting Started",
    icon: <Ic.questionMark />,
    items: [
      { q: "Where do I register?", a: "Use the lead form on this page. The event is coming next month and runs for 4 days.", icon: <Ic.questionMark /> },
      { q: "Do I need Kubernetes or local tools?", a: "No. Everything runs in browser, no kubeconfig, kubectl, or local cluster setup.", icon: <Ic.tools /> },
      { q: "Can I play all three tracks?", a: "Yes. Play one track or all three, total points across tracks are 3,000.", icon: <Ic.flag width="14" height="14" /> },
      { q: "Which platforms are used for the event?", a: "Challenges run on ctf.kubearmor.io and flag submission runs on kubearmor.ctfd.io. Both platforms are currently work in progress and will be active for next month's 4-day event.", icon: <Ic.browser width="14" height="14" /> },
    ],
  },
  {
    title: "Rewards & Rules",
    icon: <Ic.trophy width="14" height="14" />,
    items: [
      { q: "What are the reward eligibility requirements?", a: "You must complete all four checklist items: participate in the event, join the KubeArmor CNCF Slack channel, star the KubeArmor GitHub repository, and share your experience on X and LinkedIn with #KubeArmorCTF tagging @kubearmor.", icon: <Ic.trophy width="14" height="14" /> },
      { q: "Who receives certificates and what is included?", a: "Every contestant receives a participation certificate including contestant name, event name (KubeArmor AI CTF), date, a completion note, and organizer signature.", icon: <Ic.certDoc /> },
      { q: "How do I submit flags?", a: "Each challenge yields a FLAG string. Submit flags at kubearmor.ctfd.io, which is currently work in progress.", icon: <Ic.flag width="14" height="14" /> },
    ],
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(-1);
  return (
    <section className={cx("faq")} id="faq">
      <div className={cx("shell")}>
        <div className={cx("faq-slack-strip")}>
          <FaSlack />
          <span>Still unsure? Join Slack</span>
          <a href="https://cloud-native.slack.com/archives/C02R319HVL3" target="_blank" rel="noopener noreferrer" className={cx("faq-slack-link")}>
            #kubearmor <Ic.arrow width="11" height="11" />
          </a>
        </div>
        <div className={cx("section-head")}>
          <div className={cx("kicker")}>FAQ</div>
          <h2>Quick Answers.</h2>
        </div>
        <div className={cx("faq-two-col")}>
          {faqCategories.map((cat, catIdx) => (
            <div className={cx("faq-col")} key={cat.title}>
              <div className={cx("faq-col-head")}>{cat.icon}{cat.title}</div>
              <div className={cx("faq-list")}>
                {cat.items.map((item, localIdx) => {
                  const globalIndex = catIdx === 0 ? localIdx : faqCategories[0].items.length + localIdx;
                  const isOpen = openIndex === globalIndex;
                  const buttonId = `faq-q-${globalIndex}`;
                  const panelId = `faq-a-${globalIndex}`;
                  return (
                    <div key={item.q} className={cx("faq-item", isOpen && "open")}>
                      <button className={cx("faq-q")} type="button" id={buttonId} aria-expanded={isOpen} aria-controls={panelId} onClick={() => setOpenIndex(isOpen ? -1 : globalIndex)}>
                        <span className={cx("faq-q-icon")}>{item.icon}</span>
                        <span className={cx("faq-q-label")}>{item.q}</span>
                        <span className={cx("plus")} aria-hidden="true">+</span>
                      </button>
                      <div className={cx("faq-a")} id={panelId} role="region" aria-labelledby={buttonId}>
                        <div className={cx("faq-a-inner")}>{item.a}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function CTFPage() {
  useEffect(() => {
    const isResizeObserverNoise = (message) =>
      typeof message === "string" &&
      message.includes("ResizeObserver loop completed with undelivered notifications");
    const handleWindowError = (event) => {
      const message = event?.message || event?.error?.message;
      if (!isResizeObserverNoise(message)) return;
      event.stopImmediatePropagation?.();
      event.preventDefault?.();
    };
    const handleUnhandledRejection = (event) => {
      const reasonMessage = typeof event?.reason === "string" ? event.reason : event?.reason?.message;
      if (!isResizeObserverNoise(reasonMessage)) return;
      event.preventDefault?.();
    };
    window.addEventListener("error", handleWindowError);
    window.addEventListener("unhandledrejection", handleUnhandledRejection);
    return () => {
      window.removeEventListener("error", handleWindowError);
      window.removeEventListener("unhandledrejection", handleUnhandledRejection);
    };
  }, []);

  const { siteConfig } = useDocusaurusContext();
  const customFields = siteConfig.customFields || {};
  const tallyUrlFromConfig = typeof customFields.ctfLeadTallyUrl === "string" ? customFields.ctfLeadTallyUrl.trim() : "";
  const tallyUrl = tallyUrlFromConfig || "https://tally.so/embed/ob0WJx?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";

  return (
    <Layout title="KubeArmor AI Security CTF" description="Browser-first CTF landing page for KubeArmor AI security challenges." noNavbar noFooter>
      <div className={styles.ctfPage}>
        <Hero tallyUrl={tallyUrl} />
        <EventFlow />
        <Tracks />
        <Rewards />
        <UnlockChecklist />
        <FAQ />
      </div>
    </Layout>
  );
}
