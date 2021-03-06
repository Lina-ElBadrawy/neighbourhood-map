import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"
const mapCenter = { lat: 30.0597203445974, lng: 31.221991181373593 }; //cairo
const defaultZoom = 15;
const orangeMarker = 'https://maps.google.com/mapfiles/ms/icons/orange-dot.png';
const redMarker = 'https://maps.google.com/mapfiles/ms/icons/red-dot.png';

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
                    icon={location.show ? orangeMarker :redMarker }
                >
                    {location.show && <InfoWindow onCloseClick={() => props.showInfoWindow(location.venue)}>
                        <div className="info-window">
                            <h2 className="loc-title">{location.venue.name}</h2>
                            <div className="loc-details">{location.venue.location.address}</div>
                           
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
            <section className="neighborhood-map" role="city" aria-label="Google Map.">
                <NeighborhoodMap
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAZAbwugFgW53Lj6TtVYuBrM8H8kSf9I-I"
                    locations={this.props.locations}
                    zoom={defaultZoom}
                    center={mapCenter}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    showInfoWindow={this.props.showInfoWindow}
                />
            </section>

        );
    }
}

export default Map;