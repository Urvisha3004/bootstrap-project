import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Slider_image = (img) => {
    return (
        <>
            <Container fluid>
                <div className="row  ">
                    <div className="col-lg-6  p-5 pb-5  mt-lg-5  ">
                        <div className="Slider_text ">
                            <h1 style={{ fontWeight: 'bold', color: '#0E2E50' }}>Find A <span style={{ color: '#00B98E' }}>Perfect Home </span> To Live With Your Family </h1>
                            <p className="fs-6 py-4 "> Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                            <Button className='btn slider_btn' style={{ background: '#00B98E', }} >Get Started</Button>{' '}
                        </div>
                    </div>
                    <div className="col-lg-6 p-0 ">
                        <OwlCarousel className='owl-theme' loop nav items='1' autoplay='true' autoplaySpeed='1000' dots='false' >
                            {
                                img.homeslide.slide.map((val) => {
                                    return (
                                        <div class='item '>
                                            <img src={val.img} alt="" />
                                        </div>
                                    )
                                })

                            }

                        </OwlCarousel>

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


        </>
    );
}
export default Slider_image