"use client";

import { motion } from "framer-motion";
import { FiTarget, FiCpu, FiEye, FiZap } from "react-icons/fi";
import "./about.css";
import TeamSection from "@/components/team/TeamSection";
import FooterPremium from "@/components/FooterPremium";

const faqs = [
  { q: "What makes Wonder 360 Tours different?", a: "We combine premium-quality visuals with business-focused strategies." },
  { q: "Can you create tours for any business?", a: "Yes, real estate, hotels, healthcare, education and more." },
  { q: "How long does it take?", a: "Typically 3–7 days depending on project size." },
  { q: "Will my tour work on mobile?", a: "Yes, fully responsive across all devices." }
];

const highlights = [
  { icon: <FiTarget />, title: "Precision", text: "8K high-fidelity captures." },
  { icon: <FiCpu />, title: "Tech-Driven", text: "Custom hotspots & VR ready." },
  { icon: <FiEye />, title: "Immersive", text: "Storytelling through space." },
  { icon: <FiZap />, title: "Fast", text: "Optimized for quick loading." }
];

export default function AboutPage() {
  return (
    <main className="about-page">
      
      {/* 🔥 HERO - This section will vanish on mobile */}
      <section className="about-hero hero-mobile-hide">
        <div className="hero-bg" />
        <div className="hero-glow" />
        <motion.h1 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }}
        >
          About Us
        </motion.h1>
      </section>

      {/* 🔥 PHILOSOPHY GRID */}
      <section className="about-feature-grid">
        <div className="container">
          <div className="grid-layout">
            <motion.div 
              className="about-visual-side"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="image-stack">
                <img src="/about1.jpg" alt="Work 1" className="main-img" />
                <div className="experience-badge">
                  <span>5+</span>
                  <p>Years</p>
                </div>
              </div>
            </motion.div>

            <div className="highlights-side">
              <h2 className="section-tag">Our Philosophy</h2>
              <div className="tiles-container">
                {highlights.map((item, i) => (
                  <div key={i} className="highlight-tile">
                    <div className="tile-icon">{item.icon}</div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔥 WHY CHOOSE US */}
      <section className="why-section">
        <h2>Why Choose Us</h2>
        <div className="why-grid">
          <div className="why-image">
            <img src="/about.jpg" alt="Why Choose Us" />
          </div>
          <div className="faq">
            {faqs.map((item, i) => (
              <details key={i} className="faq-item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 🔥 COUNTERS */}
      <section className="counter-section">
        {[
          { num: "5+", text: "Years Experience" },
          { num: "100%", text: "Client Satisfaction" },
          { num: "55+", text: "Virtual Tours" },
        ].map((item, i) => (
          <div key={i} className="counter-card">
            <h3>{item.num}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </section>

      <TeamSection />
      <FooterPremium />
    </main>
  );
}