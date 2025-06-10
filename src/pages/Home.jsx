import "../styles/Home.css";
import lobby from '../assets/lobby.jpg';
import room from '../assets/room.jpg';
import pool from '../assets/pool.jpg';
import food from '../assets/food.jpg';

export default function Home() {
  return (
    <div className="home-container">
      {/* Encabezado principal */}
      <header className="home-lobby">
        <img src={lobby} alt="Vista del lobby" className="lobby-image" />
        <div className="lobby-text">
          <h1>Bienvenido a Vista Serena</h1>
          <p>Tu lugar ideal para descansar y reconectar con la naturaleza.</p>
          <button>Conócenos</button>
        </div>
      </header>

      {/* Galería */}
      <section className="gallery-section">
        <h2>Disfruta cada rincón</h2>
        <div className="gallery">
          <img src="/src/assets/room.jpg" alt="room" />
          <img src="/src/assets/pool.jpg" alt="pool" />
          <img src="/src/assets/food.jpg" alt="food" />
        </div>
        <button className="book-button">Reservar habitación</button>
      </section>
    </div>
  );
}
