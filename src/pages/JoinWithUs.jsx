import {Container, Col, Row} from 'react-bootstrap';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const JoinWithUs = () => {
  let navigate = useNavigate();

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        navigate('/');
      }
  
      setValidated(true);
    };



  return (
    <div className='join min-vh-100 fw-bold '>
         <h1 className='text-center mb-4 animate__animated animate__fadeInUp fw-bold'>Join With Us!</h1>
      <Container className=' w-100 animate__animated animate__fadeInUp  '>
        <Row className='d-flex justify-content-between'>
            <Col>  
            
            <div className='form-container d-flex justify-content-center '>
                
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="d-flex flex-column  form mb-3 bg-primary bg-opacity-10 rounded ">
                 <h2 className='text-center fw-bold mt-3'>Login</h2>
                        

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

                       
                        <div className="submit-container d-flex justify-content-center mb-4"> 
                        <Button 
                        type="submit" 
                        className="btn btn-danger rounded-1 mx-2" >Login</Button>
                        </div>
                        <div className="signup mb-3 fw-normal"> 
                            <h6 className="signup mb-3 fw-normal">
                            Don`t have an account yet? Sign up at 
                            <span> <a href="/signup">Ng.</a> </span>
                            </h6>
                        </div> 
                    </Row>

                    </Form>
               </div>
            </Col>

        </Row>

      </Container>
    </div>
  );
};

export default JoinWithUs
