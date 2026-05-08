import { MapPin } from "lucide-react";

const Location = () => (
  <section id="ubicacion" className="py-24 md:py-36 bg-background">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block">
          03 · Ubicación
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-balance">
          Frente al embalse, <em className="italic text-primary">a tu alcance</em>.
        </h2>
        <p className="text-muted-foreground">
          El Peñol, Antioquia · vía Guatapé. A 10 minutos de la icónica Piedra de El Peñol.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-0 shadow-elegant overflow-hidden">
        <div className="lg:col-span-2 aspect-[16/10] lg:aspect-auto">
          <iframe
            title="Hotel El Potrillo en Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.539!2d-75.2553029!3d6.2279514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e441e75b912fb45%3A0x717f335e2e4b25fd!2sHotel%20El%20Potrillo!5e0!3m2!1ses!2sco!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: 420 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="bg-foreground text-background p-10 lg:p-12 flex flex-col justify-center">
          <MapPin className="w-7 h-7 text-primary-glow mb-6" />
          <h3 className="font-serif text-3xl mb-4">Hotel El Potrillo</h3>
          <p className="text-background/80 mb-8 leading-relaxed">
            Municipio de El Peñol, Antioquia
            <br />
            Vía Guatapé
          </p>
          <a
            href="https://www.google.com/maps/place/Hotel+El+Potrillo/@6.2279514,-75.2553029,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-background/40 text-sm tracking-[0.2em] uppercase hover:bg-background hover:text-foreground transition-all"
          >
            Cómo llegar
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Location;
