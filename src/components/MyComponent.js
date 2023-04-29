import React from "react";

class MyComponent extends React.Component {
  //JSX
  render() {
    return (
      <div>
        my 1st component
        {Math.random()}
      </div>
    );
  }
}

export default MyComponent;
