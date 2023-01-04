import React from "react";

const Button = (props) => {
  return (
    <button
      className="myButton"
      type={props.type || "myButton"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
