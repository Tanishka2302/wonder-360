"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useRef } from "react"; // Added useRef
import emailjs from "@emailjs/browser"; // Added EmailJS
import { FaInstagram, FaWhatsapp, FaPhone, FaEnvelope, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  const formRef = useRef<HTMLFormElement>(null); // Ref for EmailJS

  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [isSending, setIsSending] = useState(false); // Loading state for button

  // 🔥 EmailJS Send Function
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // Replace these with your actual EmailJS credentials
    const SERVICE_ID = "service_gag77qr";
    const TEMPLATE_ID ="template_4xaes7l";
    const PUBLIC_KEY = "IujdyPXYqZzc_Y00Q";

    if (formRef.current) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
        .then(() => {
          alert("Message sent successfully!");
          setIsSending(false);
          setModalOpen(false);
        })
        .catch((error) => {
          console.error("FAILED...", error);
          alert("Failed to send message. Please try again.");
          setIsSending(false);
        });
    }
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const whatsappMessage = encodeURIComponent("Hello! I'm interested in a 360 virtual tour for my space.");
  
  const orbActions = [
    { 
      name: "Instagram", 
      icon: <FaInstagram />, 
      path: "https://www.instagram.com/wonder360tours/", 
      newTab: true,
      type: "link"
    },
    { 
      name: "WhatsApp", 
      icon: <FaWhatsapp style={{color: '#25D366'}}/>, 
      path: `https://wa.me/918007671817?text=${whatsappMessage}`, 
      newTab: true,
      type: "link"
    },
    { 
      name: "Call", 
      icon: <FaPhone />, 
      path: "tel:+918007671817", 
      newTab: false,
      type: "link"
    },
    { 
      name: "Email", 
      icon: <FaEnvelope />, 
      path: "#", 
      newTab: false,
      type: "modal" 
    },
  ];

  return (
    <>
      <nav className="navbar">
        <motion.div
          className="logo-wrap"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link href="/" className="brand-link">
            <img src="/logo3.png" alt="Wonder 360 Tours" className="logo-img" />
            <span className="tagline-text">Transforming Spaces into Stories</span>
          </Link>
        </motion.div>

        <ul className="nav-links">
          {navItems.map((item, i) => (
            <li key={i} className={pathname === item.path ? "active" : ""}>
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>

        <motion.div className="nav-actions">
          <div className={`search-box ${searchOpen ? "open" : ""}`}>
            <input
              type="text"
              placeholder="Search..."
              autoFocus={searchOpen}
              onBlur={(e) => {
                if (!e.target.value) setSearchOpen(false);
              }}
            />
            <button className="search-btn" onClick={() => setSearchOpen(!searchOpen)}>
              ⌕
            </button>
          </div>

          <motion.button
            className="nav-orb desktop-orb"
            onClick={() => setMenuOpen(!menuOpen)}
            whileHover={{ rotate: menuOpen ? -90 : 180, scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
          />

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
              initial={{ scale: 0.5, opacity: 0, rotate: -90 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.5, opacity: 0, rotate: 90 }}
              transition={{ type: "spring", damping: 15, stiffness: 100 }}
              onClick={(e) => e.stopPropagation()}
            >
              {orbActions.map((action, i) => (
                <motion.a 
                  key={i} 
                  href={action.path}
                  target={action.newTab ? "_blank" : "_self"}
                  rel={action.newTab ? "noopener noreferrer" : undefined}
                  className="orb-item-link"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ 
                    scale: 1.25, 
                    boxShadow: "0 0 25px rgba(212,175,55,0.6)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    if (action.type === "modal") {
                      e.preventDefault();
                      setModalOpen(true);
                      setMenuOpen(false);
                    } else if (action.path.startsWith('mailto:') || action.path.startsWith('tel:')) {
                      setMenuOpen(false); 
                    } else {
                      setTimeout(() => setMenuOpen(false), 200);
                    }
                  }}
                >
                  <span className="orb-icon-span">{action.icon}</span>
                  <p className="orb-label-text">{action.name}</p>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= QUICK INQUIRY MODAL ================= */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div 
            className="contact-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalOpen(false)}
          >
            <motion.div 
              className="contact-modal"
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-modal" onClick={() => setModalOpen(false)}>
                <FaTimes />
              </button>
              
              <h3>Quick Inquiry</h3>
              <p>Tell us about your space!</p>

              {/* Connected ref and onSubmit handler */}
              <form ref={formRef} onSubmit={sendEmail}>
                <input type="text" name="user_name" placeholder="Your Name" required />
                <input type="email" name="user_email" placeholder="Email Address" required />
                <textarea name="message" placeholder="Tell us about your project..." rows={4} required />
                
                {/* Submit button with loading state */}
                <button type="submit" className="submit-btn" disabled={isSending}>
                  {isSending ? "Sending..." : "Send Message"}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
              transition={{ type: "tween", duration: 0.4 }}
            >
              <motion.button
                className="nav-orb mobile-orb"
                onClick={() => setMenuOpen(!menuOpen)}
                whileHover={{ rotate: 180, scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
              />

              {navItems.map((item, i) => (
                <Link
                  key={i}
                  href={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={pathname === item.path ? "active mobile-link" : "mobile-link"}
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