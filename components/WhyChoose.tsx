"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";
import "./css/why.css";

/* 🔥 COUNTER COMPONENT */
function Counter({ value }: { value: number }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          const controls = animate(0, value, {
            duration: 1.6,
            onUpdate: (v) => setDisplay(Math.floor(v)),
          });

          return () => controls.stop();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
  }, [value]);

  return <span ref={ref}>{display}+</span>;
}

export default function WhyChoose() {
  const points = [
    "Cutting-Edge Technology – Crystal-clear 360° tours",
    "Professional Expertise – Polished & engaging experiences",
    "Business Growth Focused – Designed for conversions",
    "Affordable & Scalable – Solutions for every business",
  ];

  /* 🔥 3D MOTION */
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);
  const scale = useTransform(x, [-100, 100], [1.02, 1.05]);

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
    <section className="why">

      {/* LEFT CONTENT */}
      <div className="why-content">

        <motion.h2
          initial={{ opacity: 0, letterSpacing: "15px" }}
          whileInView={{ opacity: 1, letterSpacing: "2px" }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Why Choose Wonder 360°
        </motion.h2>

        <div className="why-list">
          {points.map((item, i) => (
            <motion.div
              key={i}
              className="why-item"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <span>✔</span>
              <p>{item}</p>
            </motion.div>
          ))}
        </div>

      </div>

      {/* CENTER IMAGE */}
      <motion.div
        ref={ref}
        className="why-image"
        style={{ rotateX, rotateY, scale }}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img src="/why.jpg" alt="why choose us" />
      </motion.div>

      {/* 🔥 RIGHT STATS */}
      <div className="why-stats">

        <motion.div
          className="stat"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3><Counter value={55} /></h3>
          <p>Premium Tours Delivered</p>
        </motion.div>

        <motion.div
          className="stat"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3><Counter value={35} /></h3>
          <p>Higher Engagement</p>
        </motion.div>

        <motion.div
          className="stat"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3>100%</h3>
          <p>VR Ready Equipment</p>
        </motion.div>

      </div>

    </section>
  );
}