import { FaFacebookF, FaTwitter, FaYoutube ,FaLinkedinIn,FaMapMarkerAlt} from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { IoIosMail ,IoIosArrowForward} from "react-icons/io";
function Footer() {
    return (
        <>

            <div className="container-fluid  text-white-50 footer pt-5 mt-5">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-white mb-4">Get In Touch</h5>
                            <p className="mb-2"><i className="fa fa-map-marker-alt " /><FaMapMarkerAlt className="me-3"/>123 Street, New York, USA</p>
                            <p className="mb-2"><i className="fa fa-phone-alt" /><IoCall className="me-3"/>+012 345 67890</p>
                            <p className="mb-2"><i className="fa fa-envelope " /><IoIosMail className="me-3"/>info@example.com</p>
                            <div className="d-flex footer_icon pt-2">
                                <a className="btn btn-outline-light btn-social" href><FaTwitter /></a>
                                <a className="btn btn-outline-light btn-social" href><FaFacebookF /></a>
                                <a className="btn btn-outline-light btn-social" href><FaYoutube/></a>
                                <a className="btn btn-outline-light btn-social" href><FaLinkedinIn /></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-white mb-3">Quick Links</h5>
                            <a className="btn btn  text-white-50" href><IoIosArrowForward className="fs-4 me-2 pb-1"/>About Us</a>
                            <a className="btn btn text-white-50" href><IoIosArrowForward className="fs-4 me-2 pb-1"/>Contact Us</a>
                            <a className="btn btn text-white-50" href><IoIosArrowForward className="fs-4 me-2 pb-1"/>Our Services</a>
                            <a className="btn btn text-white-50" href><IoIosArrowForward className="fs-4 me-2 pb-1"/>Privacy Policy</a>
                            <a className="btn btn text-white-50" href><IoIosArrowForward className="fs-4 me-2 pb-1"/>Terms &amp; Condition</a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-white mb-4">Photo Gallery</h5>
                            <div className="row g-2 pt-2">
                                <div className="col-4">
                                    <img className="img-fluid rounded bg-light p-1" src={require('../Image/asset 12.jpeg')} alt />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid rounded bg-light p-1" src={require('../Image/asset 13.jpeg')} alt />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid rounded bg-light p-1" src={require('../Image/asset 14.jpeg')} alt />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid rounded bg-light p-1" src={require('../Image/asset 15.jpeg')} alt />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid rounded bg-light p-1" src={require('../Image/asset 16.jpeg')} alt />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid rounded bg-light p-1" src={require('../Image/asset 17.jpeg')} alt />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-white mb-4">Newsletter</h5>
                            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                            <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
                                <input className="form_control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" style={{color:'#666565'}}/>
                                <button type="button" className="btn  py-2 position-absolute top-0 end-0 mt-2 me-2" style={{background:'#00B98E' ,color:'#fff'}}>SignUp</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="copyright">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start footer_text mb-3 mb-md-0 " style={{color:'#877e7e'}} >
                                <span>©</span> <a className="border-bottom" href="#" style={{color:'white'}} >Your Site Name</a>,<span>All Right Reserved.Designed By </span> <a className="border-bottom" style={{color:'white'}} href="https://htmlcodex.com">HTML Codex</a>
                                <br />
                               <span> Distributed By</span> <a className="border-bottom" style={{color:'white'}}  href="https://themewagon.com" target="_blank">ThemeWagon</a>
                            </div>
                            <div className="col-md-6 text-center text-md-end">
                                <div className="footer-menu">
                                    <a href>Home</a>
                                    <a href>Cookies</a>
                                    <a href>Help</a>
                                    <a href>FQAs</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}
export default Footer