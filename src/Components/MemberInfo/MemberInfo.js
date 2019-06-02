import React, { Component } from "react";
import "./MemberInfo.scss";

class MemberInfo extends Component {
  render() {
    const { currentMember } = this.props;
    return (
      <div className="member-info-popup">
        <div className="member-info">
          <div
            className="close-popup"
            onClick={() => this.props.closePopup()}
          />
          <section className="info">
            <h1>{currentMember.member}</h1>
            <h4>{currentMember.instruments}</h4>
            <section className="member-body">
              <h3>Also known as:</h3>
              <p>{currentMember.also_known_as}</p>
              <br />
              <h3>Side Projects:</h3>
              <p>{currentMember.side_projects}</p>
            </section>
            <br />
            <section className="member-footer">
              <h3>Born:</h3>
              <h4>{currentMember.date_of_birth}</h4>
              <h4>{currentMember.born}</h4>
            </section>
          </section>
        </div>
      </div>
    );
  }
}

export default MemberInfo;
