import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TextLarge from "../../components/atoms/text/large/textLarge";

function Team(props) {
  const [projectData, setProjectData] = useState("");
  const { projectId } = useParams(); // Gets team ID from URL

  useEffect(async () => {

  }, []);

  return (
    <div>
      <TextLarge>{projectData.projectName}</TextLarge>
      <br />
      {/* TODO <ProjectInformation /> */}
      <br />
      {/* TODO <ProjectDependencies /> */}
      <br />
      {/* TODO <ProjectOptions /> */}
    </div>
  );
}

export default Team;
