import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Place from './Place';
import Contact_home from './Contact_home';
import Team from './Team';
import { Container } from 'react-bootstrap';
function About(props) {
  return (
    <>
      <Container fluid>
        <div className="row ">
          <div className="col-lg-6 container d-flex justify-content-center m-auto">
            <div className="Slider_text ">
              <h1 style={{ fontWeight: 'bold', color: '#0E2E50', fontSize: '50px' }}>About  Us</h1>
              <div className="fs-5 ">
                <Breadcrumb>
                  <Breadcrumb.Item href="#" className='pro_list' >Home</Breadcrumb.Item>
                  <Breadcrumb.Item className='pro_list'>
                    PAGES
                  </Breadcrumb.Item>
                  <Breadcrumb.Item active>ABOUT</Breadcrumb.Item>
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

      <Place />
      <Contact_home />
      <Team teamhome={props} />

    </>
  )
}

export default About