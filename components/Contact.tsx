"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import "./css/contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 🔥 SIMPLE VALIDATION
    if (!form.name || !form.email || !form.subject || !form.message) {
      alert("Please fill all fields");
      return;
    }

    // ✅ SHOW SUCCESS POPUP
    setShowPopup(true);

    // reset form
    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    // auto hide popup
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <section className="contact">

      <div className="contact-bg" />

      <div className="contact-container">

        <motion.h2
          initial={{ opacity: 0, letterSpacing: "15px" }}
          whileInView={{ opacity: 1, letterSpacing: "2px" }}
          transition={{ duration: 0.8 }}
        >
          Get In Touch
        </motion.h2>

        <p className="contact-sub">
          Contact us for a great Wonder 360 Tours session & beautiful captured moments
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>

          <div className="row">
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              value={form.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail address"
              value={form.email}
              onChange={handleChange}
            />
          </div>

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
            rows={6}
            value={form.message}
            onChange={handleChange}
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="contact-btn"
          >
            Submit Now →
          </motion.button>

        </form>
      </div>

      {/* 🔥 SUCCESS POPUP */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="contact-popup"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 80 }}
            transition={{ duration: 0.4 }}
          >
            ✅ Message sent successfully!
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}