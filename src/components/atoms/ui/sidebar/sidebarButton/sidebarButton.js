import { Button } from "react-bootstrap";
import Classes from "./sidebarButton.module.scss";

export default function SidebarButton(props) {
  return (
    <Button href={props.link} className={Classes.button}>
      {props.children}
    </Button>
  );
}
