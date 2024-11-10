import NavBar from "./components/NavBar";
import Footer from "./components1/Footer";
import Offer from "./components3/Offer";
import "./Offers.css" ;


function Offers(){

    return(
        <section className="Page1" style={{maxHeight: "100vh" ,
            backgroundColor: "#eeeeee",}}>
            <NavBar/>
            <Offer/>
            <Footer/>

        </section>
    )
}

export default Offers ;