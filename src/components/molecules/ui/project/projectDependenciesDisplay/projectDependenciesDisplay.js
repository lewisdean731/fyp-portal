import { Accordion } from "react-bootstrap";
import DependencyCard from "../../../../atoms/ui/dependencyCard/dependencyCard";
import {
  faCheckSquare,
  faExclamation,
  faExclamationTriangle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
function howOutOfDate(releaseDate) {
  // https://stackoverflow.com/questions/2627650/why-javascript-gettime-is-not-a-function
  let currentDate = new Date().getTime();
  return currentDate - new Date(releaseDate).getTime();
}

function ProjectDependenciesDisplay(props) {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        {props.projectData.projectDependencies.directDependencies.map(
          (dependency, count) => {
            // Check dependency for out of date, etc.
            let variant = "success";
            let icon = faCheckSquare;
            if (dependency.version !== dependency.latest_version) {
              const dateDiff = howOutOfDate(dependency.next_release_date);
              if (dateDiff > props.projectData.redWarningPeriod) {
                variant = "danger";
                icon = faTimesCircle;
              } else {
                if (dateDiff > props.projectData.yellowWarningPeriod) {
                  variant = "warning";
                  icon = faExclamationTriangle;
                } else {
                  variant = "light";
                  icon = faExclamation;
                }
              }
            }

            return (
              <DependencyCard
                key={dependency.name}
                eventKey={count.toString()}
                name={dependency.name}
                version={
                  dependency.version == dependency.latest_version
                    ? dependency.version
                    : `${dependency.version} => ${dependency.latest_version}`
                }
                releaseDate={dependency.release_date}
                nextVersion={dependency.next_version}
                nextReleaseDate={dependency.next_release_date}
                latestVersion={dependency.latest_version}
                latestReleaseDate={dependency.latest_release_date}
                variant={variant}
                icon={icon}
              />
            );
          }
        )}
      </Accordion>
    </div>
  );
}

export default ProjectDependenciesDisplay;
