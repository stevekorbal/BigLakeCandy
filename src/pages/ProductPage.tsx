import React from "react";
import { Product } from "../types";

interface ProductPageProps {
  product: Product;
  onNavigateToShop: () => void;
  onNavigateToContact: () => void;
}

export const ProductPage: React.FC<ProductPageProps> = ({
  product,
  onNavigateToShop,
  onNavigateToContact,
}) => {
  return (
    <section className="section" style={{ minHeight: "75vh" }}>
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.1fr",
          gap: "40px",
          alignItems: "start",
        }}
      >
        {/* Left: Product Image Card */}
        <div
          className="card"
          style={{
            borderRadius: "18px",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(15,30,60,.12)",
            border: "1px solid #e7ecff",
            background: "#fff",
          }}
        >
          <div
            className="media"
            style={{
              aspectRatio: "1/1",
              background: "#eef2ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>
        </div>

        {/* Right: Product Details */}
        <div>
          <div
            className="eyebrow"
            style={{
              color: "var(--accent)",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: ".12em",
            }}
          >
            Big Lake Candy Company
          </div>

          <h1 style={{ margin: ".3rem 0 10px", fontSize: "32px", color: "var(--ink)", fontWeight: 900 }}>
            {product.title}
          </h1>

          <div
            className="price"
            style={{
              fontSize: "24px",
              marginBottom: "14px",
              display: "flex",
              alignItems: "baseline",
              gap: "8px",
            }}
          >
            {product.oldPrice && (
              <span
                className="old-price"
                style={{
                  textDecoration: "line-through",
                  color: "var(--muted)",
                  fontWeight: 600,
                  fontSize: "18px",
                }}
              >
                {product.oldPrice}
              </span>
            )}
            <span style={{ fontWeight: 800, color: "var(--ink)" }}>{product.price}</span>
            {product.isSale && (
              <span
                style={{
                  background: "#e8f1ff",
                  color: "#0e1a40",
                  border: "1px solid #d4e2ff",
                  padding: "4px 10px",
                  borderRadius: "999px",
                  fontSize: "12px",
                  fontWeight: 800,
                  marginLeft: "8px",
                }}
              >
                Sale
              </span>
            )}
          </div>

          {product.weight && (
            <p className="muted" style={{ margin: "0 0 12px", color: "var(--muted)", fontWeight: 600 }}>
              Weight: {product.weight}
            </p>
          )}

          <div style={{ whiteSpace: "pre-line", color: "var(--text)", lineHeight: 1.6, marginBottom: "20px" }}>
            {product.description}
          </div>

          {/* Action buttons */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "14px" }}>
            <button
              className="btn"
              onClick={onNavigateToContact}
              style={{
                background: "linear-gradient(90deg,#3755ff,#ff3aa7)",
                color: "#fff",
                padding: "14px 22px",
                borderRadius: "14px",
                fontWeight: 800,
                boxShadow: "0 8px 24px var(--ring)",
                cursor: "pointer",
                border: 0,
              }}
            >
              Contact us
            </button>
            <button
              className="btn outline"
              onClick={onNavigateToShop}
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
              Browse more products
            </button>
          </div>

          <hr style={{ margin: "26px 0", borderColor: "#e7ecff" }} />

          <button
            onClick={onNavigateToShop}
            style={{
              background: "transparent",
              border: 0,
              padding: 0,
              color: "var(--brand)",
              fontWeight: 700,
              cursor: "pointer",
              textDecoration: "underline",
              fontSize: "15px",
            }}
          >
            ← Back to shop
          </button>
        </div>
      </div>
    </section>
  );
};
