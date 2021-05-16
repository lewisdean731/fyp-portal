import { Card, Button } from "react-bootstrap";

function TeamProjectCard(props) {
  return (
    <Card style={{ width: "16rem" }}>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>Type: {props.projectType}</Card.Text>
        <Card.Text>ID: {props.id}</Card.Text>
        <Button variant="primary" href={`/project/${props.id}`}>
          Go to Project Page
        </Button>
      </Card.Body>
    </Card>
  );
}

export default TeamProjectCard;
