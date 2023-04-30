import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";
class MyComponent extends React.Component {
  //JSX
  render() {
    const myInfo = ["ab", "d", "c"];
    return (
      <div>
        <UserInfo />
        <br />
        <br />
        <DisplayInfo name="Hoi dan IT" age="30" />
        <hr />
        <DisplayInfo name={"Anna"} age={27} myInfo={myInfo} />
      </div>
    );
  }
}

export default MyComponent;
