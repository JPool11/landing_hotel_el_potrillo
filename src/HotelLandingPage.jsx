import React, { useState, useEffect } from "react";
import "./HotelLandingPage.css";
// Importa la imagen de fondo del banner
import bannerImage from './images/banner.jpg';  // Asegúrate de que la ruta de la imagen es correcta

const HotelLandingPage = () => {
  // Estado para la imagen activa del slider
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array de las imágenes de la galería
  const images = [
    "/images/habitacion1.jpg",
    "/images/habitacion2.jpg",
    "/images/habitacion3.jpg",
  ];

  // Función para ir a la siguiente imagen
  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Función para ir a la imagen anterior
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    // Asegúrate de que el API de Google Maps esté cargado correctamente
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
      <div className="landing-page">
        {/* Header con imagen como banner */}
      <header className="header">
        {/* Barra de navegación */}
        <nav className="navbar">
          <div className="navbar-container">
          <h1 className="navbar-logo">
            <img src="/images/logo.png" alt="Hotel El Potrillo" />
          </h1>
            <ul className="navbar-links">
              <li><a href="#habitaciones">Habitaciones</a></li>
              <li><a href="#amenidades">Amenidades</a></li>
              <li><a href="#contacto">Contáctanos</a></li>
              <li>
                <a
                  href="https://wa.me/+573145042008?text=¡Hola!%20Estoy%20interesado%20en%20hacer%20una%20reserva%20en%20el%20Hotel%20El%20Potrillo.%20%F0%9F%8C%9F%20Por%20favor,%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n.%20%C2%A1Gracias!%20%F0%9F%98%8A"
                  className="whatsapp-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ¡Reserva por WhatsApp! 📲
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Photo Gallery con slider */}
      <section className="photo-gallery">
        <h2>Habitaciones</h2>
        <div className="slider">
          <img src={images[currentIndex]} alt={`Habitación ${currentIndex + 1}`} className="slider-image" />
          <div className="slider-controls">
            <button className="prev-button" onClick={prevImage}>❮</button>
            <button className="next-button" onClick={nextImage}>❯</button>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="amenities">
        <h2>Amenidades</h2>
        <ul>
          <li>Piscina 🏊‍♂️</li>
          <li>Turco 🧖‍♂️</li>
          <li>Jacuzzi 💦</li>
          <li>Restaurante 🍽️</li>
        </ul>
      </section>

      {/* Contact Form */}
      <section className="contact-form">
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
      </section>

      {/* Google Maps Section */}
      <section className="map">
        <h2>Encuéntranos</h2>
        <div id="google-map-placeholder">
          <gmpx-api-loader key="YOUR_API_KEY" solution-channel="GMP_QB_locatorplus_v11_cABD"></gmpx-api-loader>
          <gmpx-store-locator map-id="DEMO_MAP_ID"></gmpx-store-locator>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Hotel El Potrillo. Todos los derechos reservados.</p>

        {/* Redes sociales */}
        <div className="social-media">
          <a
            href="https://www.instagram.com/hotel_el_potrillo/" // Reemplaza con tu Instagram
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram 📸
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61570563426559" // Reemplaza con tu Facebook
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook 👍
          </a>
        </div>
      </footer>
    </div>
  );
};

export default HotelLandingPage;
