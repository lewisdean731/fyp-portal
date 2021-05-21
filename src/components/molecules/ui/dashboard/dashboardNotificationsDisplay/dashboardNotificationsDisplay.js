import { useEffect, useState } from "react";
import NotificationCard from "../../../../atoms/ui/notificationCard/notificationCard";

function DashboardNotificationsDisplay(props) {
  console.log(`Rendering`);
  const [notifications, setNotifications] = useState(props.notificationsData); //Handle no notifs in props
  
  useEffect(() => {
    setNotifications(props.notificationsData ? props.notificationsData : null)

    }, [notifications]);

  function dismissed(index, notificationId) {
    console.log(`Dismissing ${index} - ${notificationId}`);
  }

  return (
    <div className="justify-content-md-center">
      {notifications?.map(
          (notification, count) => {
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
              />
            );
          }
        )}
    </div>
  );
}

export default DashboardNotificationsDisplay;