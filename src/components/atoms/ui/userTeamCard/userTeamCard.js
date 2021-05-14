import { Card, Button } from "react-bootstrap";

function UserTeamCard(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>ID: {props.id}</Card.Text>
        <Button variant="primary" href={`/team/${props.id}`}>
          Go to Team Page
        </Button>
      </Card.Body>
    </Card>
  );
}

export default UserTeamCard;
