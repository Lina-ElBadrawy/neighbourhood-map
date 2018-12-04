import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"
const MAP_CENTER = { lat: 30.0597203445974, lng: 31.221991181373593 }; //cairo
const DEFAULT_ZOOM = 15;
//30.0444° N, 31.2357° E
//30.0609° N, 31.2197
const NeighborhoodMap = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={props.zoom}
        defaultCenter={props.center}



    >
        {props.locations.map((location) => {
            return (
                <Marker
                    key={location.venue.id}
                    position={location.venue.location}
                    onClick={() => props.showInfoWindow(location.venue)}
                >
                    {location.show && <InfoWindow onCloseClick={() => props.showInfoWindow(location.venue)}>
                        <div className="info-window">
                            <h2 className="loc-title">{location.venue.name}</h2>
                            <div className="loc-details">{location.venue.location.address}</div>
                            <div className="loc-details">lat - {location.venue.location.lat}</div>
                            <div className="loc-details">lng - {location.venue.location.lng}</div>
                        </div>
                    </InfoWindow>}



                </Marker>
            )
        })}
    </GoogleMap>
))



class Map extends Component {
    render() {
        return (
            <div className="results-map" role="region" aria-label="Google Map.">
                <NeighborhoodMap
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAZAbwugFgW53Lj6TtVYuBrM8H8kSf9I-I"
                    locations={this.props.locations}
                    zoom={DEFAULT_ZOOM}
                    center={MAP_CENTER}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    showInfoWindow={this.props.showInfoWindow}
                />
            </div>

        );
    }
}

export default Map;