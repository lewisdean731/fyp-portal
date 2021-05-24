import { Button, Row, Col, Media, Image } from "react-bootstrap";
import Classes from "./notificationCard.module.scss";
import TextSmall from "../../text/small/textSmall";
import TextMedium from "../../text/medium/textMedium";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NotificationCard(props) {
  const [cssClass1, setCssClass1] = useState("");
  const [cssClass2, setCssClass2] = useState("");

  return (
    <Row className={`${Classes[cssClass1]} ${Classes[cssClass2]}`}>
      <Col>
        <Media className={Classes.notificationCard}>
          <FontAwesomeIcon icon={props.icon} className={`${Classes.icon} mr-3 ${Classes[props.severity]}`} />
          <Media.Body>
            <Row className="align-items-center">
              <Col md={6}>
                <TextMedium className={Classes.center}>
                  {props.projectName}
                </TextMedium>
                <TextSmall className={Classes.center}>
                  {props.message}
                </TextSmall>
                <TextSmall className={`${Classes.center} text-muted`}>
                  {new Date(props.timestamp).toLocaleString()}
                </TextSmall>
              </Col>
              <Col md={2}>
                <Row>
                  <TextSmall className={Classes.center}>
                    Next version: {props.nextVersion}
                  </TextSmall>
                </Row>
              </Col>
              <Col md={4}>
                <Row>
                  <Col md={6}>
                    <Button
                      variant="primary"
                      onClick={() =>
                        props.dismissed(props.index, props.notificationId)
                      }
                      href={`/project/${props.projectId}`}
                    >
                      Go to Project
                    </Button>
                  </Col>
                  <Col md={4}>
                    <Row>
                      <Button
                        variant="primary"
                        onClick={async () => {
                          props.dismissed(props.index, props.notificationId);
                          setCssClass1("goingInvisible");
                          await new Promise((resolve) =>
                            setTimeout(resolve, 350)
                          );
                          setCssClass2("invisible");
                        }}
                      >
                        Dismiss
                      </Button>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Media.Body>
        </Media>
      </Col>
    </Row>
  );
}

export default NotificationCard;
