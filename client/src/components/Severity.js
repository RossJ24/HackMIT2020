import React from 'react';

class Severity extends React.Component{
    componentDidMount(){
        var dial = (".dial .inner");
        var gauge_value = (".gauge .value");

            function rotateDial(){
                var deg = 0;
                var value = Math.round(83.12);
                deg = (value * 177.5) / 100;
                gauge_value.html(value);

                dial.css({'transform': 'rotate('+deg+'deg)'});
                dial.css({'-ms-transform': 'rotate('+deg+'deg)'});
                dial.css({'-moz-transform': 'rotate('+deg+'deg)'});
                dial.css({'-o-transform': 'rotate('+deg+'deg)'});
                dial.css({'-webkit-transform': 'rotate('+deg+'deg)'});
            }

            setInterval(rotateDial, 2000);
    }
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
