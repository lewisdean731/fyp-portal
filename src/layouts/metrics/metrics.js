import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import TextLarge from "../../components/atoms/text/large/textLarge";
import MetricsDisplay from "../../components/organisms/ui/metrics/dashboardMetrics/metricsDisplay";
import { 
  getMetricTotalDependencies,
  getMetricGreenDependencies,
  getMetricYellowDependencies,
  getMetricRedDependencies
  } from "../../utils/apiUtil";
function Metrics(props) {
  const [totalDependencies, setTotalDependencies] = useState()
  const [greenDependencies, setGreenDependencies] = useState()
  const [yellowDependencies, setYellowDependencies] = useState()
  const [redDependencies, setRedDependencies] = useState()

  useEffect(() => {
    async function fetchData() {
      // Get metrics for user
      setTotalDependencies(await getMetricTotalDependencies(
        props.userData.user["uid"],
        props.userData.user.stsTokenManager["accessToken"]
      ))
      setGreenDependencies(await getMetricGreenDependencies(
        props.userData.user["uid"],
        props.userData.user.stsTokenManager["accessToken"]
      ))
      setYellowDependencies(await getMetricYellowDependencies(
        props.userData.user["uid"],
        props.userData.user.stsTokenManager["accessToken"]
      ))
      setRedDependencies(await getMetricRedDependencies(
        props.userData.user["uid"],
        props.userData.user.stsTokenManager["accessToken"]
      ))
    }
    fetchData();
  }, [props]);

  if (true) {
    return (
      <Container>
        <TextLarge>Metrics</TextLarge>
        <MetricsDisplay 
          totalDependencies={totalDependencies}
          greenDependencies={greenDependencies}
          yellowDependencies={yellowDependencies}
          redDependencies={redDependencies}
        />
      </Container>
    );
  }

  return <p>Loading...</p>;
}

export default Metrics;
