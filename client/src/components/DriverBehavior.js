import React from 'react';

class DriverBehavior extends React.Component {
    
    render() {
        let facingSun = "No";
        let phoneUse = "No";
        let continuedDriving = "No";
        let airBag = "No";
        if (this.props.facingSun){
            facingSun = "Yes";
        }
        if (this.props.phoneUse){
            phoneUse = "Yes";
        }
        if (this.props.continuedDriving){
            continuedDriving = "Yes";
        }
        if (this.props.airBag){
            airBag = "Yes";
        }
        return (
            <div class = "card justify-content-center">
                <div class = "card-body justify-content-center">
                    <h1 class="display-4">Driver Behavior</h1>
                    <h3>Was driver facing the sun?</h3>
                    <p>{facingSun}</p>
                    <h3>Was driver using the phone prior?</h3>
                    <p>{phoneUse}</p>
                    <h3>Did the driver continue driving after crash occurred?</h3>
                    <p>{continuedDriving}</p>
                    <h3>Did the airbag deploy after crash occurred?</h3>
                    <p>{airBag}</p>
                </div>
            </div>
        )
    }
}

export default DriverBehavior;