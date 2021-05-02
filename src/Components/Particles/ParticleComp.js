import React from 'react';
import Particles from 'react-particles-js';
import './ParticleComp.css'

const ParticleComp = () => {
    return (
        <div>
            <Particles
                params={{
                    particles: {
                        number: {
                            value: 30,
                            density: {
                                enable: true,
                                value_area: 900
                            }
                        },
                        shape: {
                            type: "square",
                            stroke: {
                                width: 6,
                                color: "#f9ab00"
                            }
                        }
                    }
                }

                }

            />
        </div>
    );
};

export default ParticleComp;