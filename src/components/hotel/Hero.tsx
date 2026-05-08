import banner from "@/assets/hotel/banner.jpg";

const Hero = () => (
  <section id="top" className="relative h-screen min-h-[640px] w-full overflow-hidden">
    <img
      src={banner}
      alt="Hotel El Potrillo en El Peñol y Guatapé"
      className="absolute inset-0 w-full h-full object-cover scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/20 to-foreground/80" />

    <div className="relative h-full flex flex-col items-center justify-end pb-24 md:pb-32 px-6 text-center text-background">
      <span className="text-xs md:text-sm tracking-[0.4em] uppercase mb-6 opacity-90">
        El Peñol · Guatapé · Antioquia
      </span>
      <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] text-balance max-w-5xl">
        Un refugio frente al embalse,
        <br />
        <em className="italic text-primary-glow">a tu medida.</em>
      </h1>
      <p className="mt-8 max-w-xl text-base md:text-lg opacity-90 font-light">
        Hotel El Potrillo · A 10 minutos de la Piedra de El Peñol.
        Habitaciones cómodas, piscina, jacuzzi, turco y restaurante.
      </p>
      <a
        href="#habitaciones"
        className="mt-12 inline-flex items-center px-10 py-4 border border-background/60 text-sm tracking-[0.25em] uppercase hover:bg-background hover:text-foreground transition-all duration-500"
      >
        Descubrir
      </a>
    </div>
  </section>
);

export default Hero;
