import TextLarge from "../../components/atoms/text/large/textLarge";
import DashboardMetrics from "../../components/organisms/ui/dashboard/dashboardMetrics/dashboardMetrics";
import DashboardNotifications from "../../components/organisms/ui/dashboard/dashboardNotifications/dashboardNotifications";
import DashboardSummary from "../../components/organisms/ui/dashboard/dashboardSummary/dashboardSummary";

function Dashboard() {
  return (
    <div>
      <TextLarge colour={"grey"}>Dashboard</TextLarge>
      <DashboardSummary />
      <br />
      <DashboardNotifications />
      <br />
      <DashboardMetrics />
    </div>
  );
}

export default Dashboard;
