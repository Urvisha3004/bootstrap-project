import { FaMapMarkerAlt, FaRulerCombined, FaBed, FaBath } from "react-icons/fa";
// import Button from 'react-bootstrap/Button';
function Property_Listing(prolist) {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-0 gx-5 align-items-end">
            <div className="col-lg-6">
              <div className="text-start mx-auto mb-5 wow slideInLeft" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'slideInLeft' }}>
                <h1 className="mb-3">Property Listing</h1>
                <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit diam justo sed rebum.</p>
              </div>
            </div>
          </div>
          <div className="tab-content">
            <div id="tab-1" className="tab-pane fade show p-0 active">
              <div className="row g-4">
                {
                  prolist.list.homelist.map((val) => {
                    return (
                      <div className="col-lg-4 col-md-6 wow fadeInUp" >
                    <div className="property-item pro_list overflow-hidden">
                      <div className="position-relative overflow-hidden">
                        <a href><img className="img-fluid" src={val.img} alt /></a>
                        <div className="rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3" style={{ background: '#00B98E' }}>{val.sell}</div>
                        <div className="bg-white rounded-top text position-absolute start-0 bottom-0 mx-4 pt-1 px-3">{val.titel}</div>
                      </div>
                      <div className="p-4 pb-0">
                        <h5 className=" mb-3">$12,345</h5>
                        <a className="d-block h5 mb-2 propeerty_tag" href>{val.name}</a>
                        <p><i className="fa fa-map-marker-alt text-primary " />< FaMapMarkerAlt className="fs-6 " style={{ color: '#00B98E' }} />{val.address}</p>
                      </div>
                      <div className="d-flex border_top">
                        <small className="flex-fill text-center border_end py-2"><i className="fa fa-ruler-combined text-primary me-2" /><FaRulerCombined className="m-2" style={{ color: '#00B98E' }} />{val.sqft}</small>
                        <small className="flex-fill text-center border_end py-2"><i className="fa fa-bed text-primary me-2" /><FaBed className="m-2" style={{ color: '#00B98E' }} />{val.bed}</small>
                        <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2" /><FaBath className="m-2" style={{ color: '#00B98E' }} />{val.bath}</small>
                      </div>
                    </div>
                  </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );

}
export default Property_Listing

