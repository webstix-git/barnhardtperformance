"use client";

import Link from "next/link";
import PageBreadcrumb from "./PageBreadcrumb";
import { ArrowRight, Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";

interface ContentBlock {
  type: "text";
  heading: string;
  paragraphs: string[];
  list?: {label: string;text: string;}[];
}

interface TwoColBlock {
  type: "two-col";
  heading: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  imagePosition: "left" | "right";
  list?: {label: string;text: string;}[];
  whiteBg?: boolean;
}

export type ServiceBlock = ContentBlock | TwoColBlock;

interface ServicePageProps {
  title: string;
  metaDescription?: string;
  heroImage: string;
  breadcrumbLabel: string;
  blocks: ServiceBlock[];
}

const RenderList = ({ list }: {list: {label: string;text: string;}[];}) =>
<ul className="space-y-3 mt-4">
    {list.map((item, i) =>
  <li key={i} className="flex gap-3">
        <span className="mt-1.5 h-2 w-2 rounded-full bg-accent flex-shrink-0" />
        <span><strong className="text-gray-900">{item.label}:</strong> <span className="text-gray-700">{item.text}</span></span>
      </li>
  )}
  </ul>;


const ServicePageTemplate = ({ title, heroImage, breadcrumbLabel, blocks }: ServicePageProps) =>
<>
    {/* Hero */}
    <section className="relative h-64 md:h-80 overflow-hidden">
      <img src={heroImage} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-background/70 flex items-center">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">{title}</h1>
        </div>
      </div>
    </section>

    <PageBreadcrumb items={[{ label: "Services", path: "/services" }, { label: breadcrumbLabel }]} />

    {/* Content Blocks */}
    {blocks.map((block, i) => {
    if (block.type === "two-col") {
      const isWhite = block.whiteBg !== false;
      const imgEl =
      <div>
            <img src={block.image} alt={block.imageAlt} className="rounded-lg w-full h-80 md:h-96 object-cover" />
          </div>;

      const contentEl =
      <div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-5">{block.heading}</h2>
            {block.paragraphs.map((p, j) =>
        <p key={j} className="text-gray-700 mb-4 leading-relaxed">{p}</p>
        )}
            {block.list && <RenderList list={block.list} />}
          </div>;


      return (
        <section key={i} className={`${isWhite ? "bg-white" : ""} py-16`}>
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {block.imagePosition === "left" ? <>{imgEl}{contentEl}</> : <>{contentEl}{imgEl}</>}
              </div>
            </div>
          </section>);

    }

    // Text block
    return (
      <section key={i} className="pb-[30px] pt-[30px] border py-[50px] my-0 border-gray-200/[0.02]">
          <div className="container mx-auto max-w-4xl px-0">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-5 py-0">{block.heading}</h2>
            {block.paragraphs.map((p, j) =>
          <p key={j} className="text-foreground/90 mb-4 leading-relaxed">{p}</p>
          )}
            {block.list &&
          <ul className="space-y-3 mt-4">
                {block.list.map((item, j) =>
            <li key={j} className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                    <span><strong className="text-foreground">{item.label}:</strong> <span className="text-foreground/80">{item.text}</span></span>
                  </li>
            )}
              </ul>
          }
          </div>
        </section>);

  })}

    {/* CTA */}
    <section className="relative py-20 overflow-hidden">
      <img src="/images/hero-3.jpeg" alt="Performance vehicle" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-background/85" />
      <div className="relative container mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
        <p className="text-foreground/80 mb-8 max-w-xl mx-auto leading-relaxed">
          Whether you have questions about our {breadcrumbLabel.toLowerCase()} services or you're ready to schedule an appointment, we're here to help.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-bold rounded text-lg hover:bg-accent/90 transition-colors">
            Get a Quote <ArrowRight className="h-5 w-5" />
          </Link>
          <a href={PHONE_TEL} className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-foreground/30 text-foreground font-bold rounded text-lg hover:border-accent hover:text-accent transition-colors">
            <Phone className="h-5 w-5" /> {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  </>;


export default ServicePageTemplate;