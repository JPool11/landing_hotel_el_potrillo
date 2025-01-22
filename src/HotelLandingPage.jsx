import React, { useState, useEffect } from "react";
import "./HotelLandingPage.css";

const HotelLandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentAmenitiesSlide, setCurrentAmenitiesSlide] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const images = [
    "/images/habitacion1.jpg",
    "/images/habitacion2.jpg",
    "/images/habitacion3.jpg",
    "/images/habitacion4.jpg",
    "/images/habitacion5.jpg",
  ];

  const amenitiesImages = [
    "/images/piscina.jpg",
    "/images/piscina1.jpg",
    "/images/piscina2.jpg",
    "/images/restaurante1.jpg",
    "/images/desayuno.jpg",
    "/images/almuerzo.jpg",
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  const nextAmenitiesSlide = () => {
    setCurrentAmenitiesSlide((prevSlide) => (prevSlide + 1) % amenitiesImages.length);
  };

  const prevAmenitiesSlide = () => {
    setCurrentAmenitiesSlide(
      (prevSlide) => (prevSlide - 1 + amenitiesImages.length) % amenitiesImages.length
    );
  };

  // Cambiar automáticamente el slider de la galería
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Cambia cada 3 segundos
    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  // Cambiar automáticamente el slider de las amenidades
  useEffect(() => {
    const interval = setInterval(nextAmenitiesSlide, 3000); // Cambia cada 3 segundos
    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <nav className="navbar">
          <div className="navbar-container">
            <h1 className="navbar-logo">
              <img src="/images/logo.png" alt="Hotel El Potrillo | hotel en El Peñol y Guatapé" />
            </h1>
            <ul className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
              <li><a href="#habitaciones">Habitaciones</a></li>
              <li><a href="#amenidades">Amenidades</a></li>
              <li><a href="#contacto">Contáctanos</a></li>
            </ul>
            <a
              href="https://wa.me/+573145042008?text=¡Hola!%20Estoy%20interesado%20en%20hacer%20una%20reserva%20en%20el%20Hotel%20El%20Potrillo.%20%F0%9F%8C%9F%20Por%20favor,%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n.%20%C2%A1Gracias!%20%F0%9F%98%8A"
              className="whatsapp-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              ¡Reserva ahora! 📲
            </a>
            <button className="hamburger-menu" onClick={toggleMenu}>
              ☰
            </button>
          </div>
        </nav>
      </header>

      {/* SEO Introduction */}
      <section className="seo-introduction">
        <h1>Hotel en El Peñol y Guatapé | Hotel El Potrillo</h1>
        <p>
          Bienvenido al <strong>Hotel El Potrillo</strong>, ubicado en el corazón del embalse de El Peñol - Guatapé, a tan solo 10 minutos de la icónica <strong>Piedra de El Peñol</strong>. Somos la elección perfecta para quienes buscan <strong>hoteles en El Peñol</strong> y <strong>hoteles en Guatapé</strong>, ofreciendo una experiencia única de confort, sabor y hospitalidad.
        </p>
        <p>
          Descubre nuestras <strong>habitaciones cómodas</strong> y servicios de primer nivel, que incluyen:
        </p>
        <p>
          <ul>
            <li><strong>Piscina</strong> 🏊‍♂️</li>
            <li><strong>Turco</strong> 🧖‍♂️</li>
            <li><strong>Jacuzzi</strong> 💦</li>
            <li><strong>Restaurante</strong> con una exquisita variedad gastronómica 🍽️</li>
          </ul>
        </p>
        <p>
          Ideal para <strong>escapadas románticas</strong>, <strong>vacaciones familiares</strong>, o <strong>viajes de negocios</strong>. Nuestro hotel en El Peñol es el lugar perfecto para relajarte, disfrutar de un <strong>día de sol</strong>, y desconectarte del estrés diario. ¡Reserva ahora y vive una experiencia inolvidable!
        </p>
      </section>


      {/* Photo Gallery */}
      <section className="photo-gallery">
          <div className="slider-text">
            <h2>Habitaciones | Acomodaciones Sencillas, Dobles y Múltiples</h2>
            <p>
              Descubre nuestras <strong>habitaciones</strong>, diseñadas para ofrecerte un <strong>descanso placentero</strong> en un ambiente acogedor y confortable. En el <strong>Hotel El Potrillo</strong>, nos aseguramos de brindarte la tranquilidad y comodidad que necesitas durante tu estadía en el <strong>embalse de El Peñol</strong>.
            </p>
            <p>
              Contamos con <strong>acomodaciones sencillas</strong> ideales para viajeros individuales, <strong>habitaciones dobles</strong> perfectas para parejas, y <strong>opciones múltiples</strong> para familias o grupos de amigos. Cada habitación está equipada con todo lo necesario para garantizar tu confort.
            </p>
            <p>
              Ya sea que estés buscando <strong>hoteles en El Peñol</strong> para una escapada romántica, un <strong>día de sol</strong> con tu familia, o una estadía relajante con amigos, nuestras habitaciones son la elección perfecta para ti.
            </p>
          </div>
          <div className="slider">
            <button className="prev-button" onClick={prevSlide}>&lt;</button>
            <img
              src={images[currentSlide]}
              alt= "Habitaciones con multiples acomodaciones en Hotel El Potrillo en El Peñol y Guatapé"
              className="slider-image"
            />
            <button className="next-button" onClick={nextSlide}>&gt;</button>
          </div>
      </section>

      {/* Amenities */}
      <section className="amenities">
        <div className="slider-amenities">
          <button className="prev-button" onClick={prevAmenitiesSlide}>&lt;</button>
          <img
            src={amenitiesImages[currentAmenitiesSlide]}
            alt= "Hotel El Potrillo - El Peñol - Guatapé, piscina, jacuzzi, turco, restaurante, bar, zona de descanso."
            className="slider-image-amenities"
          />
          <button className="next-button" onClick={nextAmenitiesSlide}>&gt;</button>
        </div>
        <div className="slider-text-amenities">
          <h2>Descubre las Amenidades del Hotel El Potrillo | Piscina, Restaurante y Más</h2>
          <p>
            En el <strong>Hotel El Potrillo</strong>, ofrecemos una amplia gama de <strong>amenidades</strong> diseñadas para brindarte una experiencia inolvidable en el <strong>embalse de El Peñol</strong>. Disfruta de servicios de primera categoría y espacios perfectos para relajarte, compartir y disfrutar de tus vacaciones.
          </p>
          <ul>
            <li><strong>Restaurante</strong> 🍽️: Saborea una exquisita variedad gastronómica con platos típicos y opciones internacionales, preparados con ingredientes frescos y locales.</li>
            <li><strong>Piscina</strong> 🏊‍♂️: Relájate en nuestra piscina al aire libre, perfecta para disfrutar del sol y las vistas impresionantes de la naturaleza.</li>
            <li><strong>Turco</strong> 🧖‍♂️: Renueva tu cuerpo y mente en nuestro baño turco, ideal para desconectarte del estrés y revitalizarte.</li>
            <li><strong>Jacuzzi</strong> 💦: Sumérgete en la comodidad de nuestro jacuzzi, un espacio diseñado para tu máximo confort y relajación.</li>
          </ul>
          <p>
            Ya sea que estés planeando un <strong>día de sol</strong>, una escapada romántica o unas vacaciones familiares, nuestras <strong>amenidades</strong> harán de tu estadía una experiencia única. ¡Ven y vive la hospitalidad y el confort que solo el <strong>Hotel El Potrillo</strong> puede ofrecer!
          </p>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="map">
        <h2>Encuéntranos</h2>
        <div>
          Estamos ubicados en el municipio de El Peñol Antioquia, via Guatapé, <a href="https://www.google.com/maps/place/Hotel+El+Potrillo/@6.2279514,-75.2553029,17z/data=!3m1!4b1!4m9!3m8!1s0x8e441e75b912fb45:0x717f335e2e4b25fd!5m2!4m1!1i2!8m2!3d6.2279514!4d-75.2553029!16s%2Fg%2F11l0ft7n1z?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D"> ¡Somos Hotel el Potrillo!</a>
        </div>
        <div id="google-map-placeholder">
          {/* Aquí se puede insertar el script de Google Maps */}
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact">
        <div className="contact-text">
          <h2>¿Eres una agencia de viajes o planeas hospedar un grupo en El Peñol o Guatapé?</h2>
          <p>
            Contáctanos para obtener información detallada sobre <strong>Hotel El Potrillo</strong>. Te proporcionaremos todos los detalles que necesitas: <strong>precios competitivos</strong>, disponibilidad de <strong>habitaciones cómodas</strong>, servicios exclusivos, y mucho más. 
            Disfruta de nuestra <strong>hospitalidad única</strong> y vive una experiencia inolvidable en el corazón de <strong>El Peñol</strong> y <strong>Guatapé</strong>.
          </p>
          <p>
            Puedes escribirnos fácilmente por medio de nuestro formulario de contacto o directamente por <a href="https://wa.me/573145042008?text=Hola,%20me%20gustaría%20cotizar%20la%20estadía%20para%20un%20grupo%20o%20agencia" target="_blank" className="whatsapp">
              <i className="fab fa-whatsapp"></i> WhatsApp
            </a>.
          </p>
          <p>
            ¡Estamos listos para brindarte una gran experiencia!
          </p>
        </div>
        <div className="contact-form">
          <h2>Contáctanos</h2>
          <form>
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Mensaje:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Enviar</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        {/* Redes sociales */}
        <div className="social-media">
          <p>Síguenos en nuestras redes sociales y entérate de nuestras promociones y eventos.</p>
          <p>
            <a
              href="https://www.instagram.com/hotel_el_potrillo/"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </p>
          <p>
            <a
              href="https://www.facebook.com/profile.php?id=61570563426559"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
          </p>
        </div>
        <div className="social-media">
          <p>&copy; 2024 Hotel El Potrillo. Todos los derechos reservados.</p>
          <p>
            Powered by:{" "}
            <a
              href="https://www.linkedin.com/in/jhan-pool-agudelo-triana-29500a225/"
              target="_blank"
              rel="noopener noreferrer"
              className="power-by"
            >
              Jhan Pool A. Triana
            </a>.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HotelLandingPage;
