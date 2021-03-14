import React from "react";
import Classes from "./textSmall.module.scss";

function TextMedium(props) {
  return (
    <p className={`${Classes.textSmall} ${Classes[props.colour]}`}>
      {props.children}
    </p>
  );
}

export default TextMedium;
