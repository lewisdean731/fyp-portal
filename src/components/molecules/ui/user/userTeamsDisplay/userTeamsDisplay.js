import { Row, Col } from "react-bootstrap";
import TeamCard from "../../../../atoms/ui/teamCard/teamCard";
import { createRowArray } from "../../../../../utils/gridUtil";

function UserTeamsDisplay(props) {
  const teams = props.teamsData
    ? props.teamsData
    : ["No Team Data Available"]; //Handle no projects in props

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
                    <TeamCard id={teams[index].teamId} name={teams[index].teamName} />
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
