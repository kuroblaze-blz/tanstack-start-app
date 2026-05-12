import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, X, BookOpen } from "lucide-react";
import page1 from "@/assets/menu/page-1.jpg";
import page2 from "@/assets/menu/page-2.jpg";
import page3 from "@/assets/menu/page-3.jpg";
import page4 from "@/assets/menu/page-4.jpg";
import page5 from "@/assets/menu/page-5.jpg";
import page6 from "@/assets/menu/page-6.jpg";
import page7 from "@/assets/menu/page-7.jpg";
import page8 from "@/assets/menu/page-8.jpg";

type Item = { name: string; price: string; desc?: string };
type Category = { id: string; label: string; tagline: string; items: Item[]; note?: string };

const categories: Category[] = [
  {
    id: "sundaes",
    label: "Sundaes",
    tagline: "Layered, indulgent & made to share.",
    items: [
      { name: "Hot Chocolate Fudge", price: "₹219", desc: "2 scoops fresh vanilla, homemade hot chocolate fudge, cashew nuts & whipped cream." },
      { name: "Brownie Icecream Sundae", price: "₹219", desc: "Vanilla & natural chocolate scoops, hot fudge, walnuts, homemade brownie & whipped cream." },
      { name: "Crunchy Marshmallow Sundae", price: "₹219", desc: "Strawberry & blackcurrant scoops, toasted marshmallows, waffle crunch & sweet sauces." },
      { name: "Fruit & Cream Sundae", price: "₹219", desc: "Pineapple & strawberry scoops, fresh seasonal fruits, fruity sauces & whipped cream." },
      { name: "Cookies & Cream Sundae", price: "₹219", desc: "2 scoops vanilla, hot chocolate fudge, oreo biscuits & whipped cream." },
      { name: "Banana Split", price: "₹239", desc: "Vanilla, strawberry & natural chocolate scoops, fresh banana, nuts, sauces & whipped cream." },
      { name: "Make Your Own Sundae", price: "₹279", desc: "Choose any 2 scoops & 2 toppings." },
    ],
  },
  {
    id: "waffles",
    label: "Belgian Waffles",
    tagline: "Crisp Belgian waffles, freshly pressed.",
    items: [
      { name: "Make Your Own Waffle", price: "₹419", desc: "Crispy Belgian waffle, any base, 2 scoops & 2 toppings of your choice." },
      { name: "Nutella Waffle", price: "₹419", desc: "Choco/vanilla base, scoops of vanilla & Belgian chocolate, chocolate fudge & Nutella." },
      { name: "Fruit & Cream Waffle", price: "₹329", desc: "Red velvet/vanilla base, strawberry & mango scoops, fresh fruits." },
      { name: "Black Forest Waffle", price: "₹299", desc: "Choco/vanilla base, 2 scoops vanilla & chocolate fudge." },
      { name: "Waffle Without Icecream", price: "₹249", desc: "Vanilla base waffle, whipped cream, honey or chocolate fudge topping." },
      { name: "Single Pie (Waffle Only)", price: "₹149" },
      { name: "Waffle Base Upgrade", price: "₹30", desc: "Upgrade to chocolate or red velvet base." },
      { name: "Nutella Add-on", price: "₹80" },
    ],
  },
  {
    id: "icecream",
    label: "Ice Cream",
    tagline: "Scoop or pint — handcrafted naturally.",
    items: [
      { name: "Premium Natural — Kesar Kaju Pista / Fig & Honey / Belgian Chocolate / Lotus Biscoff", price: "₹129 · Pint ₹509" },
      { name: "Natural — Oreo / Kitkat / Natural Chocolate / Choco Chips / Coffee / Paan / Mint & Chips / Salt & Caramel", price: "₹119 · Pint ₹469" },
      { name: "Regular — Tutti Frutti / Pineapple / Black Currant / Bubblegum / Strawberry / Mango", price: "₹89 · Pint ₹349" },
      { name: "Vanilla", price: "₹59 · Pint ₹219" },
      { name: "No Added Sugar — Kesar Kaju Pista", price: "₹139 · Pint ₹549" },
      { name: "No Added Sugar — Chocolate", price: "₹139 · Pint ₹549" },
      { name: "No Added Sugar — Vanilla", price: "₹89 · Pint ₹349" },
      { name: "Add-ons — Waffle Cone / Extra Topping / Whipped Cream", price: "₹20" },
      { name: "Brownie Add-on", price: "₹39" },
    ],
    note: "Pints are 500 ml.",
  },
  {
    id: "shakes",
    label: "Shakes & Lassi",
    tagline: "Slow-blended thick shakes & creamy classics.",
    items: [
      { name: "Thick Shake (No Added Sugar) — Vanilla / Chocolate / Kesar Kaju Pista", price: "₹349" },
      { name: "Thick Shake Natural — Oreo / Kitkat / Chocolate / Choco Chips / Belgian Chocolate / Coffee / Paan / Kesar Kaju Pista / Fig & Honey / Salt & Caramel / Lotus Biscoff", price: "₹299" },
      { name: "Thick Shake — Vanilla / Strawberry / Mango / Pineapple / Tutti Frutti / Bubblegum / Black Currant", price: "₹249" },
      { name: "Milk Shake — Vanilla / Strawberry / Pineapple / Mango / Butterscotch / Tutti Frutti / Black Currant", price: "₹139" },
      { name: "Malai Lassi (Sweet)", price: "₹60" },
      { name: "Premium Lassi — Mango / Dryfruit", price: "₹100" },
    ],
  },
  {
    id: "coffee",
    label: "Coffee & Hot",
    tagline: "Fresh-brewed coffee & cosy beverages.",
    items: [
      { name: "Espresso", price: "₹109" },
      { name: "Americano", price: "₹139" },
      { name: "Cappuccino", price: "₹139" },
      { name: "Latte", price: "₹139" },
      { name: "Macchiato", price: "₹139" },
      { name: "Flat White", price: "₹139" },
      { name: "Mocha", price: "₹149" },
      { name: "Flavoured Latte — Vanilla / Chocolate / Caramel", price: "₹149" },
      { name: "Frappe", price: "₹139" },
      { name: "Iced Americano", price: "₹139" },
      { name: "Iced Latte", price: "₹139" },
      { name: "Affogato (Espresso with Icecream)", price: "₹149" },
      { name: "Affogato Caramel (with Salt & Caramel Icecream)", price: "₹199" },
      { name: "Add-on Espresso Shot", price: "₹59" },
      { name: "Hot Chocolate Milk", price: "₹139" },
      { name: "Caramel Milk", price: "₹139" },
    ],
  },
  {
    id: "snacks",
    label: "Hot Snacks",
    tagline: "Comforting bites to pair with your scoop.",
    items: [
      { name: "Burger (Creamy Veg)", price: "₹139" },
      { name: "Creamy Veg Combo (Burger + Fries + Milkshake/Coffee)", price: "₹299" },
      { name: "Burger (Aloo Patty)", price: "₹89" },
      { name: "Aloo Patty Combo (Burger + Fries + Milkshake/Coffee)", price: "₹249" },
      { name: "Veg Cheese Grilled Sandwich", price: "₹149" },
      { name: "Cheese Sandwich Combo (Sandwich + Fries + Coffee/Milkshake)", price: "₹309" },
      { name: "Veg Grilled Sandwich", price: "₹99" },
      { name: "Veg Sandwich Combo (Sandwich + Fries + Coffee/Milkshake)", price: "₹259" },
      { name: "French Fries", price: "Small ₹69 · Large ₹129" },
      { name: "Peri-Peri Fries", price: "Small ₹89 · Large ₹139" },
      { name: "Extra Cheese Add-on", price: "₹29" },
    ],
  },
  {
    id: "desi",
    label: "Chuski & Kulfi",
    tagline: "Nostalgic Indian classics, done right.",
    items: [
      { name: "Chuski — Kala Khatta / Rainbow / Kachaa Aam / Blue Lagoon / Lemon / Pineapple / Strawberry / Black Currant / Mango / Tutti Frutti", price: "₹69" },
      { name: "Kesri Faluda (Rabri Kulfi Faluda)", price: "₹99" },
      { name: "Tilla Kulfi", price: "₹69", desc: "Slow-cooked condensed milk kulfi with cardamom, coated with almonds." },
    ],
  },
];

