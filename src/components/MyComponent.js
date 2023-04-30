import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Kerry",
    address: "TP.HCM",
    age: 25,
  };

  handleClick = (event) => {
    // console.log("Clicked");
    console.log(event);
  };

  handleOnMouseOver(event) {
    console.log(event);
  }

  //JSX
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm from {this.state.address}
        <button onClick={this.handleClick}>Click me!</button>
        <button onMouseOver={this.handleOnMouseOver}>Hover me!</button>
      </div>
    );
  }
}

export default MyComponent;
