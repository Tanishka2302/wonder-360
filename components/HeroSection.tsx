"use client";

import { motion } from "framer-motion";
import "./css/hero.css";
type Props = {
  title: string;
};

export default function HeroSection({ title }: Props) {
  return (
    <section className="hero">

      {/* BG */}
      <div className="hero-bg" />

      {/* GOLD OVERLAY */}
      <div className="hero-overlay" />

      {/* TEXT */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {title}
      </motion.h1>

    </section>
  );
}