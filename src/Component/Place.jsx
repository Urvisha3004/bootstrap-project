import Button from 'react-bootstrap/Button';
import { FaCheck } from "react-icons/fa";

function Place(){
    return(

       <>
          <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 wow fadeIn"  >
                        <div class="about-img position-relative overflow-hidden p-5 pe-0">
                            <img className="img-fluid w-100" src={require('../Image/asset 11.jpeg')}/>
                        </div>
                    </div>
                    <div class="col-lg-6 wow fadeIn" >
                        <h1 className="mb-4">#1 Place To Find The Perfect Property</h1>
                        <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <p><FaCheck className='me-3' style={{color:'#00B98E'}}/> Tempor erat elitr rebum at clita</p>
                        <p><FaCheck className='me-3' style={{color:'#00B98E'}}/> Aliqu diam amet diam et eos</p>
                        <p><FaCheck className='me-3' style={{color:'#00B98E'}}/> Clita duo justo magna dolore erat amet</p>
                        <Button className='btn slider_btn' style={{ background: '#00B98E' }} >Read More</Button>{' '}
                    </div>
                </div>
            </div>
        </div>
       
       </>

    );
}

export default Place