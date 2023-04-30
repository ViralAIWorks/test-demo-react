import React from "react";

class DisplayInfo extends React.Component {
  state = {
    isShown: true,
  };

  handleShowHide = () => {
    this.setState({ isShown: !this.state.isShown });
  };
  render() {
    const { listUsers } = this.props;
    console.table(listUsers);

    return (
      <div>
        <div>
          <span
            onClick={() => {
              this.handleShowHide();
            }}
          >
            {this.state.isShown === true
              ? "Hide list users"
              : "Show list users"}
          </span>
        </div>
        {this.state.isShown && (
          <div>
            {listUsers.map((user) => {
              return (
                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                  <div>My name is {user.name},</div>
                  <div>I'm {user.age}</div>
                  <hr />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default DisplayInfo;
