function Property(propety) {
    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s"  >
                        <h1 className="mb-3 fw-bold">Property Types</h1>
                        <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd <br></br> vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                    </div>
                    <div className="row g-4">
                        {
                            propety.pro.homes.map((val) => {
                                return (
                                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s" style={{ visibility: ' visible' }}>
                                        <a className="cat-item d-block bg_light text-center rounded p-3" href="">
                                            <div className="rounded p-4">
                                                <div className="icon mb-3">
                                                    <img className="img-fluid" src={val.img} />
                                                </div>
                                                <h6>{val.name}</h6>
                                                <span>{val.text}</span>
                                            </div>
                                        </a>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </>
    );
}
export default Property