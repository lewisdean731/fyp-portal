import React from "react";
import Classes from "./textSmall.module.scss";

function TextSmall(props) {
  return (
    <p
      className={`${Classes.textSmall} ${Classes[props.colour]} ${
        props.className
      }`}
    >
      {props.children}
    </p>
  );
}

export default TextSmall;
