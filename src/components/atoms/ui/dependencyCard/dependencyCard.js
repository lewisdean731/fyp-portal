import { Accordion, Card, Table, Button, Row, Col, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Classes from "./dependencyCard.module.scss";
function DependencyCard(props) {
  return (
    <Card bg={"light"}>
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
            <Badge className={Classes.badge} variant={props.badgeVariant}>{props.badgeMessage}</Badge>
          </Col>
          <Col md={1}>
            <p className={Classes.version}>{props.version}</p>
          </Col>
        </Row>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={props.eventKey}>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th></th>
                <th>Current Version</th>
                <th>Latest Version</th>
                <th>Next Available Version</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Version</td>
                <td>{props.version}</td>
                <td>{props.latestVersion}</td>
                <td>{props.nextVersion}</td>
              </tr>
              <tr>
                <td>Release Date</td>
                <td>{props.releaseDate}</td>
                <td>{props.latestReleaseDate}</td>
                <td>{props.nextReleaseDate}</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
}

export default DependencyCard;
