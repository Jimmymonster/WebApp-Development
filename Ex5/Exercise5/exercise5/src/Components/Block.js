import "./Block.css";
import Button from "./Button";
import React from "react";

class Block extends React.Component {
  state = {
    count: 0,
  };
  handleCallback = (buttonData) => {
    this.setState({ count: buttonData });
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
          <Button
            text="Click to Vote"
            increment={1}
            count={this.state.count}
            parentCallback={this.handleCallback}
          />
          <div className="score">{textval}</div>
          <Button
            text="Click to Unvote"
            increment={0}
            count={this.state.count}
            parentCallback={this.handleCallback}
          />
        </div>
      </div>
    );
  }
}

export default Block;
