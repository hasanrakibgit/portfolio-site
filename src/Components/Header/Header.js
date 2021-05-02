import React from 'react';
import "./Header.css";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Hey, I am Rakibul, Welcome to my Site</h1>
                <h2 className="still-text">I am good at  <Typed
                className="typed-text"
                strings={["HTML", "CSS", "Java Script", "React", "Mongo DB","Express.js", "Bootstrap","Material UI"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                /></h2>
                
                <a href="#" className="btn-main-offer">CONTACT ME</a>
            </div>
            
        </div>
    );
};

export default Header;