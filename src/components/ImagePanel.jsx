
import Image from "../assets/Image.png";
import "../css/header.css";

const ImagePanel = () => {
    return (
        <div className='image-container'>
            <img src={Image} alt="image1" />
            <img src={Image} alt="image2" />
        </div>
    )
}

export default ImagePanel;
