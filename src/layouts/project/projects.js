import { Container } from "react-bootstrap";
import TextLarge from "../../components/atoms/text/large/textLarge";
import CreateProject from "../../components/organisms/ui/project/createProject/createProject";
import UserProjects from "../../components/organisms/ui/project/userProjects/userProjects";
function Teams(props) {

  return (
    <Container>
      <TextLarge>My Projects</TextLarge>
      {/* <CreateProject uid={props.userData.user["uid"]} token={props.userData.user.stsTokenManager["accessToken"]} /> */}
      <br />
      {/* <UserProjects uid={props.userData.user["uid"]}  token={props.userData.user.stsTokenManager["accessToken"]} /> */}
    </Container>
  );
}

export default Teams;
