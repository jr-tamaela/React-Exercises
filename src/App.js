import React, { useState, Fragment } from "react";
import AddUser from "./Components/Users/AddUser";
import List from "./Components/Users/List";

import "./App.css";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        {
          id: Math.floor(Math.random() * 1000).toString(),
          name: userName,
          age: userAge,
        },
      ];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />

      <List users={usersList} />
    </Fragment>
  );
}

export default App;
