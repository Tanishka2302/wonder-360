"use client";

import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import "./portfolio.css";
import FooterPremium from "@/components/FooterPremium";

const projects = [
  {
    title: "Hotels & Resorts",
    img: "/p1.jpg",
  },
  {
    title: "Schools & Colleges",
    img: "/p2.png",
  },
  {
    title: "Real Estate Tours",
    img: "/p3.jpg",
  },
];

export default function PortfolioPage() {
  return (
    <main className="portfolio-page">

      {/* 🔥 REUSABLE HERO */}
      <HeroSection title="Portfolio" />

      {/* 🔥 GRID */}
      <section className="portfolio-content">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Work
        </motion.h2>

        <div className="portfolio-grid">

          {projects.map((item, i) => (
            <motion.div
              key={i}
              className="portfolio-card"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <img src={item.img} alt={item.title} />

              <div className="card-overlay">
                <h3>{item.title}</h3>
              </div>

              <div className="card-glow" />
            </motion.div>
          ))}

        </div>
      </section>

      {/* 🔥 FOOTER */}
      <FooterPremium />

    </main>
  );
}