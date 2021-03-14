import TextLarge from "../../components/atoms/text/large/textLarge";
import DashboardNotifications from "../../components/organisms/ui/dashboardNotifications/dashboardNotifications";
import DashboardSummary from "../../components/organisms/ui/dashboardSummary/dashboardSummary";

function Dashboard() {
  return (
    <div>
      <TextLarge colour={"grey"}>Dashboard</TextLarge>
      <DashboardSummary />
      <br />
      <DashboardNotifications />
    </div>
  );
}

export default Dashboard;
