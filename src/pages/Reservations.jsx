import "../styles/Reservations.css";
import lobby from '../assets/lobby.jpg';
import sencilla from '../assets/sencilla.jpg';
import suite from '../assets/suite.jpg';
import luxury from '../assets/luxury.jpg';
import RoomCard from '../components/RoomCard';


const habitaciones = [
  {
    id: 1,
    nombre: "Habitación Sencilla",
    precio: 199,
    huespedes: 2,
    camas: 1,
    imagen: sencilla,
  },
  {
    id: 2,
    nombre: "Suite",
    precio: 299,
    huespedes: 3,
    camas: 2,
    imagen: suite,
  },
  {
    id: 3,
    nombre: "Luxury",
    precio: 499,
    huespedes: 4,
    camas: 2,
    imagen: luxury,
  },
];

// Componente principal
function Reservations() {
  return (
    <div className="reservations-container">
      {/* Banner principal */}
      <div
        className="lobby-section"
        style={{ backgroundImage: `url(${lobby})` }}
      >
        <div className="lobby-overlay">
          <h1 className="lobby-title">Habitaciones</h1>
        </div>
      </div>

      {/* Calendario */}
      <div className="calendar-section">
        <input type="date" />
        <input type="date" />
        <input type="number" placeholder="Huéspedes" min="1" />
        <button className="check-btn">Ver disponibilidad</button>
      </div>

      {/* Grid de habitaciones */}
      <section className="rooms-grid">
        {habitaciones.map((habitacion) => (
          <RoomCard key={habitacion.id} {...habitacion} />
        ))}
      </section>
    </div>
  );
}

export default Reservations;