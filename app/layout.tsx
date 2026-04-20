"use client";

import "./globals.css";
import "./navbar.css";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  // Animation Variants
  const navContainerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVars = {
    hidden: { y: -50, opacity: 0, rotateX: -90 },
    visible: { 
      y: 0, 
      opacity: 1, 
      rotateX: 0, 
      transition: { type: "spring", stiffness: 120, damping: 12 } 
    }
  };

  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          {/* LOGO: 3D Tilt */}
          <motion.div
            className="logo"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ rotateY: 20, rotateX: -10, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div>Wonder <span>360</span></div>
            <small>Tours</small>
          </motion.div>

          {/* NAV LINKS: Staggered Drop */}
          <motion.ul 
            className="nav-links"
            variants={navContainerVars}
            initial="hidden"
            animate="visible"
          >
            {navItems.map((item, i) => (
              <motion.li key={i} variants={itemVars} className={pathname === item.path ? "active" : ""}>
                <Link href={item.path}>
                  <motion.span whileHover={{ y: -3, color: "#d4af37" }}>
                    {item.name}
                  </motion.span>
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          {/* ACTIONS: Sliding entrance */}
          <motion.div 
            className="nav-actions"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, type: "spring" }}
          >
            <div className={`search-box ${searchOpen ? "open" : ""}`}>
              <input
                type="text"
                placeholder="Search..."
                onBlur={() => setSearchOpen(false)}
                autoFocus={searchOpen}
              />
              <button className="search-btn" onClick={() => setSearchOpen(!searchOpen)}>
                ⌕
              </button>
            </div>

            <motion.button
              className="nav-orb"
              onClick={() => setMenuOpen(true)}
              whileHover={{ rotate: 180, scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            />
          </motion.div>
        </nav>

        {/* ORB HUB MENU */}
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
                initial={{ scale: 0.5, rotate: -45, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                exit={{ scale: 0.5, rotate: 45, opacity: 0 }}
                transition={{ type: "spring", damping: 15 }}
                onClick={(e) => e.stopPropagation()}
              >
                {[
                  { icon: "📸", label: "Instagram" },
                  { icon: "💬", label: "WhatsApp" },
                  { icon: "📞", label: "Call" },
                  { icon: "✉️", label: "Email" },
                ].map((item, i) => (
                  <motion.div key={i} className="orb-item" whileHover={{ scale: 1.1, y: -10 }}>
                    <span>{item.icon}</span>
                    <p>{item.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <main style={{ paddingTop: "80px" }}>{children}</main>
      </body>
    </html>
  );
}