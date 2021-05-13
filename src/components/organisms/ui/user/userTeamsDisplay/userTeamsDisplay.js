import { Button, Card } from "react-bootstrap";
import UserTeamCard from "../../../../molecules/ui/user/userTeamCard/userTeamCard";

function UserTeamsDisplay(props) { 

  const teams = props.teams?props.teams:["No Team Data Available"] //Handle no teams in props
  return(
    <div>
      {teams.map((id) => (
        <UserTeamCard id={id} />
      ))}
    </div>
  )
}

export default UserTeamsDisplay