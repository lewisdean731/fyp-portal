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

// Work out whether update is major, minor or patch
// Only really works for SemVer-following dependencies
// (which SHOULD be all of them)
function updateType(dependency){
  let currentVersionArray = dependency.version.split(".");
  let latestVersionArray = dependency.latest_version.split(".");

  if (currentVersionArray[0] !== latestVersionArray[0]) {
    return {type: "MAJOR UPDATE", variant: "danger"}
  }
  if (currentVersionArray[1] !== latestVersionArray[1]) {
    return {type: "MINOR UPDATE", variant: "warning"}
  }
  if (currentVersionArray[2] !== latestVersionArray[2]) {
    return {type: "PATCH UPDATE", variant: "light"}
  }
  return {type: "", variant: "light"}
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
                version={dependency.version}
                badgeVariant={updateType(dependency).variant}
                badgeMessage={updateType(dependency).type}
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
