"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RoboGuide from "./RoboGuide";
import "./team.css";

const team = [
  {
    name: "Balkrishna Pawar",
    role: "Founder & Managing Director",
    img: "/team1.png",
    awards: [
      "🏆 Excellence in Innovation",
      "🏆 Best Virtual Experience",
      "🏆 Industry Leader Recognition",
    ],
  },
  {
    name: "Manjushree Nimbalkar",
    role: "Head of Sales & Marketing",
    img: "/team2.jpeg",
  },
  {
    name: "Vikram Zirpe",
    role: "Director of Operations",
    img: "/team3.jpeg",
  },
  {
    name: "Jayanti Zapate",
    role: "Head of Digital Strategy",
    img: "/team4.jpeg",
  },
];

export default function TeamSection() {
  const [active, setActive] = useState(0);
  const [selected, setSelected] = useState<any>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % team.length);
    }, 2500);

    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="team-section">

      <h2>Meet Our Team</h2>

      <div className="team-container">

        {/* 🤖 ROBOT */}
        <RoboGuide index={active} />

        {/* 👤 TEAM CARDS */}
        {team.map((member, i) => (
          <motion.div
            key={i}
            className={`team-card ${active === i ? "active" : ""}`}
            initial={{ opacity: 0, y: 80 }}
            animate={{
              opacity: active === i ? 1 : 0.4,
              scale: active === i ? 1.05 : 0.9,
            }}
            transition={{ duration: 0.5 }}
            onClick={() => setSelected(member)}   // 🔥 CLICK ENABLED
          >
            <img src={member.img} alt={member.name} />

            <div className="info">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </motion.div>
        ))}

      </div>

      {/* 🔥 MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="team-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="team-modal"
              initial={{ scale: 0.7, opacity: 0, y: 80 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* LEFT */}
              <div className="modal-left">
                <img src={selected.img} alt={selected.name} />
              </div>

              {/* RIGHT */}
              <div className="modal-right">
  <h2>{selected.name}</h2>
  <h4>{selected.role}</h4>

  <p>
    At Wonder 360 Tours, we create immersive virtual experiences
    that transform spaces into engaging digital journeys.
    Our leadership ensures innovation, quality, and results.
  </p>

  <div className="modal-socials">
    <span>FB</span>
    <span>IG</span>
    <span>YT</span>
    <span>LN</span>
  </div>

  {/* 🔥 SHOW ONLY IF AWARDS EXIST */}
  {selected.awards && (
    <>
      <h3 className="awards-title">Awards</h3>

      <ul className="awards-list">
        {selected.awards.map((award: string, i: number) => (
          <li key={i}>{award}</li>
        ))}
      </ul>
    </>
  )}
</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}