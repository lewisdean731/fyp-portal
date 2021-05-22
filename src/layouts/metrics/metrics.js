import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import TextLarge from "../../components/atoms/text/large/textLarge";
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
      setTotalDependencies(getMetricTotalDependencies(
        props.userData.user["uid"],
        props.userData.user.stsTokenManager["accessToken"]
      ))
      setGreenDependencies(getMetricGreenDependencies(
        props.userData.user["uid"],
        props.userData.user.stsTokenManager["accessToken"]
      ))
      setYellowDependencies(getMetricYellowDependencies(
        props.userData.user["uid"],
        props.userData.user.stsTokenManager["accessToken"]
      ))
      setRedDependencies(getMetricRedDependencies(
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
      </Container>
    );
  }

  return <p>Loading...</p>;
}

export default Metrics;
