import { Form } from 'react-bootstrap';

const ContactsForm = () => {
  return (
    <Form className="w-75 mx-auto">
      <div className="row row-cols-2 align-items-center">
        <Form.Group className="mb-3 rounded-5" controlId="exampleForm.ControlInput1">
          <Form.Control type="text" placeholder="Your Name" />
        </Form.Group>
        <Form.Group className="mb-3 rounded-5" controlId="exampleForm.ControlInput2">
          <Form.Control type="email" placeholder="name@example.com"/>
        </Form.Group>
      </div>
      <Form.Group className="mb-3 rounded-5" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" placeholder="Message"  />
      </Form.Group>
      <div className="row row-cols-2">
        <Form.Group className="rounded-5" controlId="exampleForm.ControlInput3">
          <Form.Control type="phone" placeholder="Phone" />
        </Form.Group>
        <button className="btn btn-primary mb-2 rounded-5" style={{maxWidth: '474px', marginLeft: '12px'}}>Send</button>
      </div>
    </Form>
  );
};

export default ContactsForm;