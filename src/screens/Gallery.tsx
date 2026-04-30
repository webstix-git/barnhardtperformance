"use client";

import { useState } from "react";
import { X } from "lucide-react";

const images = [
  "/images/hero-1.jpeg", "/images/hero-2.jpg", "/images/hero-3.jpeg",
  "/images/gallery-1.jpeg", "/images/gallery-2.jpeg", "/images/gallery-3.jpeg",
  "/images/gallery-4.jpeg", "/images/gallery-5.jpeg", "/images/gallery-6.jpeg",
  "/images/gal1.jpeg", "/images/gal2.jpeg", "/images/gal3.jpeg", "/images/gal4.jpeg",
  "/images/gal5.jpeg", "/images/gal6.jpeg",
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      <section className="container mx-auto px-4 py-8">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">Gallery</h1>
        <p className="text-muted-foreground mb-8 max-w-2xl">A look at the custom builds, performance upgrades, and precision craftsmanship that define Barnhardt Performance.</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <button key={i} onClick={() => setLightbox(src)} className="group block w-full overflow-hidden rounded-lg">
              <img src={src} alt={`Barnhardt Performance project ${i + 1}`} className="w-full h-64 md:h-72 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-[100] bg-background/95 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-foreground/80 hover:text-foreground" onClick={() => setLightbox(null)}>
            <X className="h-8 w-8" />
          </button>
          <img src={lightbox} alt="Full size" className="max-w-full max-h-[90vh] object-contain rounded" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  );
};

export default Gallery;
