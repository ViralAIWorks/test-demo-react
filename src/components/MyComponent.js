import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Kerry",
    address: "TP.HCM",
    age: 25,
  };

  handleClick = (event) => {
    console.log("Clicked!");
    console.log("Random: ", Math.floor(Math.random() * 100) + 1);

    this.setState({
      name: "Eric",
      age: Math.floor(Math.random() * 100) + 1,
    });
    // this.setState({
    //   age: Math.floor(Math.random() * 100) + 1,
    // });
  };

  handleOnMouseOver = (event) => {
    // console.log(event.pageX);
  };

  //JSX
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm {this.state.age}
        <button
          onClick={(e) => {
            this.handleClick(e);
          }}
        >
          Click me!
        </button>
        <button onMouseOver={this.handleOnMouseOver}>Hover me!</button>
      </div>
    );
  }
}

export default MyComponent;
