import NavBar from "../components/NavBar";
import PopUp1 from "../components/PopUp1";
import PopUp from "../components/PopUp";
import { PopupProvider } from "../components/PopupContext";
import Products from "./Products";
import "./Shop.css";

function Shop() {
  return (
    <PopupProvider>
      <div className="Shop">
        <NavBar />

        <h1 className="ShopWelcome">WELCOME TO OUR MINI SHOP</h1>
        <p>
          Explore our collection of fitness essentials online, and then visit
          the gym to pick up everything you need. From supplements to equipment,
          all items are in stock and ready for you to grab!
        </p>
        <Products />
        <div style={{ height: "100px" }}></div>
      </div>
      <PopUp />
      <PopUp1 />
    </PopupProvider>
  );
}
export default Shop;
