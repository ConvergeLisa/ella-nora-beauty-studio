import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Gallery } from "@/components/site/Gallery";
import { Booking } from "@/components/site/Booking";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { StickyCta } from "@/components/site/StickyCta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ella Nora Beauty & Aesthetics — Premium Beauty Studio, Kempton Park" },
      {
        name: "description",
        content:
          "Premium beauty & aesthetics studio in Birch Acres, Kempton Park. Lashes, brows, skin, nails, waxing & hair. Book your Ella Nora experience today.",
      },
      { property: "og:title", content: "Ella Nora Beauty & Aesthetics" },
      {
        property: "og:description",
        content:
          "A luxury beauty studio in Kempton Park — personalised treatments, calm atmosphere, results you'll love.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background text-foreground antialiased">
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <StickyCta />
    </div>
  );
}
