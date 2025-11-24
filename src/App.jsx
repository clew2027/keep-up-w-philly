import React from "react";
import "./index.css";

export default function App() {
  return (
    <div className="page">

      {/* HERO SECTION */}
      <section className="light hero">
        <h1>Inbox of the City</h1>
        <p>Keep up with what’s hot in Philly with simple email alerts.</p>
        <button 
          className="cta"
          onClick={() => {
            document.getElementById("section1")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          JOIN US
        </button>
      </section>

      {/* SECTION 1 */}
      <section className="dark section" id="section1">
        <div className="two-col">
          <div className="col-left">
            <h2>Let Philly email you when something cool is happening.</h2>
            <p>
              Inbox of the City turns hot posts from r/Philadelphia into simple email alerts...
            </p>
          </div>

          <div className="col-right">
            {/* Right column optional image */}
            {/* <img src="/reddit-screenshot.png" /> */}
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="light section">
        <div className="two-col">
          <div className="col-left">
            <h2>Have you ever felt like everyone else just “knows what’s going on”?</h2>
            <p>
              Living in Philadelphia means there’s always something happening…
            </p>
          </div>

          <div className="col-right"></div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="dark section">
        <div className="two-col">
          <div className="col-left">
            <h2>How it works</h2>
            <p>
              Inbox of the City turns hot posts from r/Philadelphia into simple email alerts...
            </p>
          </div>
          <div className="col-right">
            {/* Avatar or image */}
            {/* <img src="/avatar.png" className="avatar-big" /> */}
          </div>
        </div>
      </section>
      {/* FOOTER */}
      <section className="light footer">
        <h2>Let the city reach out to you</h2>
        <p>
          Living in Philadelphia means there's always something happening—but you shouldn’t
          have to chase it. Let the city come to you.
        </p>
      </section>

    </div>
  );
}
