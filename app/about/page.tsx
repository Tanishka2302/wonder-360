"use client";

import { motion } from "framer-motion";
import "./about.css";
import TeamSection from "@/components/team/TeamSection";
import FooterPremium from "@/components/FooterPremium";

const faqs = [
  {
    q: "What makes Wonder 360 Tours different from others?",
    a: "We combine premium-quality visuals with business-focused strategies to boost engagement and conversions."
  },
  {
    q: "Can you create virtual tours for any type of business?",
    a: "Yes, we design tours for real estate, hotels, healthcare, education and more."
  },
  {
    q: "How long does it take to create a virtual tour?",
    a: "Typically 3–7 days depending on project size."
  },
  {
    q: "What equipment do you use?",
    a: "We use professional 360° cameras and advanced editing tools."
  },
  {
    q: "Will my tour work on mobile & VR?",
    a: "Yes, fully responsive across all devices."
  },
  {
    q: "Do you offer custom branding?",
    a: "Yes, including logos, hotspots, and CTA buttons."
  },
  {
    q: "How can it benefit my business?",
    a: "It increases engagement, trust, and conversions."
  },
  {
    q: "Are your services affordable?",
    a: "Yes, we offer flexible pricing for all business sizes."
  }
];

export default function AboutPage() {
  return (
    <main className="about-page">

      {/* 🔥 HERO */}
      <section className="about-hero" id="about-hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-glow" />

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
        >
          About Us
        </motion.h1>
      </section>

      {/* 🔥 BRAND PROMISE */}
      <section className="about-section">

        {/* TEXT */}
        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2>Unique Brand Promise</h2>

          <p>
            At Wonder 360 Tours, we redefine virtual experiences across industries
            using immersive storytelling, precision visuals, and interactive tech.
          </p>
        </motion.div>

        {/* 🔥 3D IMAGE (HOVER SWAP) */}
        <motion.div
          className="about-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <div className="image-card">
            <img src="/about1.jpg" className="img-default" />
            <img src="/about2.jpg" className="img-hover" />
            <div className="shine" />
          </div>
        </motion.div>

      </section>

      {/* 🔥 WHY CHOOSE US */}
      <section className="why-section">

  <h2>Why Choose Us</h2>

  <div className="why-grid">

    {/* 🔥 LEFT IMAGE */}
    <motion.div
      className="why-image"
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="why-img-card">
        <img src="/about.jpg" alt="" />
        <div className="img-glow" />
      </div>
    </motion.div>

    {/* 🔥 RIGHT FAQ */}
    <motion.div
      className="faq"
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      {faqs.map((item, i) => (
        <details key={i} className="faq-item">
          <summary>{item.q}</summary>
          <p>{item.a}</p>
        </details>
      ))}
    </motion.div>

  </div>

</section>

      {/* 🔥 COUNTERS */}
      <section className="counter-section">

        {[
          { num: "5+", text: "Years Experience" },
          { num: "100%", text: "Client Satisfaction" },
          { num: "55+", text: "Virtual Tours" },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="counter-card"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
          >
            <h3>{item.num}</h3>
            <p>{item.text}</p>
          </motion.div>
        ))}

      </section>

        <TeamSection />

        <FooterPremium />
    </main>
  );
}