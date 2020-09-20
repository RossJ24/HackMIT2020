import React from 'react';
function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    var meters = d / 1000
    return meters;
  }
  
  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }

class Story extends React.Component {
    render() {
      let lat1 ;
      let lon1 ;
      let lat2 ;
      let lon2 ;
      let distance_traveled = getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2)
      return(
          <div class="card">
              <div class = "card-body">
                <h2>Distance of the crash</h2>
                <p>How far did the vehicle traveled?</p>
                <p>{distance_traveled}</p>
                <p>Where is the vehicle now?</p>
              </div>
          </div>
      );
  }
}

export default Story;