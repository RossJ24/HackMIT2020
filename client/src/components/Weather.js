import React from 'react';
import anime from 'animejs/lib/anime.es.js';

class Weather extends React.Component {
    
    render() {
        let rain = this.props.rain;
        if (this.props.rain === null){
            rain = "None"
        }
        return (
            <div class = "card">
                <div class = "card-body">
                    <h1>The weather at this time was</h1>
                    <h3>{this.props.current}</h3>
                    <h2>The chances of rain were </h2>
                    <h3>{rain}</h3>
                </div>
            </div>
        )
    }
}

export default Weather;