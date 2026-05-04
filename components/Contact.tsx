"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import "./css/contact.css";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Extra safety measure
    
    console.log("1. BUTTON CLICKED (React Controlled)!"); 
    console.log("2. Current Form Data:", form);

    if (!form.name || !form.email || !form.subject || !form.message) {
      console.warn("3. Validation Failed: A field is empty.");
      alert("Please fill all fields");
      return;
    }

    console.log("3. Validation Passed. Sending to EmailJS...");
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
        console.log("4. SUCCESS ✅ Email sent!", res.status, res.text);

        setShowPopup(true);
        setLoading(false);

        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        setTimeout(() => setShowPopup(false), 3000);
      })
      .catch((err) => {
        console.error("4. ERROR ❌ Email failed to send:", err);
        setLoading(false);
        alert("Failed to send message. Check console for details.");
      });
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

        {/* 🔥 FIX 1: Removed 'onSubmit' completely so the form can't refresh the page */}
        <div className="contact-form">
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

          {/* 🔥 FIX 2: Changed to type="button" and attached onClick directly here */}
          <button 
            type="button" 
            className="contact-btn"
            disabled={loading}
            onClick={handleSubmit}
          >
            {loading ? "Sending..." : "Submit Now →"}
          </button>
        </div>
      </div>

      {/* SUCCESS POPUP */}
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