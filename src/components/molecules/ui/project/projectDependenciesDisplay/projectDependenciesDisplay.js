import { Accordion } from "react-bootstrap";
import DependencyCard from "../../../../atoms/ui/dependencyCard/dependencyCard";

function howOutOfDate(releaseDate) {
  // https://stackoverflow.com/questions/2627650/why-javascript-gettime-is-not-a-function
  let currentDate = new Date().getTime();
  return currentDate - new Date(releaseDate).getTime();
}

function ProjectDependenciesDisplay(props) {
  return (
    <div>
      <Accordion>
        {props.projectData.projectDependencies.directDependencies.map(
          (dependency, count) => {
            // Check dependency for out of date, etc.
            let variant = "success";
            if (dependency.version !== dependency.latest_version) {
              const dateDiff = howOutOfDate(dependency.next_release_date);
              if (dateDiff > props.projectData.redWarningPeriod) {
                variant = "danger";
              } else {
                if (dateDiff > props.projectData.yellowWarningPeriod) {
                  variant = "warning";
                } else {
                  variant = "light";
                }
              }
            }

            return (
              <DependencyCard
                key={dependency.name}
                eventKey={count.toString()}
                name={dependency.name}
                version={dependency.version}
                releaseDate={dependency.release_date}
                nextVersion={dependency.next_version}
                nextReleaseDate={dependency.next_release_date}
                latestVersion={dependency.latest_version}
                latestReleaseDate={dependency.latest_release_date}
                variant={variant}
              />
            );
          }
        )}
      </Accordion>
    </div>
  );
}

export default ProjectDependenciesDisplay;
