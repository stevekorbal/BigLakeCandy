import React, { useState, useEffect } from "react";
import { Product, ProductCategory } from "../types";
import { ProductCard } from "../components/ProductCard";

interface ShopPageProps {
  products: Product[];
  initialCategory?: ProductCategory;
  onSelectProduct: (slug: string) => void;
  onContactClick: () => void;
}

export const ShopPage: React.FC<ShopPageProps> = ({
  products,
  initialCategory = "all",
  onSelectProduct,
  onContactClick,
}) => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setActiveCategory(initialCategory);
  }, [initialCategory]);

  const categories: { id: ProductCategory; label: string }[] = [
    { id: "all", label: "All Items" },
    { id: "candy", label: "Freeze-Dried Candy" },
    { id: "fruits", label: "Fruits" },
    { id: "vegetables", label: "Vegetables" },
    { id: "icecream", label: "Ice Cream" },
    { id: "desserts", label: "Desserts" },
  ];

  const filteredProducts = products.filter((p) => {
    const matchesCat = activeCategory === "all" || p.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section className="section" style={{ minHeight: "80vh" }}>
      <div className="container">
        <div style={{ marginBottom: "20px" }}>
          <div className="eyebrow" style={{ color: "var(--accent)", fontWeight: 800, textTransform: "uppercase", letterSpacing: ".12em" }}>
            Our Catalog
          </div>
          <h1 style={{ color: "var(--ink)", fontSize: "36px", margin: ".3rem 0 10px", fontWeight: 900 }}>
            Freeze-Dried Treats
          </h1>
          <p className="muted" style={{ color: "#28324d", fontSize: "16px", margin: 0 }}>
            Small-batch, intensely crunchy candies, fruits, and desserts made right here in Owosso, Michigan.
          </p>
        </div>

        {/* Real site status banner */}
        <div
          className="card"
          style={{
            border: "1px solid #ffe39a",
            background: "#fff8df",
            marginBottom: "24px",
            borderRadius: "14px",
          }}
        >
          <div className="pad" style={{ color: "#5c4200", padding: "16px" }}>
            <strong>Online ordering is currently paused.</strong>
            <br />
            Our catalog is available for browsing.{" "}
            <button
              onClick={onContactClick}
              style={{
                background: "transparent",
                border: 0,
                padding: 0,
                color: "#5c4200",
                fontWeight: 700,
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Contact us
            </button>{" "}
            for local pickup or wholesale availability!
          </div>
        </div>

        {/* Category Filters Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "999px",
                    fontSize: "14px",
                    fontWeight: 700,
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                    border: isActive ? "2px solid var(--brand)" : "1px solid #d4def7",
                    background: isActive ? "var(--brand)" : "#ffffff",
                    color: isActive ? "#ffffff" : "var(--ink)",
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search box */}
          <div style={{ position: "relative" }}>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                padding: "8px 14px",
                borderRadius: "999px",
                border: "1px solid #d4def7",
                background: "#fff",
                fontSize: "14px",
                outline: "none",
                minWidth: "220px",
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "transparent",
                  border: 0,
                  color: "#999",
                  cursor: "pointer",
                }}
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.slug}
                product={product}
                onSelectProduct={onSelectProduct}
              />
            ))}
          </div>
        ) : (
          <div
            className="card"
            style={{
              padding: "40px",
              textAlign: "center",
              background: "#fff",
              borderRadius: "16px",
            }}
          >
            <p style={{ fontSize: "18px", color: "var(--muted)", margin: 0 }}>
              No treats match your current filter. Try choosing "All Items" or clearing your search.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
