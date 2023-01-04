import React from "react";
import { useState, useRef } from "react";
import Card from "../UI/Card";
import ErrorModal from "../UI/Modal";
import "./AddUser.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();
  React.useEffect(() => {
    console.log("ageInputRef", nameInputRef.current.focus());
  }, []);

  const addUserHandler = (event) => {
    event.preventDefault(); //present default behaviour defined on the input.

    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message:
          "Please enter a valid name and age. Input fields can't be empty.",
      });
      return;
    }

    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid  age. Age must be > 0.",
      });
      return;
    }

    props.onAddUser(enteredName, enteredUserAge);
    // setEnteredUserName("");
    // setEnteredAge("");
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  // if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
  //   setError({
  //     title: "Invalid input",
  //     message:
  //       "Please enter a valid name and age. Input fields can't be empty.",
  //   });
  //   return;
  // }

  // if (+enteredAge < 1) {
  //   setError({
  //     title: "Invalid age",
  //     message: "Please enter a valid  age. Age must be > 0.",
  //   });
  //   return;
  // }

  //   props.onAddUser(enteredUsername, enteredAge);
  //   setEnteredUsername("");
  //   setEnteredAge("");
  // };

  // const usernameChangeHandler = (event) => {
  //   event.preventDefault();
  //   setEnteredUsername(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   event.preventDefault();
  //   setEnteredAge(event.target.value);
  // };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User name</label>
          <input
            id="username"
            type="text"
            // value={enteredUsername}
            // onChange={usernameChangeHandler}
            ref={nameInputRef}
          />
          <br />
          <label htmlFor="age">Age (years)</label>
          <input
            id="age"
            type="number"
            // value={enteredAge}
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          />
          <br />
          <button type="submit">Add User</button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
