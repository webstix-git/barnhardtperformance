import PageBreadcrumb from "@/components/PageBreadcrumb";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";

const PrivacyPolicy = () => (
  <>
    <section className="container mx-auto px-4 py-12 max-w-4xl">
      <PageBreadcrumb items={[{ label: "Privacy Policy" }]} />
      <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-3">Privacy Policy</h1>
      <p className="text-muted-foreground text-sm mb-10">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <div>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-3">1. Introduction</h2>
          <p>Barnhardt Performance ("we", "us", or "our") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website or use our services.</p>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-3">2. Information We Collect</h2>
          <p>We may collect information you provide directly to us, such as your name, email address, phone number, vehicle details, and any messages submitted through our contact forms. We may also automatically collect technical data such as IP address, browser type, and pages visited.</p>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-3">3. How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To respond to inquiries and provide quotes for services</li>
            <li>To schedule appointments and communicate about your vehicle</li>
            <li>To improve our website, services, and customer experience</li>
            <li>To comply with legal obligations</li>
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-3">4. Sharing of Information</h2>
          <p>We do not sell or rent your personal information. We may share information with trusted service providers who help us operate our business, or when required by law.</p>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-3">5. Cookies & Tracking</h2>
          <p>Our website may use cookies and similar technologies to enhance your browsing experience and analyze site traffic. You can control cookies through your browser settings.</p>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-3">6. Data Security</h2>
          <p>We implement reasonable security measures to protect your information. However, no method of transmission over the Internet is 100% secure.</p>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-3">7. Your Rights</h2>
          <p>You may request access to, correction of, or deletion of your personal information by contacting us using the details below.</p>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-3">8. Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us:</p>
          <p className="mt-3">
            Barnhardt Performance<br />
            17152 115th St<br />
            Bloomer, WI 54724<br />
            Phone:{" "}
            <a href={PHONE_TEL} className="text-accent hover:underline">
              {PHONE_DISPLAY}
            </a>
            <br />
            Email: <a href="mailto:barnhardtperformance@gmail.com" className="text-accent hover:underline">barnhardtperformance@gmail.com</a>
          </p>
        </div>
      </div>
    </section>
  </>
);

export default PrivacyPolicy;