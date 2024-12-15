import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GoogleMap from '../GoogleMap';
const Home = () => {
  
  
  return (
    <div>
        
        <Carousel fade>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="/images/carousel3.jpg"
          alt="First slide"
          style={{height: '100%' }}
          
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="/images/carousel1.jpg"
          alt="First slide"
          style={{ objectFit: 'cover', height: '100%' }}
        />
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="/images/carousel5.jpg"
          alt="First slide"
          style={{ objectFit: 'cover', height: '100%' }}
        />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>

    <h1 className='text-center mt-3 text-danger fw-bold'>FIND YOUR DREAM CAR</h1>
    <h3 className='text-center mt-1'>START YOUR JOURNEY WITH US</h3>
    {/* BUY, SELL AND FINANCE */}

    <div className='d-flex justify-content-center container my-3'>
    <a href="/all-cars" className='text-decoration-none me-2 w-50 bg-dark text-center'><button className="btn btn-dark fw-bold">BUY</button></a>
    <a href="/add-car" className='text-decoration-none me-2 w-50 bg-danger text-center'><button className="btn btn-danger fw-bold">SELL</button></a>
    <a href="/all-cars" className='text-decoration-none me-2 w-50 bg-danger text-center'><button className="btn btn-danger fw-bold">FINANCE</button></a>
    </div>


    <div className='d-flex justify-content-center'>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-danger" type="submit">Search</button>
    </form>
    </div>

    <Container className='mt-5'>
      <Row className='mt-auto'>
        <Col md={6} lg={6}>
          <h1 className='mt-5 mb-5 text-danger'>Head down to Maye Autos, the largest new and used car supermarket in the Western Hemisphere!</h1>
          <p className='text-default fw-bold'>If you are looking for a car, whether new or used, CarCity is the place to be! With a wide range of cars including Holden, Ford, Toyota, Mazda, Hyundai, Volkswagen, Subaru, Mitsubishi, as well as prestige cars including Audi, BMW, and Mercedes-Benz, and new cars as well, there is a car for everyone at CarCity.</p>
          <p className='text-default fw-bold'>With over 20 independent dealers, you are sure to find the car you are looking for, at a competitive price, particularly with CarCity being the largest used car complex in the Southern Hemisphere!</p>
          <p className='text-default fw-bold'>Having been established in 1985, CarCity has become a household name, and has over 35 years of experience in the car trade. We pride ourselves on our knowledge of the used and new car trade, and are confident that you will find what you are looking for, at a very fair price.</p>
          <p className='text-default fw-bold'>Buy with comfort with extended warranty available, and onsite finance.</p>
          <p className='text-default fw-bold'>So what are you waiting for? Head on down to CarCity today and remember to “keep your eyes open for a bargain!”</p>
        </Col>
        
        <Col md={6} lg={6}>
        <div className='mt-5 mb-5'>
        <h1 className='text-default text-center'>Locations</h1>
        <GoogleMap />
      
        </div>
        </Col>
      </Row>
    </Container>
  
    </div>
    
  )
}

export default Home