import Logo from "../assets/logo.svg";
import "../css/footer.css";
import Twitter from "../assets/twitter.svg";
import Linkedin from "../assets/Linkedin.svg"
import Instagram from "../assets/instagram.svg"
import Youtube from "../assets/youtube.svg";

const Footer = () => {
    return (
        <div className="f-container">
            <div className="social-link-container">
                <img src={Logo} alt="logo" />
                <div className="social-link">
                    <img src={Twitter} alt="twitter" className="social-img"/>
                    <img src={Linkedin} alt="Linkedin" className="social-img"/>
                    <img src={Instagram} alt="instagram" className="social-img" />
                    <img src={Youtube} alt="youtube" className="social-img"/>
                </div>
            </div>
            <div className="service">
                <div className="link-card use-case">
                    <h4>Use cases</h4>
                    <ul>
                        <li>UI design</li>
                        <li>UX design</li>
                        <li>Wireframing</li>
                        <li>Diagramming</li>
                        <li>Brainstorming</li>
                        <li>Online whiteboard</li>
                        <li>Team collaboration</li>
                    </ul>
                </div>
                <div className="link-card explore">
                    <h4>Explore</h4>
                    <ul>
                        <li>Design</li>
                        <li>Prototyping</li>
                        <li>Development features</li>
                        <li>Design systems</li>
                        <li>Collaboration features</li>
                        <li>Design process</li>
                        <li>FigJam</li>
                    </ul>
                </div>
                <div className=" link-card resources">
                    <h4>Resources</h4>
                    <ul>
                        <li>Blog</li>
                        <li>Best practices</li>
                        <li>Colors</li>
                        <li>Color wheel</li>
                        <li>Support</li>
                        <li>Developers</li>
                        <li>Resource library</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer