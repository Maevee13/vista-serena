import React from 'react'
import "../styles/Auth.css";
import leaves from '../assets/leaves.jpg';

function SignUp() {
  return (
    <div className="auth-container">
      <div className="auth-left" style={{ backgroundImage: `url(${leaves})` }}>
        <div className="auth-text">
          <h1>¡Bienvenido!</h1>
          <p>Regístrate para comenzar tu experiencia en Vista Serena.</p>
        </div>
      </div>
      <div className="auth-right">
        <h2>Crear cuenta</h2>
        <form>
          <input type="text" placeholder="Nombre completo" required />
          <input type="email" placeholder="Correo electrónico" required />
          <input type="password" placeholder="Contraseña" required />
          <input type="password" placeholder="Repetir contraseña" required />
          <button type="submit">Registrarse</button>
        </form>
        <p>¿Ya tienes una cuenta? <a href="/login">Inicia sesión aquí</a></p>
      </div>
    </div>
  );
}

export default SignUp;