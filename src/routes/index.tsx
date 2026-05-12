import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Menu } from "@/components/site/Menu";
import { Reviews } from "@/components/site/Reviews";
import { Experience } from "@/components/site/Experience";
import { Visit } from "@/components/site/Visit";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Creamy Singh — Handcrafted Ice Cream Cafe in Haridwar" },
      {
        name: "description",
        content:
          "Creamy Singh is Haridwar's premium handcrafted ice cream cafe. Brownie sundaes, Belgian waffles, thick shakes & late-night cravings. Open daily 9 AM – 1 AM.",
      },
      { property: "og:title", content: "Creamy Singh — Handcrafted Ice Cream Cafe" },
      {
        property: "og:description",
        content:
          "Premium handcrafted desserts in Haridwar. Loved by 1,673+ dessert lovers. Open daily 9 AM – 1 AM.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Experience />
      <Reviews />
      <Visit />
      <Footer />
    </main>
  );
}
