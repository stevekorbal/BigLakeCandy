import React, { useState, useEffect } from "react";

interface TopBarProps {
  onNavigateToShop: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onNavigateToShop }) => {
  const [dismissed, setDismissed] = useState<boolean>(false);

  useEffect(() => {
    const isDismissed = localStorage.getItem("blcc_alert_dismissed_5f4a9f1bf672") === "1";
    if (isDismissed) {
      setDismissed(true);
    }
  }, []);

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDismissed(true);
    try {
      localStorage.setItem("blcc_alert_dismissed_5f4a9f1bf672", "1");
    } catch {
      // ignore
    }
  };

  if (dismissed) return null;

  return (
    <div
      id="blcc-topbar"
      className="blcc-topbar"
      style={{
        background: "#e01b24",
        color: "#ffffff",
        padding: "10px 14px",
        position: "relative",
        zIndex: 9999,
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div style={{ fontWeight: 800 }}>
          <a
            href="/shop.php"
            onClick={(e) => {
              e.preventDefault();
              onNavigateToShop();
            }}
            style={{ color: "inherit", textDecoration: "underline" }}
          >
            Mix and Match 3 for $20
          </a>
        </div>
        <button
          className="close"
          onClick={handleDismiss}
          aria-label="Dismiss banner"
          style={{
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            background: "transparent",
            border: 0,
            color: "inherit",
            fontSize: "18px",
            lineHeight: 1,
            cursor: "pointer",
            opacity: 0.8,
            padding: "4px 8px",
          }}
        >
          ✕
        </button>
      </div>
    </div>
  );
};
