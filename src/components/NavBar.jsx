import "./NavBar.style.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-container">
      <Link to="/">
        <img className="logo" src="src/assets/Logo.svg" alt="Logo" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/reservations">Reservations</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
