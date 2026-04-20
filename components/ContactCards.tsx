"use client";

import { motion } from "framer-motion";
import "./css/contact-cards.css";

export default function ContactCards() {
  const cards = [
    {
      title: "Our Website",
      value: "www.wonder360tours.com",
      action: "Visit Now",
      link: "https://wonder360tours.com",
      icon: "🌐",
    },
    {
      title: "Book Us",
      value: "+91 8007671817\n+91 9767910400",
      action: "Call Now",
      link: "tel:+918007671817",
      icon: "📱",
    },
    {
      title: "Office Address",
      value:
        "Shantai heights, Sinhagad campus near law college, vadgaon, Bk. Pune – 411043",
      action: "View Map",
      link: "#",
      icon: "📍",
    },
    {
      title: "Instagram",
      value: "@wonder360tours",
      action: "Follow Us",
      link: "https://instagram.com",
      icon: "📸",
    },
  ];

  return (
    <section className="contact-cards">

      <motion.h2
        initial={{ opacity: 0, letterSpacing: "15px" }}
        whileInView={{ opacity: 1, letterSpacing: "2px" }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Get In Touch
      </motion.h2>

      <div className="cards-grid">
        {cards.map((card, i) => (
          <motion.a
            href={card.link}
            target="_blank"
            key={i}
            className="card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ scale: 1.05 }}

            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
              e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
            }}
          >
            <div className="card-glow" />

            <div className="icon">{card.icon}</div>

            <h3>{card.title}</h3>

            <p>{card.value}</p>

            <span>{card.action} →</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}