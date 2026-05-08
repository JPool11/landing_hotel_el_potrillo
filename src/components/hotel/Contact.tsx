import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const WHATSAPP_URL =
  "https://wa.me/573145042008?text=Hola,%20me%20gustar%C3%ADa%20cotizar%20una%20estad%C3%ADa%20en%20Hotel%20El%20Potrillo.";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola, soy ${form.name} (${form.email}). ${form.message}`;
    window.open(`https://wa.me/573145042008?text=${encodeURIComponent(text)}`, "_blank");
    toast({ title: "Mensaje listo", description: "Te redirigimos a WhatsApp." });
  };

  return (
    <section id="contacto" className="py-24 md:py-36 bg-secondary/40">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <div>
          <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block">
            04 · Contacto
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 text-balance">
            ¿Agencia o grupo? <em className="italic text-primary">Hablemos</em>.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Escríbenos para cotizar tu estadía o un grupo en El Peñol o Guatapé.
            Te brindamos precios competitivos, disponibilidad y todos los detalles.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground text-sm tracking-[0.2em] uppercase hover:bg-primary-glow transition"
          >
            WhatsApp directo
          </a>
        </div>

        <form onSubmit={onSubmit} className="bg-background p-8 md:p-10 shadow-soft space-y-5">
          <div>
            <label className="text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
              Nombre
            </label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-primary transition"
            />
          </div>
          <div>
            <label className="text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
              Correo
            </label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-primary transition"
            />
          </div>
          <div>
            <label className="text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
              Mensaje
            </label>
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-primary transition resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-4 px-8 py-4 bg-foreground text-background text-sm tracking-[0.2em] uppercase hover:bg-primary transition"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
