import React from 'react';
import "./Card.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGithubSquare } from '@fortawesome/free-brands-svg-icons';


const Card =props => {
    return (
      
        <div className="card text-center">
            <div clasName="overflow">
                <img className="card-img-top image-height" src={props.imgsrc} alt="Hungry site image"/>

            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">Card Title</h4>
                <p className="card-text text secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo officia minus maiores a ab facilis culpa fugit soluta quidem et consequuntur magnam aperiam, magni laboriosam numquam? Iste ut corporis sequi.
                </p>
                <a className="btn-live-site" href="#">Live Site</a>
                <a className="btn-live-site" href="#"><FontAwesomeIcon  icon={faGithubSquare} />  GitHub</a>
                
            </div>
            
        </div>
       
    );
};

export default Card;