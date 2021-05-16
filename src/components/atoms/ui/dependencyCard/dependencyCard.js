import { Accordion, Card, Table, Button } from "react-bootstrap";
import Classes from "./dependencyCard.module.scss";
function DependencyCard(props) {
  return (
    <Card bg={"light"} className={Classes.dependencyCard}>
      <Accordion.Toggle
        as={Button}
        variant={props.variant}
        eventKey={props.eventKey}
        className={Classes.header}
      >
        <p className={Classes.name}>{props.name}</p>
        <p className={Classes.version}>{props.version}</p>
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
