import React from 'react';
import "./Project.css";
import Card from './Card';
import hungry from "../../images/hungry.png";
import mishti from "../../images/misti-village.png";
import solar from "../../images/solar-solution.png";
import sports from "../../images/sports-valley.png";
import panda from "../../images/panda.png";
import bpl from "../../images/bpl.png"
const Projects = () => {
    return (
        <div className="project-body">
            <div className="container ">
                <h1 className="project-title">My Recent Projects</h1>
                <div className="container-fluid d-flex justify-content-center">

                    <div className="row">
                        <div className="col-md-4">
                            <Card imgsrc={hungry}></Card>
                        </div>
                        <div className="col-md-4">
                            <Card imgsrc={mishti}></Card>
                        </div>
                        <div className="col-md-4">
                            <Card imgsrc={solar}></Card>
                        </div>
                    </div>

                </div>
                <div className="container-fluid d-flex justify-content-center">
                    <div className="row">
                        <div className="col-md-4">
                            <Card imgsrc={sports}></Card>
                        </div>
                        <div className="col-md-4">
                            <Card imgsrc={panda}></Card>
                        </div>
                        <div className="col-md-4">
                            <Card imgsrc={bpl}></Card>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );

};

export default Projects;