import React, {Component} from 'react';
import './SetLists.scss';

class SetLists extends Component {
  render() {
    const {setList} = this.props;
    return (
      <div className="set-lists-component">
        <h1>{setList.title}</h1>
      </div>
    )
  }
}

export default SetLists;