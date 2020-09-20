import React from 'react';

class Narrative extends React.Component {
    
    render() {
        return (
            <div>
                <p>{this.props.story}</p>
            </div>
        )
    }
}

export default Narrative;