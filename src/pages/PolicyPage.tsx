import React from "react";

interface PolicyPageProps {
  type: "privacy" | "terms" | "refund";
}

export const PolicyPage: React.FC<PolicyPageProps> = ({ type }) => {
  return (
    <section className="section" style={{ background: "#f7f9ff", minHeight: "80vh" }}>
      <div className="container" style={{ maxWidth: "900px" }}>
        <div
          className="card"
          style={{
            borderRadius: "18px",
            overflow: "hidden",
            background: "#fff",
            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            border: "1px solid #e7ecff",
          }}
        >
          {type === "privacy" && (
            <>
              <div className="pad" style={{ padding: "24px 24px 12px" }}>
                <h1 style={{ margin: 0, color: "var(--ink)", fontWeight: 900, fontSize: "32px" }}>Privacy Policy</h1>
                <p className="muted" style={{ margin: "6px 0 0", color: "var(--muted)" }}>Last updated: April 4, 2026</p>
              </div>

              <div className="pad" style={{ padding: "0 24px 24px", color: "var(--text)", lineHeight: 1.6 }}>
                <p>Big Lake Candy Company (“we,” “us,” or “our”) operates <a href="https://biglakecandy.com" style={{ color: "var(--brand)" }}>https://biglakecandy.com</a> (the “Site”). This Privacy Policy explains how we collect, use, and protect your information when you interact with our website, services, and communications.</p>

                <h3 style={{ margin: "18px 0 8px", color: "var(--ink)", fontWeight: 800 }}>1. Information We Collect</h3>
                <p>We may collect the following information:</p>
                <ul style={{ paddingLeft: "20px" }}>
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Billing and shipping address</li>
                  <li>Order details</li>
                </ul>

                <h3 style={{ margin: "18px 0 8px", color: "var(--ink)", fontWeight: 800 }}>2. How We Use Your Information</h3>
                <p>We use your information to:</p>
                <ul style={{ paddingLeft: "20px" }}>
                  <li>Process and fulfill orders</li>
                  <li>Communicate with you about your orders or inquiries</li>
                  <li>Provide customer support</li>
                  <li>Improve our website and services</li>
                </ul>

                <h3 style={{ margin: "18px 0 8px", color: "var(--ink)", fontWeight: 800 }}>3. SMS Communications</h3>
                <p>By providing your phone number, you consent to receive SMS (text) messages from Big Lake Candy Company related to your inquiries, orders, or services.</p>
                <ul style={{ paddingLeft: "20px" }}>
                  <li>Message frequency may vary</li>
                  <li>Message and data rates may apply</li>
                  <li>You can opt out at any time by replying <strong>STOP</strong></li>
                  <li>For help, reply <strong>HELP</strong> or contact us directly</li>
                </ul>
                <p>We do not share, sell, or rent your mobile information with third parties for marketing purposes.</p>

                <h3 style={{ margin: "18px 0 8px", color: "var(--ink)", fontWeight: 800 }}>4. Sharing of Information</h3>
                <p>We do not sell your personal information. We may share your information with:</p>
                <ul style={{ paddingLeft: "20px" }}>
                  <li>Payment processors (to complete transactions)</li>
                  <li>Shipping providers (to deliver your order)</li>
                  <li>Service providers who help operate our business</li>
                </ul>

                <h3 style={{ margin: "18px 0 8px", color: "var(--ink)", fontWeight: 800 }}>5. Data Security</h3>
                <p>We take reasonable steps to protect your personal information. However, no method of transmission over the internet is 100% secure.</p>

                <h3 style={{ margin: "18px 0 8px", color: "var(--ink)", fontWeight: 800 }}>6. Your Rights</h3>
                <p>You may request to access, correct, or delete your personal data by contacting us.</p>

                <h3 style={{ margin: "18px 0 8px", color: "var(--ink)", fontWeight: 800 }}>7. Third-Party Services</h3>
                <p>We may use third-party tools (such as payment processors or analytics providers) to operate our business. These services have their own privacy policies.</p>

                <h3 style={{ margin: "18px 0 8px", color: "var(--ink)", fontWeight: 800 }}>8. Contact Information</h3>
                <p>
                  <strong>Big Lake Candy Company</strong><br />
                  5632 Hillsboro Road<br />
                  Davisburg, MI 48350<br />
                  United States<br />
                  Phone: <a href="tel:+12482168175" style={{ color: "var(--brand)" }}>248-216-8175</a><br />
                  Email: <a href="mailto:hello@biglakecandy.com" style={{ color: "var(--brand)" }}>hello@biglakecandy.com</a>
                </p>

                <h3 style={{ margin: "18px 0 8px", color: "var(--ink)", fontWeight: 800 }}>9. Updates to This Policy</h3>
                <p>We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised date.</p>
              </div>
            </>
          )}

          {type === "terms" && (
            <>
              <div className="pad" style={{ padding: "24px 24px 12px" }}>
                <h1 style={{ margin: 0, color: "var(--ink)", fontWeight: 900, fontSize: "32px" }}>Terms and Conditions</h1>
                <p className="muted" style={{ margin: "6px 0 0", color: "var(--muted)" }}>Last updated: April 4, 2026</p>
              </div>

              <div className="pad" style={{ padding: "0 24px 24px", color: "var(--text)", lineHeight: 1.6 }}>
                <p>Welcome to Big Lake Candy Company (“we,” “us,” or “our”). By using our website (<a href="https://biglakecandy.com" style={{ color: "var(--brand)" }}>https://biglakecandy.com</a>) and services, you agree to the following terms.</p>

                <h3 style={{ margin: "18px 0 8px", color: "var(--ink)", fontWeight: 800 }}>1. Use of Our Website</h3>
                <p>You agree to use this website for lawful purposes only and not to misuse or interfere with its operation.</p>

                <h3 style={{ margin: "18px 0 8px", color: "var(--ink)", fontWeight: 800 }}>2. Products and Orders</h3>
                <p>We make every effort to ensure product descriptions and pricing are accurate. We reserve the right to refuse or cancel orders at any time.</p>

                <h3 style={{ margin: "18px 0 8px", color: "var(--ink)", fontWeight: 800 }}>3. Payments</h3>
                <p>All payments must be made at the time of purchase. We use secure third-party payment processors.</p>

                <h3 style={{ margin: "18px 0 8px", color: "var(--ink)", fontWeight: 800 }}>4. Shipping and Returns</h3>
                <p>Shipping and return policies are outlined on our website. Please review them before making a purchase.</p>

                <h3 style={{ margin: "18px 0 8px", color: "var(--ink)", fontWeight: 800 }}>5. SMS Communications</h3>
                <p>By providing your phone number, you consent to receive SMS (text) messages from Big Lake Candy Company related to your inquiries, orders, or services.</p>
                <ul style={{ paddingLeft: "20px" }}>
                  <li>Message frequency may vary</li>
                  <li>Message and data rates may apply</li>
                  <li>You can opt out at any time by replying <strong>STOP</strong></li>
                  <li>For assistance, reply <strong>HELP</strong> or contact us directly</li>
                </ul>

                <h3 style={{ margin: "18px 0 8px", color: "var(--ink)", fontWeight: 800 }}>6. Limitation of Liability</h3>
                <p>We are not liable for any indirect, incidental, or consequential damages resulting from the use of our website or products.</p>

                <h3 style={{ margin: "18px 0 8px", color: "var(--ink)", fontWeight: 800 }}>7. Changes to Terms</h3>
                <p>We may update these Terms and Conditions at any time. Updates will be posted on this page.</p>

                <h3 style={{ margin: "18px 0 8px", color: "var(--ink)", fontWeight: 800 }}>8. Contact Information</h3>
                <p>
                  <strong>Big Lake Candy Company</strong><br />
                  5632 Hillsboro Road<br />
                  Davisburg, MI 48350<br />
                  Phone: <a href="tel:+12487836803" style={{ color: "var(--brand)" }}>248-783-6803</a><br />
                  Email: <a href="mailto:hello@biglakecandy.com" style={{ color: "var(--brand)" }}>hello@biglakecandy.com</a>
                </p>
              </div>
            </>
          )}

          {type === "refund" && (
            <>
              <div className="pad" style={{ padding: "24px 24px 12px" }}>
                <h1 style={{ margin: 0, color: "var(--ink)", fontWeight: 900, fontSize: "32px" }}>Refund policy</h1>
              </div>

              <div className="pad" style={{ padding: "0 24px 24px", color: "var(--text)", lineHeight: 1.6 }}>
                <p>We have a 30-day return policy, which means you have 30 days after receiving your item to request a return.</p>

                <p>To be eligible for a return, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You’ll also need the receipt or proof of purchase.</p>

                <p>To start a return, you can contact us at <a href="mailto:hello@biglakecandy.com" style={{ color: "var(--brand)" }}>hello@biglakecandy.com</a>. Please note that returns will need to be sent to the following address: <strong>5632 Hillsboro Road, Davisburg Michigan 48350, United States</strong></p>

                <p>If your return is accepted, we’ll send you a return shipping label, as well as instructions on how and where to send your package. Items sent back to us without first requesting a return will not be accepted.</p>

                <h3 style={{ margin: "18px 0 8px", color: "var(--ink)", fontWeight: 800 }}>Damages and issues</h3>
                <p>Please inspect your order upon reception and contact us immediately if the item is defective, damaged or if you receive the wrong item, so that we can evaluate the issue and make it right.</p>

                <h3 style={{ margin: "18px 0 8px", color: "var(--ink)", fontWeight: 800 }}>Exceptions / non-returnable items</h3>
                <p>Certain types of items cannot be returned, like perishable goods (such as food, flowers, or plants), custom products (such as special orders or personalized items), and personal care goods (such as beauty products). We also do not accept returns for hazardous materials, flammable liquids, or gases. Please get in touch if you have questions or concerns about your specific item.</p>

                <p>Unfortunately, we cannot accept returns on sale items or gift cards.</p>

                <h3 style={{ margin: "18px 0 8px", color: "var(--ink)", fontWeight: 800 }}>Exchanges</h3>
                <p>The fastest way to ensure you get what you want is to return the item you have, and once the return is accepted, make a separate purchase for the new item.</p>

                <h3 style={{ margin: "18px 0 8px", color: "var(--ink)", fontWeight: 800 }}>European Union 14 day cooling off period</h3>
                <p>Notwithstanding the above, if the merchandise is being shipped into the European Union, you have the right to cancel or return your order within 14 days, for any reason and without a justification.</p>

                <h3 style={{ margin: "18px 0 8px", color: "var(--ink)", fontWeight: 800 }}>Refunds</h3>
                <p>We will notify you once we’ve received and inspected your return, and let you know if the refund was approved or not. If approved, you’ll be automatically refunded on your original payment method within 10 business days. Please remember it can take some time for your bank or credit card company to process and post the refund too.<br />If more than 15 business days have passed since we’ve approved your return, please contact us at <a href="mailto:hello@biglakecandy.com" style={{ color: "var(--brand)" }}>hello@biglakecandy.com</a>.</p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
