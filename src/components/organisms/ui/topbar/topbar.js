import { Container, Row } from "react-bootstrap";
import TextMedium from "../../../atoms/text/medium/textMedium";
import TextSmall from "../../../atoms/text/small/textSmall";
import SearchTopbar from "../../../atoms/ui/search/topbar/searchTopbar";
import Classes from "./topbar.module.scss";
export default function Topbar(props) {
  return (
    <Container fluid>
    <Row className={Classes.topbar}>
      <img className={Classes.logo} src="../../logo200.png" />
      <TextMedium className={Classes.logoText} colour={"grey"}>
        MoniTor
      </TextMedium>
      <TextSmall className={Classes.username} colour={"grey"}>
        Username
      </TextSmall>
      <SearchTopbar className={Classes.searchbar} />
      <div className={Classes.border}></div>
    </Row>
    </Container>
  );
}
