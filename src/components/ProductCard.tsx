import React from "react";
import { Product } from "../types";

interface ProductCardProps {
  product: Product;
  onSelectProduct: (slug: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelectProduct }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onSelectProduct(product.slug);
  };

  return (
    <article
      className="card"
      style={{
        background: "#fff",
        borderRadius: "18px",
        boxShadow: "0 10px 30px rgba(15,30,60,.12)",
        overflow: "hidden",
        border: "1px solid #e7ecff",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <a
        href={`product-info.php?slug=${product.slug}`}
        onClick={handleClick}
        style={{ position: "relative", display: "block" }}
      >
        <div
          className="media"
          style={{
            aspectRatio: "1/1",
            background: "#eef2ff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={product.image}
            alt={product.title}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            loading="lazy"
          />
        </div>

        {product.isSale && (
          <span
            style={{
              position: "absolute",
              top: "12px",
              left: "12px",
              background: "#e8f1ff",
              color: "#0e1a40",
              border: "1px solid #d4e2ff",
              padding: "6px 10px",
              borderRadius: "999px",
              fontSize: "12px",
              fontWeight: 800,
            }}
          >
            Sale
          </span>
        )}
      </a>

      <div
        className="pad"
        style={{
          padding: "14px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          flex: 1,
        }}
      >
        <h3 style={{ margin: ".2rem 0 0", fontSize: "18px", color: "#0e1a40" }}>
          {product.title}
        </h3>

        <div
          className="price"
          style={{
            fontWeight: 800,
            color: "#0e1a40",
            display: "flex",
            gap: "8px",
            alignItems: "baseline",
          }}
        >
          {product.oldPrice && (
            <span
              className="old-price"
              style={{
                textDecoration: "line-through",
                color: "#6c7693",
                fontWeight: 600,
                marginRight: "6px",
              }}
            >
              {product.oldPrice}
            </span>
          )}
          <span>{product.price}</span>
        </div>

        <div style={{ marginTop: "auto", display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
          <a
            className="btn outline"
            href={`product-info.php?slug=${product.slug}`}
            onClick={handleClick}
            style={{
              padding: "12px 16px",
              borderRadius: "14px",
              fontWeight: 800,
              textDecoration: "none",
            }}
          >
            View Product
          </a>
        </div>
      </div>
    </article>
  );
};
