import { Row, Col, Container } from "react-bootstrap";
import TextMedium from "../../../atoms/text/medium/textMedium";
import TextSmall from "../../../atoms/text/small/textSmall";
import Classes from "./footer.module.scss";

function Footer(props) {
  return(
    <div className={Classes.footer}>
      <Row >
        <Col>
          <TextMedium>Monitaur</TextMedium>
        </Col>
      </Row>
      <Row>
        <Col>
          <TextSmall>&copy; Lewis Dean 2021</TextSmall>
        </Col>
      </Row>
    </div>
  )
}

export default Footer;