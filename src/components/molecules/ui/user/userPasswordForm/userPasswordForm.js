import { useState } from "react";
import firebase from "firebase"
import { Col, Form, Button } from "react-bootstrap";
import TextSmall from "../../../../atoms/text/small/textSmall";
import Classes from "./userPasswordForm.module.scss";


function UserPasswordForm(props) {
  const [validated, setValidated] = useState(false);
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [newPasswordConfirm, setNewPasswordConfirm] = useState();
  const [formSubmitMsg, setFormSubmitMsg] = useState()
  const [formSubmitMsgColour, setFormSubmitMsgColour] = useState()

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

    if(newPassword !== newPasswordConfirm){
      setFormSubmitMsg("New password and confirmation must match");
    } else {
      const user = firebase.auth().currentUser;
      const credential = firebase.auth.EmailAuthProvider.credential(
        user.email,
        oldPassword
      );
      user.reauthenticateWithCredential(credential)
      .then(() => {
        user.updatePassword(newPassword)
        .then(() => {
          setFormSubmitMsgColour("green");
          setFormSubmitMsg("Password updated successfully");
        })
        .catch((error) => {
          setFormSubmitMsg(error.message);
        })
      })
      .catch((error) => {
        setFormSubmitMsg(error.message);
      })
    }


  };

  return (
    <div>
      <Form
        className={Classes.updatePassword}
        onSubmit={handleSubmit}
        noValidate
        validated={validated}
      >
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Update Password</Form.Label>
            <Form.Control required type="password" placeholder="Old Password" 
              onChange={(event) => {
                setOldPassword(event.target.value)
              }}
            />
            <Form.Control.Feedback type="invalid">
              Please enter your old password.
            </Form.Control.Feedback>  
            <br />
            <Form.Control required type="password" placeholder="New Password"
              onChange={(event) => {
                setNewPassword(event.target.value)
              }}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a new password.
            </Form.Control.Feedback>  
            <br />
            <Form.Control required type="password" placeholder="Confirm Password"
              onChange={(event) => {
                setNewPasswordConfirm(event.target.value)
              }}
            />
            <Form.Control.Feedback type="invalid">
              Please confirm your new password.
            </Form.Control.Feedback>            
            <br />
            <TextSmall colour={formSubmitMsgColour}>{formSubmitMsg}</TextSmall>
            <Button variant="primary" type="submit">
              Update Password
            </Button>
          </Form.Group>
        </Form.Row>
      </Form>
    </div>
  );
}

export default UserPasswordForm;
