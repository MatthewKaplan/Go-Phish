import React, {Component} from "react";
import {connect} from 'react-redux';
import {userShowList} from '../../Actions/index';
import './UserStats.scss';

class UserStats extends Component {




  render() {
    const {userShows} = this.props;
    console.log(userShows)
    return (
      <div className="user-stats-component">
        <h1>Welcome to your Phish Stat Page:</h1>
        <h2>Amount of Shows seen:</h2>
        <p>{userShows.length}</p>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  userShows: state.userShows
});

export const mapDispatchToProps = dispatch => ({
  userShowList: userList => dispatch(userShowList(userList))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserStats);