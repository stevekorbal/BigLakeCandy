import React from "react";
import { PageRoute, ProductCategory } from "../types";

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
  onNavigateCategory: (category: ProductCategory) => void;
  onLoginClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onNavigateCategory, onLoginClick }) => {
  const handleClick = (route: PageRoute, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(route);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCategoryClick = (category: ProductCategory, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigateCategory(category);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer" style={{ background: "#0e1a40", color: "#eaf0ff", marginTop: "40px" }}>
      {/* Sweet accent bar */}
      <div style={{ height: "4px", background: "linear-gradient(90deg, #3755ff, #ff3aa7)" }} />

      <div
        className="container footer-grid"
        style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "28px", padding: "36px 0" }}
      >
        {/* Brand */}
        <div>
          <a
            href="/index.php"
            onClick={(e) => handleClick({ type: "home" }, e)}
            style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none", color: "inherit" }}
          >
            <img
              src="/assets/logo.png"
              alt="Big Lake Candy logo"
              style={{
                width: "56px",
                height: "56px",
                objectFit: "contain",
                background: "#fff",
                borderRadius: "12px",
                padding: "6px",
              }}
            />
            <div>
              <h4 style={{ margin: 0, color: "#ffffff" }}>Big Lake Candy Company</h4>
              <p className="muted" style={{ margin: "6px 0 0", color: "#cdd6ff" }}>
                Freeze-dried treats with out-of-this-world crunch.
              </p>
            </div>
          </a>
        </div>

        {/* Quick links */}
        <div>
          <h5 style={{ margin: "0 0 8px", color: "#ffffff" }}>Quick Links</h5>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.9 }}>
            <li>
              <a href="/shop.php" onClick={(e) => handleClick({ type: "shop" }, e)} style={{ color: "#cdd6ff", textDecoration: "none" }}>
                Shop
              </a>
            </li>
            <li>
              <a href="/about.php" onClick={(e) => handleClick({ type: "about" }, e)} style={{ color: "#cdd6ff", textDecoration: "none" }}>
                About
              </a>
            </li>
            <li>
              <a href="/contact.php" onClick={(e) => handleClick({ type: "contact" }, e)} style={{ color: "#cdd6ff", textDecoration: "none" }}>
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h5 style={{ margin: "0 0 8px", color: "#ffffff" }}>Shop by Category</h5>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.9 }}>
            <li>
              <a href="/shop.php?category=candy" onClick={(e) => handleCategoryClick("candy", e)} style={{ color: "#cdd6ff", textDecoration: "none" }}>
                Freeze-Dried Candy
              </a>
            </li>
            <li>
              <a href="/shop.php?category=fruits" onClick={(e) => handleCategoryClick("fruits", e)} style={{ color: "#cdd6ff", textDecoration: "none" }}>
                Fruits
              </a>
            </li>
            <li>
              <a href="/shop.php?category=vegetables" onClick={(e) => handleCategoryClick("vegetables", e)} style={{ color: "#cdd6ff", textDecoration: "none" }}>
                Vegetables
              </a>
            </li>
            <li>
              <a href="/shop.php?category=icecream" onClick={(e) => handleCategoryClick("icecream", e)} style={{ color: "#cdd6ff", textDecoration: "none" }}>
                Ice Cream
              </a>
            </li>
            <li>
              <a href="/shop.php?category=desserts" onClick={(e) => handleCategoryClick("desserts", e)} style={{ color: "#cdd6ff", textDecoration: "none" }}>
                Desserts
              </a>
            </li>
          </ul>
        </div>

        {/* Programs & policies */}
        <div>
          <h5 style={{ margin: "0 0 8px", color: "#ffffff" }}>Programs</h5>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.9 }}>
            <li>
              <a href="/wholesale.php" onClick={(e) => handleClick({ type: "wholesale" }, e)} style={{ color: "#cdd6ff", textDecoration: "none" }}>
                Wholesale
              </a>
            </li>
            <li>
              <a href="/fundraising.php" onClick={(e) => handleClick({ type: "fundraising" }, e)} style={{ color: "#cdd6ff", textDecoration: "none" }}>
                Fundraising
              </a>
            </li>
            <li>
              <a href="/privacy.php" onClick={(e) => handleClick({ type: "privacy" }, e)} style={{ color: "#cdd6ff", textDecoration: "none" }}>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms.php" onClick={(e) => handleClick({ type: "terms" }, e)} style={{ color: "#cdd6ff", textDecoration: "none" }}>
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/refund.php" onClick={(e) => handleClick({ type: "refund" }, e)} style={{ color: "#cdd6ff", textDecoration: "none" }}>
                Refunds
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="container footer-bottom"
        style={{
          borderTop: "1px solid rgba(255,255,255,.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 0",
          color: "#cdd6ff",
          gap: "12px",
          flexWrap: "wrap",
        }}
      >
        <small>© 2026 Big Lake Candy Company. All rights reserved.</small>
        <small>
          <button
            onClick={onLoginClick}
            style={{
              background: "transparent",
              border: 0,
              padding: 0,
              color: "#ffffff",
              marginRight: "12px",
              cursor: "pointer",
              textDecoration: "underline",
              fontSize: "inherit",
            }}
          >
            Login
          </button>
          Powered by{" "}
          <a
            href="https://pcguys.online"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#ffffff" }}
          >
            PC Guys
          </a>
        </small>
      </div>
    </footer>
  );
};
