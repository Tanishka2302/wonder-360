import "./css/showcase.css";

export default function Showcase() {
  return (
    <section className="showcase">

      <h2>Our Expertise</h2>

      <div className="auto-scroll">

        <div className="scroll-track">

          {/* ORIGINAL */}
          <div className="h-card">
            <img src="/img1.jpg" />
            <p>Real Estate</p>
          </div>

          <div className="h-card">
            <img src="/hotel.jpg" />
            <p>Hotels</p>
          </div>

          <div className="h-card">
            <img src="/showroom.jpg" />
            <p>Showrooms</p>
          </div>

          <div className="h-card">
            <img src="/events.jpg" />
            <p>Events</p>
          </div>

          <div className="h-card">
            <img src="/education.jpg" />
            <p>Education</p>
          </div>

          <div className="h-card">
            <img src="/mall.jpg" />
            <p>Malls</p>
          </div>

          {/* DUPLICATE (for infinite loop) */}
          <div className="h-card">
            <img src="/img1.jpg" />
            <p>Real Estate</p>
          </div>

          <div className="h-card">
            <img src="/hotel.jpg" />
            <p>Hotels</p>
          </div>

          <div className="h-card">
            <img src="/showroom.jpg" />
            <p>Showrooms</p>
          </div>

          <div className="h-card">
            <img src="/events.jpg" />
            <p>Events</p>
          </div>

          <div className="h-card">
            <img src="/education.jpg" />
            <p>Education</p>
          </div>

          <div className="h-card">
            <img src="/mall.jpg" />
            <p>Malls</p>
          </div>

        </div>

      </div>

    </section>
  );
}