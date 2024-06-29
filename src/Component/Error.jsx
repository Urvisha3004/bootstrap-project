import React from 'react';
import { Container } from "react-bootstrap";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { BiError } from "react-icons/bi";

function Error() {
  return (
    <>
      <Container fluid>
        <div className="row ">
          <div className="col-lg-6 container d-flex justify-content-center m-auto ">
            <div className="Slider_text ">
              <h1 style={{ fontWeight: 'bold', color: '#0E2E50', fontSize: '60px' }}>404 Error</h1>
              <div className="fs-5 ">
                <Breadcrumb>
                  <Breadcrumb.Item href="#" className='pro_list' >Home</Breadcrumb.Item>
                  <Breadcrumb.Item className='pro_list'>
                    PAGES
                  </Breadcrumb.Item>
                  <Breadcrumb.Item active>404 ERROR</Breadcrumb.Item>
                </Breadcrumb>
              </div>

            </div>
          </div>
          <div className="col-lg-6">
            <div >
              <img src={require('../Image/asset 1.jpeg')} style={{ width: '100%' }} alt="" />
            </div>
          </div>
        </div>

      </Container>

      <div className="container-fluid  mb-5 wow fadeIn" data-wow-delay="0.1s" style={{ padding: '35px', visibility: 'visible', background: '#00B98E' }}>
        <div className="container">
          <div className="row g-2">
            <div className="col-md-10">
              <div className="row g-2">
                <div className="col-md-4">
                  <input type="text" className="form-control border-0 py-3" placeholder="Search Keyword" />
                </div>
                <div className="col-md-4">
                  <select className="form-select border-0 py-3" >
                    <option selected="">Property Type</option>
                    <option value="1">Property Type 1</option>
                    <option value="2">Property Type 2</option>
                    <option value="3">Property Type 3</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <select className="form-select  border-0 py-3">
                    <option selected="">Location</option>
                    <option value="1">Location 1</option>
                    <option value="2">Location 2</option>
                    <option value="3">Location 3</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <button className="btn btn-dark border-0 w-100 py-3 m-0 " style={{ background: '#0E2E50' }}>Search</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6 error">
              <i className="bi bi-exclamation-triangle display-1 text-primary" />
              <BiError style={{fontSize:'70px',color:'#00B98E'}}/>
              <h1 className="display-1">404</h1>
              <h1 className="mb-4">Page Not Found</h1>
              <p className="mb-4">We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
              <a className="btn py-3 px-5 " style={{background:'#00B98E'}} href>Go Back To Home</a>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Error