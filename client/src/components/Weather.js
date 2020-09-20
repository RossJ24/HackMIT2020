import React from 'react';
import anime from 'animejs/lib/anime.es.js';

class Weather extends React.Component {
    
    render() {
        return (
            <div>
                <p>The weather was</p>
                <h1>{this.props.weather.observation_time}</h1>
            </div>
        )
    }
}

export default Weather;