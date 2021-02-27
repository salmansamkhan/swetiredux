import React, { Component } from "react";
import { connect } from "react-redux";

const buttonStyle = {
  fontSize: "1.5rem",
  width: "40px",
  height: "40px",
};
class Counter extends Component {
  addOne = () => {
    this.props.dispatch({ type: "ADD_ONE" });
  };

  minusOne = () => {
    this.props.dispatch({ type: "MINUS_ONE" });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.props.numberglobal}</h1>
          <div
            style={{
              display: "flex",
            }}
          >
            <button type="button" style={buttonStyle} onClick={this.minusOne}>
              -
            </button>
            <button type="button" style={buttonStyle} onClick={this.addOne}>
              +
            </button>
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    numberglobal: state.number,
  };
};

export default connect(mapStateToProps)(Counter);
