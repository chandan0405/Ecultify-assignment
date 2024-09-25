
import "../css/about.css";
import Image from '../assets/Image.png';


const AboutCardContainer = () => {
    return (
        <div className="about-container">
            <div className="about-text-wrapper">
                <h2>Heading</h2>
                <p>Subheading</p>
            </div>
            <div className='about-card-contaoner'>
                <img src={Image} alt="image" />
                <div className='content'>
                    <h3>Title</h3>
                    <p>Body text for whatever you’d like to say.
                        Add main takeaway points, quotes, anecdotes, or even a very very short story.
                    </p>
                    <button className='abt-btn'>Button</button>
                </div>
            </div>
            <div className='about-card-contaoner'>
                <img src={Image} alt="image" />
                <div className='content'>
                    <h3>Title</h3>
                    <p>Body text for whatever you’d like to say.
                        Add main takeaway points, quotes, anecdotes, or even a very very short story.
                    </p>
                    <button className='abt-btn'>Button</button>
                </div>
            </div>
            <div className='about-card-contaoner'>
                <img src={Image} alt="image" />
                <div className='content'>
                    <h3>Title</h3>
                    <p>Body text for whatever you’d like to say.
                        Add main takeaway points, quotes, anecdotes, or even a very very short story.
                    </p>
                    <button className='abt-btn'>Button</button>
                </div>
            </div>

        </div>
    )
}

export default AboutCardContainer;