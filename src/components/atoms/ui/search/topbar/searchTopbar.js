import { Col, Form } from "react-bootstrap";
export default function SearchTopbar(props) {
  return (
    <Form className={props.className}>
      <Form.Row>
        <Col>
          <Form.Label htmlFor="inlineFormInput" srOnly>
            Search
          </Form.Label>
          <Form.Control placeholder="Search..." />
        </Col>
      </Form.Row>
    </Form>
  );
}
