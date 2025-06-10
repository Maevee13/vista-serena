import "../styles/Auth.css";
import leaves from '../assets/leaves.jpg';

function Login() {
  return (
    <div className="auth-container">
      <div className="auth-left" style={{ backgroundImage: `url(${leaves})` }}>
        <div className="auth-text">
          <h1>Bienvenido de nuevo</h1>
          <p>Inicia sesión para continuar con tus reservas.</p>
        </div>
      </div>
      <div className="auth-right">
        <h2>Iniciar sesión</h2>
        <form>
          <input type="email" placeholder="Correo electrónico" required />
          <input type="password" placeholder="Contraseña" required />
          <button type="submit">Entrar</button>
        </form>
        <p>¿No tienes cuenta? <a href="/signup">Regístrate aquí</a></p>
      </div>
    </div>
  );
}

export default Login;