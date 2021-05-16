import { Accordion } from "react-bootstrap";
import DependencyCard from "../../../../atoms/ui/dependencyCard/dependencyCard";

function howOutOfDate(releaseDate) {
  // https://stackoverflow.com/questions/2627650/why-javascript-gettime-is-not-a-function
  let currentDate = new Date().getTime();
  return currentDate - new Date(releaseDate).getTime();
}

const epochToDays = 8.64e7

function ProjectDependenciesDisplay(props) {
  return (
    <div>
      <Accordion>
        {props.projectData.projectDependencies.directDependencies.map((dependency, count) => {

          // Check dependency for out of date, etc.
          let variant = "light";
          if (dependency.version !== dependency.latest_version) {
            const dateDiff = howOutOfDate(dependency.next_release_date);
            dateDiff / epochToDays < 12 ? variant = "warning" :  variant = "danger";
          }
          
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
              variant={variant}/>
          );
        })}
      </Accordion>
    </div>
  );
}

export default ProjectDependenciesDisplay;
