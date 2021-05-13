import { Button, Card } from "react-bootstrap";

function UserTeamsDisplay(props) { 

  const teams = props.teams?[props.teams]:["No Team Data Available"] //Handle no teams in props
  return(
    <div>
      {teams.map((id) => (
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Team Name</Card.Title>
            <Card.Text>
              ID: {id}
            </Card.Text>
            <Button variant="primary">Go to team's projects</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  )
}

export default UserTeamsDisplay