import React from "react";
import Classes from "./textLarge.module.scss";

function TextLarge(props) {
  return (
    <p className={`${Classes.textLarge} ${Classes[props.colour]}`}>{props.children}</p>
  );
}

export default TextLarge;
