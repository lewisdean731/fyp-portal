import {
  Accordion,
  Card,
  Table,
  Button,
  Row,
  Col,
  Badge,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Classes from "./dependencyCard.module.scss";
import TextMedium from "../../text/medium/textMedium";
function DependencyCard(props) {
  return (
    <Card className={Classes.cardBackground}>
      <Accordion.Toggle
        as={Button}
        variant={props.variant}
        eventKey={props.eventKey}
        className={Classes.header}
      >
        <Row className={`${Classes.row} justify-content-md-left`}>
          <Col md={1}>
            <FontAwesomeIcon icon={props.icon} className={Classes.icon} />
          </Col>
          <Col>
            <p className={Classes.name}>{props.name}</p>
          </Col>
          <Col md={2}>
            <Badge className={Classes.badge} variant={props.badgeVariant}>
              {props.badgeMessage}
            </Badge>
          </Col>
          <Col md={1}>
            <p className={Classes.version}>{props.version}</p>
          </Col>
        </Row>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={props.eventKey}>
        <Card.Body>
          <Row className={`${Classes.row}`}>
            <Col>
              <TextMedium className={Classes.name}>{props.name}</TextMedium>
            </Col>
            <Col md={4}>
              <TextMedium className={Classes.daysOutOfDate}>
                <FontAwesomeIcon
                  icon={props.icon}
                  className={Classes.iconSmall}
                />
                {props.daysOutOfDate}
              </TextMedium>
            </Col>
          </Row>
          <Table striped>
            <thead>
              <tr>
                <th></th>
                <th>Current Version</th>
                <th>Next Available Version</th>
                <th>Latest Version</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Version</td>
                <td>{props.version}</td>
                <td>{props.nextVersion}</td>
                <td>{props.latestVersion}</td>
              </tr>
              <tr>
                <td>Release Date</td>
                <td>{props.releaseDate}</td>
                <td>{props.nextReleaseDate}</td>
                <td>{props.latestReleaseDate}</td>
              </tr>
            </tbody>
          </Table>
          <Row>
            <Col md={3}>
              <Button href={`https://www.npmjs.com/package/${props.name}`}>
                View on NPM Registry
              </Button>
            </Col>
            <Col></Col>
          </Row>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
}

export default DependencyCard;
