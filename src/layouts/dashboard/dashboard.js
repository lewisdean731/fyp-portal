import { useEffect, useState } from "react";
import TextLarge from "../../components/atoms/text/large/textLarge";
import DashboardMetrics from "../../components/organisms/ui/dashboard/dashboardMetrics/dashboardMetrics";
import DashboardNotifications from "../../components/organisms/ui/dashboard/dashboardNotifications/dashboardNotifications";
import DashboardSummary from "../../components/organisms/ui/dashboard/dashboardSummary/dashboardSummary";
import { getNotificationsForUser } from "../../utils/apiUtil"

function Dashboard(props) {
  const [notificationsData, setNotificationsData] = useState()

  useEffect(() => {
    async function fetchData() {
      await getNotificationsForUser(
        props.userData.user.stsTokenManager["accessToken"]
      )
      .then((data) => setNotificationsData(data.notificationsData))
    }
    fetchData();
    
  }, []);

  if(notificationsData){
    return (
      <div>
        <TextLarge>Dashboard</TextLarge>
        <DashboardSummary />
        <br />
        <DashboardNotifications notificationsData={notificationsData}/>
        <br />
        <DashboardMetrics />
      </div>
    );
  } else {
    return <p>Loading...</p>;
  }

}

export default Dashboard;
