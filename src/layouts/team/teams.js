import { useState, useEffect } from "react";
import TextLarge from "../../components/atoms/text/large/textLarge";
import CreateTeam from "../../components/organisms/ui/team/createTeam/createTeam";
import UserTeamData from "../../components/organisms/ui/user/userTeamData/userTeamData";
import {
  getTeamFirestoreInformation,
  getUserFirestoreInformation,
} from "../../utils/apiUtil";
function Teams(props) {
  const [teamsData, setTeamsData] = useState("");
  const [userFirestoreData, setUserFirestoreData] = useState("");

  // Get team data, then get project data for projects owned by team
  useEffect(async () => {
    await getUserFirestoreInformation(
      props.userData.user["uid"],
      props.userData.user.stsTokenManager["accessToken"]
    )
      .then(async (data) => {
        console.log(data);
        setUserFirestoreData(data);
        return data;
      })
      .then((data) => {
        data.teams.map(async (teamId) => {
          await getTeamFirestoreInformation(
            teamId,
            props.userData.user.stsTokenManager["accessToken"]
          ).then((data) => {
            data["teamId"] = teamId;
            setTeamsData((teamsData) => [...teamsData, data]);
          });
        });
      });
  }, []);

  return (
    <div>
      <TextLarge>My Teams</TextLarge>
      <CreateTeam uid={props.userData.user["uid"]} token={props.userData.user.stsTokenManager["accessToken"]}/>
      <br />
      <UserTeamData userFirestoreData={userFirestoreData} />
    </div>
  );
}

export default Teams;
