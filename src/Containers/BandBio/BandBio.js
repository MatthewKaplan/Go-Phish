import React, { Component } from "react";
import { connect } from "react-redux";
import { currentMember } from "../../Actions/index";
import BandMembers from "../BandMembers/BandMembers";
import { MemberInfo } from "../../Components/MemberInfo/MemberInfo";
import { bandBio } from "../../Helpers/text";
import PropTypes from "prop-types";

export class BandBio extends Component {
  renderBandMembers = () => {
    const { members } = this.props;
    return members.map(member => (
      <BandMembers key={member.id} member={member} />
    ));
  };

  closePopup = () => {
    this.props.currentMember({});
  };

  render() {
    const { member } = this.props;
    return (
      <div className="band-bio-component">
        <div className="band-bio">
          <img
            src="https://i.imgur.com/bLCGyR3.jpg"
            alt="Phish Members"
            className="band-photo"
          />
          <section className="phish-history">{bandBio()}</section>
        </div>
        {Object.keys(member).length > 0 && (
          <MemberInfo currentMember={member} closePopup={this.closePopup} />
        )}
        <section className="band-members">{this.renderBandMembers()}</section>
      </div>
    );
  }
}

BandBio.propTypes = {
  members: PropTypes.array,
  member: PropTypes.array
};

export const mapStateToProps = state => ({
  members: state.members,
  member: state.member
});

export const mapDispatchToProps = dispatch => ({
  currentMember: member => dispatch(currentMember(member))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BandBio);
