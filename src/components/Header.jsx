import { useState } from "react";
import Logo from "../assets/logo.svg";
import "../css/header.css";
import { FaBars } from "react-icons/fa";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [isActive, setIsActive] = useState("Products");

    const handleNavClick = (item) => {
        setIsActive(item);
    };

    return (
        <>
            <div className='header-container'>
                <img src={Logo} alt="logo" className="logo" />
                <nav className='navigation-container'>
                    <ul className="nav-option">
                        {["Products", "Solutions", "Communities", "Resources", "Pricing", "Contacts"].map((item) => (
                            <li
                                key={item}
                                onClick={() => handleNavClick(item)}
                                className={isActive === item ? "active" : ""}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                    {
                        !showMenu && (<FaBars onClick={() => setShowMenu(true)} className="opener" />)
                    }
                    <div className='auth-container'>
                        <button className='btn sign'>Sign in</button>
                        <button className='btn register'>Register</button>
                    </div>
                    {
                        showMenu && (
                            <div className="menu-card">
                                <span className="crosss-icon" onClick={() => setShowMenu(false)}>&#10799;</span>
                                <ul className="overlay-card">
                                    {["Products", "Solutions", "Communities", "Resources", "Pricing", "Contacts"].map((item) => (
                                        <li
                                            key={item}
                                            onClick={() => handleNavClick(item)}
                                            className={isActive === item ? "active" : ""}
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )
                    }
                </nav>
            </div>
            <div className='hero-section'>
                <div className='text-container'>
                    <h1>Title</h1>
                    <p>SubTitle</p>
                </div>
                <div className='button-group'>
                    <button className='button1'>Button</button>
                    <button className='button2'>Button</button>
                </div>
            </div>
            <div className="footer"></div>
        </>
    );
}

export default Header;
