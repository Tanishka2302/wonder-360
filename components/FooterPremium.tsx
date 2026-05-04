"use client";

import { motion } from "framer-motion";
import "./css/footer.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";

import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";

export default function FooterPremium() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNewsletter = () => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    setLoading(true);

    // ✅ Matches the keys in your EmailJS HTML Template
    const templateParams = {
      source_type: "NEWSLETTER SIGNUP",
      from_name: "Newsletter Subscriber",
      from_email: email,
      subject: "New Subscription Request",
      message: `User with email ${email} has requested to join the Wonder 360 Tours newsletter mailing list.`,
    };

    emailjs
      .send(
        "service_gag77qr",        // ✅ your service ID
        "template_4xaes7l",       // ✅ your existing template ID
        templateParams,
        "IujdyPXYqZzc_Y00Q"       // ✅ your public key
      )
      .then(() => {
        alert("Subscribed successfully!");
        setEmail("");
        setLoading(false);
      })
      .catch((err) => {
        console.error("Newsletter Error:", err);
        alert("Failed to subscribe. Please try again.");
        setLoading(false);
      });
  };

  return (
    <footer className="footer">
      <div className="footer-ring" />

      <div className="footer-container">
        {/* LEFT */}
        <motion.div
          className="footer-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h3>About Us</h3>
          <p>Terms And Condition</p>
          <p>Privacy Policy</p>
        </motion.div>

        {/* CENTER */}
        <motion.div
          className="footer-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <h2>Newsletter</h2>
          <p>SIGN UP FOR ALL THE LATEST NEWS AND OFFERS</p>

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button onClick={handleNewsletter} disabled={loading}>
            {loading ? "Subscribing..." : "Submit"}
          </button>

          <div className="footer-logo">Wonder 360 Tours</div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className="footer-right"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p>RECENT POST</p>
          <p>CONTACT US</p>
        </motion.div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 WONDER 360 TOURS</p>
      </div>

      <div className="footer-strip">
        <div className="footer-strip-left">
          <p>© 2026 WONDER 360 TOURS</p>
        </div>

        <div className="footer-strip-right">
          <a href="#" className="social">
            <FaFacebookF size={16} />
          </a>
          <a href="#" className="social">
            <FaInstagram size={16} />
          </a>
          <a href="#" className="social">
            <FaYoutube size={16} />
          </a>
          <a href="#" className="social">
            <FiGlobe size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}