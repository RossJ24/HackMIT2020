import React from 'react';
import anime from 'animejs/lib/anime.es.js';

class Weather extends React.Component {
    
    render() {
        return (
            <div class = "card">
                <div class = "card-body">
                    <h2>The weather at this time was</h2>
                    <h1>{this.props.current}</h1>
                    <p>The chances of rain were </p>
                    <h3>{this.props.rain}</h3>
                </div>
            </div>
        )
    }
}

export default Weather;