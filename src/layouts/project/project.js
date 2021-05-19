import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TextLarge from "../../components/atoms/text/large/textLarge";
import ProjectInformation from "../../components/organisms/ui/project/projectInformation/projectInformation";
import ProjectDependencies from "../../components/organisms/ui/project/projectDependencies/projectDependencies";
import ProjectOptions from "../../components/organisms/ui/project/projectOptions/projectOptions";
import { getProjectFirestoreInformation } from "../../utils/apiUtil";

function Project(props) {
  const [projectData, setProjectData] = useState(undefined);
  const { projectId } = useParams(); // Gets project ID from URL

  useEffect(() => {
    async function fetchData() {
      await getProjectFirestoreInformation(
        projectId,
        props.userData.user.stsTokenManager["accessToken"]
      ).then((data) => {
        console.log(data);
        setProjectData(data);
      });
    }
    fetchData();
  }, [props, projectId]);

  if (projectData) {
    return (
      <Container>
        <TextLarge>{projectData.projectName}</TextLarge>
        <br />
        <ProjectInformation
          projectData={projectData}
          token={props.userData.user.stsTokenManager["accessToken"]}
        />
        <br />
        <ProjectDependencies projectData={projectData} />
        <br />
        <ProjectOptions />
      </Container>
    );
  }

  return <p>Loading...</p>;
}

export default Project;
