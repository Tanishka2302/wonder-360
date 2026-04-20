"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";


import Feedback from "./Feedback"; // you already have design
import Insights from "./Insights"; // we create below

import "./css/scope.css";

export default function ScopeSection() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % 2);
  const prev = () => setIndex((i) => (i - 1 + 2) % 2);

  const layers = [
    
    <Feedback key="feedback" />,
    <Insights key="insights" />,
  ];

  return (
    <section className="scope">

      <div className="scope-container">

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="scope-layer"
            initial={{ opacity: 0, scale: 0.85, z: 200 }}
            animate={{ opacity: 1, scale: 1, z: 0 }}
            exit={{ opacity: 0, scale: 0.8, z: -300 }}
            transition={{ duration: 0.7 }}
          >
            {layers[index]}
          </motion.div>
        </AnimatePresence>

        {/* CONTROLS */}
        <div className="scope-controls">
          <button onClick={prev}>←</button>
          <button onClick={next}>→</button>
        </div>

      </div>
    </section>
  );
}