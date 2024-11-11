import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Offer from "./componentsOffers/Offer";
import "./Offers.css";
import { PopupProvider } from "./components/PopupContext";
import PopUp from "./components/PopUp";
import "./components/PopUp.css";
import PopUp1 from "./components/PopUp1";

function Offers() {
  return (
    <section
      className="Page1"
      style={{ maxHeight: "100vh", backgroundColor: "#eeeeee" }}
    >
      <PopupProvider>
        <NavBar />

        <Offer />
        <Footer />

        <PopUp1 />
      </PopupProvider>
    </section>
  );
}

export default Offers;
