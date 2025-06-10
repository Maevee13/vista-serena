import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reservations from './pages/Reservations';
import Contact from './pages/Contact';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp'; 
import Navbar from './components/Navbar';

// Importaciones de estilos CSS desde styles/
import './styles/Home.css';
import './styles/Reservations.css';
import './styles/Contact.css';
import './styles/Auth.css'; // LogIn y SignUp comparten estilos

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservas" element={<Reservations />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;