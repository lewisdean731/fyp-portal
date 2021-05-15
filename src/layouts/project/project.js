import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TextLarge from "../../components/atoms/text/large/textLarge";
import ProjectInformation from "../../components/organisms/ui/project/projectInformation/projectInformation";
import ProjectDependencies from "../../components/organisms/ui/project/projectDependencies/projectDependencies";
import ProjectOptions from "../../components/organisms/ui/project/projectOptions/projectOptions";
import { getProjectFirestoreInformation } from "../../utils/apiUtil";

function Project(props) {
  const [projectData, setProjectData] = useState(undefined);
  const { projectId } = useParams(); // Gets team ID from URL

  useEffect(async () => {
    await getProjectFirestoreInformation(
      projectId,
      props.userData.user.stsTokenManager["accessToken"]
    )
    .then((data) => {
      console.log(data)
      setProjectData(data)
    })
  }, []);
  
  if(projectData) {
    return (
      <div>
        <TextLarge>{projectData.projectName}</TextLarge>
        <br />
        <ProjectInformation projectData={projectData} />
        <br />
        <ProjectDependencies projectData={projectData}/>
        <br />
        <ProjectOptions />
      </div>
    );
  }

  return <p>Loading...</p>

}

export default Project;
