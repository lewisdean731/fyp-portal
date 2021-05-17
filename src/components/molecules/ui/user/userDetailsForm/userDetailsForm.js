import { useState } from "react";
import { Col, Form, Button } from "react-bootstrap";
import Classes from "./userDetailsForm.module.scss";
import firebase from "firebase/app";

function UserDetailsForm(props) {
  const [validated, setValidated] = useState(false)
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [telephone, setTelephone] = useState();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      // Don't reload the page
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    // Don't reload the page
    event.preventDefault();
    event.stopPropagation();


  };

  return (
    <div>
      <Form
        className={Classes.personalDetails}
        onSubmit={handleSubmit}
        noValidate
        validated={validated}
      >
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              onChange={(event) => {
                setName(event.target.value)
              }}
              defaultValue={props.userData.user["displayName"]}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="formPlaintextPersonalDetails02">
            <Form.Label>Telephone</Form.Label>
            <Form.Control
              type={"tel"}
              pattern={"07[0-9]{9}"}
              onChange={(event) => {
                setTelephone(event.target.value)
              }}
              defaultValue={props.userData.user["phoneNumber"]}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid 11-digit UK moblile number, or leave blank.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formPlaintextPersonalDetails03">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type={"email"}
              pattern={".+@+.+."}
              onChange={(event) => {
                setEmail(event.target.value)
              }}
              defaultValue={props.userData.user["email"]}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid email address.
            </Form.Control.Feedback>
          </Form.Group>

          <Col />
        </Form.Row>
        <br />
        <Form.Row>
          <Form.Group as={Col}>
            <Button variant="primary" type="submit">
              Update Details
            </Button>
          </Form.Group>
        </Form.Row>
      </Form>
    </div>
  );
}

export default UserDetailsForm;
