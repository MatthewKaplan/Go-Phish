import React, { Component } from "react";
import './BandMembers.scss';

class BandMembers extends Component {
  render() {
    const { member } = this.props;

    console.log(member);

    const memberImg = {
      backgroundImage: `url(${member.image})`
    };

    return (
      <div className="band-members-component">
        <section className="member" style={memberImg} />
          <h1>{member.member}</h1>
      </div>
    );
  }
}

export default BandMembers;
