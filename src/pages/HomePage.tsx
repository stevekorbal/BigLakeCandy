import React from "react";
import { Product } from "../types";
import { ProductCard } from "../components/ProductCard";

interface HomePageProps {
  products: Product[];
  onNavigateToShop: () => void;
  onSelectProduct: (slug: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  products,
  onNavigateToShop,
  onSelectProduct,
}) => {
  // The 4 customer favorites as featured on biglakecandy.com homepage
  const favoriteSlugs = [
    "brain-bites-nerd-clusters",
    "fruit-wraps-roll-ups",
    "arctic-crunch-skittles",
    "freeze-dried-bananas",
  ];

  const favorites = favoriteSlugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is Product => !!p);

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="hero"
        style={{
          background: "radial-gradient(80% 60% at 50% 0%, #ffd3ec 0, #ccd7ff 40%, #f4f6fb 70%)",
        }}
      >
        <div
          className="container hero-inner"
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: "30px",
            alignItems: "center",
            padding: "70px 0",
          }}
        >
          <div>
            <div
              className="eyebrow"
              style={{
                color: "#ff3aa7",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: ".12em",
              }}
            >
              Welcome
            </div>
            <h1
              style={{
                color: "#0e1a40",
                fontSize: "44px",
                lineHeight: 1.1,
                margin: ".3rem 0 1rem",
                fontWeight: 900,
              }}
            >
              Owosso's Freeze-Dried Candy Shop
            </h1>
            <p style={{ fontSize: "18px", color: "#2a3250", opacity: 0.9 }}>
              Small-batch freeze-dried candy, fruit, and snacks - made in Owosso, Michigan. Shop in-store, order online, or ask about fundraising.
            </p>
            <div style={{ display: "flex", gap: "12px", marginTop: "18px", flexWrap: "wrap" }}>
              <button
                className="btn"
                onClick={onNavigateToShop}
                style={{
                  display: "inline-block",
                  background: "linear-gradient(90deg,#3755ff,#ff3aa7)",
                  color: "#fff",
                  padding: "14px 18px",
                  borderRadius: "14px",
                  fontWeight: 800,
                  boxShadow: "0 8px 24px rgba(55,85,255,.25)",
                  textDecoration: "none",
                  border: 0,
                  cursor: "pointer",
                }}
              >
                Browse Catalog
              </button>
              <a
                className="btn outline"
                href="#why"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("why")?.scrollIntoView({ behavior: "smooth" });
                }}
                style={{
                  display: "inline-block",
                  background: "#fff",
                  color: "#3755ff",
                  border: "2px solid #3755ff",
                  padding: "14px 18px",
                  borderRadius: "14px",
                  fontWeight: 800,
                  textDecoration: "none",
                }}
              >
                Learn More
              </a>
            </div>
          </div>

          {/* HERO IMAGE: wide banner & cover fill */}
          <div
            className="card"
            style={{
              overflow: "hidden",
              borderRadius: "18px",
              boxShadow: "0 10px 30px rgba(15,30,60,.12)",
              border: "1px solid #e7ecff",
            }}
          >
            <div className="media" style={{ aspectRatio: "3/2", width: "100%" }}>
              <img
                src="/assets/image.png"
                alt="Candy landscape"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  objectPosition: "center",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMER FAVORITES */}
      <section className="section">
        <div className="container">
          <h2 style={{ fontSize: "32px", color: "var(--ink)", margin: "0 0 16px", fontWeight: 900 }}>
            Customer Favorites
          </h2>
          <p className="muted" style={{ color: "#2a3250", margin: "0 0 24px" }}>
            These sell out fast—grab yours while they’re fresh!
          </p>
          <div className="grid">
            {favorites.map((product) => (
              <ProductCard
                key={product.slug}
                product={product}
                onSelectProduct={onSelectProduct}
              />
            ))}
          </div>
        </div>
      </section>

      {/* WHY BIG LAKE CANDY */}
      <section
        id="why"
        className="section"
        style={{
          background: "radial-gradient(90% 80% at 50% 0%, #ffffff 0, #f3f6ff 60%, #eef2ff 100%)",
        }}
      >
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: "28px",
            alignItems: "start",
          }}
        >
          {/* Left: content & feature list */}
          <div>
            <h2 style={{ margin: "0 0 8px", color: "var(--ink)" }}>Why Big Lake Candy?</h2>

            <p style={{ maxWidth: "650px", color: "#2a3250", margin: "0 0 12px", lineHeight: 1.6 }}>
              Big Lake Candy Company is Owosso's locally owned freeze-dried candy shop. We serve families across Shiawassee County, power school and team fundraisers, and ship our small-batch treats to customers all over Michigan and the U.S.
            </p>

            <p style={{ maxWidth: "650px", color: "#2a3250", margin: "0 0 14px", lineHeight: 1.6 }}>
              Freeze-drying isn't just a trend — it's a completely different snacking experience. We perfect the process so every bag delivers intense flavor and a satisfying crunch you won't find anywhere else in the Mid-Michigan area.
            </p>

            <div
              className="card"
              style={{
                padding: "16px",
                borderRadius: "16px",
                border: "1px solid #e7ecff",
                background: "#fff",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  color: "#2a3250",
                  fontWeight: 700,
                }}
              >
                <div>✅ Small-batch crafted in Owosso, MI</div>
                <div>✅ In-store, local pickup &amp; online shipping</div>
                <div>✅ School &amp; team fundraising programs</div>
                <div>✅ Wholesale available for local retailers</div>
              </div>
            </div>
          </div>

          {/* Right: video */}
          <div
            className="card"
            style={{
              overflow: "hidden",
              borderRadius: "18px",
              boxShadow: "0 10px 30px rgba(15,30,60,.12)",
              border: "1px solid #e7ecff",
            }}
          >
            <div className="media" style={{ aspectRatio: "16/9", width: "100%", background: "#000" }}>
              <video
                src="/assets/videos/biglakevideo.mp4"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                muted
                playsInline
                loop
                autoPlay
                controls
                poster="/assets/blcc.jpg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
