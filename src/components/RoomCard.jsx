import './RoomCard.css';

function RoomCard({ nombre, precio, huespedes, camas, imagen }) {
  return (
    <div className="room-card">
      <img src={imagen} alt={nombre} className="room-image" />
      <div className="room-details">
        <h3>{nombre}</h3>
        <p>Desde ${precio} / noche</p>
        <p>Huéspedes: {huespedes}</p>
        <p>Camas: {camas}</p>
        <button className="room-button">Reservar</button>
      </div>
    </div>
  );
}

export default RoomCard;