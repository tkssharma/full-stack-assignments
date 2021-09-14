import React from 'react';
import { connect } from 'react-redux';
import * as CommonAction from '../../redux/actions/common';
import * as API from '../../api';

const mapStateToProps = (state, ownProps) => {
  return {
    geo: state.common.get('geo').toObject(),
  }
}
const mapDispatchToProps = dispatch => ({
 commonSetGeo: (status) => dispatch(CommonAction.commonSetGeo(status)),
});

let LocationFilter = (props) => {
  let css_class = '';
  if (props.for === 'home') { css_class = 'home'; }
  else { css_class = 'filter'; }
  let triggerChange = (address) => {
    if (props.change) {
      props.change(address);
    }
  }
  let geolocate = () => {
    // do this only if google library is found.. otherwise error will be thrown.
    if (window.google) {
      let autocomplete = new google.maps.places.Autocomplete((document.getElementById('location')), { types: ['geocode'] });
      autocomplete.addListener('place_changed', () => {
        let place = autocomplete.getPlace();
        let filed_val = document.getElementById('location').value;
        let address = {
          place: filed_val,
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        }
        props.commonSetGeo(address);
        API.setGeoLocation(address);
        localStorage.geo = JSON.stringify(address);
        triggerChange(filed_val);
        // props.userUpdateProfile({ geo: address });
      });
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          let geolocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          let circle = new google.maps.Circle({
            center: geolocation,
            radius: position.coords.accuracy
          });
          autocomplete.setBounds(circle.getBounds());
        });
      }
    }
  }
  return (
    <div className={`component--location ${css_class}`}>
      <input type="text" id="location" className="form-control form-control-lg" placeholder="Enter City..." defaultValue={props.geo.place} onFocus={geolocate}  />
    </div>
  )
}
const ConnectLocationFilter = connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationFilter)

export default ConnectLocationFilter;

