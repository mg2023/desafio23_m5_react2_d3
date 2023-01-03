import "../assets/css/navbar.css";
import { NavLink } from "react-router-dom";
import logo from  "../assets/img/gps-pokemon.png"

export default function Navbar() {

  // Requerimiento n1: Asignar una clase active a la ruta que el usuario consulte usando NavLink (3 Puntos)
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "disabled");

  return (
    <div className="navbar">
      <div>
        <NavLink  to="/"> <img src={logo} width="50" height="50" alt="logo GPS pokemon" /> </NavLink>
      </div>
      <div className="links">
        <NavLink className={setActiveClass} to="/"> Home </NavLink>
        <NavLink className={setActiveClass} to="/pokemones"> Pokemones </NavLink>
      </div>
    </div>
  );
}
