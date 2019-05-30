import React, {Component} from "react";
import './Years.scss';

class Years extends Component {
  render() {
    console.log(this.props.year)
    const { year } = this.props;
    return (
      <div className="years-component">
        <h1 className="years">{year.date}</h1>
      <hr/>
      </div>
    )
  }
}

export default Years;