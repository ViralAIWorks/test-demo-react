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

  // handleOnMouseOver = (event) => {
  //   // console.log(event.pageX);
  // };

  handleOnChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  //JSX
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm {this.state.age}
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            onChange={(event) => {
              this.handleOnChange(event);
            }}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default MyComponent;
