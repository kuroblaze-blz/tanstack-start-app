import counter from "@/assets/shop-counter-main.jpg";

export function About() {
  return (
    <section id="about" className="relative px-6 py-28 md:px-10">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div className="relative">
          <div className="overflow-hidden rounded-[200px_200px_32px_32px] border border-primary/20 shadow-card-soft aspect-[4/5]">
            <img
              src={counter}
              alt="Inside the Creamy Singh ice cream counter"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-6 flex h-28 w-28 animate-spin-slow items-center justify-center rounded-full bg-pink-gradient text-center shadow-neon">
            <div className="font-display text-[10px] uppercase leading-tight tracking-wider text-primary-foreground">
              Hand<br/>crafted<br/>with ♥
            </div>
          </div>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-caramel">
            Our Story
          </p>
          <h2 className="mt-3 font-serif text-4xl font-black leading-tight text-cream md:text-5xl">
            A Haridwar favorite for <em className="not-italic text-primary text-glow-soft">unforgettable flavors.</em>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-cream/75">
            Born from a passion for handcrafted desserts and unforgettable late-night
            cravings, Creamy Singh has become one of Haridwar's most loved ice cream cafes.
            Every scoop is prepared with care, creativity and premium ingredients —
            creating moments that feel joyful, nostalgic and worth sharing.
          </p>
          <p className="mt-4 text-base leading-relaxed text-cream/75">
            Cozy interiors, neon-lit corners and signature creations make it the perfect
            spot for families, friends and late-night dessert lovers.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {[
              { num: "4.8★", label: "Google Rating" },
              { num: "1.6K+", label: "Happy Reviews" },
              { num: "16h", label: "Open Daily" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-primary/15 bg-primary/5 p-5 text-center transition-smooth hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/10"
              >
                <div className="font-display text-2xl text-primary text-glow-soft">{s.num}</div>
                <div className="mt-1 text-[10px] uppercase tracking-wider text-cream/60">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}