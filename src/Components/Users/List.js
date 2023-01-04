import React from "react";
import Card from "../UI/Card";

const List = (props) => {
  return (
    <Card>
      <h2>Users:</h2>
      <ul>
        {props.users.map((newUser) => (
          <li key={newUser.id}>
            {newUser.name} ({newUser.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default List;
