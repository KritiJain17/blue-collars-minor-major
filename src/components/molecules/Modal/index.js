import React from "react";
import "./styles.modal.css";

const Modal = ({ header = "", children }) => {
  return (
    <div className="modalContainer">
      <div className="modalHeader">{header}</div>

      {children.map((value, index) => {
        return (
          <div key={index} className="modalTile" onClick={value.clickFunction}>
            {value.header}
          </div>
        );
      })}
    </div>
  );
};

export default Modal;
