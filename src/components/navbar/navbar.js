import { NavLink } from "react-router-dom";
import "../navbar/navbar.style.css";
export function Navbar() {
  return (
    <nav className="nabar rounded-pill  mb-4">
      <div className="brand">BOULJIHEL</div>
      <input type="checkbox" id="toggler" />
      <label className="text-light fs-2" htmlFor="toggler">
        <i className="bi bi-list"></i>
      </label>
      <div className="menu">
        <ul className="m-0 p-0 list">
          <li>
            <NavLink to="/"  className={({ isActive }) => (isActive ? "NavLink-active" : "")}>ABOUT ME</NavLink>
          </li>
          <li>
            <NavLink to="/resume"  className={({ isActive }) => (isActive ? "NavLink-active" : "")}>RESUME</NavLink>
          </li>
          <li>
            <NavLink to="/projects"  className={({ isActive }) => (isActive ? "NavLink-active" : "")}>PROJECTS</NavLink>
          </li>
          <li>
            <NavLink to="/contact"  className={({ isActive }) => (isActive ? "NavLink-active" : "")}>CONTACT</NavLink>
          </li>
          <li>
            <NavLink to="/contact"  className={({ isActive }) => (isActive ? "NavLink-active" : "")}>BLOG</NavLink>
          </li>
        </ul>
      </div>
    </nav>
    
  );
}
