import {Row, Col} from "react-bootstrap";
import TextMedium from "../../../atoms/text/medium/textMedium";
import Classes from "./topbar.module.scss";
export default function Topbar(props){
  return(
      <div className={Classes.topbar}>
        <img className={Classes.logo} src="../../logo200.png"/>
        <TextMedium className={Classes.logoText} colour={"grey"}>MonTor</TextMedium>
        <div className={Classes.border}></div>
      </div>

  )
}