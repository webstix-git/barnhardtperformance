import { useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { Phone, Mail, MapPin } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(1, "Phone number is required").max(20),
  service: z.string().min(1, "Please select a service"),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

type FormData = z.infer<typeof contactSchema>;

const serviceOptions = [
  "Engine Building",
  "Engine Tuning",
  "Chassis Dyno Service",
  "Chassis Modifications & Custom Fabrication",
  "Performance Auto Service",
  "Brakes",
  "Suspension Work",
  "Oil Changes & Maintenance",
  "Other",
];

const Contact = () => {
  const router = useRouter();
  const [form, setForm] = useState<FormData>({ name: "", email: "", phone: "", service: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof FormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);
    try {
      await fetch("https://ywwxvriolxwuqcwjaluh.supabase.co/functions/v1/form-submit/ec84ae54-028c-40f3-88c7-63f4dadc7cbe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });
      router.push("/thank-you");
    } catch {
      setSubmitting(false);
    }
  };

  const updateField = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <>
      <section className="container mx-auto px-4 py-8">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">Contact Us</h1>
        <p className="text-muted-foreground mb-8 max-w-2xl">Ready to discuss your next project? Fill out the form below or reach out directly. We'll get back to you as soon as possible.</p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
               <input id="name" type="text" value={form.name} onChange={(e) => updateField("name", e.target.value)} placeholder="Your full name" className="w-full px-4 py-3 bg-card border border-border rounded text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors text-sm" />
              {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email Address *</label>
               <input id="email" type="email" value={form.email} onChange={(e) => updateField("email", e.target.value)} placeholder="you@example.com" className="w-full px-4 py-3 bg-card border border-border rounded text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors text-sm" />
              {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">Phone Number *</label>
               <input id="phone" type="tel" value={form.phone} onChange={(e) => updateField("phone", e.target.value)} placeholder="(555) 123-4567" className="w-full px-4 py-3 bg-card border border-border rounded text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors text-sm" />
              {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
            </div>
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-foreground mb-1.5">Service Interest *</label>
               <select id="service" value={form.service} onChange={(e) => updateField("service", e.target.value)} className="w-full px-4 py-3 bg-card border border-border rounded text-foreground focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors text-sm">
                <option value="">Select a service...</option>
                {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
              {errors.service && <p className="text-destructive text-sm mt-1">{errors.service}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Message *</label>
               <textarea id="message" rows={5} value={form.message} onChange={(e) => updateField("message", e.target.value)} placeholder="Tell us about your project..." className="w-full px-4 py-3 bg-card border border-border rounded text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors resize-none text-sm" />
              {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
            </div>
            <button type="submit" className="w-full px-6 py-3 bg-accent text-accent-foreground font-bold rounded hover:bg-accent/90 transition-colors text-lg">
              Send Message
            </button>
          </form>

          {/* Info & Map */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-heading text-2xl font-bold text-foreground">Get in Touch</h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="text-foreground font-medium">Address</p>
                     <p className="text-muted-foreground text-base">17152 115th St<br />Bloomer, WI 54724</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="text-foreground font-medium">Phone</p>
                     <a href={PHONE_TEL} className="text-muted-foreground hover:text-accent transition-colors text-base">
                       {PHONE_DISPLAY}
                     </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="text-foreground font-medium">Email</p>
                     <a href="mailto:barnhardtperformance@gmail.com" className="text-muted-foreground hover:text-accent transition-colors text-base">barnhardtperformance@gmail.com</a>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">We serve customers within a <strong className="text-foreground">60-mile radius of Bloomer, WI</strong>.</p>
            </div>

            <div className="rounded-lg overflow-hidden border border-border h-64 md:h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2836.5!2d-91.49!3d45.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDA2JzAwLjAiTiA5McKwMjknMjQuMCJX!5e0!3m2!1sen!2sus!4v1"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Barnhardt Performance location"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
