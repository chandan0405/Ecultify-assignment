
import "../css/imgcard.css";
import ImageCard from "./ImageCard";

const HeaderCardContainer = () => {
    return (
        <div className="header-card-container">
            <div className="text-wrapper">
                <h2>Heading</h2>
                <p>Subheading</p>
            </div>
            <div className="card-wrapper">
                {
                    Array(6).fill().map((_, index) => (
                        <ImageCard key={index} />
                    ))
                }
            </div>
        </div>
    )
}

export default HeaderCardContainer;