"use client";

import "./globals.css";
import "./navbar.css";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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

  return (
    <html lang="en">
      <body>
        {/* ================= NAVBAR ================= */}
        <nav className="navbar">

          {/* LOGO */}
          <motion.div
            className="logo"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{
              rotateY: 12,
              rotateX: -6,
              scale: 1.04
            }}
            transition={{
              duration: 0.6
            }}
          >
            <div>
              Wonder <span>360</span>
            </div>
            <small>Tours</small>
          </motion.div>


          {/* NAV LINKS */}
          <motion.ul
            className="nav-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: .6 }}
          >
            {navItems.map((item, i) => (
              <motion.li
                key={i}
                initial={{
                  y: 25,
                  opacity: 0
                }}
                animate={{
                  y: 0,
                  opacity: 1
                }}
                transition={{
                  duration: .5,
                  delay: i * .1
                }}
                className={
                  pathname === item.path
                    ? "active"
                    : ""
                }
              >
                <Link href={item.path}>
                  <motion.span
                    whileHover={{
                      y: -3,
                      color: "#d4af37"
                    }}
                  >
                    {item.name}
                  </motion.span>
                </Link>
              </motion.li>
            ))}
          </motion.ul>


          {/* ACTIONS */}
          <motion.div
            className="nav-actions"
            initial={{
              opacity: 0,
              x: 50
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              delay: .6,
              duration: .6
            }}
          >

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
                onClick={() =>
                  setSearchOpen(!searchOpen)
                }
              >
                ⌕
              </button>
            </div>


            {/* GOLD ORB */}
            <motion.button
              className="nav-orb"
              onClick={() => setMenuOpen(true)}
              whileHover={{
                rotate: 180,
                scale: 1.15
              }}
              whileTap={{
                scale: .9
              }}
            />

          </motion.div>

        </nav>


        {/* ================= ORB HUB ================= */}
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
                initial={{
                  scale: .5,
                  rotate: -35,
                  opacity: 0
                }}
                animate={{
                  scale: 1,
                  rotate: 0,
                  opacity: 1
                }}
                exit={{
                  scale: .5,
                  rotate: 35,
                  opacity: 0
                }}
                transition={{
                  duration: .5
                }}
                onClick={(e) =>
                  e.stopPropagation()
                }
              >
                {[
                  { icon:"📸", label:"Instagram" },
                  { icon:"💬", label:"WhatsApp" },
                  { icon:"📞", label:"Call" },
                  { icon:"✉️", label:"Email" },
                ].map((item,i)=>(

                  <motion.div
                    key={i}
                    className="orb-item"
                    whileHover={{
                      scale:1.08,
                      y:-10
                    }}
                  >
                    <span>{item.icon}</span>
                    <p>{item.label}</p>
                  </motion.div>

                ))}
              </motion.div>

            </motion.div>
          )}
        </AnimatePresence>


        {/* PAGE CONTENT */}
        <main style={{ paddingTop:"80px" }}>
          {children}
        </main>

      </body>
    </html>
  );
}