import "./NavBar.css";
import Logo from "../assets/images/Vector.png";

function NavBar() {
  return (
    <div className="NavBar">
      <header className="d-flex justify-content-between">
        {/* LOGO */}
        <img src="Logo1.png" alt="Logo" />

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
              Offers
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link custom-link" href="#">
              Guide
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link custom-link" href="#">
              Mini-Shop
            </a>
          </li>
        </ul>

        {/* JOIN US BUTTON */}
        <button className="custom-button">Join Now</button>
      </header>
    </div>
  );
}
export default NavBar;
