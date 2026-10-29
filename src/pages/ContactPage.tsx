import React, { useState } from "react";

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState<{ type: "notice" | "error"; text: string } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email.trim()) {
      setStatusMessage({
        type: "error",
        text: "Please provide a valid email address.",
      });
      return;
    }

    // Per technical requirements: identify backend dependency without simulating fake submission
    setStatusMessage({
      type: "notice",
      text: "Backend Service Required: Submitting this inquiry requires a server endpoint, database storage (e.g., Firestore or Cloud SQL), and email/SMS delivery service (such as SendGrid, LeadConnector, or Twilio). Live submissions are decoupled to protect the production system.",
    });
  };

  return (
    <section className="section" style={{ background: "#f4f6fb", minHeight: "80vh" }}>
      <div className="container" style={{ maxWidth: "1000px" }}>
        <div className="card" style={{ overflow: "hidden", borderRadius: "20px" }}>
          <div className="pad" style={{ padding: "24px 24px 0" }}>
            <div className="eyebrow" style={{ color: "var(--accent)", fontWeight: 800, textTransform: "uppercase", letterSpacing: ".12em" }}>
              Say hello
            </div>
            <h1 style={{ margin: ".2rem 0 8px", color: "var(--ink)", fontWeight: 900, fontSize: "32px" }}>
              Contact Us
            </h1>
            <p className="muted" style={{ color: "var(--muted)", margin: 0 }}>
              Have a question about products, wholesale, or fundraising? Send us a note, we’re quick to respond.
            </p>
          </div>

          <div className="pad" style={{ padding: "24px" }}>
            {statusMessage && (
              <div
                style={{
                  marginBottom: "20px",
                  padding: "16px",
                  borderRadius: "14px",
                  background: statusMessage.type === "error" ? "#fff0f0" : "#fff8e6",
                  border: statusMessage.type === "error" ? "1px solid #ffd1d1" : "1px solid #ffe39a",
                  color: statusMessage.type === "error" ? "#a81c1c" : "#634700",
                  fontSize: "14px",
                  lineHeight: 1.5,
                }}
              >
                <strong>{statusMessage.type === "error" ? "Incomplete Form: " : "Integration Notice: "}</strong>
                {statusMessage.text}
              </div>
            )}

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.2fr .8fr",
                gap: "24px",
                alignItems: "start",
              }}
            >
              {/* FORM */}
              <form onSubmit={handleSubmit} style={{ display: "grid", gap: "12px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                  <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      padding: "14px",
                      borderRadius: "999px",
                      border: "1px solid #cfd8ff",
                      background: "#fff",
                      outline: "none",
                      fontSize: "15px",
                    }}
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Email *"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      padding: "14px",
                      borderRadius: "999px",
                      border: "1px solid #cfd8ff",
                      background: "#fff",
                      outline: "none",
                      fontSize: "15px",
                    }}
                  />
                </div>
                <input
                  name="phone"
                  type="text"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{
                    padding: "14px",
                    borderRadius: "999px",
                    border: "1px solid #cfd8ff",
                    background: "#fff",
                    outline: "none",
                    fontSize: "15px",
                  }}
                />
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Comment"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    padding: "14px",
                    borderRadius: "16px",
                    border: "1px solid #cfd8ff",
                    background: "#fff",
                    outline: "none",
                    fontSize: "15px",
                    fontFamily: "inherit",
                  }}
                />
                <button
                  className="btn"
                  type="submit"
                  style={{
                    width: "140px",
                    background: "linear-gradient(90deg,#3755ff,#ff3aa7)",
                    color: "#fff",
                    padding: "14px 18px",
                    borderRadius: "14px",
                    fontWeight: 800,
                    cursor: "pointer",
                    border: 0,
                  }}
                >
                  Send
                </button>
              </form>

              {/* CONTACT INFO ASIDE */}
              <aside>
                <div className="card" style={{ padding: "18px", background: "#fff", borderRadius: "16px", border: "1px solid #e7ecff" }}>
                  <h3 style={{ margin: "0 0 8px", color: "var(--ink)", fontWeight: 800 }}>Reach us</h3>
                  <p className="muted" style={{ margin: "0 0 8px", color: "var(--muted)", lineHeight: 1.6 }}>
                    Email: <a href="mailto:hello@biglakecandy.com" style={{ color: "var(--brand)" }}>hello@biglakecandy.com</a><br />
                    Phone: <a href="tel:2482168175" style={{ color: "var(--brand)" }}>248-216-8175</a><br />
                    Location: Owosso, Michigan 48867
                  </p>
                  <p className="muted" style={{ marginTop: "12px", color: "var(--muted)", fontSize: "14px", lineHeight: 1.5 }}>
                    You’ll also receive an email with tracking info after ordering.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
