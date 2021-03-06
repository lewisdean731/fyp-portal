import { useEffect, useState } from "react";
import { acknowledgeNotification } from "../../../../../utils/apiUtil";
import NotificationCard from "../../../../atoms/ui/notificationCard/notificationCard";
import {
  faExclamation,
  faExclamationTriangle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

function DashboardNotificationsDisplay(props) {
  console.log(`Rendering`);
  const [notifications, setNotifications] = useState(props.notificationsData); //Handle no notifs in props

  // Order by most recent
  notifications.sort((a, b) =>
    a.timestamp < b.timestamp ? 1 : b.timestamp < a.timestamp ? -1 : 0
  );

  useEffect(() => {}, [notifications]);

  function dismissed(index, notificationId) {
    console.log(`Dismissing ${index} - ${notificationId}`);
    acknowledgeNotification(notificationId, props.token);
  }

  function iconBySeverity(severity) {
    if (severity === "yellow") {
      return faExclamationTriangle;
    }
    if (severity === "red") {
      return faTimesCircle;
    }
    return faExclamation;
  }

  return (
    <div className="justify-content-md-center">
      {notifications?.map((notification, count) => {
        return (
          <NotificationCard
            key={count}
            index={count} //`key` is not a prop, it's for other react stuff
            projectName={notification.projectName}
            projectId={notification.projectId}
            message={notification.message}
            severity={notification.severity}
            nextVersion={notification.nextVersion}
            timestamp={notification.timestamp}
            notificationId={notification.notificationId}
            dismissed={dismissed}
            icon={iconBySeverity(notification.severity)}
          />
        );
      })}
    </div>
  );
}

export default DashboardNotificationsDisplay;
