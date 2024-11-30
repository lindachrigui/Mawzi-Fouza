import "./NavBar.css";
import Logo from "../assets/images/Vector.png";
import { useNavigate } from "react-router-dom";
import { usePopup } from "./PopupContext";

function NavBar() {
  const navigate = useNavigate();

  const { togglePopup } = usePopup();
  return (
    <div className="NavBar">
      <header className="d-flex justify-content-between">
        {/* LOGO */}
        <img src="Logo1.png" alt="Logo" />

        {/* LIST */}
        <ul className="nav d-flex justify-content-center">
          <li className="nav-item">
            <a
              className="nav-link custom-link active"
              onClick={() => navigate("/")}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link custom-link" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link custom-link"
              onClick={() => navigate("/Offers")}
            >
              Offers
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link custom-link"
              onClick={() => navigate("/Guide")}
            >
              Guide
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link custom-link"
              onClick={() => navigate("/MiniShop")}
            >
              Mini-Shop
            </a>
          </li>
        </ul>

        {/* JOIN US BUTTON */}
        <button className="custom-button" onClick={togglePopup}>
          Join Now
        </button>
      </header>
    </div>
  );
}
export default NavBar;
