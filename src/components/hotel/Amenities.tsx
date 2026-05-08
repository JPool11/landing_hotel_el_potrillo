import ImageCarousel from "./ImageCarousel";
import { Waves, UtensilsCrossed, Sparkles, Droplets } from "lucide-react";
import p1 from "@/assets/hotel/piscina.jpg";
import p2 from "@/assets/hotel/piscina1.jpg";
import p3 from "@/assets/hotel/piscina2.jpg";
import r1 from "@/assets/hotel/restaurante1.jpg";
import d1 from "@/assets/hotel/desayuno.jpg";
import a1 from "@/assets/hotel/almuerzo.jpg";

const images = [p1, p2, p3, r1, d1, a1];

const items = [
  { icon: Waves, name: "Piscina", desc: "Al aire libre con vistas a la naturaleza." },
  { icon: UtensilsCrossed, name: "Restaurante", desc: "Platos típicos e ingredientes locales." },
  { icon: Sparkles, name: "Turco", desc: "Renueva cuerpo y mente." },
  { icon: Droplets, name: "Jacuzzi", desc: "Relajación de máximo confort." },
];

const Amenities = () => (
  <section id="amenidades" className="py-24 md:py-36 bg-secondary/40">
    <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
      <ImageCarousel images={images} alt="Amenidades Hotel El Potrillo" />

      <div>
        <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block">
          02 · Amenidades
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 text-balance">
          Todo lo necesario para <em className="italic text-primary">desconectar</em>.
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-10">
          Una experiencia completa pensada para que cada momento de tu estadía sea
          memorable, frente al embalse de El Peñol.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((it) => (
            <div
              key={it.name}
              className="p-6 bg-background border border-border hover:shadow-soft transition-shadow"
            >
              <it.icon className="w-6 h-6 text-primary mb-4" />
              <h3 className="font-serif text-xl mb-1">{it.name}</h3>
              <p className="text-sm text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Amenities;
