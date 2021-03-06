import { useEffect, useState } from "react";
import TextLarge from "../../components/atoms/text/large/textLarge";
import DashboardNotifications from "../../components/organisms/ui/dashboard/dashboardNotifications/dashboardNotifications";
import DashboardSummary from "../../components/organisms/ui/dashboard/dashboardSummary/dashboardSummary";
import { getMetrics, getNotificationsForUser } from "../../utils/apiUtil";

function Dashboard(props) {
  const [notificationsData, setNotificationsData] = useState();
  const [metrics, setMetrics] = useState();

  useEffect(() => {
    async function fetchData() {
      await getNotificationsForUser(
        props.userData.user.stsTokenManager["accessToken"]
      ).then((data) => setNotificationsData(data.notificationsData));

      setMetrics(
        await getMetrics(
          props.userData.user["uid"],
          props.userData.user.stsTokenManager["accessToken"]
        )
      );
    }
    fetchData();
  }, [props.userData.user.stsTokenManager["accessToken"]]);

  if (notificationsData && metrics) {
    return (
      <div>
        <TextLarge>Dashboard</TextLarge>
        <DashboardSummary metrics={metrics} />
        <br />
        <DashboardNotifications
          notificationsData={notificationsData}
          token={props.userData.user.stsTokenManager["accessToken"]}
        />
        <br />
      </div>
    );
  } else {
    return <p>Loading...</p>;
  }
}

export default Dashboard;
