import React from 'react';
import anime from 'animejs/lib/anime.es.js';
import VizSensor from 'react-visibility-sensor';

class Hit extends React.Component {

    state = {
        viz: false
    };

    render() {
        return(<>
        <div class = "card">
            <div class = "card-body">
                <VizSensor onChange = {(isVisible) => {
                    if (isVisible) {
                        anime({
                            targets: '.car-rep',
                            translateX: 250,
                            loop: true
                        });
                    }
                }}>
                    <svg className="car-rep" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H100V100H0V0Z" fill="#0F5AED"/>
                    </svg>
                </VizSensor>
            </div>
        </div>
        </>);
    }
}

export default Hit;