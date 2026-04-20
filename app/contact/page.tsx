"use client";

import { motion } from "framer-motion";
import "./contact.css";

export default function ContactPage() {
  return (
    <main className="contact-page">

      {/* 🔥 HERO */}
      <section className="contact-hero">
        <h1>Let’s Connect</h1>
        <p>We build immersive experiences. You bring the vision.</p>
      </section>

      {/* 🔥 GRID */}
      <section className="contact-grid">

        {/* LEFT SIDE (VISUAL) */}
        <div className="contact-visual">
          <div className="visual-glow" />
          <div className="visual-content">
            <h2>Start Your Project</h2>
            <p>
              Transform your space into an immersive digital experience with us.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">

          {/* INFO */}
          <div className="contact-info">
            <h3>Contact</h3>
            <p>📞 +91 8007671817</p>
            <p>📞 +91 9767910400</p>
            <p>📧 wonderdigital360@gmail.com</p>
            <p>📍 Pune, India</p>
          </div>

          {/* FORM */}
          <motion.form
            className="contact-form"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message"></textarea>

            <button>Send Message</button>
          </motion.form>

        </div>

      </section>
    <footer className="footer-min">
    © 2026 Wonder 360 Tours — All Rights Reserved
    </footer>
    </main>
  );
}