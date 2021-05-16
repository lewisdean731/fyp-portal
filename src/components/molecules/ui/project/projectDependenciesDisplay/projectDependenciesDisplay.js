import { Accordion } from "react-bootstrap";
import DependencyCard from "../../../../atoms/ui/dependencyCard/dependencyCard";
function ProjectDependenciesDisplay(props) {
  return (
    <div>
      <Accordion>
        {props.projectData.projectDependencies.directDependencies.map((dependency, count) => {
          return (
            <DependencyCard 
              eventKey={count.toString()} 
              name={dependency.name} 
              version={dependency.version}
              releaseDate={dependency.release_date}
              nextVersion={dependency.next_version}
              nextReleaseDate={dependency.next_release_date}
              latestVersion={dependency.latest_version}
              latestReleaseDate={dependency.latest_release_date}
              variant={"light"}/>
          );
        })}
      </Accordion>
    </div>
  );
}

export default ProjectDependenciesDisplay;
