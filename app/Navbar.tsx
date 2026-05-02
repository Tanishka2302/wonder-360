"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false); // 🔥 NEW

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav className="navbar">

        {/* LOGO */}
        <motion.div
          className="logo-wrap"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link href="/" className="brand-link">
            <img src="/logo3.png" alt="Wonder 360 Tours" className="logo-img" />
            <span className="tagline-text">
              Transforming Spaces into Stories
            </span>
          </Link>
        </motion.div>

        {/* DESKTOP NAV */}
        <ul className="nav-links">
          {navItems.map((item, i) => (
            <li key={i} className={pathname === item.path ? "active" : ""}>
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>

        {/* RIGHT SIDE */}
        <motion.div className="nav-actions">

          {/* SEARCH */}
          <div className={`search-box ${searchOpen ? "open" : ""}`}>
            <input
              type="text"
              placeholder="Search..."
              autoFocus={searchOpen}
              onBlur={() => setSearchOpen(false)}
            />
            <button
              className="search-btn"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              ⌕
            </button>
          </div>

          {/* 🔥 ORB (UNCHANGED) */}
          <motion.button
            className="nav-orb"
            onClick={() => setMenuOpen(true)}
            whileHover={{ rotate: 180, scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
          />

          {/* 🍔 HAMBURGER (NEW) */}
          <div
            className={`menu-toggle ${mobileOpen ? "open" : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

        </motion.div>

      </nav>

      {/* ================= ORB MENU ================= */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="orb-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              className="orb-menu"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {[
                { icon: "📸", label: "Instagram" },
                { icon: "💬", label: "WhatsApp" },
                { icon: "📞", label: "Call" },
                { icon: "✉️", label: "Email" },
              ].map((item, i) => (
                <div key={i} className="orb-item">
                  <span>{item.icon}</span>
                  <p>{item.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              className="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
            >
              {navItems.map((item, i) => (
                <Link
                  key={i}
                  href={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={pathname === item.path ? "active" : ""}
                >
                  {item.name}
                </Link>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}