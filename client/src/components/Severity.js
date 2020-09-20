import React from 'react';

class Severity extends React.Component{

    render() {

        return(<>
            <div class = "card">
                    <div class = "card-body">
                        <h2>Your calculated severity score was...</h2>
                        <h1 id="severity">{this.props.score}</h1>
                    </div>
                </div>
         

        </>);
    }
}


export default Severity;
