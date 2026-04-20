"use client";

import { motion } from "framer-motion";
import "./css/footer.css";

import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";

export default function FooterPremium() {
  return (
    <footer className="footer">

      {/* 🔥 GOLD RING */}
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

          <input placeholder="Email address" />
          <button>Submit</button>

          <div className="footer-logo">
            Wonder 360 Tours
          </div>
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

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2025 WONDER 360 TOURS</p>
      </div>
      {/* 🔥 BOTTOM STRIP */}
<div className="footer-strip">

  <div className="footer-strip-left">
    <p>
      Develop By <span>Tanishka Pandharpatte</span>
    </p>
    <p>
      © 2025 WONDER 360 TOURS
    </p>
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