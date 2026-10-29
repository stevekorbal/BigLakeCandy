import React, { useState, useEffect } from "react";
import { PageRoute, ProductCategory } from "./types";
import { PRODUCTS } from "./data/products";
import { TopBar } from "./components/TopBar";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { ShopPage } from "./pages/ShopPage";
import { ProductPage } from "./pages/ProductPage";
import { AboutPage } from "./pages/AboutPage";
import { FundraisingPage } from "./pages/FundraisingPage";
import { WholesalePage } from "./pages/WholesalePage";
import { FaqPage } from "./pages/FaqPage";
import { ContactPage } from "./pages/ContactPage";
import { PolicyPage } from "./pages/PolicyPage";
import { CartPage } from "./pages/CartPage";

export default function App() {
  const [route, setRoute] = useState<PageRoute>({ type: "home" });
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  // Sync state with URL if possible
  useEffect(() => {
    const handleLocation = () => {
      const path = window.location.pathname.toLowerCase();
      const params = new URLSearchParams(window.location.search);
      const slug = params.get("slug");
      const category = (params.get("category") || "all") as ProductCategory;

      if (path.includes("product-info") && slug) {
        setRoute({ type: "product", slug });
      } else if (path.includes("shop")) {
        setRoute({ type: "shop", category });
      } else if (path.includes("fundraising")) {
        setRoute({ type: "fundraising" });
      } else if (path.includes("wholesale")) {
        setRoute({ type: "wholesale" });
      } else if (path.includes("about")) {
        setRoute({ type: "about" });
      } else if (path.includes("faq")) {
        setRoute({ type: "faq" });
      } else if (path.includes("contact")) {
        setRoute({ type: "contact" });
      } else if (path.includes("privacy")) {
        setRoute({ type: "privacy" });
      } else if (path.includes("terms")) {
        setRoute({ type: "terms" });
      } else if (path.includes("refund")) {
        setRoute({ type: "refund" });
      } else if (path.includes("cart") || path.includes("checkout")) {
        setRoute({ type: "cart" });
      } else {
        setRoute({ type: "home" });
      }
    };

    handleLocation();
    window.addEventListener("popstate", handleLocation);
    return () => window.removeEventListener("popstate", handleLocation);
  }, []);

  const navigate = (nextRoute: PageRoute) => {
    setRoute(nextRoute);
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Update browser URL state gracefully
    let url = "/";
    switch (nextRoute.type) {
      case "home":
        url = "/index.php";
        break;
      case "shop":
        url = nextRoute.category && nextRoute.category !== "all" 
          ? `/shop.php?category=${nextRoute.category}` 
          : "/shop.php";
        break;
      case "product":
        url = `/product-info.php?slug=${nextRoute.slug}`;
        break;
      case "fundraising":
        url = "/fundraising.php";
        break;
      case "wholesale":
        url = "/wholesale.php";
        break;
      case "about":
        url = "/about.php";
        break;
      case "faq":
        url = "/faq.php";
        break;
      case "contact":
        url = "/contact.php";
        break;
      case "privacy":
        url = "/privacy.php";
        break;
      case "terms":
        url = "/terms.php";
        break;
      case "refund":
        url = "/refund.php";
        break;
      case "cart":
        url = "/cart.php";
        break;
      default:
        url = "/";
    }

    try {
      window.history.pushState(null, "", url);
    } catch {
      // In sandboxed environments if pushState fails, route state still works
    }
  };

  const handleSelectProduct = (slug: string) => {
    navigate({ type: "product", slug });
  };

  const handleNavigateCategory = (category: ProductCategory) => {
    navigate({ type: "shop", category });
  };

  const selectedProduct =
    route.type === "product"
      ? PRODUCTS.find((p) => p.slug === route.slug) || PRODUCTS[0]
      : null;

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Promotional Top Bar */}
      <TopBar onNavigateToShop={() => navigate({ type: "shop" })} />

      {/* Main Header */}
      <Header
        currentRoute={route}
        onNavigate={navigate}
        cartCount={0}
      />

      {/* Main Site Content */}
      <main className="site-main" style={{ flex: 1 }}>
        {route.type === "home" && (
          <HomePage
            products={PRODUCTS}
            onNavigateToShop={() => navigate({ type: "shop" })}
            onSelectProduct={handleSelectProduct}
          />
        )}

        {route.type === "shop" && (
          <ShopPage
            products={PRODUCTS}
            initialCategory={route.category || "all"}
            onSelectProduct={handleSelectProduct}
            onContactClick={() => navigate({ type: "contact" })}
          />
        )}

        {route.type === "product" && selectedProduct && (
          <ProductPage
            product={selectedProduct}
            onNavigateToShop={() => navigate({ type: "shop" })}
            onNavigateToContact={() => navigate({ type: "contact" })}
          />
        )}

        {route.type === "about" && (
          <AboutPage
            onNavigateToWholesale={() => navigate({ type: "wholesale" })}
          />
        )}

        {route.type === "fundraising" && (
          <FundraisingPage
            onContactClick={() => navigate({ type: "contact" })}
          />
        )}

        {route.type === "wholesale" && (
          <WholesalePage
            onContactClick={() => navigate({ type: "contact" })}
          />
        )}

        {route.type === "faq" && (
          <FaqPage onNavigate={navigate} />
        )}

        {route.type === "contact" && (
          <ContactPage />
        )}

        {(route.type === "privacy" || route.type === "terms" || route.type === "refund") && (
          <PolicyPage type={route.type} />
        )}

        {route.type === "cart" && (
          <CartPage
            onBrowseCatalog={() => navigate({ type: "shop" })}
            onContactClick={() => navigate({ type: "contact" })}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={navigate}
        onNavigateCategory={handleNavigateCategory}
        onLoginClick={() => setLoginModalOpen(true)}
      />

      {/* Admin Login Notice Modal */}
      {loginModalOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(10, 15, 43, 0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10000,
            padding: "20px",
          }}
          onClick={() => setLoginModalOpen(false)}
        >
          <div
            className="card"
            style={{
              maxWidth: "460px",
              width: "100%",
              padding: "24px",
              borderRadius: "18px",
              background: "#fff",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
              <h3 style={{ margin: 0, color: "var(--ink)", fontWeight: 900 }}>Staff / Portal Login</h3>
              <button
                onClick={() => setLoginModalOpen(false)}
                style={{ background: "transparent", border: 0, fontSize: "18px", cursor: "pointer", color: "var(--muted)" }}
              >
                ✕
              </button>
            </div>
            <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: 1.5, margin: "0 0 16px" }}>
              <strong>Backend Authentication Required:</strong> The <code>/pcg-login.php</code> endpoint is a restricted administrative gateway managed by PC Guys for site administrators. Access requires a live authentication database and session token infrastructure.
            </p>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                className="btn"
                onClick={() => setLoginModalOpen(false)}
                style={{
                  padding: "10px 18px",
                  borderRadius: "12px",
                  fontWeight: 800,
                  fontSize: "14px",
                  border: 0,
                  cursor: "pointer",
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
