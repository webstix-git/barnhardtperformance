

# Barnhardt Performance Website - Implementation Plan

## Phase 1: Foundation & Global Components
- **Theme & Colors**: Update CSS variables to dark navy (#0F2144) primary, grey (#7F8388) secondary, with light text for contrast
- **Layout Component**: Shared layout with Header, Footer, ScrollToTop button, and Breadcrumbs
- **Header/Navigation**: Logo left, nav links right, Services dropdown listing all service pages, mobile hamburger menu
- **Footer**: Contact info, quick links, Facebook link, veteran-owned badge

## Phase 2: Home Page (1200+ words)
- Full-width hero with uploaded car images, bold headline ("Built for Power. Driven by Precision."), dual CTAs
- About snapshot section — veteran-owned, 20+ years experience
- Featured services cards (Engine Building, Tuning, Chassis Modifications)
- "Why Choose Us" trust badges section
- Gallery preview (6 images linking to gallery)
- Testimonials section with hardcoded Google reviews
- CTA banner + contact info bar

## Phase 3: About Us Page
- Founding story, values, veteran-owned emphasis
- Shop photos throughout
- "Our Approach" relationship-building section

## Phase 4: Services Pages
- **Services Overview**: Grid of all services with links
- **8 Individual Service Pages** (800+ words each, breadcrumbs, relevant photos, CTAs):
  - Engine Building
  - Engine Tuning / Fuel Injection & Carburetor Tuning
  - Chassis Dyno Service
  - Chassis Modifications & Custom Fabrication
  - Performance Auto Service (transmission, general)
  - Brakes
  - Suspension Work
  - Oil Changes & Maintenance

## Phase 5: Gallery, Testimonials, FAQ
- **Gallery**: Masonry grid with lightbox modal, all uploaded images
- **Testimonials**: Styled review cards + link to Google Maps
- **FAQ**: Accordion with all items open by default

## Phase 6: Contact & Thank You
- **Contact Page**: Zod-validated form (name, email, phone, service dropdown, message), Google Maps embed, address/phone/email, service area info
- **Thank You Page**: Confirmation message with links back

## Design Notes
- Dark backgrounds (#0F2144), bold white text, grey (#7F8388) accents
- Performance/race language only — no "repair" terminology
- All uploaded images used as heroes, gallery items, service visuals
- 16px minimum body font, high-contrast CTAs, hover effects on all interactive elements
- Fully responsive across desktop, tablet, mobile
- SEO meta tags on every page

