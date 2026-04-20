"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation"; // 🔥 ADD THIS
import "./css/whatwedo.css";

export default function WhatWeDo() {
  const router = useRouter(); // 🔥 ADD THIS

  const items = [
    "360° Virtual Tours – Interactive walkthroughs",
    "Real Estate Solutions – Convert more leads",
    "Hospitality & Retail – Showcase spaces beautifully",
    "Google Maps Integration – Boost visibility",
    "Custom Branding – Personalized experiences",
  ];

  // 🔥 3D mouse motion
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [6, -6]);
  const rotateY = useTransform(x, [-100, 100], [-6, 6]);

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    x.set(e.clientX - rect.left - centerX);
    y.set(e.clientY - rect.top - centerY);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="what">

      {/* LEFT IMAGE */}
      <motion.div
        ref={ref}
        className="what-image"
        style={{ rotateX, rotateY }}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img src="/whatwedo.jpg" alt="virtual tour" />
      </motion.div>

      {/* RIGHT CONTENT */}
      <div className="what-content">

        <motion.h2
          initial={{ opacity: 0, letterSpacing: "15px" }}
          whileInView={{ opacity: 1, letterSpacing: "2px" }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          What We Do
        </motion.h2>

        <motion.p
          className="what-desc"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          360° Virtual Tours that transform how users experience your space.
        </motion.p>

        <div className="what-list">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="what-item"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <span>✔</span>
              <p>{item}</p>
            </motion.div>
          ))}
        </div>

        {/* 🔥 BUTTON FIXED */}
        <motion.button
          className="what-btn"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => router.push("/services")}
        >
          Click Here →
        </motion.button>

      </div>
    </section>
  );
}