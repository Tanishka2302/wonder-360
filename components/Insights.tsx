"use client";

import { motion } from "framer-motion";
import "./css/insights.css";

export default function Insights() {
  return (
    <div className="insights">

      <motion.p
        className="mini"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        INSIGHTS
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        The Future Business Is <br /> Immersive
      </motion.h2>

      <motion.p
        className="desc"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        With <span>Wonder 360 Tours</span>, your business stays ahead.
        360° experiences are no longer optional—they are the new standard.
        From real estate to hospitality, virtual tours are transforming industries.
      </motion.p>

    </div>
  );
}