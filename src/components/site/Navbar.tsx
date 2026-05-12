import { useEffect, useState } from "react";
import logo from "@/assets/creamy-singh-logo.png";

const links = [
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#experience", label: "Cafe" },
  { href: "#reviews", label: "Reviews" },
  { href: "#visit", label: "Visit" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-smooth ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Creamy Singh — Handcrafted Ice Cream"
            className="h-14 w-14 rounded-full bg-cream object-contain p-1 shadow-neon-soft transition-smooth group-hover:scale-110 md:h-16 md:w-16"
            width={64}
            height={64}
          />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-xl font-semibold text-primary text-glow-soft md:text-2xl">
              Creamy Singh
            </span>
            <span className="hidden text-[10px] uppercase tracking-[0.25em] text-cream/60 md:block">
              Handcrafted Icecream Cafe
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-xs font-medium uppercase tracking-[0.18em] text-cream/75 transition-smooth hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#visit"
          className="hidden rounded-full bg-pink-gradient px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-neon-soft transition-smooth hover:shadow-neon md:inline-flex"
        >
          Order Now
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden text-cream"
        >
          <span className="block h-0.5 w-6 bg-current mb-1.5" />
          <span className="block h-0.5 w-6 bg-current mb-1.5" />
          <span className="block h-0.5 w-4 bg-current" />
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl px-6 py-4 animate-fade-up">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm font-medium uppercase tracking-[0.18em] text-cream/80"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#visit"
                onClick={() => setOpen(false)}
                className="inline-block rounded-full bg-pink-gradient px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-neon-soft"
              >
                Order Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}