"use client";

import { useEffect, useRef } from "react";
import "./css/about.css";
import { useRouter } from "next/navigation";

export default function About() {
  const ref = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.classList.add("show");
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(ref.current);
  }, []);

  // 🔥 3D mouse movement (premium effect)
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!imgRef.current) return;

    const rect = imgRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y - rect.height / 2) / 20;
    const rotateY = (x - rect.width / 2) / 20;

    imgRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  };

  const resetTilt = () => {
    if (!imgRef.current) return;
    imgRef.current.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <section className="about" id="about" ref={ref}>

      <div className="about-top">
        <p className="mini">ABOUT WONDER 360 TOURS</p>

        <h1>
          Crafting Digital Journeys <span>With</span><br />
          <em>Precision & Style</em>
        </h1>

        {/* 🔥 CONTACT REDIRECT */}
        <button
          className="cta"
          onClick={() => router.push("/contact")}
        >
          BOOK US NOW ↗
        </button>
      </div>

      <div className="about-content">

        {/* IMAGE */}
        <div
          className="about-img"
          ref={imgRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={resetTilt}
        >
          <img src="/about.jpg" alt="About" />

          {/* 🔥 ABOUT SECTION REDIRECT */}
          <button
            className="explore"
            onClick={() => router.push("/about#about-hero")}
          >
            Explore ↗
          </button>
        </div>

        {/* TEXT */}
        <div className="about-text">
          <h3>ABOUT Wonder 360 Tours</h3>
          <p>
            We create immersive 360° virtual tours that bring spaces to life.
            From real estate to events, we help brands showcase environments digitally.
          </p>
        </div>

      </div>

    </section>
  );
}