import React from 'react';

class Severity extends React.Component {

    render() {
        return(<>
            <div>
                <p>You're calculated Severity score was...</p>
                <h1>{this.props.score}</h1>
            </div>
        </>);
    }
}

export default Severity;