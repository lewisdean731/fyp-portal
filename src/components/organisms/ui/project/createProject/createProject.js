import { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { getTeamFirestoreInformation } from "../../../../../utils/apiUtil";
import TextMedium from "../../../../atoms/text/medium/textMedium";
import CreateProjectForm from "../../../../molecules/ui/project/createProjectForm/createProjectForm";

import Classes from "./createProject.module.scss";

function CreateProject(props) {
  const [teamsData, setTeamsData] = useState("")

  useEffect(async () => {
    props.userTeams.map(async (teamId) => {
      await getTeamFirestoreInformation(
        teamId,
        props.token
      )
        .then(async (data) => {
          console.log(data);
          data["teamId"] = teamId
          setTeamsData((teamsData) => [...teamsData, data]);
          return data;
        })
    })
  }, []);

  if(teamsData){
    return (
      <Container fluid className={Classes.createProject}>
        <TextMedium colour={"grey"}>Create Project</TextMedium>
        <Row className="justify-content-md-center">
          <Col>
            <CreateProjectForm uid={props.uid} token={props.token} teamsData={teamsData} />
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <p>Loading...</p>
  )
}

export default CreateProject;
