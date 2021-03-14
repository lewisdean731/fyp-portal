import React from "react";
import Classes from "./textMedium.module.scss";

function TextMedium(props) {
  return (
    <p className={`${Classes.textMedium} ${Classes[props.colour]}`}>
      {props.children}
    </p>
  );
}

export default TextMedium;
