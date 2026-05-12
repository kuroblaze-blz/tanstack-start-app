import logo from "@/assets/creamy-singh-logo.png";
import { Phone, Mail, MapPin } from "lucide-react";

const PHONE_DISPLAY = "+91 79009 73154";
const PHONE_TEL = "+917900973154";
const EMAIL = "info@creamysingh.com";
const ADDRESS = "Himalya Depot Building, Near Lalita Rao Bridge, Railway Road, Haridwar";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-6 py-16 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="Creamy Singh logo" className="h-14 w-14 rounded-full bg-cream object-contain p-1 shadow-neon-soft" width={56} height={56} />
            <div>
              <div className="font-display text-xl text-primary text-glow-soft">Creamy Singh</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-cream/55">Handcrafted Icecream Cafe</div>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/65">
            Haridwar's premium handcrafted ice cream cafe. Sundaes, waffles, shakes &amp; late-night cravings — open daily 9 AM to 1 AM.
          </p>
        </div>

        <div>
          <div className="font-display text-sm uppercase tracking-[0.2em] text-cream">Visit</div>
          <ul className="mt-4 space-y-3 text-sm text-cream/70">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-primary" /><span>{ADDRESS}</span></li>
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-primary" /><a className="transition-smooth hover:text-primary" href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a></li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-primary" /><a className="transition-smooth hover:text-primary" href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
          </ul>
        </div>

        <div />
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-cream/50 md:flex-row">
        <p>© {new Date().getFullYear()} Creamy Singh · Handcrafted Icecream Cafe · Haridwar</p>
        <p>Crafted with ♥ in Uttarakhand</p>
      </div>
    </footer>
  );
}