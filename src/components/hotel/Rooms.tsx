import ImageCarousel from "./ImageCarousel";
import h1 from "@/assets/hotel/habitacion1.jpg";
import h2 from "@/assets/hotel/habitacion2.jpg";
import h3 from "@/assets/hotel/habitacion3.jpg";
import h4 from "@/assets/hotel/habitacion4.jpg";
import h5 from "@/assets/hotel/habitacion5.jpg";

const images = [h1, h2, h3, h4, h5];

const Rooms = () => (
  <section id="habitaciones" className="py-24 md:py-36 bg-background">
    <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
      <div className="order-2 lg:order-1">
        <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block">
          01 · Acomodaciones
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 text-balance">
          Habitaciones pensadas para tu <em className="italic text-primary">descanso</em>.
        </h2>
        <div className="space-y-5 text-muted-foreground leading-relaxed">
          <p>
            Espacios acogedores y confortables a orillas del embalse de El Peñol.
            Cada habitación está equipada con todo lo necesario para garantizar tu
            tranquilidad durante la estadía.
          </p>
          <p>
            Contamos con <strong className="text-foreground font-medium">acomodaciones sencillas</strong> para
            viajeros individuales, <strong className="text-foreground font-medium">habitaciones dobles</strong> para
            parejas, y <strong className="text-foreground font-medium">opciones múltiples</strong> ideales para
            familias y grupos de amigos.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-6 pt-8 border-t border-border">
          {[
            { n: "Sencilla", d: "1 huésped" },
            { n: "Doble", d: "2 huéspedes" },
            { n: "Múltiple", d: "3+ huéspedes" },
          ].map((t) => (
            <div key={t.n}>
              <div className="font-serif text-2xl">{t.n}</div>
              <div className="text-xs text-muted-foreground mt-1">{t.d}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="order-1 lg:order-2">
        <ImageCarousel images={images} alt="Habitación Hotel El Potrillo" />
      </div>
    </div>
  </section>
);

export default Rooms;
