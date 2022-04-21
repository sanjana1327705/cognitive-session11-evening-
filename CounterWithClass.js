import React from "react";
import Button from "./Button";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  handleReset = () => {
    this.setState({
      count: 0
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <Button text="+" handleClick={this.handleIncrement} />
        <Button text="-" handleClick={this.handleDecrement} />
        <Button text="Reset" handleClick={this.handleReset} />
      </div>
    );
  }
}

export default Counter;
