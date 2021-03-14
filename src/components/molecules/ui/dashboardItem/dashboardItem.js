import React from "react";
import TextLarge from "../../../atoms/text/large/textLarge";
import TextMedium from "../../../atoms/text/medium/textMedium";
import Classes from "./dashboardItem.module.scss";

function DashboardItem(props) {
  return (
    <div className={Classes.dashboardItem}>
      <TextLarge colour={props.colour1}>{props.text1}</TextLarge>
      <TextMedium colour={props.colour2}>{props.text2}</TextMedium>
    </div>
  );
}

export default DashboardItem;
