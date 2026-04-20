"use client";

import { motion } from "framer-motion";
import "./css/vision.css";

export default function VisionMission() {
  return (
    <section className="vision">

      {/* 🔥 TITLE */}
      <motion.h2
        initial={{ opacity: 0, letterSpacing: "20px" }}
        whileInView={{ opacity: 1, letterSpacing: "2px" }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Vision & Mission
      </motion.h2>

      <div className="vision-container">

        {/* 🔥 MISSION CARD */}
        <motion.div
          className="vision-card"
          initial={{ opacity: 0, y: 80, rotateX: -10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>Our Mission</h3>
          <p>
            To empower businesses with immersive digital experiences that build trust,
            improve customer engagement, and accelerate decision-making.
          </p>
        </motion.div>

        {/* 🔥 VISION CARD */}
        <motion.div
          className="vision-card"
          initial={{ opacity: 0, y: 80, rotateX: -10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3>Our Vision</h3>
          <p>
            To become a leading 360° virtual tour provider in India and beyond,
            known for innovation, quality, and customer satisfaction.
          </p>

          <p>
            At Wonder 360° Tours, we don’t just create visuals — we create experiences
            that inspire confidence, build trust, and drive results.
          </p>
        </motion.div>

      </div>
    </section>
  );
}