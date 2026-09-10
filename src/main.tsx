import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "#FFD700",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <div>
        <h1>ZONERUSH</h1>
        <p>Find your zone • Own the rush</p>
      </div>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
