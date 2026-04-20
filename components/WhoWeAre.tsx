"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation"; // 🔥 ADD THIS
import "./css/who.css";

export default function WhoWeAre() {
  const router = useRouter(); // 🔥 ADD THIS

  return (
    <section className="who">

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, letterSpacing: "15px" }}
        whileInView={{ opacity: 1, letterSpacing: "2px" }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Who We Are
      </motion.h2>

      <div className="who-container">

        {/* TEXT */}
        <motion.div
          className="who-text"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p>
            At Wonder 360° Tours, we are digital innovators shaping immersive experiences.
          </p>

          <p>
            With over <span>1 billion interactions</span>, we redefine how people explore spaces.
          </p>

          <p>
            We don’t just show places — we create journeys that engage, inspire, and convert.
          </p>

          {/* 🔥 BUTTON FIXED */}
          <motion.button
            className="who-btn"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => router.push("/about#about-hero")}
          >
            Click For More →
          </motion.button>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          className="who-image"
          initial={{ opacity: 0, x: 60, scale: 0.92 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src="/whoweare.jpeg" alt="who we are" />
        </motion.div>

      </div>
    </section>
  );
}