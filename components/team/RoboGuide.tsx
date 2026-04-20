"use client";

import { motion } from "framer-motion";

export default function RoboGuide({ index }: { index: number }) {
  return (
    <motion.div
  className="robo"
  animate={{
    x: index * 300 + 120, // center over cards
    y: [0, -12, 0],
  }}
   
      transition={{
        x: { duration: 0.8 },
        y: { repeat: Infinity, duration: 2 },
      }}
    >
      <div className="robo-core" />
    </motion.div>
  );
}