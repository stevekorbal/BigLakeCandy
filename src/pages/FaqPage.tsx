import React, { useState } from "react";
import { FAQ_ITEMS } from "../data/faq";
import { PageRoute } from "../types";

interface FaqPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate }) => {
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

  const toggleItem = (idx: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <section className="section" style={{ background: "#f4f6fb", minHeight: "80vh" }}>
      <div className="container" style={{ maxWidth: "1000px" }}>
        <div className="card" style={{ overflow: "hidden", borderRadius: "20px" }}>
          {/* Header */}
          <div className="pad" style={{ padding: "24px" }}>
            <div className="eyebrow" style={{ color: "var(--accent)", fontWeight: 800, textTransform: "uppercase", letterSpacing: ".12em" }}>
              Help
            </div>
            <h1 style={{ margin: ".2rem 0 8px", color: "var(--ink)", fontWeight: 900, fontSize: "32px" }}>
              Frequently Asked Questions
            </h1>
            <p className="muted" style={{ margin: 0, color: "var(--muted)" }}>
              Quick answers about our freeze-dried candy, shipping, fundraising, and wholesale.
            </p>
          </div>

          {/* FAQ list */}
          <div className="pad" style={{ padding: "0 24px 24px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {FAQ_ITEMS.map((item, idx) => {
                const isOpen = !!openItems[idx];
                return (
                  <div
                    key={idx}
                    className="card"
                    style={{
                      padding: "16px",
                      borderRadius: "16px",
                      background: "#fff",
                      border: "1px solid #e7ecff",
                    }}
                  >
                    <button
                      onClick={() => toggleItem(idx)}
                      style={{
                        width: "100%",
                        textAlign: "left",
                        cursor: "pointer",
                        fontWeight: 900,
                        color: "var(--ink)",
                        background: "transparent",
                        border: 0,
                        padding: 0,
                        fontSize: "16px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span>{item.q}</span>
                      <span style={{ fontSize: "18px", color: "var(--brand)", marginLeft: "12px" }}>
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div
                        style={{
                          marginTop: "12px",
                          color: "#2a3250",
                          lineHeight: 1.6,
                          borderTop: "1px solid #f0f3ff",
                          paddingTop: "12px",
                        }}
                      >
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div style={{ marginTop: "28px", padding: "16px", background: "#f8faff", borderRadius: "14px", border: "1px solid #e7ecff" }}>
              <p style={{ margin: 0, color: "var(--ink)", fontWeight: 700 }}>
                Still have questions?{" "}
                <button
                  onClick={() => onNavigate({ type: "contact" })}
                  style={{
                    background: "transparent",
                    border: 0,
                    padding: 0,
                    color: "var(--brand)",
                    fontWeight: 800,
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                >
                  Contact us directly
                </button>{" "}
                or email{" "}
                <a href="mailto:hello@biglakecandy.com" style={{ color: "var(--brand)", fontWeight: 700 }}>
                  hello@biglakecandy.com
                </a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
