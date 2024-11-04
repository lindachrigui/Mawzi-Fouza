import "./NavBar.css";
import Logo from "../assets/images/Vector.png";

function NavBar() {
  return (
    <header className="d-flex justify-content-between">
      {/* LOGO */}
      <img src={Logo} alt="Logo" />

      {/* LIST */}
      <ul className="nav d-flex justify-content-center">
        <li className="nav-item">
          <a className="nav-link custom-link active" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link custom-link" href="#">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link custom-link" href="#">
            Trainers
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link custom-link" href="#">
            Review
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
