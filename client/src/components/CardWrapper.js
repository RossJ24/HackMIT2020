import React from 'react';

class CardWrapper extends React.Component {

    render() {
        return(
            <div className="cardWrapper">
                {this.props}
            </div>
        );
    }
}

export default CardWrapper;