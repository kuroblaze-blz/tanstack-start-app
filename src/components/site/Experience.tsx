import storefront from "@/assets/shop-counter-main.jpg";
import interior from "@/assets/shop-seating.jpg";
import counter from "@/assets/shop-counter-2.jpg";
import cone from "@/assets/shop-cone.jpg";

export function Experience() {
  return (
    <section id="experience" className="relative bg-dark-gradient px-6 py-28 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-caramel">The Cafe</p>
          <h2 className="mt-3 font-serif text-4xl font-black leading-tight text-cream md:text-5xl">
            A neon-lit dessert lounge for <em className="not-italic text-primary text-glow-soft">every craving.</em>
          </h2>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3 md:grid-rows-2">
          <div className="relative overflow-hidden rounded-3xl md:row-span-2 group">
            <img src={storefront} alt="Creamy Singh dessert counter" loading="lazy" className="h-full min-h-[420px] w-full object-cover transition-smooth group-hover:scale-105" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background to-transparent p-6">
              <div className="font-display text-xl text-cream">The dessert counter</div>
              <p className="text-sm text-cream/70">Where every scoop is plated to order.</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl group">
            <img src={interior} alt="Cosy Creamy Singh cafe seating" loading="lazy" className="h-full min-h-[200px] w-full object-cover transition-smooth group-hover:scale-105" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-4">
              <div className="font-display text-cream">Cosy seating</div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl group">
            <img src={counter} alt="Menu wall behind the counter" loading="lazy" className="h-full min-h-[200px] w-full object-cover transition-smooth group-hover:scale-105" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-4">
              <div className="font-display text-cream">Lit-up menu wall</div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl md:col-span-2 grid grid-cols-[1fr_1.2fr]">
            <img src={cone} alt="Signature waffle cone with toppings" loading="lazy" className="h-full w-full object-cover" />
            <div className="relative bg-pink-gradient p-6">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/80">Open Daily</p>
            <div className="mt-3 font-display text-3xl text-white md:text-4xl">9:00 AM — 1:00 AM</div>
            <p className="mt-2 text-white/85">Late-night cravings welcome.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}