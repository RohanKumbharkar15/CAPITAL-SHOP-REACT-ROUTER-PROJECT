import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
function Contact() {
  return (
    <>
      <section className="s1 container-fluid">
        <div className="row pt-5 pb-5 text-center">
          <div className="col-12">
            <h1 className="fst-italic">Contact</h1>
          </div>
          <div className="col-12">
            <p className="m-0">
              <Link to={"/"} className="text-danger pe-2 ">
                Home
              </Link>
              | 
              <Link to={"/contact"} className="text-danger ps-2 ">
                 Contact
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="container">
            <div className="row">
                <div className="col-12 col-lg-8">
                    <div>
                        <div className="mb-5 mt-5">
                            <h3>Get in Touch</h3>
                        </div>
                        <form className="mb-5">
                            <div  className="mb-3">
                                <textarea rows={10} placeholder="Enter Message" required className="w-100"></textarea>
                            </div>
                            <div className="row">
                                 <div className="col-12 col-md-6 mb-3">
                                    <input type="text" placeholder="Enter your Name" className="w-100" required></input>
                                 </div>
                                 <div className="col-12 col-md-6 mb-3">
                                 <input type="email" placeholder="Enter your Email" className="w-100" required></input>
                                 </div>
                            </div>
                            <div className="mb-3">
                            <input type="text" placeholder="Enter your Subject" className="w-100" required></input>
                            </div>
                            <div>
                                <button type="submit" className="btn btn-outline-danger ps-5 pe-5 pt-2 pb-2">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-12 col-lg-4 mt-lg-5 pt-lg-4  ">
                    <div className="row mt-lg-5 d-flex gap-5 ">
                        <div className="col-12 d-flex gap-3 align-items-center ps-5">
                            <div>
                            <i class="bi bi-house-door-fill fs-2"></i>
                            </div>
                            <div >
                                <p className="m-0 fw-bold">Buttonwood, California.</p>
                                <p className="m-0">Rosemead, CA 91770</p>
                            </div>
                        </div>
                        <div className="col-12 d-flex gap-3 align-items-center ps-5">
                            <div>
                            <i class="bi bi-tablet fs-2"></i>
                            </div>
                            <div  >
                                <p className="m-0 fw-bold">+1 253 565 2365.</p>
                                <p className="m-0">Mon to Fri 9am to 6pm</p>
                            </div>
                        </div>
                        <div className="col-12 d-flex gap-3 align-items-center ps-5">
                            <div>
                            <i class="bi bi-envelope fs-2"></i>
                            </div>
                            <div >
                                <p className="m-0 fw-bold">support@colorlib.com</p>
                                <p className="m-0">Send us your query anytime!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </section>

      <Footer></Footer>
    </>
  );
}

export default Contact;
