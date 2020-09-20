import React from 'react';

class Narrative extends React.Component {
    render() {
        return(<>
            <div class = "card">
                <div class = "card-body">
                    <h2>What happened?</h2>
                    <div>
                        <h1>{this.props.story}</h1>
                    </div>
                </div>
            </div>
            
        </>);
    }
}
