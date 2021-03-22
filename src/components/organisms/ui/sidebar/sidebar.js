import { Row, Col } from "react-bootstrap";
import SidebarButtons from "../../../molecules/ui/sidebarButtons/sidebarButtons";
import Classes from "./sidebar.module.scss";
export default function Sidebar(props) {
  return (
    <div className={Classes.sidebar}>
      <div className={Classes.padding64}></div>
      <div>Sidebar / Popout Nav Menu</div>
      <div className={Classes.padding24}></div>
      <SidebarButtons />
      <div className={Classes.border}></div>
    </div>
  );
}
