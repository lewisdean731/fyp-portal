import { CardColumns } from "react-bootstrap";
import ProjectCard from "../../../../atoms/ui/projectCard/projectCard";

function TeamProjectsDisplay(props) {
  console.log(JSON.stringify(props));
  const projects = props.projectsData
    ? props.projectsData
    : ["No Project Data Available"]; //Handle no projects in props

  return (
    <CardColumns className="justify-content-md-center">
      {projects.map((project) => {
        return (
          <ProjectCard
            key={project.projectId}
            name={project.projectName}
            projectType={Object.keys(project.projectType)[0]}
            id={project.projectId}
          />
        );
      })}
    </CardColumns>
  );
}

export default TeamProjectsDisplay;
