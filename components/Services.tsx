"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation"; // ✅ ADD THIS
import "./css/services.css";

export default function Services() {
  const router = useRouter(); // ✅ ADD THIS

  const services = [
    "Real Estate Tours – Sell faster with immersive walkthroughs",
    "Hotels & Hospitality – Increase bookings with virtual views",
    "Restaurants & Cafes – Attract customers with ambiance preview",
    "Retail Showrooms – Showcase products in 360°",
    "Tailored Experiences – Custom virtual tours for your brand",
  ];

  return (
    <section className="services">

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Explore What We Offer
      </motion.h2>

      <div className="services-container">

        {/* 🔥 LEFT IMAGE */}
        <motion.div
          className="services-image"
          initial={{ opacity: 0, x: -80, rotate: -6 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src="/img2-1.jpg" alt="services" />
        </motion.div>

        {/* 🔥 RIGHT CONTENT */}
        <div className="services-content">
          {services.map((item, i) => (
            <motion.div
              key={i}
              className="service-item"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 }}
            >
              <span>✔</span>
              <p>{item}</p>
            </motion.div>
          ))}

          {/* 🔥 BUTTON (FIXED) */}
          <motion.button
            className="premium-btn"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            onClick={() => router.push("/services")} // ✅ REDIRECT
          >
            <span>View Services →</span>
          </motion.button>
        </div>

      </div>
    </section>
  );
}