import React from "react";

interface FundraisingPageProps {
  onContactClick: () => void;
}

export const FundraisingPage: React.FC<FundraisingPageProps> = ({ onContactClick }) => {
  return (
    <section className="section" style={{ background: "#f4f6fb", minHeight: "80vh" }}>
      <div className="container" style={{ maxWidth: "1000px" }}>
        <div className="card" style={{ overflow: "hidden", borderRadius: "20px" }}>
          <div className="pad" style={{ padding: "24px 24px 8px" }}>
            <div className="eyebrow" style={{ color: "var(--accent)", fontWeight: 800, textTransform: "uppercase", letterSpacing: ".12em" }}>
              Sweet success
            </div>
            <h1 style={{ margin: ".2rem 0 8px", color: "var(--ink)", fontWeight: 900, fontSize: "32px" }}>
              Fundraising Made Simple
            </h1>
            <p className="muted" style={{ color: "var(--muted)", lineHeight: 1.6 }}>
              We partner with schools, teams, and organizations to raise money with crave-worthy freeze-dried treats. Wide appeal, easy to sell, and excellent profits.
            </p>
          </div>

          {/* Why choose us */}
          <div className="pad" style={{ padding: "0 24px 24px" }}>
            <h3 style={{ color: "var(--ink)", fontWeight: 800, marginTop: "16px" }}>Why Choose Us</h3>
            <ul style={{ lineHeight: 1.8, paddingLeft: "20px", color: "var(--text)" }}>
              <li><strong>High-Profit Margins:</strong> earn a strong return on every sale.</li>
              <li><strong>Broad Appeal:</strong> a fun, delicious treat for all ages.</li>
              <li><strong>Easy to Sell:</strong> portable, eye-catching, and snack-ready.</li>
              <li><strong>Dedicated Support:</strong> help with ordering, tracking, and customer service.</li>
            </ul>
          </div>

          {/* Steps */}
          <div className="pad" style={{ padding: "0 24px 24px" }}>
            <h3 style={{ color: "var(--ink)", fontWeight: 800 }}>How It Works</h3>
            <ol style={{ lineHeight: 1.8, marginLeft: "22px", color: "var(--text)" }}>
              <li><strong>Choose Your Products:</strong> pick your lineup of best-sellers.</li>
              <li><strong>Set Your Goals:</strong> decide how much you want to raise.</li>
              <li><strong>Sell &amp; Earn:</strong> share with friends, family, and community—watch totals climb.</li>
            </ol>

            <div style={{ marginTop: "24px", display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
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
                Inquire About Fundraising
              </button>
            </div>

            <p className="muted" style={{ marginTop: "16px", color: "var(--muted)" }}>
              Questions? Email{" "}
              <a href="mailto:hello@biglakecandy.com" style={{ color: "var(--brand)", fontWeight: 700 }}>
                hello@biglakecandy.com
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
