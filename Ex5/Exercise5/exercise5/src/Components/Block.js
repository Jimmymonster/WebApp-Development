import "./Block.css";
import React from "react";

class Block extends React.Component {
  state = {
    count: 0,
  };
  updatePlus = () => {
    var num = this.state.count;
    num++;
    if (num > 10) {
      num = 10;
      alert("Cannot Vote more");
    }
    this.setState({ count: num });
  };
  updateMinus = () => {
    var num = this.state.count;
    num--;
    if (num < 0) {
      num = 0;
      alert("Cannot unvote");
    }
    this.setState({ count: num });
  };
  render() {
    var textval = "";
    if (this.state.count <= 0) textval = "MIN";
    else if (this.state.count >= 10) textval = "MAX";
    else textval = this.state.count;

    return (
      <div className="Container">
        <img className="Image" src={this.props.image} alt={this.props.alt} />
        <p className="Foodtype">{this.props.foodtype}</p>
        <div className="Foodname">{this.props.foodname}</div>
        <p className="Description">{this.props.description}</p>
        <div className="btnContainer">
          <button className="btn" onClick={this.updatePlus}>
            Click to Vote
          </button>
          <div className="score">{textval}</div>
          <button className="btn" onClick={this.updateMinus}>
            Click to Unvote
          </button>
        </div>
      </div>
    );
  }
}

export default Block;
