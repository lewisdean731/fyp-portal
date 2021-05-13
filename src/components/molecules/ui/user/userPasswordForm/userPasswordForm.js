import { Col, Form, Button } from "react-bootstrap";
import Classes from "./userPasswordForm.module.scss";

function UserPasswordForm() { 
  return(
    <div>
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

export default UserPasswordForm