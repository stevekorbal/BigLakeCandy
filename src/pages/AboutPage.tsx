import React from "react";

interface AboutPageProps {
  onNavigateToWholesale: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigateToWholesale }) => {
  return (
    <section className="section" style={{ background: "#f4f6fb", minHeight: "80vh" }}>
      <div className="container" style={{ maxWidth: "1000px" }}>
        <div className="card" style={{ overflow: "hidden", borderRadius: "20px" }}>
          {/* Intro */}
          <div className="pad" style={{ padding: "24px" }}>
            <div className="eyebrow" style={{ color: "var(--accent)", fontWeight: 800, textTransform: "uppercase", letterSpacing: ".12em" }}>
              About
            </div>
            <h1 style={{ margin: ".2rem 0 8px", color: "var(--ink)", fontWeight: 900, fontSize: "32px" }}>
              Big Lake Candy Company
            </h1>
            <p className="muted" style={{ margin: 0, color: "var(--muted)", lineHeight: 1.6 }}>
              Big Lake Candy Company is Owosso, Michigan’s go-to destination for freeze-dried candy and snacks. What started as a side hustle born out of a love for unique snacking experiences has grown into a full-fledged local business serving families, schools, and sweet-tooth enthusiasts across Mid-Michigan and beyond.
            </p>
          </div>

          {/* Content */}
          <div className="pad" style={{ padding: "0 24px 24px" }}>
            <div className="card" style={{ borderRadius: "16px", padding: "20px", background: "#fff", border: "1px solid #e7ecff" }}>
              <p style={{ margin: "0 0 14px", lineHeight: 1.6 }}>
                We specialize in the art of freeze-drying — a process that removes moisture from your favorite candies and snacks to create an intensely flavorful, impossibly crunchy treat unlike anything you’ve had before. Think your favorite childhood candy, but lighter, crunchier, and somehow even more delicious.
              </p>

              <h3 style={{ margin: "18px 0 8px", color: "var(--ink)", fontWeight: 800 }}>Rooted in Owosso, Michigan</h3>
              <p style={{ margin: "0 0 14px", lineHeight: 1.6 }}>
                We’re proud to be a locally owned, Owosso-based small business. Our storefront is right here in the community — serving Owosso, Corunna, Durand, Chesaning, St. Johns, and families throughout Shiawassee County and Mid-Michigan. Whether you stop in to browse, order online for local pickup, or ship to a friend across the state, Big Lake Candy is made and fulfilled right here in Owosso.
              </p>

              <h3 style={{ margin: "18px 0 8px", color: "var(--ink)", fontWeight: 800 }}>What We Make</h3>
              <p style={{ margin: "0 0 14px", lineHeight: 1.6 }}>
                Our freeze-dried lineup includes candy classics like Skittles, Nerd Clusters, and Fruit Roll-Ups transformed into something completely new, as well as freeze-dried fruits, vegetables, ice cream, and desserts. Everything is made in small batches with care — we don’t rush the process because great texture and flavor are worth the time.
              </p>

              <h3 style={{ margin: "18px 0 8px", color: "var(--ink)", fontWeight: 800 }}>Fundraising &amp; Wholesale</h3>
              <p style={{ margin: "0 0 10px", lineHeight: 1.6 }}>
                Big Lake Candy Company is a trusted partner for school fundraisers, team fundraisers, and local organizations across Shiawassee County. Our freeze-dried candy is a crowd favorite that practically sells itself — perfect for tables, events, and door-to-door sales. We also offer wholesale programs for retailers looking to carry a locally made, high-demand product.
              </p>
              <p style={{ margin: "0 0 18px" }}>
                <button
                  onClick={onNavigateToWholesale}
                  style={{
                    background: "transparent",
                    border: 0,
                    padding: 0,
                    fontWeight: 800,
                    color: "var(--accent)",
                    cursor: "pointer",
                    textDecoration: "underline",
                    fontSize: "15px",
                  }}
                >
                  Learn more about fundraising &amp; wholesale →
                </button>
              </p>

              <h3 style={{ margin: "18px 0 8px", color: "var(--ink)", fontWeight: 800 }}>Visit Us</h3>
              <p style={{ margin: 0, lineHeight: 1.6 }}>
                <strong>Big Lake Candy Company</strong> — Owosso, MI 48867<br />
                We offer in-store shopping, local pickup, and online ordering with shipping available across Michigan and the U.S.
              </p>

              {/* Pillars */}
              <div
                className="grid about-pillars"
                style={{
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "12px",
                  marginTop: "20px",
                }}
              >
                <div className="card" style={{ padding: "14px", textAlign: "center", borderRadius: "16px" }}>
                  <div style={{ fontSize: "26px" }}>🏠</div>
                  <strong style={{ display: "block", marginTop: "4px" }}>Local</strong>
                  <div className="muted" style={{ fontSize: "13px" }}>Made in Owosso</div>
                </div>
                <div className="card" style={{ padding: "14px", textAlign: "center", borderRadius: "16px" }}>
                  <div style={{ fontSize: "26px" }}>🧊</div>
                  <strong style={{ display: "block", marginTop: "4px" }}>Freeze-Dried</strong>
                  <div className="muted" style={{ fontSize: "13px" }}>Big crunch, bold flavor</div>
                </div>
                <div className="card" style={{ padding: "14px", textAlign: "center", borderRadius: "16px" }}>
                  <div style={{ fontSize: "26px" }}>🎟️</div>
                  <strong style={{ display: "block", marginTop: "4px" }}>Fundraising</strong>
                  <div className="muted" style={{ fontSize: "13px" }}>A crowd favorite</div>
                </div>
                <div className="card" style={{ padding: "14px", textAlign: "center", borderRadius: "16px" }}>
                  <div style={{ fontSize: "26px" }}>📦</div>
                  <strong style={{ display: "block", marginTop: "4px" }}>Wholesale</strong>
                  <div className="muted" style={{ fontSize: "13px" }}>Retail-ready programs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
