import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  images: string[];
  alt: string;
  autoplay?: boolean;
}

const ImageCarousel = ({ images, alt, autoplay = true }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    if (autoplay) {
      const id = setInterval(() => emblaApi.scrollNext(), 4500);
      return () => {
        clearInterval(id);
        emblaApi.off("select", onSelect);
      };
    }
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, autoplay]);

  return (
    <div className="relative group">
      <div className="overflow-hidden shadow-elegant" ref={emblaRef}>
        <div className="flex">
          {images.map((src, i) => (
            <div key={src} className="flex-[0_0_100%] min-w-0">
              <img
                src={src}
                alt={`${alt} — ${i + 1}`}
                className="w-full h-[420px] md:h-[560px] object-cover"
                loading={i === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => emblaApi?.scrollPrev()}
        aria-label="Anterior"
        className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-background/80 backdrop-blur flex items-center justify-center hover:bg-background transition opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => emblaApi?.scrollNext()}
        aria-label="Siguiente"
        className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-background/80 backdrop-blur flex items-center justify-center hover:bg-background transition opacity-0 group-hover:opacity-100"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Ir a imagen ${i + 1}`}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-1 transition-all ${
              i === selected ? "w-8 bg-background" : "w-4 bg-background/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
