"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import "./css/feedback.css";

export default function Feedback() {
  const feedbacks = [
    {
      text: "Wonder 360 Tours gave us an incredible way to showcase our property online. The virtual tour was smooth, clear, and highly interactive.",
      name: "Mahesh Dixit",
      location: "Jaipur",
      img: "/user1.jpg",
    },
    {
      text: "I used Wonder 360 Tours for my hotel business, and the results were beyond expectations. Bookings increased almost immediately.",
      name: "Ranjan Naidu",
      location: "Bengaluru",
      img: "/user2.jpg",
    },
    {
      text: "Professional, reliable, and innovative. Their team delivered a virtual tour that exceeded our expectations.",
      name: "Mahesh Mahajan",
      location: "Pune, Maharashtra",
      img: "/user3.jpg",
    },
    {
      text: "The technology and attention to detail are impressive. It works perfectly across all devices and is visually stunning.",
      name: "Dr. Sandeep Patil",
      location: "Mumbai, Maharashtra",
      img: "/user4.jpg",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % feedbacks.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + feedbacks.length) % feedbacks.length);
  };

  return (
    <div className="feedback">
      <div className="feedback-wrapper">

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="feedback-card"
            initial={{ opacity: 0, x: 80, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -80, scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            {/* ⭐ STARS */}
            <div className="feedback-stars">★★★★★</div>

            {/* 💬 TEXT */}
            <p className="feedback-quote">
              {feedbacks[index].text}
            </p>

            {/* LINE */}
            <div className="feedback-line" />

            {/* USER */}
            <div className="feedback-user">
              <img src={feedbacks[index].img} alt="user" />
              <div>
                <h4>{feedbacks[index].name}</h4>
                <p>{feedbacks[index].location}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* 🔥 ARROWS */}
        <div className="feedback-arrows">
          <div className="arrow" onClick={prev}>←</div>
          <div className="arrow" onClick={next}>→</div>
        </div>

      </div>
    </div>
  );
}