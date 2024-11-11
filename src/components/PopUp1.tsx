import "./PopUp1.css";
import { usePopup } from "./PopupContext";
import { PopupProvider } from "./PopupContext";

function PopUp1() {
  const { isPopupVisible, closePopup } = usePopup();

  if (!isPopupVisible) return null;

  return (
    <div className="PopUp">
      <div className="Form">
        <button
          className="close-button"
          onClick={closePopup}
          aria-label="Close popup"
        >
          ✕
        </button>
        <div className="Head">
          <img src="./logo.png" alt="logo" />
          <div className="bouttons">
            <a className="boutton1">Member</a>
            <a className="boutton2">Staff</a>
          </div>
        </div>
        <div className="Form1">
          <h1>Sign up</h1>
          <p>Join us by filling out the information below</p>
          <form className="sign-up-form">
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              required
            />

            <input type="text" id="cin" placeholder="Enter your CIN" required />

            <input type="text" id="username" placeholder="User Name" required />

            <input
              type="tel"
              id="phone"
              placeholder="Contact Number"
              required
            />

            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />

            <div className="birthdate-sex">
              <input
                type="date"
                id="birthdate"
                placeholder="Birth Date"
                required
              />
              <input type="text" id="sex" placeholder="Sex" required />
            </div>

            <div className="have-account">
              Have an account? <a href="#">Sign in</a>
            </div>

            <button type="submit" className="submit-button">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PopUp1;
