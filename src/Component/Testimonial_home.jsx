import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Testimonial_home(test) {
    const owlcaro = {
        loop:true,
        items:'2',
        nav:true,
        autoplay:'true',
        autoplaySpeed:'1000',
        dots:'false',
        responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:2,
            nav:true,
            loop:false
        }
    }
    }
    return (

        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 ">
                        <h1 className="mb-3 contact_text">Our Clients Say!</h1>
                        <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd <br></br> vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                    </div>

                    <div>
                        <OwlCarousel className='owl-theme testimonial_slide position-relative' {...owlcaro} >
                            {
                                test.teshome.testi.map((val) => {
                                    return (
                                        <div class='item '>
                                            <div className="testimonial-item  contact_home p-3">
                                                <div className="bg-white border rounded p-4">
                                                    <p>{val.text}</p>
                                                    <div className="d-flex align-items-center">
                                                        <img className="img-fluid flex-shrink-0 rounded" src={val.img} style={{ width: 45, height: 45 }} />
                                                        <div className="ps-3">
                                                            <h6 className="fw-bold mb-1">{val.name}</h6>
                                                            <small>{val.titel}</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    )
                                })
                            }
                        </OwlCarousel>
                    </div>

                </div>
            </div>


        </>

    );
}
export default Testimonial_home