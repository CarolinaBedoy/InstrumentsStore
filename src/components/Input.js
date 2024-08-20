import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Input(props) {
  return (
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Control type="text" placeholder={props.title} />
      </Form.Group>
  );
}

export default Input;