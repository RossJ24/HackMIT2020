import React from 'react';

class DriverBehavior extends React.Component {
    
    render() {
        let facingSun = "No";
        let phoneUse = "No";
        let continuedDriving = "No";
        let airBag = "No";
        if (this.props.facingSun){
            facingSun = "Yes"
        }
        if (this.props.phoneUse){
            phoneUse = "Yes"
        }
        if (this.props.manuever){
            manuever = "Yes"
        }
        if (this.props.airBag){
            airBag = "Yes"
        }
        return (
            <div class = "card">
                <div class = "card-body">
                    <h2>Driver Behavior</h2>
                    <p>Was driver facing the sun?</p>
                    <p>{facingSun}</p>
                    <p>Was driver using the phone prior?</p>
                    <p>{phoneUse}</p>
                    <p>Did the driver continue driving after crash occurred?</p>
                    <p>{continuedDriving}</p>
                    <p>Did the airbag deploy after crash occurred?</p>
                    <p>{airBag}</p>
                </div>
            </div>
        )
    }
}

export default DriverBehavior;