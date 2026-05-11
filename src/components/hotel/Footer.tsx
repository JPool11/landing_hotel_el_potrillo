import { Instagram, Facebook } from "lucide-react";
import logo from "@/assets/hotel/logo.png";

const Footer = () => (
  <footer className="bg-foreground text-background py-16">
    <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-3 gap-10">
      <div>
        <img src={logo} alt="Hotel El Potrillo" className="h-14 w-auto mb-4" />
        <p className="text-sm text-background/70 leading-relaxed max-w-xs">
          Hotel boutique en El Peñol y Guatapé. Confort frente al embalse.
        </p>
      </div>
      <div>
        <h4 className="font-serif text-xl mb-4">Síguenos</h4>
        <div className="flex flex-col gap-3 text-sm">
          <a
            href="https://www.instagram.com/hotel_el_potrillo/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-background/80 hover:text-primary-glow transition"
          >
            <Instagram className="w-4 h-4" /> Instagram
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61570563426559"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-background/80 hover:text-primary-glow transition"
          >
            <Facebook className="w-4 h-4" /> Facebook
          </a>
        </div>
      </div>
      <div className="text-sm text-background/70">
        <h4 className="font-serif text-xl mb-4 text-background">Contacto</h4>
        <p>El Peñol, Antioquia · vía Guatapé</p>
        <p className="mt-2">+57 314 504 2008</p>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-12 pt-6 border-t border-background/15 flex flex-col md:flex-row justify-between gap-3 text-xs text-background/60">
      <p>© {new Date().getFullYear()} Hotel El Potrillo. Todos los derechos reservados.</p>
      <p>
        Powered by{" "}
        <a
          href="https://www.linkedin.com/in/jhan-pool-agudelo-triana-29500a225/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary-glow"
        >
          Jhan Pool Agudelo Triana 
        </a>
        {" | "}
        <a
          href="https://www.jpooltech.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary-glow"
        >
          JPool Tech.
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
