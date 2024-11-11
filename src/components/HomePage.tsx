import NavBar from "./NavBar";

import { PopupProvider } from "./PopupContext";
import PopUp from "./PopUp1";

function HomePage() {
  return (
    <PopupProvider>
      <div>
        <NavBar />
      </div>
      <div>
        <h1>Welcome to our website!</h1>
      </div>

      <PopUp />
    </PopupProvider>
  );
}

export default HomePage;
