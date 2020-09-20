import React from 'react';

class Weather extends React.Component {
    
    render() {
        return (
            <div>
                <p>The weather was</p>
                <h1>{this.props.obsTime}</h1>
            </div>
        )
    }
}

export default Weather;