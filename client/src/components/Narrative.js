import React from 'react';

class Narrative extends React.Component {
    
    render() {
        return (
            <div class = "card">
                <div class = "card-body">
                    <h2>What Happened?</h2>
                    <p>{this.props.story}</p>
                </div>
            </div>
        )
    }
}

export default Narrative;