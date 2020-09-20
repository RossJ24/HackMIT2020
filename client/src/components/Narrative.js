import React from 'react';

class Narrative extends React.Component {
    
    render() {
        return (
            <div class = "card justify-content-center">
                <div class = "card-body justify-content-center">
                    <h1 class="display-4">What Happened?</h1>
                    <br></br>
                    <br></br>
                    <p>{this.props.story}</p>
                </div>
            </div>
        )
    }
}

export default Narrative;