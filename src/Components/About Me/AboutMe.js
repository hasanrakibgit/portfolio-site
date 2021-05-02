import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./AboutMe.css";
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faLinkedin, faTwitterSquare, faInstagramSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import image from "../../images/me.jpg";
const AboutMe = () => {
    

    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="header__content">
                            <div className="mt-5 pt-0 header__section">
                                <ul className="header__ul">
                                    <li>
                                       <a  target="_blank" href="https://www.facebook.com/hasan.rakib.35/"><FontAwesomeIcon className="headerIcon"icon={faFacebookSquare} /></a> 
                                    </li>
                                    <li>
                                    <a target="_blank" href="https://www.linkedin.com/in/rakibul-hasan-70667b90/"><FontAwesomeIcon className="headerIcon" icon={faLinkedin} /></a> 
                                    </li>
                                    <li>
                                      <a  target="_blank" href="#"><FontAwesomeIcon  className="headerIcon"icon={faTwitterSquare} /></a> 
                                    </li>
                                    <li>
                                       <a target="_blank" href="#"><FontAwesomeIcon className="headerIcon" icon={faInstagramSquare} /></a> 
                                    </li>
                                    <li>
                                       <a target="_blank" href="https://github.com/hasanrakibgit/"><FontAwesomeIcon  className="headerIcon"icon={faGithubSquare} /></a> 
                                    </li>
                                </ul>
                                <h1 className="mt-5">About Me</h1>
                                <p>I,m Rakibul Hasan, Junior web developer. I came to this field from my passion. I can develop e-commerce, portfolio,company website. I am good at HTML, CSS, Javascript, React, Express, MongoDB, Node. In addition I can also design and customize wordpress website​</p>
                                <div className="header__buttons">
                                   
                                 <a href="https://drive.google.com/uc?export=download&id=1uZOzglZFZB4b-RW27ZfpuwfzqXrJa7Jn"  className="download-btn"> <FontAwesomeIcon icon={faDownload} />  Download my resume</a>
                                </div>
                            </div>

                        </div>


                    </div>
                    <div className=" col-6">
                        <div className="  banner__img">
                            <img className="ml-5" src={image}  style={{height:"500px", width:"420px"}} alt="man" />
                        </div>
                    </div>

                </div>

            </div>

        </header>
    );
};

export default AboutMe;