"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  // 1. Form State
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  // 2. Handle Input Changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 3. Handle Submit to EmailJS
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); 
    
    console.log("1. ContactPage BUTTON CLICKED!"); 
    console.log("2. Data:", form);

    if (!form.name || !form.email || !form.subject || !form.message) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_gag77qr",        // ✅ service ID
        "template_4xaes7l",       // ✅ template ID
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        "IujdyPXYqZzc_Y00Q"       // ✅ public key
      )
      .then((res) => {
        console.log("SUCCESS ✅", res);
        setShowPopup(true);
        setLoading(false);
        setForm({ name: "", email: "", subject: "", message: "" }); // Reset form
        setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3s
      })
      .catch((err) => {
        console.error("ERROR ❌", err);
        setLoading(false);
        alert("Failed to send message. Check console.");
      });
  };

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
          {/* Note: We removed onSubmit and let the button handle the click safely */}
          <motion.form
            className="contact-form"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <input 
              type="text" 
              name="name"
              placeholder="Full Name" 
              value={form.name}
              onChange={handleChange}
            />
            <input 
              type="email" 
              name="email"
              placeholder="Email Address" 
              value={form.email}
              onChange={handleChange}
            />
            <input 
              type="text" 
              name="subject"
              placeholder="Subject" 
              value={form.subject}
              onChange={handleChange}
            />
            <textarea 
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
            ></textarea>

            {/* 🔥 Safe Button Trigger */}
            <button 
              type="button" 
              disabled={loading}
              onClick={handleSubmit}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>

        </div>
      </section>

      {/* SUCCESS POPUP */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="contact-popup"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4 }}
            style={{
              position: "fixed",
              bottom: "40px",
              right: "40px",
              background: "#d4af37",
              color: "#000",
              padding: "15px 25px",
              borderRadius: "8px",
              fontWeight: "bold",
              zIndex: 1000,
              boxShadow: "0 10px 30px rgba(212,175,55,0.3)"
            }}
          >
            ✅ Message sent successfully!
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="footer-min">
        © 2026 Wonder 360 Tours — All Rights Reserved
      </footer>
    </main>
  );
}