
import Card from "./Card";
import "./Offer.css" ;

function Offer(){
    return(<div className="Offer">
        <div className="msg">JOIN TODAY</div>
        <div className="Cards"><Card/>
        <Card/>
        <Card/></div>
    </div>)
}

export default Offer ;