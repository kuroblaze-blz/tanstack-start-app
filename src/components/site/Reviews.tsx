import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Aarav Sharma",
    role: "Local Guide · Haridwar",
    text: "Best handcrafted ice cream in Haridwar! The brownie sundae is absolutely unreal and the vibe is so cozy.",
  },
  {
    name: "Priya Verma",
    role: "Dessert lover",
    text: "Perfect late-night dessert place. We came at 11 PM and the waffles were freshly made. So good!",
  },
  {
    name: "Rohan Kapoor",
    role: "Foodie",
    text: "Premium presentation, beautiful lighting and the friendliest staff. A must-visit if you're in Haridwar.",
  },
  {
    name: "Neha Singh",
    role: "Family visit",
    text: "Brought my kids here and they loved every scoop. Clean, modern and the flavors are next level.",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="relative px-6 py-28 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-end gap-10 md:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-caramel">Loved Locally</p>
            <h2 className="mt-3 font-serif text-4xl font-black leading-tight text-cream md:text-5xl">
              <em className="not-italic text-primary text-glow-soft">1,673+</em> happy dessert lovers.
            </h2>
          </div>
          <div className="flex items-center gap-4 md:justify-end">
            <div className="font-display text-6xl text-primary text-glow">4.8</div>
            <div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-caramel text-caramel" />
                ))}
              </div>
              <p className="mt-1 text-xs uppercase tracking-wider text-cream/60">Google Reviews</p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="group relative rounded-3xl border border-border bg-card/60 p-6 backdrop-blur transition-smooth hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-neon-soft"
            >
              <Quote className="h-7 w-7 text-primary/60" />
              <blockquote className="mt-4 text-sm leading-relaxed text-cream/80">"{r.text}"</blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <div className="font-display text-base text-cream">{r.name}</div>
                <div className="text-xs text-cream/55">{r.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}