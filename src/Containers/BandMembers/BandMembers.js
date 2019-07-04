import React, { Component } from "react";
import { connect } from "react-redux";
import { currentMember } from "../../Actions/index";
import PropTypes from "prop-types";

export class BandMembers extends Component {
  getCurrentMember = member => {
    this.props.currentMember(member);
  };

  render() {
    const { member } = this.props;
    const memberImg = {
      backgroundImage: `url(${member.image})`
    };

    return (
      <div className="band-member-component">
        <div
          className="band-member-cards"
          data-test="band-member-cards"
          onClick={() => this.getCurrentMember(member)}
        >
          <section className="member" style={memberImg} />
          <h1>{member.member}</h1>
        </div>
      </div>
    );
  }
}

BandMembers.propTypes = {
  member: PropTypes.array
};

export const mapDispatchToProps = dispatch => ({
  currentMember: member => dispatch(currentMember(member))
});

export default connect(
  null,
  mapDispatchToProps
)(BandMembers);
