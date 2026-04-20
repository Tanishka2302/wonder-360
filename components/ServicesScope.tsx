"use client";

import "./css/services-scope.css";

const services = [
  { title: "Real Estate", img: "/realestate.jpg" },
  { title: "Hotels & Resorts", img: "/hotel4.jpg" },
  { title: "360° Virtual Tours", img: "/360.jpg" },
  { title: "Education", img: "/education1.jpg" },
  { title: "Healthcare", img: "/health.jpg" },
  { title: "Showrooms", img: "/showroom.jpg" },
];

// 🔁 duplicate for infinite effect
const loopServices = [...services, ...services];

export default function ServicesScope() {
  return (
    <section className="services-scope">

      <h2>Our Services</h2>

      <div className="scope-outer">
        <div className="scope-track">

          {loopServices.map((service, i) => (
            <div key={i} className="service-card">
              <img src={service.img} alt="" />

              <div className="overlay">
                <span>{service.title}</span>
              </div>
            </div>
          ))}

        </div>
      </div>

    </section>
  );
}