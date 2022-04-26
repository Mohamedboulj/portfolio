import { Link } from "react-router-dom";
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
            <Link to="/">ABOUT ME</Link>
          </li>
          <li>
            <Link to="/resume">RESUME</Link>
          </li>
          <li>
            <Link to="/projects">PROJECTS</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
          <li>
            <Link to="/contact">BLOG</Link>
          </li>
        </ul>
      </div>
    </nav>
    
  );
}
