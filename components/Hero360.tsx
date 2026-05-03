"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero360() {
  const [loaded, setLoaded] = useState(false);

  // fallback in case mobile doesn't trigger onLoad
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "calc(100vh - 70px)", // desktop default
        marginTop: "70px",
        overflow: "hidden",
      }}
    >
      {/* MOBILE HEIGHT FIX */}
      <style>
        {`
          @media (max-width: 768px) {
            .hero360-container {
              height: 100dvh !important;
            }
          }
        `}
      </style>

      {/* LOADER */}
      {!loaded && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            zIndex: 2,
          }}
        >
          Loading 360° Experience...
        </div>
      )}

      {/* IFRAME */}
      <iframe
        src="https://kuula.co/share/5H7Z7?logo=0&info=0&fs=1&vr=1&sd=0&thumbs=0&autorotate=1"
        width="100%"
        height="100%"
        className="hero360-container"
        style={{
          border: "none",
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.8s ease",
        }}
        onLoad={() => setLoaded(true)}
        allow="xr-spatial-tracking; gyroscope; accelerometer; fullscreen"
        allowFullScreen
      />

      {/* GRADIENT */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "40%",
          height: "100%",
          background:
            "linear-gradient(to left, rgba(0,0,0,0.5), transparent)",
        }}
      />

      {/* TEXT */}
      {loaded && (
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            position: "absolute",
            top: "50%",
            right: "6%",
            transform: "translateY(-50%)",
            color: "#fff",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 700,
              margin: 0,
              whiteSpace: "nowrap",
              textShadow: "0 4px 20px rgba(0,0,0,0.6)",
              letterSpacing: "-0.5px",
            }}
          >
            Wonder 360 Tours
          </h1>

          <p
            style={{
              marginTop: "10px",
              fontSize: "1.1rem",
              opacity: 0.9,
              textShadow: "0 2px 10px rgba(0,0,0,0.5)",
            }}
          >
            Transforming Spaces into Stories
          </p>
        </motion.div>
      )}
    </div>
  );
}