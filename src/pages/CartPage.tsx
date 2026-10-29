import React from "react";

interface CartPageProps {
  onBrowseCatalog: () => void;
  onContactClick: () => void;
}

export const CartPage: React.FC<CartPageProps> = ({ onBrowseCatalog, onContactClick }) => {
  return (
    <section className="section" style={{ minHeight: "75vh" }}>
      <div className="container" style={{ maxWidth: "800px" }}>
        <h2 style={{ fontSize: "32px", color: "var(--ink)", margin: "0 0 16px", fontWeight: 900 }}>
          Cart Unavailable
        </h2>
        <div
          className="card"
          style={{
            border: "1px solid #ffe39a",
            background: "#fff8df",
            borderRadius: "16px",
          }}
        >
          <div className="pad" style={{ color: "#5c4200", padding: "20px" }}>
            <strong style={{ fontSize: "16px" }}>Online ordering is currently paused.</strong>
            <br />
            Our catalog is available for browsing, contact us for availability.
          </div>
        </div>

        <div style={{ marginTop: "24px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <button
            className="btn"
            onClick={onBrowseCatalog}
            style={{
              background: "linear-gradient(90deg,#3755ff,#ff3aa7)",
              color: "#fff",
              padding: "14px 20px",
              borderRadius: "14px",
              fontWeight: 800,
              cursor: "pointer",
              border: 0,
            }}
          >
            Browse the catalog
          </button>
          <button
            className="btn outline"
            onClick={onContactClick}
            style={{
              background: "#fff",
              color: "var(--brand)",
              border: "2px solid var(--brand)",
              padding: "14px 20px",
              borderRadius: "14px",
              fontWeight: 800,
              cursor: "pointer",
            }}
          >
            Contact us for availability
          </button>
        </div>
      </div>
    </section>
  );
};
