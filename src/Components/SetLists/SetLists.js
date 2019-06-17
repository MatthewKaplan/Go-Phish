import React, { Component } from "react";
import "./SetLists.scss";
import { connect } from "react-redux";
import { setData } from "../../Helpers/cleaners";
import PropTypes from "prop-types";

export class SetLists extends Component {
  render() {
    const { setList } = this.props;
    return (
      <div className="set-list-component">
        <div className="set-list">
          <article className="sets">
            <section className="set-one">
              <h1>Set 1:</h1>
              <div>{setData(setList, "Set 1")}</div>
            </section>
            <section className="set-two">
              <h1>Set 2:</h1>
              <div>{setData(setList, "Set 2")}</div>
            </section>
          </article>
          <section className="encore">
            <h1>Encore: </h1>
            <div>{setData(setList, "Encore")}</div>
          </section>
        </div>
      </div>
    );
  }
}

SetLists.propTypes = {
  setList: PropTypes.array
};

export const mapStateToProps = state => ({
  setList: state.setList
});

export default connect(
  mapStateToProps,
  null
)(SetLists);
