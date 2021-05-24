import { Accordion } from "react-bootstrap";
import DependencyCard from "../../../../atoms/ui/dependencyCard/dependencyCard";
import {
  faCheckSquare,
  faExclamation,
  faExclamationTriangle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import {
  howOutOfDate,
  updateType,
} from "../../../../../utils/dependency/dependencyUtil";

function ProjectDependenciesDisplay(props) {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        {props.projectData.projectDependencies.directDependencies.map(
          (dependency, count) => {
            // Check dependency for out of date, etc.
            let variant = "success";
            let icon = faCheckSquare;
            let daysOutOfDate = "Using latest version";
            if (dependency.version !== dependency.latest_version) {
              const dateDiff = howOutOfDate(dependency.next_release_date);
              daysOutOfDate = `${Math.round(
                dateDiff / 8.64e7
              )} days out of date`;
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
                releaseDate={new Date(
                  dependency.release_date
                ).toLocaleDateString()}
                nextVersion={dependency.next_version}
                nextReleaseDate={new Date(
                  dependency.next_release_date
                ).toLocaleDateString()}
                latestVersion={dependency.latest_version}
                latestReleaseDate={new Date(
                  dependency.latest_release_date
                ).toLocaleDateString()}
                variant={variant}
                icon={icon}
                daysOutOfDate={daysOutOfDate}
              />
            );
          }
        )}
      </Accordion>
    </div>
  );
}

export default ProjectDependenciesDisplay;
