import { FaCalendarAlt } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
function Contact_home() {
    return (
        <>

            <div className="container-xxl py-5">
                <div className="container">
                    <div className="contact_home rounded p-3">
                        <div className="bg-white rounded p-4" style={{ border: '1px dashed #00B98E' }}>
                            <div className="row g-5 align-items-center">
                                <div className="col-lg-6 " >
                                    <img className="img-fluid rounded w-100" src={require('../Image/asset 18.jpeg')} alt />
                                </div>
                                <div className="col-lg-6 " >
                                    <div className="mb-4 contact_texts">
                                        <h1 className="mb-3 contact_text" >Contact With Our Certified Agent</h1>
                                        <p>Eirmod sed ipsum dolor sit rebum magna erat. Tempor lorem kasd vero ipsum sit sit diam justo sed vero dolor duo.</p>
                                    </div>
                                    <a href className="btn contact_btn1 py-3 px-4 me-3"><i className="fa fa-calendar-alt " /><IoCallSharp className=" me-2" />Make A Call</a>
                                    <a href className="btn contact_btn2 py-3 px-4"><i className="fa fa-calendar-alt " /><FaCalendarAlt className="me-2"/>Get Appoinment</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>

    );
}
export default Contact_home