import React from 'react';

class Severity extends React.Component {

    render() {
        return(<>
            <div>
                <p>Your calculated Severity score was...</p>
                <h1 id="severity">{this.props.score}</h1>
            </div>
        </>);
    }
}

export default Severity;