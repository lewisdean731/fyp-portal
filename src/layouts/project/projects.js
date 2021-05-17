import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import TextLarge from "../../components/atoms/text/large/textLarge";
import CreateProject from "../../components/organisms/ui/project/createProject/createProject";
import UserProjects from "../../components/organisms/ui/project/userProjects/userProjects";
import {
  getAllProjectsForUser,
  getUserFirestoreInformation,
} from "../../utils/apiUtil";
function Teams(props) {
  const [projectsData, setProjectsData] = useState();
  const [userTeams, setUserTeams] = useState();

  useEffect(() => {
    async function fetchData() {
      // Get all user's projects across teams
      await getAllProjectsForUser(
        props.userData.user["uid"],
        props.userData.user.stsTokenManager["accessToken"]
      ).then(async (data) => {
        console.log(data);
        // Get user's teams
        await getUserFirestoreInformation(
          props.userData.user["uid"],
          props.userData.user.stsTokenManager["accessToken"]
        ).then((userData) => {
          setUserTeams(userData.teams);
          setProjectsData(data.projectsData);
        });
      });
    }
    fetchData();
  }, [props]);

  if (projectsData) {
    return (
      <Container>
        <TextLarge>My Projects</TextLarge>
        <CreateProject
          uid={props.userData.user["uid"]}
          token={props.userData.user.stsTokenManager["accessToken"]}
          userTeams={userTeams}
        />
        <br />
        <UserProjects projectsData={projectsData} />
      </Container>
    );
  }

  return <p>Loading...</p>;
}

export default Teams;
