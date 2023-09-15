import {Container, Col, Row, Form, Modal} from 'react-bootstrap';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

const SignUp = () => {

    const [validated, setValidated] = useState(false);
    const [showModal, setShowModal] = useState(false);
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        setShowModal(true);
      }
      setValidated(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };

  
  return (
    <div className='join min-vh-100 fw-bold '>
         <h1 className='text-center mb-4  fw-bold'>Join With Us!</h1>
      <Container className=' w-100 '>
        <Row className='d-flex justify-content-between'>
            <Col>  
            
            <div className='form-container d-flex justify-content-center '>
                
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="d-flex flex-column  form mb-3 bg-primary bg-opacity-10 rounded ">
                        <h2 className='text-center fw-bold mt-3'>Sign Up</h2>
                        <Form.Group className='mb-4 mx-auto' controlId="validationCustom01">
                            <Form.Label className='text-left mt-4'>Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Name"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className='mb-4 mx-auto' controlId="validationCustom02">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                placeholder="Email"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid email.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className='mb-4 mx-auto' controlId="validationCustom03">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="password"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            
                        </Form.Group>

                        <Form.Group className="text-center mb-3">
                            <div className="d-inline-block align-middle"> {/* Tambahkan div untuk mengatur posisi */}
                                <Form.Check
                                required
                                label="Agree to terms and conditions"
                                feedback="You must agree before submitting."
                                feedbackType="invalid"
                                />
                            </div>
                        </Form.Group>
                        <div className="submit-container d-flex justify-content-center mb-4"> 
                        <Button 
                        type="submit" 
                        className="btn btn-danger rounded-1 mx-2 fw-bold"  >Sign Up</Button>
                        </div>
                        
                    </Row>

                    </Form>
               </div>
            </Col>

        </Row>
      </Container>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Congratulations! You have successfully signed up.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
};

export default SignUp;