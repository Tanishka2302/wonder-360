"use client";

import { useState, useRef } from "react";

type Item = {
  title: string;
  images: string[];
};

const data: Item[] = [
  {
    title: "Real Estate",
    images: ["/img1-1.jpg", "/img1-2.jpg", "/img1-3.jpg"],
  },
  {
    title: "Hotels",
    images: ["/hotel1.jpg", "/hotel2.jpg", "/hotel3.jpg"],
  },
  {
    title: "Showrooms",
    images: ["/showroom1.jpg", "/showroom2.jpg", "/showroom3.jpg"],
  },
];

export default function InteractiveShowcase() {
  const [active, setActive] = useState<number | null>(null);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const [imgIndex, setImgIndex] = useState(0);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const hideTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const start = (i: number, e: React.MouseEvent<HTMLDivElement>) => {
    if (active === i) return;

    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    if (intervalRef.current) clearInterval(intervalRef.current);

    const bounds = e.currentTarget.getBoundingClientRect();
    setRect(bounds);
    setActive(i);
    setImgIndex(0);

    intervalRef.current = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % data[i].images.length);
    }, 1200);
  };

  const stop = () => {
    // 🔥 delay hide (prevents instant disappear)
    hideTimeout.current = setTimeout(() => {
      setActive(null);
      if (intervalRef.current) clearInterval(intervalRef.current);
    }, 200);
  };

  return (
    <section className="interactive">
      <h2>Explore Spaces</h2>

      <div className={`card-grid ${active !== null ? "blurred" : ""}`}>
        {data.map((item, i) => (
          <div
            key={i}
            className="hover-card"
            onMouseEnter={(e) => start(i, e)}
            onMouseLeave={stop}
          >
            <img src={item.images[0]} />
            <div className="overlay">{item.title}</div>
          </div>
        ))}
      </div>

      {active !== null && rect && (
        <div
          className="projection"
          style={{
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height,
          }}
        >
          <img
            src={data[active].images[imgIndex]}
            className="proj-img"
          />
        </div>
      )}
    </section>
  );
}