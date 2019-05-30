import React, {Component} from 'react';
import './Venues.scss';

class Venues extends Component {
  render() {
    const {venue} = this.props;
    return (
      <div className="venues-component">
        <h2 className="venue-name">{venue.name}</h2>
      </div>
    )
  }
}

export default Venues;