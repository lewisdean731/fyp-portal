import { CardColumns } from "react-bootstrap";
import TeamCard from "../../../../atoms/ui/teamCard/teamCard";

function UserTeamsDisplay(props) {
  const teams = props.teamsData ? props.teamsData : ["No Team Data Available"]; //Handle no projects in props

  return (
    <CardColumns>
      {teams.map((team) => {
        return (
          <TeamCard key={team.teamId} id={team.teamId} name={team.teamName} />
        );
      })}
    </CardColumns>
  );
}

export default UserTeamsDisplay;
