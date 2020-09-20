import React from 'react';
import Swipeable from 'react-swipeable';

class Board extends React.Component {

    constructor(props) {
        //     super(props);
        //     this.state = {
        //       position: 0,
        //       sliding: false,
        //       direction: "next",
        //       autoPlay: false
        //     };
        //   }
    
    render() {
        const numItems = React.Children.count(props.children);
        const config = {
            onSwipedUp: () => slide(NEXT),
            onSwipedDown: () => slide(PREV),
            preventDefaultTouchmoveEvent: true,
            trackMouse: true
          };
        return(
            <Swipeable {...config}>
                <div>

                </div>
            </Swipeable>
        )
    }

}