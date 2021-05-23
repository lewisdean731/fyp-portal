import React, { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import TextMedium from "../../../../atoms/text/medium/textMedium";
import { PieChart } from "../../../../atoms/ui/chart/pie/pie";
import { LineChart } from "../../../../atoms/ui/chart/line/line";
import Classes from "./metricsDisplay.module.scss";

function makeLabels(metricArr){
  let labels = []
  metricArr.forEach((obj) => {
    labels.push(parseInt(obj.timestamp))
  })
  return labels;
}

function makeData(metricArr){
  let labels = []
  metricArr.forEach((obj) => {
    labels.push(parseInt(obj.value))
  })
  return labels;
}


function MetricsDisplay(props) {
  
  useEffect(() => {}, [props]);
  
  function total(){
    if(props.totalDependencies){
      return <LineChart
      title={"Total Dependencies"}
      label={"# of dependencies"}
      labels={makeLabels(props.totalDependencies)}
      data={makeData(props.totalDependencies)}
      colour={"#CDCDCD"}
    />
    }
  }
  function green(){
    if(props.greenDependencies){
      return <LineChart
      title={"Green Dependencies"}
      label={"# of dependencies"}
      labels={makeLabels(props.greenDependencies)}
      data={makeData(props.greenDependencies)}
      colour={"#28A745"}
    />
    }
  }
  function yellow(){
    if(props.yellowDependencies){
      return <LineChart
      title={"Yellow Dependencies"}
      label={"# of dependencies"}
      labels={makeLabels(props.yellowDependencies)}
      data={makeData(props.yellowDependencies)}
      colour={"#FFC107"}
    />
    }
  }
  function red(){
    if(props.redDependencies){
      return <LineChart
      title={"Red Dependencies"}
      label={"# of dependencies"}
      labels={makeLabels(props.redDependencies)}
      data={makeData(props.redDependencies)}
      colour={"#DC3545"}
    />
    }
  }

  if(props.totalDependencies){
    return (
      <Container className={Classes.metricsDisplay}>
          <TextMedium>Dependencies across Projects</TextMedium>
          <Row>
            <Col className={Classes.col}>
              {total()}
            </Col>
            <Col className={Classes.col}>
              {green()}
            </Col>
          </Row>
          <Row>
            <Col className={Classes.col}>
              {yellow()}
            </Col>
            <Col className={Classes.col}>
              {red()}
            </Col>
          </Row>
      </Container>
    );
  } 
  
  return <p>Loading...</p>
  
}

export default MetricsDisplay;
