import Carousel from 'react-bootstrap/Carousel';
const Home = () => {
  return (
    <div style={{ marginBottom: '100px' }}>
        
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
  
    </div>
    
  )
}

export default Home