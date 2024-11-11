import "./PopUp.css";
import { usePopup } from "./PopupContext";
import { PopupProvider } from "./PopupContext";

function PopUp() {
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
          <h1>Sign in</h1>
          <p>un essage quelcoque sui affiche</p>
          <form className="sign-in-form">
            <input type="email" id="email" placeholder="mail" required />

            <input
              type="password"
              id="password"
              placeholder="Password"
              required
            />

            <div className="keep-logged-in">
              <input type="checkbox" id="keep-logged-in" />
              <label htmlFor="keep-logged-in">Keep me logged in</label>
            </div>

            <div className="create-account">
              Need an account? <a href="#">Create one</a>
            </div>

            <button type="submit" className="submit-button">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default PopUp;
