import { Col, Form, Button } from "react-bootstrap";
import Classes from "./userDetailsForm.module.scss";

function UserDetailsForm(props) { 
  return(
    <div>
      <Form className={Classes.personalDetails}>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Name</Form.Label>
            <Form.Control readOnly defaultValue={props.userData.user["displayName"]} />
          </Form.Group>
          <Form.Group as={Col} controlId="formPlaintextPersonalDetails02">
            <Form.Label>Telephone</Form.Label>
            <Form.Control readOnly defaultValue={props.userData.user["phoneNumber"]} />
          </Form.Group>
        </Form.Row>
        <Form.Row>    
          <Form.Group as={Col} controlId="formPlaintextPersonalDetails03">
            <Form.Label>Email</Form.Label>
            <Form.Control readOnly defaultValue={props.userData.user["email"]} />
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

      <hr />

      <Form className={Classes.updatePassword}>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Update Password</Form.Label>
              <Form.Control readOnly type="password" placeholder="Old Password" />
              <br />
              <Form.Control readOnly type="password" placeholder="New Password" />
              <br />
              <Form.Control readOnly type="password" placeholder="Confirm Password" />
              <br />
              <Button variant="primary" type="submit">
                Update Password
              </Button>
          </Form.Group>
        </Form.Row>
      </Form>
    </div>
  )
}

export default UserDetailsForm