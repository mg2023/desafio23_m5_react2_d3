import "../assets/css/navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {

  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);

  return (
    <nav className="navbar">
      <div>
        <NavLink className={setActiveClass} to="/"> Logo </NavLink>
      </div>
      <div className="routes">
        <NavLink className={setActiveClass} to="/pokemones"> Home </NavLink>
        <NavLink className={setActiveClass} to="/pokemones"> Pokemones </NavLink>
      </div>
    </nav>
  );
}
