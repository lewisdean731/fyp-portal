import {Row, Col} from "react-bootstrap";
import Classes from "./topbar.module.scss";
export default function Topbar(props){
  return(
      <div className={Classes.topbar}>
        <div className={Classes.border}></div>
      </div>

  )
}