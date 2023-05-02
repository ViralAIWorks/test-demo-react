import React, { useState } from "react";

// class AddUserInfo extends React.Component {
//   state = {
//     name: "",
//     address: "TP.HCM",
//     age: "",
//   };

//   handleOnChangeInput = (event) => {
//     setState({ name: event.target.value });
//   };
//   handleOnChangeAge = (event) => {
//     setState({ age: event.target.value });
//   };

//   handleOnSubmit = (event) => {
//     event.preventDefault();
//     // console.log(state);

//     props.handleAddNewUser({
//       id: Math.floor(Math.random() * 100) + 1 + "-random",
//       name: state.name,
//       age: state.age,
//     });
//   };

//   render() {
//     return (
//       <div>
//         My name is {state.name} and I'm {state.age}
//         <form onSubmit={(event) => handleOnSubmit(event)}>
//           <label>Your name:</label>
//           <input
//             value={state.name}
//             type="text"
//             onChange={(event) => {
//               handleOnChangeInput(event);
//             }}
//           />
//           <label>Your age:</label>
//           <input
//             value={state.age}
//             type="text"
//             onChange={(event) => {
//               handleOnChangeAge(event);
//             }}
//           />
//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

const AddUserInfo = (props) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("TP.HCM");
  const [age, setAge] = useState("");

  const handleOnChangeInput = (event) => {
    setName(event.target.value);
  };
  const handleOnChangeAge = (event) => {
    setAge(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    props.handleAddNewUser({
      id: Math.floor(Math.random() * 100) + 1 + "-random",
      name: name,
      age: age,
    });
  };

  return (
    <div>
      My name is {name} and I'm {age}
      <form onSubmit={(event) => handleOnSubmit(event)}>
        <label>Your name:</label>
        <input
          value={name}
          type="text"
          onChange={(event) => {
            handleOnChangeInput(event);
          }}
        />
        <label>Your age:</label>
        <input
          value={age}
          type="text"
          onChange={(event) => {
            handleOnChangeAge(event);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddUserInfo;
