import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavLink>
      <NavLink
        to="/product"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Product
      </NavLink>
      <NavLink
        to="/detail"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Detail
      </NavLink>
    </nav>
  );
}

export default Header;
