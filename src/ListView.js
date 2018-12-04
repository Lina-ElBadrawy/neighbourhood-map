import React, { Component } from 'react';


class ListView extends Component {
  render() {
    const { locations,
    showInfoWindow } = this.props;
    return (
      <div>
        <ul className="loc-list-view">
          {locations.map((location) => (
            <li key={location.venue.id} className="loc-list-item"
            onClick={() => showInfoWindow(location.venue)} >
              <div>{location.venue.name}</div>  
              <div> {location.venue.location.city}</div>
                        
            </li>
          ))
          }

        </ul>
      </div>

    );
  }
}

export default ListView;