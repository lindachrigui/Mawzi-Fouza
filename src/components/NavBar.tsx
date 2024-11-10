import "./NavBar.css";
import Logo from "../assets/images/Vector.png";
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();
  return (
    <header className="d-flex justify-content-between">
      {/* LOGO */}
      <img src={Logo} alt="Logo" />

      {/* LIST */}
      <ul className="nav d-flex justify-content-center">
        <li className="nav-item">
          <a className="nav-link custom-link active" onClick={()=>navigate("/")}>
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link custom-link" href="#">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link custom-link" onClick={()=>navigate("/Offers")}>
           Offers
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link custom-link" onClick={()=>navigate("/Guide")}>
            Guide
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link custom-link" href="#">
            Plans
          </a>
        </li>
      </ul>

      {/* JOIN US BUTTON */}
      <button className="custom-button">Join Now</button>
    </header>
  );
}
export default NavBar;
