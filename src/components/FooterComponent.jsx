import {Container, Col, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import {useNavigate} from "react-router-dom";

const FooterComponent = () => {

  let navigate = useNavigate();

  return (
    <div className='footer py-5'>
      <Container>
        <Row className='d-flex justify-content-between'>
          <Col lg="5">
            <h3 className='fw-bold'>Ngoding.</h3>
            <p className='desc'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque numquam pariatur qui labore iure, libero enim quae sapiente maiores ea!
            </p>
            <div className='no mb-1 mt-4'>
              <Link className='text-decoration-none'>
                <i className='fa-brands fa-whatsapp'></i>
                <p className='m-0'>+62 123-456-7812</p>
              </Link>
            </div>
            <div className='mail'>
              <Link className='text-decoration-none'>
                <i className='fa-regular fa-envelope'></i>
                <p className='m-0'>persom-email@gmail.com</p>
              </Link>
            </div>
          </Col>

          <Col className='d-flex flex-column col-lg-2 col mt-lg-0 mt-5'>
            <h5 className='fw-bold'>Menu</h5>
            <Link to="/">Home</Link>
            <Link to="/kelas">Courses</Link>
            <Link to="/testimonial">Testimonial</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/syaratketen">Terms and conditions</Link>
            
          </Col>

          <Col lg="4" className='mt-lg-0 mt-5'>
           <h5 className='fw-bold mb-3'> Subscribe for fascinating updates!</h5>
           <div className='subscribe'>
            
            <button className="btn btn-danger rounded-1" onClick={() => navigate("/joinwithus")} >Join With us</button>
           </div>
           <div className='social mt-3'>
              <Link to="https://www.youtube.com/" >
                <i className='fa-brands fa-youtube link-icon'></i>
              </Link>
              <Link to="https://www.twitter.com/" >
                <i className='fa-brands fa-twitter link-icon'></i>
              </Link>
              <Link to="https://www.linkedin.com/" >
                <i className='fa-brands fa-linkedin link-icon'></i>
              </Link>
              <Link to="https://www.facebook.com/" >
                <i className='fa-brands fa-facebook link-icon'></i>
              </Link>
           </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <p className='text-center px-md-0 px-3'> &copy; Copyright {new Date().getFullYear()} by <span className='fw-bold'>Ng.</span>, All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FooterComponent
