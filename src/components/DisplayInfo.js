import React, { useEffect, useState } from "react";
import "./DisplayInfo.scss";
// import logo from "../logo.svg";

const DisplayInfo = (props) => {
  const { listUsers } = props;

  const [isShowHideListUser, setShowHideListUser] = useState(true);

  const handleShowHideListUser = () => {
    setShowHideListUser(!isShowHideListUser);
  };

  useEffect(() => {
    if (listUsers.length === 0) {
      alert("You've deleted all users");
    }
    console.log("call me US");
  }, [listUsers]);

  return (
    <div className="display-info-container">
      <div>
        <span
          onClick={() => {
            handleShowHideListUser();
          }}
        >
          {isShowHideListUser === true ? "Hide list users" : "Show list users"}
        </span>
      </div>
      {isShowHideListUser && (
        <>
          {listUsers.map((user, index) => {
            return (
              <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                <div>
                  <div>My name is {user.name},</div>
                  <div>I'm {user.age}</div>
                </div>
                <div>
                  <button onClick={() => props.handleDeleteUser(user.id)}>
                    Delete
                  </button>
                  <hr />
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default DisplayInfo;
