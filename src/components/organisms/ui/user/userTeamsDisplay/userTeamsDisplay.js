import { Row, Col } from "react-bootstrap";
import UserTeamCard from "../../../../molecules/ui/user/userTeamCard/userTeamCard";
import { createRowArray } from "../../../../../utils/gridUtil";

function UserTeamsDisplay(props) {
  const teams = props.teams ? props.teams : ["No Team Data Available"]; //Handle no teams in props

  const grid = createRowArray(4, teams);

  //The two maps create a set of rows and columns containing an arbtrary no. of
  //Cards

  return (
    <div>
      {grid.map((x, row) => {
        return (
          <div>
            <Row className="justify-content-md-center">
              {grid[row].map((index) => {
                return (
                  <Col md={3}>
                    <UserTeamCard id={teams[index]} />
                  </Col>
                );
              })}
            </Row>
            <br />
          </div>
        );
      })}
    </div>
  );
}

export default UserTeamsDisplay;
