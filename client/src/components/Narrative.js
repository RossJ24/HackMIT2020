import React from 'react';

class Narrative extends React.Component {
    
    render() {
        return (
            <div class = "card">
                <div class = "card-body">
                    <h1 class="display-4">What Happened?</h1>
                    <p>{this.props.story}</p>
                </div>
            </div>
        )
    }
}

export default Narrative;