import React from "react";
import { Link } from "react-router-dom";
import "./blog.css";
import Footer from "./Footer";
function Blog() {
  return (
    <>
      <section className="s1 container-fluid">
        <div className="row pt-5 pb-5 text-center">
          <div className="col-12">
            <h1 className="fst-italic">Latest News</h1>
          </div>
          <div className="col-12">
            <p className="m-0">
              <Link to={"/"} className="text-danger ">
                Home
              </Link>{" "}
              |{" "}
              <Link to={"/blog"} className="text-danger ">
                Blog
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="row">
          <div className="col-12 col-lg-8">
            <div className="row">
              <div className="col-12">
                <div className="parent">
                  <div className="img-b">
                    <img
                      src="assets/g1.webp"
                      className="img-fluid w-100"
                    ></img>
                  </div>
                  <div className=" d-flex align-items-center flex-column  fs-3 fw-bold jan">
                    <p className="m-0">15</p>
                    <p className="m-0">Jan</p>
                  </div>
                  <div>
                    <h4 className="">
                      <a href="#" className="blog-a">
                        Google inks pact for new 35-storey office
                      </a>
                    </h4>
                    <p className="">
                      That dominion stars lights dominion divide years for
                      fourth have don't stars is that he earth it first without
                      heaven in place seed it second morning saying.
                    </p>
                    <p className="blog-a">
                      {" "}
                      <span>
                        <i class="bi bi-person"></i>
                      </span>
                      Travel, Lifestyle |{" "}
                      <span>
                        <i class="bi bi-chat-dots-fill"></i>
                      </span>{" "}
                      03 Comments
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 mt-3">
                <div className="parent">
                  <div className="img-b">
                    <img
                      src="assets/g2.webp"
                      className="img-fluid w-100"
                    ></img>
                  </div>
                  <div className=" d-flex align-items-center flex-column  fs-3 fw-bold jan">
                    <p className="m-0">23</p>
                    <p className="m-0">Mar</p>
                  </div>
                  <div>
                    <h4 className="">
                      <a href="#" className="blog-a">
                        Google inks pact for new 35-storey office
                      </a>
                    </h4>
                    <p className="">
                      That dominion stars lights dominion divide years for
                      fourth have don't stars is that he earth it first without
                      heaven in place seed it second morning saying.
                    </p>
                    <p className="blog-a">
                      {" "}
                      <span>
                        <i class="bi bi-person"></i>
                      </span>
                      Travel, Lifestyle |{" "}
                      <span>
                        <i class="bi bi-chat-dots-fill"></i>
                      </span>{" "}
                      03 Comments
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 mt-3">
                <div className="parent">
                  <div className="img-b">
                    <img
                      src="assets/g3.webp"
                      className="img-fluid w-100"
                    ></img>
                  </div>
                  <div className=" d-flex align-items-center flex-column  fs-3 fw-bold jan">
                    <p className="m-0">27</p>
                    <p className="m-0">June</p>
                  </div>
                  <div>
                    <h4 className="">
                      <a href="#" className="blog-a">
                        Google inks pact for new 35-storey office
                      </a>
                    </h4>
                    <p className="">
                      That dominion stars lights dominion divide years for
                      fourth have don't stars is that he earth it first without
                      heaven in place seed it second morning saying.
                    </p>
                    <p className="blog-a">
                      {" "}
                      <span>
                        <i class="bi bi-person"></i>
                      </span>
                      Travel, Lifestyle |{" "}
                      <span>
                        <i class="bi bi-chat-dots-fill"></i>
                      </span>{" "}
                      03 Comments
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 mt-3">
                <div className="parent">
                  <div className="img-b">
                    <img
                      src="assets/g4.webp"
                      className="img-fluid w-100"
                    ></img>
                  </div>
                  <div className=" d-flex align-items-center flex-column  fs-3 fw-bold jan">
                    <p className="m-0">11</p>
                    <p className="m-0">Aug</p>
                  </div>
                  <div>
                    <h4 className="">
                      <a href="#" className="blog-a">
                        Google inks pact for new 35-storey office
                      </a>
                    </h4>
                    <p className="">
                      That dominion stars lights dominion divide years for
                      fourth have don't stars is that he earth it first without
                      heaven in place seed it second morning saying.
                    </p>
                    <p className="blog-a">
                      {" "}
                      <span>
                        <i class="bi bi-person"></i>
                      </span>
                      Travel, Lifestyle |{" "}
                      <span>
                        <i class="bi bi-chat-dots-fill"></i>
                      </span>{" "}
                      03 Comments
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="row">
              <div className="col-12 b-2 ">
                <h4 className="text-center mb-5 mt-5">Category</h4>
                <ul className="d-flex gap-5 text-center flex-column">
                  <li className="">
                    <a href="#" className="fw-light">Resaurant food (37)</a>
                  </li>
                  <li>
                    <a href="#" className="fw-light">Travel news (10)</a>
                  </li>
                  <li>
                    <a href="#" className="fw-light">Modern technology (03)</a>
                  </li>
                  <li>
                    <a href="#" className="fw-light">Product (11)</a>
                  </li>
                  <li>
                    <a href="#" className="fw-light">Inspiration 21</a>
                  </li>
                  <li>
                    <a href="#" className="fw-light">Health Care (21) 09</a>
                  </li>
                </ul>
              </div>
              <div className="col-12 b-2 mt-5">
                <h4 className="text-center pt-5 pb-3 mb-5 border-bottom">Recent Post</h4>
                <div className="d-flex flex-column gap-4 ps-4">
                    <div className="d-flex justify-content-start gap-3">
                        <div>
                            <img src="assets/r1.webp"></img>
                        </div>
                        <div className="d-flex justify-content-center flex-column"  >
                            <p className="mb-1 fw-bold"><a href="#" className="b-a">From life was you fish...</a></p>
                            <p className="m-0">January 12, 2019</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-start gap-3">
                        <div>
                            <img src="assets/r2.webp"></img>
                        </div>
                        <div className="d-flex justify-content-center flex-column"  >
                            <p className="mb-1 fw-bold"><a href="#" className="b-a">The Amazing Hubble</a></p>
                            <p className="m-0">January 20, 2019</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-start gap-3">
                        <div>
                            <img src="assets/r3.webp"></img>
                        </div>
                        <div className="d-flex justify-content-center flex-column"  >
                            <p className="mb-1 fw-bold"><a href="#" className="b-a">Astronomy Or Astrology</a></p>
                            <p className="m-0">03 Hours ago</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-start gap-3">
                        <div>
                            <img src="assets/r4.webp"></img>
                        </div>
                        <div className="d-flex justify-content-center flex-column"  >
                            <p className="mb-1 fw-bold"><a href="#" className="b-a">Asteroids telescope</a></p>
                            <p className="m-0">01 Hour to Go</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-start gap-3">
                        <div>
                            <img src="assets/r2.webp"></img>
                        </div>
                        <div className="d-flex justify-content-center flex-column"  >
                            <p className="mb-1 fw-bold"><a href="#" className="b-a">From life was you fish...</a></p>
                            <p className="m-0">March 12, 2019</p>
                        </div>
                    </div>
                </div>
              </div>
              <div className="col-12 b-2 mt-5">
              <h4 className="text-center pt-5 pb-3 mb-5 border-bottom">Instagram Feeds</h4>
                    <div className="row ">
                        <div className="col-4 mb-3">
                            <div className="">
                                <div>
                                    <img src="assets/i1.webp" className="img-fluid w-100"></img>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 mb-3">
                            <div className="">
                                <div>
                                    <img src="assets/i2.webp" className="img-fluid w-100"></img>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 mb-3">
                            <div className="">
                                <div>
                                    <img src="assets/i3.webp" className="img-fluid w-100"></img>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 mb-3">
                            <div className="">
                                <div>
                                    <img src="assets/i4.webp" className="img-fluid w-100"></img>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 mb-3">
                            <div className="">
                                <div>
                                    <img src="assets/i5.webp" className="img-fluid w-100"></img>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 mb-3">
                            <div className="">
                                <div>
                                    <img src="assets/i6.webp" className="img-fluid w-100"></img>
                                </div>
                            </div>
                        </div>
                      
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

export default Blog;
