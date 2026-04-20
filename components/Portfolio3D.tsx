"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation"; // 🔥 Import the router
import "./css/portfolio.css";

export default function Portfolio3D() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);
  const router = useRouter(); // 🔥 Initialize router

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
  }, []);

  // 🔥 3D HOVER LOGIC
  const handleMove = (
    e: React.MouseEvent<HTMLDivElement>,
    card: HTMLDivElement
  ) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y - rect.height / 2) / 20;
    const rotateY = (x - rect.width / 2) / 20;

    card.style.transform = `
      rotateX(${rotateX}deg) 
      rotateY(${rotateY}deg) 
      scale(1.05)
    `;
  };

  const reset = (card: HTMLDivElement) => {
    card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
  };

  const data = [
    { img: "/p1.jpg", title: "Hotels & Resorts" },
    { img: "/p2.png", title: "Schools & Colleges" },
    { img: "/p3.jpg", title: "Real Estate Tours" },
  ];

  return (
    <section className={`portfolio ${show ? "show" : ""}`} ref={sectionRef}>
      <p className="mini">OUR PORTFOLIO</p>

      <h2>
        Wonder 360 Tours <span>All of Your</span>
        <br />
        beautiful experience
      </h2>

      <div className="portfolio-grid">
        {data.map((item, i) => (
          <div
            key={i}
            className="p-card"
            // 🔥 ADDED ONCLICK REDIRECT
            onClick={() => router.push("/portfolio")} 
            onMouseMove={(e) => handleMove(e, e.currentTarget)}
            onMouseLeave={(e) => reset(e.currentTarget)}
            style={{ 
                transitionDelay: `${i * 0.2}s`,
                cursor: "pointer" // Make sure user knows it's clickable
            }}
          >
            <img src={item.img} alt={item.title} />

            <div className="p-overlay">
              <h3>{item.title}</h3>
            </div>

            <div className="p-glow" />
          </div>
        ))}
      </div>
    </section>
  );
}