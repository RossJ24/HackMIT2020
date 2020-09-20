import React from 'react';
import anime from 'animejs/lib/anime.es.js';

class Weather extends React.Component {
    
    render() {
        let rain = this.props.rain;
        if (this.props.rain === null){
            rain = "None"
        }
        return (
            <div class = "card justify-content-center">
                <div class = "card-body justify-content-center">
                    <h1 class="display-4">Weather</h1>
                    <h3>The forecast in the area during the crash was</h3>
                    <p>{this.props.current}</p>
                    <h3>The chances of rain were</h3>
                    <p>{rain}</p>
                </div>
            </div>
        )
    }
}

export default Weather;