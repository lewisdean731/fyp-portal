import { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import TextMedium from "../../../../atoms/text/medium/textMedium";
import UserTeamsDisplay from "../../../../molecules/ui/user/userTeamsDisplay/userTeamsDisplay";
import {
  getUserFirestoreInformation,
  getTeamFirestoreInformation,
} from "../../../../../utils/apiUtil";
import Classes from "./userTeamData.module.scss";

function UserTeamData(props) {
  const [teamsData, setTeamsData] = useState([]);

  // Get user data, then get team data for all user's teams
  useEffect(() => {
    async function fetchData() {
      await getUserFirestoreInformation(props.uid, props.token)
        .then(async (data) => {
          console.log(data);
          return data;
        })
        .then((data) => {
          data.teams.map(async (teamId) => {
            await getTeamFirestoreInformation(teamId, props.token).then(
              (data) => {
                data["teamId"] = teamId;
                console.log(data);
                setTeamsData((teamsData) => [...teamsData, data]);
              }
            );
          });
        });
    }
    fetchData();
  }, [props]);

  return (
    <Container fluid className={Classes.userTeamData}>
      <TextMedium colour={"grey"}>Teams</TextMedium>
      <Row className="justify-content-md-center">
        <Col>
          <UserTeamsDisplay teamsData={teamsData} />
        </Col>
      </Row>
    </Container>
  );
}

export default UserTeamData;
