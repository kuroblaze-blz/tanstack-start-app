import { useEffect, useState } from "react";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const PHONE_DISPLAY = "+91 79009 73154";
const PHONE_TEL = "+917900973154";
const EMAIL = "info@creamysingh.com";
const ADDRESS = "Himalya Depot Building, Near Lalita Rao Bridge, Railway Road, Haridwar";

export function Visit() {
  const [open, setOpen] = useState<boolean | null>(null);
  useEffect(() => {
    const compute = () => {
      const h = new Date().getHours();
      setOpen(h >= 9 || h < 1);
    };
    compute();
    const id = setInterval(compute, 60_000);
    return () => clearInterval(id);
  }, []);
  return (
    <section id="visit" className="relative px-6 py-28 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-caramel">Visit Us</p>
          <h2 className="mt-3 font-serif text-4xl font-black leading-tight text-cream md:text-5xl">
            Come say <em className="not-italic text-primary text-glow-soft">hi</em> in Haridwar.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="overflow-hidden rounded-3xl border border-border shadow-card-soft">
            <iframe
              title="Creamy Singh location"
              src="https://www.google.com/maps?q=Creamy+Singh+Himalya+Depot+Building+Lalita+Rao+Bridge+Railway+Road+Haridwar&output=embed"
              loading="lazy"
              className="h-[420px] w-full"
            />
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl border border-border bg-card/60 p-6 backdrop-blur">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${open ? "bg-emerald-400" : "bg-destructive"}`} />
                  <span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${open ? "bg-emerald-400" : "bg-destructive"}`} />
                </span>
                <span className="text-xs font-medium uppercase tracking-wider text-cream/80">
                  {open ? "Open Now" : "Closed"}
                </span>
              </div>
              <div className="mt-4 flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <div className="font-display text-cream">Open Daily</div>
                  <div className="text-sm text-cream/70">9:00 AM — 1:00 AM</div>
                </div>
              </div>
              <div className="mt-4 flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <div className="font-display text-cream">Location</div>
                  <div className="text-sm text-cream/70">{ADDRESS}</div>
                </div>
              </div>
              <div className="mt-4 flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <div className="font-display text-cream">Call us</div>
                  <a href={`tel:${PHONE_TEL}`} className="text-sm text-cream/70 transition-smooth hover:text-primary">{PHONE_DISPLAY}</a>
                </div>
              </div>
              <div className="mt-4 flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <div className="font-display text-cream">Email</div>
                  <a href={`mailto:${EMAIL}`} className="text-sm text-cream/70 transition-smooth hover:text-primary">{EMAIL}</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}