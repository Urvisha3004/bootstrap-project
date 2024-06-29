import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
function Team(teams) {
    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 600, visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}>
                        <h1 className="mb-3 name_text" >Property Agents</h1>
                        <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                    </div>
                    <div className="row g-4">
                        {

                            teams.teamhome.hometeam.map((val) => {
                                return (
                                    <div className="col-lg-3 col-md-6 ">
                                        <div className="team-item  overflow-hidden">
                                            <div className="position-relative">
                                                <img className="img-fluid" src={val.teamimg} alt />
                                                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                                    <a className="btn btn-square mx-1" href><FaFacebookF /></a>
                                                    <a className="btn btn-square mx-1" href><FaTwitter /></a>
                                                    <a className="btn btn-square mx-1" href><FaInstagram /></a>
                                                </div>
                                            </div>
                                            <div className="text-center team_name p-4 mt-3">
                                                <h5 className="fw-bold mb-0">{val.name}</h5>
                                                <small>{val.text}</small>
                                            </div>
                                        </div>
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
export default Team