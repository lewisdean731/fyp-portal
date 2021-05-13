import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TextLarge from "../../components/atoms/text/large/textLarge";
import TeamOptionsForm from "../../components/molecules/ui/team/teamOptionsForm/teamOptionsForm";
import { getTeamFirestoreInformation } from "../../utils/apiUtil";
function Team(props) {
  const [teamFirestoreData, setTeamFirestoreData] = useState("");
  const { teamId } = useParams(); // Gets team ID from URL

  useEffect(async () => {
    await getTeamFirestoreInformation(
      teamId,
      props.userData.user.stsTokenManager["accessToken"]
    ).then((data) => {
      console.log(data);
      setTeamFirestoreData(data);
    });
  }, []);

  return (
    <div>
      <TextLarge>{teamFirestoreData.teamName}</TextLarge>
      {/* TODO <TeamDetails teamData={props.teamData} /> */}
      <br />
      {/* TODO <TeamProjects teamData={props.teamData} /> */}
      <br />
      {/* TODO <TeamMembers teamData={props.teamData} /> */}
      <br />
      <TeamOptionsForm teamData={teamFirestoreData} />
    </div>
  );
}

export default Team;
