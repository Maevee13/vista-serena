import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Vista Serena Logo" className="navbar-logo" />
      </div>
      <div className="navbar-links">
        <Link to="/">Inicio</Link>
        <Link to="/reservas">Reservas</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/login">Iniciar Sesión</Link>
      </div>
    </nav>
  );
}

export default Navbar;