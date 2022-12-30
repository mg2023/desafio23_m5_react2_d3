import "../assets/css/navbar.css";
import { NavLink } from "react-router-dom";
import logo from  "../assets/img/gps-pokemon.png"

export default function Navbar() {

  const setActiveClass = ({ isActive }) => (isActive ? "active" : "disabled");

  return (
    <div className="navbar">
      <div>
        <NavLink  to="/"> <img src={logo} width="50" height="50" alt="logo GPS pokemon" /> </NavLink>
      </div>
      <div>
        <NavLink className={setActiveClass} to="/"> Home </NavLink>
        <NavLink className={setActiveClass} to="/pokemones"> Pokemones </NavLink>
      </div>
    </div>
  );
}
