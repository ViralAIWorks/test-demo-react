import React from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";
class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Kelly", age: "50" },
      { id: 2, name: "Tom", age: "18" },
      { id: 3, name: "Dev", age: "32" },
    ],
  };

  handleAddNewUser = (userObj) => {
    this.setState({
      listUsers: [userObj, ...this.state.listUsers],
    });
  };

  handleDeleteUser = (userId) => {
    let listUsersClone = this.state.listUsers;
    listUsersClone = listUsersClone.filter((item) => item.id !== userId);
    this.setState({
      listUsers: listUsersClone,
    });
  };

  //JSX
  render() {
    return (
      <>
        <div className="a">
          <AddUserInfo handleAddNewUser={this.handleAddNewUser} />
          <br />
          <br />
          <DisplayInfo
            listUsers={this.state.listUsers}
            handleDeleteUser={this.handleDeleteUser}
          />
        </div>
        <div className="b"></div>
      </>
    );
  }
}

export default MyComponent;
