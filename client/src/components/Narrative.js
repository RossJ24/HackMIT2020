import React from 'react';

class Narrative extends React.Component {
    
    render() {
        return (
            <div>
                <div>
                    <p>{this.props.story}</p>
                </div>
            </div>
        )
    }
}

export default Narrative;