import { useEffect } from "react";
import Header from "@/components/hotel/Header";
import Hero from "@/components/hotel/Hero";
import Rooms from "@/components/hotel/Rooms";
import Amenities from "@/components/hotel/Amenities";
import Location from "@/components/hotel/Location";
import Contact from "@/components/hotel/Contact";
import Footer from "@/components/hotel/Footer";
import WhatsAppButton from "@/components/hotel/WhatsAppButton";

const Index = () => {
  useEffect(() => {
    document.title = "Hotel El Potrillo | Hotel en El Peñol y Guatapé";
    const meta =
      document.querySelector('meta[name="description"]') ||
      Object.assign(document.createElement("meta"), { name: "description" });
    meta.setAttribute(
      "content",
      "Hotel boutique en El Peñol y Guatapé. Habitaciones cómodas, piscina, jacuzzi, turco y restaurante a 10 min de la Piedra de El Peñol."
    );
    if (!meta.parentNode) document.head.appendChild(meta);

    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Hotel",
      name: "Hotel El Potrillo",
      address: { "@type": "PostalAddress", addressLocality: "El Peñol", addressRegion: "Antioquia", addressCountry: "CO" },
      telephone: "+57 314 504 2008",
      url: window.location.href,
    });
    document.head.appendChild(ld);
    return () => { document.head.removeChild(ld); };
  }, []);

  return (
    <main>
      <Header />
      <Hero />
      <Rooms />
      <Amenities />
      <Location />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
