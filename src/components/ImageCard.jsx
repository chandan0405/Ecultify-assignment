import '../css/imgcard.css';
import Image from "../assets/Image.png";


const ImageCard = () => {
    return (
        <div className="img-card-container">
            <img src={Image} alt="Image" className='card-image' />
            <h3>Title</h3>
            <p>Body text for whatever you’d
                like to say. Add main takeaway points,
                quotes, anecdotes, or even a very very short story. </p>
        </div>
    )
}

export default ImageCard