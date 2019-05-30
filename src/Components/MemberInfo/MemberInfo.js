import React, {Component} from 'react';
import './MemberInfo.scss';

class MemberInfo extends Component {
  render() {
    const { currentMember } = this.props;
    return (
      <div className="member-info-popup">
        <div className="member-info">
          <h1 className="member-name">{currentMember.member}</h1>
          <p className="nick-names">{currentMember.also_known_as}</p>
          <h2 className="band-role">{currentMember.instruments}</h2>
          <h2 className="birth">{currentMember.date_of_birth}</h2>
          <h2 className="born">{currentMember.born}</h2>
          <h2 className="side-projects">{currentMember.side_projects}</h2>
        </div>
      </div>
    )
  }
}

export default MemberInfo;