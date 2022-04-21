import React from "react";

class Button extends React.Component {
  render() {
    return (
      <button style={styles.button} onClick={this.props.handleClick}>
        {this.props.text}
      </button>
    );
  }
}

const styles = {
  button: {
    border: "none",
    background: "#19F5F5",
    color: "#063232",
    padding: "10px 20px",
    margin: "10px",
    fontSize: "20px",
    borderRadius: "5px"
  }
};

export default Button;
