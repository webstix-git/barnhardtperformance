import { Star, ExternalLink } from "lucide-react";

const reviews = [
{ name: "Mike R.", text: "Trent and his team are top-notch. Had my engine rebuilt and the power difference is night and day. Honest, professional, and the quality of work is outstanding. Highly recommend Barnhardt Performance!", rating: 5 },
{ name: "Jason T.", text: "Best performance shop in the area, hands down. They tuned my fuel injection system and the results on the dyno were incredible. These guys know what they're doing and they stand behind their work.", rating: 5 },
{ name: "Sarah K.", text: "As someone who was nervous about finding a trustworthy shop, Barnhardt Performance exceeded my expectations. They explained everything clearly, delivered on time, and the craftsmanship is excellent.", rating: 5 },
{ name: "Brandon L.", text: "Had custom chassis work done and a roll cage installed. The fabrication quality is second to none. You can tell Trent takes real pride in his work. Will definitely be back for more upgrades.", rating: 5 },
{ name: "Chris M.", text: "Brought my truck in for a full engine build. Communication was great the whole way through, no surprises, and the final result was even better than I expected. These guys are the real deal.", rating: 5 },
{ name: "David P.", text: "Professional, honest, and incredibly skilled. My car runs better than it ever has after their tuning service. Barnhardt Performance is the only shop I trust with my vehicles now.", rating: 5 }];


const Testimonials = () =>
<>
    <section className="container mx-auto px-4 py-8">
      <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">What Our Customers Say</h1>
      <p className="text-muted-foreground mb-8 max-w-2xl">Don't just take our word for it. Here's what our customers have to say about their experience with Barnhardt Performance.</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {reviews.map((r, i) =>
      <div key={i} className="bg-card border border-border rounded-lg p-6">
            <div className="flex gap-1 mb-3">
              {Array.from({ length: r.rating }).map((_, j) =>
          <Star key={j} className="h-4 w-4 fill-accent text-accent" />
          )}
            </div>
            <p className="text-foreground/80 leading-relaxed mb-4 italic text-lg">"{r.text}"</p>
            <p className="text-accent font-semibold text-base">{r.name}</p>
          </div>
      )}
      </div>

      <div className="text-center">
        <a href="https://maps.app.goo.gl/9ASdEfFz7o2G4agN7" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-bold rounded hover:bg-accent/90 transition-colors">
          See More Reviews on Google <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </section>
  </>;


export default Testimonials;