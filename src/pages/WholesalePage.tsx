import React, { useState } from "react";

interface WholesalePageProps {
  onContactClick: () => void;
}

export const WholesalePage: React.FC<WholesalePageProps> = ({ onContactClick }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "What’s the minimum order?",
      a: "We keep MOQs friendly so you can test flavors without over-committing.",
    },
    {
      q: "Do you offer custom packs?",
      a: "Yes—mix & match cases or ask about seasonal bundles.",
    },
    {
      q: "How fast is fulfillment?",
      a: "Typical turnaround is fast and reliable; timelines confirmed at ordering.",
    },
  ];

  return (
    <section className="section" style={{ background: "#eef2ff", minHeight: "80vh" }}>
      <div className="container" style={{ maxWidth: "1000px" }}>
        <div className="card" style={{ borderRadius: "20px", overflow: "hidden" }}>
          <div style={{ padding: "24px 24px 0" }}>
            <div className="eyebrow" style={{ color: "var(--accent)", fontWeight: 800, textTransform: "uppercase", letterSpacing: ".12em" }}>
              Partner with us
            </div>
            <h1 style={{ margin: ".2rem 0 8px", color: "var(--ink)", fontWeight: 900, fontSize: "32px" }}>
              Wholesale Program
            </h1>
            <p className="muted" style={{ margin: "0 0 18px", color: "var(--muted)", lineHeight: 1.6 }}>
              Big Lake Candy is proud to offer wholesale pricing to shops and resellers who want to bring our delicious freeze-dried treats to their customers. Competitive pricing, flexible ordering, and dedicated support—so you can focus on selling out.
            </p>
          </div>

          {/* Stats row */}
          <div className="container" style={{ padding: "0 24px 24px" }}>
            <div className="grid" style={{ gridTemplateColumns: "repeat(4,1fr)", gap: "12px" }}>
              <div className="card" style={{ textAlign: "center", padding: "16px", borderRadius: "14px" }}>
                <div style={{ fontSize: "28px" }}>💸</div>
                <strong style={{ display: "block", marginTop: "4px" }}>Wholesale Margins</strong>
                <div className="muted" style={{ fontSize: "13px" }}>Price breaks on bulk</div>
              </div>
              <div className="card" style={{ textAlign: "center", padding: "16px", borderRadius: "14px" }}>
                <div style={{ fontSize: "28px" }}>📦</div>
                <strong style={{ display: "block", marginTop: "4px" }}>Low MOQs</strong>
                <div className="muted" style={{ fontSize: "13px" }}>Start small, scale fast</div>
              </div>
              <div className="card" style={{ textAlign: "center", padding: "16px", borderRadius: "14px" }}>
                <div style={{ fontSize: "28px" }}>🚚</div>
                <strong style={{ display: "block", marginTop: "4px" }}>Fast Fulfillment</strong>
                <div className="muted" style={{ fontSize: "13px" }}>Reliable turnarounds</div>
              </div>
              <div className="card" style={{ textAlign: "center", padding: "16px", borderRadius: "14px" }}>
                <div style={{ fontSize: "28px" }}>🤝</div>
                <strong style={{ display: "block", marginTop: "4px" }}>Dedicated Support</strong>
                <div className="muted" style={{ fontSize: "13px" }}>We’re here to help</div>
              </div>
            </div>
          </div>

          <div className="pad" style={{ padding: "0 24px 24px" }}>
            <h3 style={{ margin: "10px 0 8px", color: "var(--ink)", fontWeight: 800 }}>Benefits of Our Wholesale Program</h3>
            <ul style={{ marginTop: "8px", lineHeight: 1.7, paddingLeft: "20px", color: "var(--text)" }}>
              <li><strong>Competitive Pricing:</strong> discounted rates on bulk orders to keep margins healthy.</li>
              <li><strong>Wide Product Selection:</strong> a variety of fan-favorite freeze-dried treats.</li>
              <li><strong>Flexible Ordering:</strong> order online or by phone; one-time or recurring.</li>
              <li><strong>Dedicated Support:</strong> a real person for questions, tracking and service.</li>
            </ul>

            <div style={{ marginTop: "20px", display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
              <button
                className="btn"
                onClick={onContactClick}
                style={{
                  background: "linear-gradient(90deg,#3755ff,#ff3aa7)",
                  color: "#fff",
                  padding: "14px 22px",
                  borderRadius: "14px",
                  fontWeight: 800,
                  cursor: "pointer",
                  border: 0,
                }}
              >
                Become a Retail Partner
              </button>
            </div>

            <p className="muted" style={{ marginTop: "14px", color: "var(--muted)" }}>
              Prefer email? Write us at{" "}
              <a href="mailto:hello@biglakecandy.com" style={{ color: "var(--brand)", fontWeight: 700 }}>
                hello@biglakecandy.com
              </a>.
            </p>
          </div>

          {/* Wholesale FAQ */}
          <div className="pad" style={{ padding: "24px", background: "#f8f9ff", borderTop: "1px solid #e7ecff" }}>
            <h3 style={{ margin: "0 0 14px", color: "var(--ink)", fontWeight: 800 }}>Wholesale FAQs</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="faq-item">
                    <button
                      onClick={() => toggleFaq(idx)}
                      style={{
                        width: "100%",
                        textAlign: "left",
                        cursor: "pointer",
                        fontWeight: 800,
                        padding: "12px 16px",
                        borderRadius: "12px",
                        background: "#fff",
                        border: "1px solid #e7ecff",
                        color: "var(--ink)",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span>{faq.q}</span>
                      <span style={{ fontSize: "16px", color: "var(--brand)" }}>{isOpen ? "−" : "+"}</span>
                    </button>
                    {isOpen && (
                      <div style={{ padding: "10px 16px", color: "var(--muted)", lineHeight: 1.5 }}>
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
