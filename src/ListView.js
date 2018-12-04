import React, { Component } from 'react';


class ListView extends Component {
  render() {
    const { locations } = this.props;
    return (
      <div>
        <ul className="loc-list-view">
          {locations.map((location) => (
            <li key={location.venue.id} className="loc-list-item">
              <div>{location.venue.name}</div>             
            </li>
          ))
          }

        </ul>
      </div>

    );
  }
}

export default ListView;