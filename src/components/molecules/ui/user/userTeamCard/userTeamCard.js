import { Card, Button } from "react-bootstrap";

function UserTeamCard(props) {
  return(
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Team Name</Card.Title>
        <Card.Text>
          ID: {props.id}
        </Card.Text>
        <Button variant="primary">Go to team's projects</Button>
      </Card.Body>
    </Card>
  )
}

export default UserTeamCard;