import React, { Component } from 'react';


class ListView extends Component {
  render() {
    const { locations,
    showInfoWindow } = this.props;
    return (
      <section className="list-secion">
        <ul className="loc-list-view">
          {locations.map((location) => (
            <li key={location.venue.id} className="loc-list-item"
            onClick={() => showInfoWindow(location.venue)} >
              {location.venue.name}
            </li>
          ))
          }

        </ul>
      </section>

    );
  }
}

export default ListView;