import React from 'react';
import { Container } from "react-bootstrap";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { FaMapMarkerAlt } from "react-icons/fa";
import { RiMailLine } from "react-icons/ri";
import { IoCall } from "react-icons/io5";

function Contact() {
    return (
        <>

            <Container fluid>
                <div className="row ">
                    <div className="col-lg-6 container d-flex justify-content-center m-auto">
                        <div className="Slider_text ">
                            <h1 style={{ fontWeight: 'bold', color: '#0E2E50', fontSize: '50px' }}>Contact Us</h1>
                            <div className="fs-5 ">
                                <Breadcrumb>
                                    <Breadcrumb.Item href="#" className='pro_list' >Home</Breadcrumb.Item>
                                    <Breadcrumb.Item className='pro_list'>
                                        PAGES
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item active>CONTACT US</Breadcrumb.Item>
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

            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 600, visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}>
                        <h1 className="mb-3">Contact Us</h1>
                        <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-12">
                            <div className="row gy-4">
                                <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeIn' }}>
                                    <div className="contact_bg rounded p-3" >
                                        <div className="d-flex align-items-center  rounded p-3" style={{ border: '1px dashed rgba(0, 185, 142, .3)' }}>
                                            <div className="icon me-3" style={{ width: 45, height: 45 }}>
                                                <i className="fa fa-map-marker-alt text-primary" /><FaMapMarkerAlt className='contact_icons' />
                                            </div>
                                            <span>123 Street, New York, USA</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeIn' }}>
                                    <div className="contact_bg rounded p-3">
                                        <div className="d-flex align-items-center rounded p-3" style={{ border: '1px dashed rgba(0, 185, 142, .3)' }}>
                                            <div className="icon me-3" style={{ width: 45, height: 45 }}>
                                                <i className="fa fa-envelope-open text-primary" /><RiMailLine className='contact_icons' />
                                            </div>
                                            <span>info@example.com</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 wow fadeIn">
                                    <div className="contact_bg rounded p-3">
                                        <div className="d-flex align-items-center  rounded p-3" style={{ border: '1px dashed rgba(0, 185, 142, .3)' }}>
                                            <div className="icon me-3" style={{ width: 45, height: 45 }}>
                                                <i className="fa fa-phone-alt text-primary" /><IoCall className='contact_icons' />
                                            </div>
                                            <span>+012 345 6789</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 wow fadeInUp" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}>
                            <iframe className="position-relative rounded w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameBorder={0} style={{ minHeight: 400, border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} />
                        </div>
                        <div className="col-md-6">
                            <div className="wow fadeInUp" data-wow-delay="0.5s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp' }}>
                                <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax &amp; PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                                <form>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                                <label htmlFor="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                                <label htmlFor="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                                <label htmlFor="subject">Subject</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: 150 }} defaultValue={""} />
                                                <label htmlFor="message">Message</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn w-100 py-3" style={{background:'#00B98E' ,color:'white'}} type="submit">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact