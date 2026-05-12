import scoop from "@/assets/hero-scoop.png";
import { Star } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-hero pt-28 pb-20"
    >
      {/* floating blobs */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-primary/25 blur-[100px] animate-float" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-[340px] w-[340px] rounded-full bg-accent/20 blur-[100px] animate-float" style={{ animationDelay: "-3s" }} />
      <div className="pointer-events-none absolute left-1/3 top-1/3 h-[220px] w-[220px] rounded-full bg-primary-glow/20 blur-[80px] animate-float" style={{ animationDelay: "-5s" }} />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 md:px-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="text-center lg:text-left">
          <p className="animate-fade-up text-xs font-medium uppercase tracking-[0.35em] text-caramel">
            Haridwar · Since the first scoop
          </p>
          <h1
            className="animate-fade-up mt-6 font-display text-[clamp(3rem,9vw,7rem)] font-semibold leading-[0.95] text-cream"
            style={{ animationDelay: "0.15s" }}
          >
            Handcrafted{" "}
            <span className="block text-primary text-glow">Happiness.</span>
            <span className="block">In every scoop.</span>
          </h1>
          <p
            className="animate-fade-up mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/70 md:text-lg lg:mx-0"
            style={{ animationDelay: "0.3s" }}
          >
            A premium dessert lounge serving handcrafted ice creams, brownie sundaes, waffles
            and late-night cravings — born and loved in Haridwar.
          </p>

          <div
            className="animate-fade-up mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            style={{ animationDelay: "0.45s" }}
          >
            <a
              href="#menu"
              className="rounded-full bg-pink-gradient px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-neon transition-smooth hover:-translate-y-0.5"
            >
              Explore Menu
            </a>
            <a
              href="#visit"
              className="rounded-full border border-border bg-card/40 px-7 py-3.5 text-sm font-medium text-cream backdrop-blur transition-smooth hover:border-primary hover:text-primary"
            >
              Visit Cafe
            </a>
          </div>

          <div
            className="animate-fade-up mt-10 flex flex-wrap items-center justify-center gap-6 lg:justify-start"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-caramel text-caramel" />
                ))}
              </div>
              <span className="text-sm font-medium text-cream">4.8</span>
              <span className="text-xs text-cream/60">· 1,673+ reviews</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-cream/70">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              Open Daily · 9 AM – 1 AM
            </div>
          </div>
        </div>

        <div className="relative mx-auto hidden lg:block">
          <div className="absolute inset-0 rounded-full bg-primary/30 blur-[120px]" />
          <img
            src={scoop}
            alt="Handcrafted pink ice cream scoop"
            className="relative h-auto w-[420px] animate-float drop-shadow-[0_30px_60px_rgba(255,45,120,0.45)]"
            width={1024}
            height={1280}
          />
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-cream/60"
      >
        Scroll
        <span className="block h-12 w-px bg-gradient-to-b from-primary to-transparent animate-scroll-pulse" />
      </a>
    </section>
  );
}