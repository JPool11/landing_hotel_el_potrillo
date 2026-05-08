import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/hotel/logo.png";

const links = [
  { href: "#habitaciones", label: "Habitaciones" },
  { href: "#amenidades", label: "Amenidades" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#contacto", label: "Contacto" },
];

const WHATSAPP_URL =
  "https://wa.me/+573145042008?text=%C2%A1Hola!%20Estoy%20interesado%20en%20hacer%20una%20reserva%20en%20el%20Hotel%20El%20Potrillo.";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="Hotel El Potrillo" className="h-12 w-auto" />
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-sm tracking-wide uppercase transition-colors ${
                  scrolled ? "text-foreground" : "text-background"
                } hover:text-primary-glow`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center px-6 py-2.5 bg-primary text-primary-foreground text-sm tracking-wide uppercase hover:bg-primary-glow transition-colors duration-300"
        >
          Reservar
        </a>

        <button
          aria-label="Abrir menú"
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 ${scrolled || open ? "text-foreground" : "text-background"}`}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <ul className="flex flex-col p-6 gap-5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-foreground text-sm uppercase tracking-wide"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-primary text-primary-foreground text-sm uppercase tracking-wide"
              >
                Reservar por WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
