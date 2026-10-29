import React, { useState } from "react";
import { PageRoute } from "../types";

interface HeaderProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  cartCount?: number;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, onNavigate, cartCount = 0 }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (route: PageRoute, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(route);
    setMobileMenuOpen(false);
    document.body.classList.remove("nav-open");
  };

  const toggleMobileNav = () => {
    const nextState = !mobileMenuOpen;
    setMobileMenuOpen(nextState);
    if (nextState) {
      document.body.classList.add("nav-open");
    } else {
      document.body.classList.remove("nav-open");
    }
  };

  const isCurrent = (type: string) => currentRoute.type === type;

  return (
    <header className="site-header" style={{ background: "#0a0f2b", color: "#fff" }}>
      <div className="container nav" style={{ display: "flex", alignItems: "center", gap: "20px", height: "72px" }}>
        <a
          className="brand"
          href="/index.php"
          onClick={(e) => handleNavClick({ type: "home" }, e)}
          style={{ display: "flex", alignItems: "center", gap: "12px", color: "#fff", fontWeight: 800, letterSpacing: ".3px" }}
        >
          <img
            src="/assets/logo.png"
            alt="Big Lake Candy logo"
            className="logo"
            style={{ height: "60px", width: "auto", borderRadius: 0, display: "block", objectFit: "contain" }}
          />
          <span>Big Lake Candy Company</span>
        </a>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          onClick={toggleMobileNav}
          style={{
            marginLeft: "auto",
            background: "transparent",
            border: 0,
            color: "#fff",
            fontSize: "24px",
            cursor: "pointer",
          }}
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>

        <nav
          className="main-nav"
          style={{
            display: mobileMenuOpen ? "flex" : undefined,
            gap: "20px",
            marginLeft: "auto",
          }}
        >
          <a
            href="/index.php"
            onClick={(e) => handleNavClick({ type: "home" }, e)}
            style={{ color: isCurrent("home") ? "#ffffff" : "#cfe0ff", fontWeight: 600 }}
          >
            Home
          </a>
          <a
            href="/shop.php"
            onClick={(e) => handleNavClick({ type: "shop" }, e)}
            style={{ color: isCurrent("shop") ? "#ffffff" : "#cfe0ff", fontWeight: 600 }}
          >
            Shop
          </a>
          <a
            href="/fundraising.php"
            onClick={(e) => handleNavClick({ type: "fundraising" }, e)}
            style={{ color: isCurrent("fundraising") ? "#ffffff" : "#cfe0ff", fontWeight: 600 }}
          >
            Fundraising
          </a>
          <a
            href="/wholesale.php"
            onClick={(e) => handleNavClick({ type: "wholesale" }, e)}
            style={{ color: isCurrent("wholesale") ? "#ffffff" : "#cfe0ff", fontWeight: 600 }}
          >
            Wholesale
          </a>
          <a
            href="/about.php"
            onClick={(e) => handleNavClick({ type: "about" }, e)}
            style={{ color: isCurrent("about") ? "#ffffff" : "#cfe0ff", fontWeight: 600 }}
          >
            About
          </a>
          <a
            href="/faq.php"
            onClick={(e) => handleNavClick({ type: "faq" }, e)}
            style={{ color: isCurrent("faq") ? "#ffffff" : "#cfe0ff", fontWeight: 600 }}
          >
            FAQ
          </a>
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <a
            className="blcc-catalog-only-pill"
            href="/shop.php"
            onClick={(e) => handleNavClick({ type: "shop" }, e)}
            aria-label="Catalog only mode"
          >
            <span aria-hidden="true">👀</span>
            <span>Catalog Only</span>
          </a>

          {cartCount > 0 && (
            <a
              className="cart-link"
              href="/cart.php"
              onClick={(e) => handleNavClick({ type: "cart" }, e)}
              aria-label="Cart"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M7 4h-2l-1 2h2l3.6 7.59-1.35 2.44A1.992 1.992 0 0 0 10 20h10v-2H10l1.1-2h7.45a2 2 0 0 0 1.8-1.1l3.58-6.49A1 1 0 0 0 23 5H6.21l-.94-2H1v2h3l3.6 7.59L6.25 17A3 3 0 0 0 9 22h10a3 3 0 0 0 3-3v-1H10.42l.93-1.7h7.45a4 4 0 0 0 3.59-2.2L24 6H7z"/>
              </svg>
              <span className="cart-count">{cartCount}</span>
            </a>
          )}
        </div>
      </div>
    </header>
  );
};
