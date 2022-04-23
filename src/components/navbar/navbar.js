import { Link } from "react-router-dom"
import "../navbar/navbar.style.css"
export function Navbar(){
    return(
        <nav className="rounded-pill  mb-4">
            <span>MOHAMED BOULJIHEL</span>
            <ul className="m-0 p-0 menu">
                <li><Link to="/">ABOUT ME</Link></li>
                <li><Link to="/resume">RESUME</Link></li>
                <li><Link to="/projects">PROJECTS</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
                <li><Link to="/contact">BLOG</Link></li>
            </ul>
        </nav>
    )
}