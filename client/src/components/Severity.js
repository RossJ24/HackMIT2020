import React from 'react';

class Severity extends React.Component{

    render() {

        return(<>
            <div class = "card justify-content-center">
                    <div class = "card-body justify-content-center">
                        <h1 class="display-4">Your severity score was...</h1>
                        <br></br>
                        <br></br>
                        <h2>{this.props.score}</h2>
                    </div>
                </div>
         

        </>);
    }
}


export default Severity;
