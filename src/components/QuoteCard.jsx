import AvtarURL from "../assets/Avatar.png";
import "../css/quote.css";

const QuoteCard = () => {
    return (
        <div className="quote-container">
            <q>Quote</q>
            <div className="avtar-container">
                <img src={AvtarURL} alt="avtar" />
                <div className="title-container">
                    <h4>Title</h4>
                    <p>Description</p>
                </div>
            </div>
        </div>
    )
}

export default QuoteCard;