const menuPages = [page1, page2, page3, page4, page5, page6, page7, page8];

export function Menu() {
  const [active, setActive] = useState(categories[0].id);
  const [showSlides, setShowSlides] = useState(false);
  const [slide, setSlide] = useState(0);

  const current = useMemo(() => categories.find((c) => c.id === active)!, [active]);

  useEffect(() => {
    if (!showSlides) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowSlides(false);
      if (e.key === "ArrowRight") setSlide((s) => Math.min(s + 1, menuPages.length - 1));
      if (e.key === "ArrowLeft") setSlide((s) => Math.max(s - 1, 0));
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [showSlides]);

  return (
    <section id="menu" className="relative bg-dark-gradient px-6 py-28 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-caramel">The Menu</p>
          <h2 className="mt-3 font-serif text-4xl font-black leading-tight text-cream md:text-5xl">
            Handcrafted scoops, sundaes &amp; <em className="not-italic text-primary text-glow-soft">late-night cravings.</em>
          </h2>
          <p className="mt-5 text-cream/70">
            Browse the full Creamy Singh menu — every item, straight from our cafe in Haridwar.
          </p>

          <div className="mt-7 flex items-center justify-center gap-3">
            <button
              onClick={() => { setShowSlides(true); setSlide(0); }}
              className="inline-flex items-center gap-2 rounded-full bg-pink-gradient px-6 py-3 text-sm font-medium text-primary-foreground shadow-neon-soft transition-smooth hover:shadow-neon"
            >
              <BookOpen className="h-4 w-4" /> View Menu Slideshow
            </button>
          </div>
        </div>

        {/* Category tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-wider transition-smooth ${
                active === c.id
                  ? "border-primary bg-primary/15 text-primary shadow-neon-soft"
                  : "border-border text-cream/70 hover:border-primary/60 hover:text-primary"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Items list */}
        <div key={current.id} className="mt-10 rounded-3xl border border-border bg-card/40 p-6 backdrop-blur md:p-10 animate-fade-up">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-3 border-b border-border pb-5">
            <div>
              <h3 className="font-serif text-3xl font-black text-cream md:text-4xl">{current.label}</h3>
              <p className="mt-1 text-sm text-cream/65">{current.tagline}</p>
            </div>
            {current.note && (
              <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] uppercase tracking-wider text-primary">
                {current.note}
              </span>
            )}
          </div>

          <ul className="grid gap-x-12 gap-y-6 md:grid-cols-2">
            {current.items.map((it) => (
              <li key={it.name} className="group">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-base text-cream transition-smooth group-hover:text-primary">
                    {it.name}
                  </span>
                  <span className="flex-1 translate-y-[-4px] border-b border-dashed border-border/60" />
                  <span className="font-display text-base text-primary text-glow-soft whitespace-nowrap">{it.price}</span>
                </div>
                {it.desc && <p className="mt-1.5 text-xs leading-relaxed text-cream/60">{it.desc}</p>}
              </li>
            ))}
          </ul>

          <p className="mt-8 text-[11px] uppercase tracking-wider text-cream/45">
            * GST extra as applicable. Images on menu are reference only — actual product may vary.
          </p>
        </div>
      </div>

      {/* Slideshow modal */}
      {showSlides && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-background/95 backdrop-blur-xl animate-fade-up">
          <div className="flex items-center justify-between border-b border-border px-6 py-4">
            <div className="font-display text-sm uppercase tracking-[0.25em] text-cream/80">
              Menu · Page {slide + 1} of {menuPages.length}
            </div>
            <button
              onClick={() => setShowSlides(false)}
              aria-label="Close menu slideshow"
              className="rounded-full border border-border p-2 text-cream transition-smooth hover:border-primary hover:text-primary"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="relative flex flex-1 items-center justify-center overflow-hidden p-4 md:p-8">
            <button
              onClick={() => setSlide((s) => Math.max(s - 1, 0))}
              disabled={slide === 0}
              aria-label="Previous page"
              className="absolute left-3 z-10 rounded-full border border-border bg-card/80 p-3 text-cream backdrop-blur transition-smooth hover:border-primary hover:text-primary disabled:opacity-30 md:left-6"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <img
              key={slide}
              src={menuPages[slide]}
              alt={`Creamy Singh menu page ${slide + 1}`}
              className="max-h-full max-w-full rounded-2xl border border-border object-contain shadow-card-soft animate-fade-up"
            />

            <button
              onClick={() => setSlide((s) => Math.min(s + 1, menuPages.length - 1))}
              disabled={slide === menuPages.length - 1}
              aria-label="Next page"
              className="absolute right-3 z-10 rounded-full border border-border bg-card/80 p-3 text-cream backdrop-blur transition-smooth hover:border-primary hover:text-primary disabled:opacity-30 md:right-6"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="border-t border-border px-4 py-3">
            <div className="mx-auto flex max-w-4xl gap-2 overflow-x-auto">
              {menuPages.map((p, i) => (
                <button
                  key={i}
                  onClick={() => setSlide(i)}
                  className={`shrink-0 overflow-hidden rounded-lg border-2 transition-smooth ${
                    i === slide ? "border-primary shadow-neon-soft" : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={p} alt="" className="h-16 w-12 object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}