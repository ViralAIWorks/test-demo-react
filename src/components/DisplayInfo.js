import React from "react";

class DisplayInfo extends React.Component {
  render() {
    const { listUsers } = this.props;
    console.log(listUsers);

    return (
      <div>
        {listUsers.map((user) => {
          return (
            <div key={user.id}>
              <div>My name is {user.name}</div>
              <div>My age is {user.age}</div>
              <br />
            </div>
          );
        })}
      </div>
    );
  }
}

export default DisplayInfo;
