import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TextLarge from "../../components/atoms/text/large/textLarge";
import TeamProjectsData from "../../components/organisms/ui/team/teamProjectsData/teamProjectsData"
import TeamOptionsForm from "../../components/molecules/ui/team/teamOptionsForm/teamOptionsForm";
import { getTeamFirestoreInformation, getProjectFirestoreInformation } from "../../utils/apiUtil";
function Team(props) {
  const [teamData, setTeamData] = useState("");
  const [projectsData, setProjectsData] = useState("");
  const { teamId } = useParams(); // Gets team ID from URL

  // Get team data, then get project data for projects owned by team
  useEffect(async () => {
    await getTeamFirestoreInformation(
      teamId,
      props.userData.user.stsTokenManager["accessToken"]
    ).then(async (data) => {
      console.log(data);
      setTeamData(data);
      return data
    }).then((data) => {
      data.teamProjects.map(async (projectId) => {
        await getProjectFirestoreInformation(
          projectId,
          props.userData.user.stsTokenManager["accessToken"]
        ).then((data) => {
          data["projectId"] = projectId
          setProjectsData((projectsData) => [...projectsData, data])
        })
      })
    });
  }, []);

  return (
    <div>
      <TextLarge>{teamData.teamName}</TextLarge>
      {/* TODO <TeamDetails teamData={props.teamData} /> */}
      <br />
      <TeamProjectsData projectsData={projectsData}/>
      <br />
      {/* TODO <TeamMembers teamData={props.teamData} /> */}
      <br />
      <TeamOptionsForm teamData={teamData} />
    </div>
  );
}

export default Team;
