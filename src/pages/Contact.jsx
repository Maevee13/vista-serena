import "../styles/Contact.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <header className="contact-hero">
        <div className="overlay">
          <h1>Contáctanos</h1>
          <p>Estamos aquí para ayudarte</p>
        </div>
      </header>

      <section className="contact-info">
        <h2>Nuestra ubicación</h2>
        <p>54 Berrick 2nd Street, Boston, MA02115, Estados Unidos</p>
        <button className="map-btn">Ver en el mapa</button>
        <div className="info-boxes">
          <div>
            <h3>Llámanos</h3>
            <p>+1 815 641 5000</p>
          </div>
          <div>
            <h3>Correo electrónico</h3>
            <p>info@vistaserena.com</p>
          </div>
          <div>
            <h3>Línea gratuita</h3>
            <p>+1 800 641 1234</p>
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <h2>Escríbenos un mensaje</h2>
        <form className="contact-form">
          <input type="text" placeholder="Tu nombre" required />
          <input type="email" placeholder="Correo electrónico" required />
          <input type="text" placeholder="Número de teléfono" />
          <select>
            <option>Consulta general</option>
            <option>Reservas</option>
            <option>Eventos</option>
          </select>
          <textarea placeholder="Mensaje" rows="5"></textarea>
          <button type="submit">Enviar mensaje</button>
        </form>
      </section>
    </div>
  );
}
