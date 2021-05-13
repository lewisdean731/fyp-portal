import { Row, Col } from "react-bootstrap";
import TeamProjectCard from "../../../../atoms/ui/teamProjectCard/teamProjectCard";
import { createRowArray } from "../../../../../utils/gridUtil";

function TeamProjectsDisplay(props) {
  console.log(JSON.stringify(props));
  const projects = props.projectsData
    ? props.projectsData
    : ["No Project Data Available"]; //Handle no projects in props

  const grid = createRowArray(4, projects);

  //The two maps create a set of rows and columns containing an arbtrary no. of
  //Cards

  return (
    <div>
      {grid.map((x, row) => {
        return (
          <div>
            <Row className="justify-content-md-center">
              {grid[row].map((index) => {
                // Handle no project type (maybe hasn't loaded yet)
                const pt = projects[index].projectType
                  ? Object.keys(projects[index].projectType)[0]
                  : "Unknown";

                return (
                  <Col md={3}>
                    <TeamProjectCard
                      name={projects[index].projectName}
                      projectType={pt}
                      id={projects[index].projectId}
                    />
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

export default TeamProjectsDisplay;
