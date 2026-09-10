import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  return (
    <main className="app">
      <div className="glow" />

      <section className="hero">
        <div className="logo">ZONE<span>RUSH</span></div>

        <div className="live">
          <span /> LIVE COMMUNITY
        </div>

        <h1>
          Find your zone
          <br />
          <span>Own the rush</span>
        </h1>

        <p>
          Enter the ultimate esports community.
          <br />
          Compete • Earn • Connect
        </p>

        <button>ENTER ZONERUSH</button>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
