import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import Card from "./Card";
import "./Modal.css";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className="modal">
      <header>
        <h2>{props.title}</h2>
      </header>

      <div>
        <p>{props.message}</p>
      </div>

      <footer>
        <button onClick={props.onConfirm}>OK</button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default ErrorModal;
