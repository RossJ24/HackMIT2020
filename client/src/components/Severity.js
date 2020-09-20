import React from 'react';

class Severity extends React.Component{

    render() {

        return(<>
            <div class = "card justify-content-center">
                    <div class = "card-body">
                        <h1 class="display-4">Your severity score was...</h1>
                        <h3>{this.props.score}</h3>
                    </div>
                </div>
         

        </>);
    }
}


export default Severity;
