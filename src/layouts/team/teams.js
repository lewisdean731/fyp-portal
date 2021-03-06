import { Container } from "react-bootstrap";
import TextLarge from "../../components/atoms/text/large/textLarge";
import CreateTeam from "../../components/organisms/ui/team/createTeam/createTeam";
import UserTeamData from "../../components/organisms/ui/user/userTeamData/userTeamData";
function Teams(props) {
  return (
    <Container>
      <TextLarge>My Teams</TextLarge>
      <CreateTeam
        uid={props.userData.user["uid"]}
        token={props.userData.user.stsTokenManager["accessToken"]}
      />
      <br />
      <UserTeamData
        uid={props.userData.user["uid"]}
        token={props.userData.user.stsTokenManager["accessToken"]}
      />
    </Container>
  );
}

export default Teams;
