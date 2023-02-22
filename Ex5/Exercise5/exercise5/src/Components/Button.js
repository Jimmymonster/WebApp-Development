import React from "react";
class Button extends React.Component {
  update = () => {
    var num = this.props.count;
    if (this.props.increment === 1) {
      num++;
      if (num > 10) {
        num = 10;
        alert("Cannot Vote more");
      }
    } else {
      num--;
      if (num < 0) {
        num = 0;
        alert("Cannot unvote");
      }
    }
    this.props.parentCallback(num);
  };
  render() {
    return (
      <div>
        <button className="btn" onClick={this.update}>
          {this.props.text}
        </button>
      </div>
    );
  }
}
export default Button;
