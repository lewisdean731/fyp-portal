import DashboardNotifications from '../../components/organisms/ui/dashboardNotifications/dashboardNotifications';
import DashboardSummary from '../../components/organisms/ui/dashboardSummary/dashboardSummary';

function Dashboard() {
  return (
    <div>
      <p>Hello World</p>
      <DashboardSummary />
      <DashboardNotifications />
    </div>
  );
}

export default Dashboard;
