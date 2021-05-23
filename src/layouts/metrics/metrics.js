import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import TextLarge from "../../components/atoms/text/large/textLarge";
import MetricsDisplay from "../../components/organisms/ui/metrics/dashboardMetrics/metricsDisplay";
import { getTimeSeriesMetric } from "../../utils/apiUtil";
function Metrics(props) {
  const [totalDependencies, setTotalDependencies] = useState();
  const [greenDependencies, setGreenDependencies] = useState();
  const [yellowDependencies, setYellowDependencies] = useState();
  const [redDependencies, setRedDependencies] = useState();

  useEffect(() => {
    async function fetchData() {
      // Get metrics for user
      setTotalDependencies(
        await getTimeSeriesMetric(
          props.userData.user["uid"],
          "totalDependencies",
          props.userData.user.stsTokenManager["accessToken"]
        )
      );
      setGreenDependencies(
        await getTimeSeriesMetric(
          props.userData.user["uid"],
          "greenDependencies",
          props.userData.user.stsTokenManager["accessToken"]
        )
      );
      setYellowDependencies(
        await getTimeSeriesMetric(
          props.userData.user["uid"],
          "yellowDependencies",
          props.userData.user.stsTokenManager["accessToken"]
        )
      );
      setRedDependencies(
        await getTimeSeriesMetric(
          props.userData.user["uid"],
          "redDependencies",
          props.userData.user.stsTokenManager["accessToken"]
        )
      );
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
