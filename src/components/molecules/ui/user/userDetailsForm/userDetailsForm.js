import { useState } from "react";
import { Col, Form, Button } from "react-bootstrap";
import Classes from "./userDetailsForm.module.scss";
import firebase from "firebase/app";
import TextSmall from "../../../../atoms/text/small/textSmall";

function UserDetailsForm(props) {
  const [validated, setValidated] = useState(false)
  const [name, setName] = useState(props.userData.user["displayName"]);
  const [email, setEmail] = useState(props.userData.user["email"]);
  const [formSubmitMsg, setFormSubmitMsg] = useState("")
  const [formSubmitMsgColour, setFormSubmitMsgColour] = useState("")

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

    setFormSubmitMsgColour("red");
    setFormSubmitMsg("");

    let user = firebase.auth().currentUser;
    user.updateProfile({
      displayName: name
    })
    .then(() => {
      user.updateEmail(email)
      .then(() => {
        setFormSubmitMsgColour("green");
        setFormSubmitMsg("Details updated successfully");
      })
      .catch((error) => {setFormSubmitMsg(error.message)})
    })
    .catch((error) => {setFormSubmitMsg(error.message)})

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
          <Form.Group as={Col}>
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
        </Form.Row>
        <br />
        <TextSmall colour={formSubmitMsgColour}>{formSubmitMsg}</TextSmall>
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
