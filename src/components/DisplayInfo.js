import React from "react";
import "./DisplayInfo.scss";
// import logo from "../logo.svg";
class DisplayInfo extends React.Component {
  constructor(props) {
    console.log("call constructor: 1");
    super(props);
    this.state = {
      isShown: true,
    };
  }
  // babel compiler
  // state = {
  //   isShown: true,
  // };

  componentDidMount() {
    console.log("call me componentDidMount");
    setTimeout(() => {
      document.title = "Hellou";
    }, 3000);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("call me componentDidUpdate");
  }

  handleShowHide = () => {
    this.setState({ isShown: !this.state.isShown });
  };
  render() {
    console.log("call me render");
    const { listUsers } = this.props;
    // console.table(listUsers);

    return (
      <div className="display-info-container">
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
            {listUsers.map((user, index) => {
              return (
                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                  <div>
                    <div>My name is {user.name},</div>
                    <div>I'm {user.age}</div>
                  </div>
                  <div>
                    <button
                      onClick={() => this.props.handleDeleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </div>
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
