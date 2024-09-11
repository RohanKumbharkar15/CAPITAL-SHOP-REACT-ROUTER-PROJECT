import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import YouMayLike from "./YouMayLike";
import Footer from "./Footer";
function Home() {
  return (
    <>
      <section class="section-1 container-fluid ">
        <div class="carousel slide" id="carousel-1" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active s1-bg">
              <div class="carousel-caption  h-100   d-flex align-items-center justify-content-start  ">
                <div className="row d-flex align-items-center justify-content-start ">
                  <div className="col-12 col-md-8">
                    <h1 className="text-danger">Fashion Sale</h1>
                    <h1 className="text-black">Minimal Menz Style</h1>
                    <p className="text-secondary">
                      Consectetur adipisicing elit. Laborum fuga incidunt
                      laboriosam voluptas iure, delectus dignissimos facilis
                      neque nulla earum.
                    </p>
                    <button className="btn btn-outline-danger">Shop Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item active s2-bg">
              <div class="carousel-caption  h-100   d-flex align-items-center justify-content-end  ">
                <div className="row d-flex align-items-center justify-content-end ">
                  <div className="col-12 col-md-8">
                    <h1 className="text-danger">Fashion Sale</h1>
                    <h1 className=" text-black">Minimal Menz Style</h1>
                    <p className="text-secondary">
                      Consectetur adipisicing elit. Laborum fuga incidunt
                      laboriosam voluptas iure, delectus dignissimos facilis
                      neque nulla earum.
                    </p>
                    <button className="btn btn-outline-danger">Shop Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            class="carousel-control-prev "
            data-bs-target="#carousel-1"
            data-bs-slide="prev"
          >
            <div class=" fs-1 text-danger  ">
              <i class="bi bi-arrow-left-circle-fill"></i>
            </div>
          </button>
          <button
            type="button"
            class="carousel-control-next"
            data-bs-target="#carousel-1"
            data-bs-slide="next"
          >
            <div class=" fs-1 text-danger  ">
              <i class="bi bi-arrow-right-circle-fill"></i>
            </div>
          </button>
        </div>
      </section>

      {/* section 2 */}
      <section className="container pt-5 pb-5 mt-5 ">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 ">
            <div className="shadow m-1">
              <div>
                <img
                  src="assets/items1.jpg.webp"
                  className="img-fluid"
                ></img>
              </div>
              <div className="border text-center home-div">
                <h2 className="m-0 text-primary fst-italic">Men's Fashion</h2>
                <h5 className="">
                  <Link to={"/shop"}>Shop Now</Link>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="shadow m-1">
              <div className="img">
                <img
                  src="assets/items2.jpg.webp"
                  className="img-fluid"
                ></img>
              </div>
              <div className="border text-center home-div">
                <h2 className="m-0 text-primary fst-italic">Woman's Fashion</h2>
                <h5 className="">
                  <Link to={"/shop"}>Shop Now</Link>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="shadow m-1">
              <div>
                <img
                  src="assets/items3.jpg.webp"
                  className="img-fluid"
                ></img>
              </div>
              <div className="border text-center home-div">
                <h2 className="m-0 text-primary fst-italic">Baby's Fashion</h2>
                <h5 className="">
                  <Link to={"/shop"}>Shop Now</Link>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 3 */}

      <section className="pt-5 ">
        <div class="container mb-5 ">
          <div class="row">
            <div class="col-12">
              <h2 class="d-flex justify-content-center  ps-1 pe-1 mb-5">
                <span class=" text-center fst-italic  fw-bold border-bottom border-success border-4 ">
                  Trending This Week
                </span>
              </h2>
            </div>
          </div>

          <div class="carousel slide" id="carousel-2" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row ms-lg-5 me-lg-5">
                  <div class="col-12 col-md-4 col-lg-3">
                    <div class="border pb-3">
                      <div class="s6-img">
                        <img
                          src="assets/latest1.jpg.webp"
                          className="img-fluid"
                        ></img>
                      </div>
                      <div className="text-center">
                        <p className="mt-2 fw-bold">Cashmere Tank + Bag</p>
                        <p className="text-success fw-bold">
                          $98.00 <del className="text-secondary ">$120.00</del>
                        </p>
                        <div className="d-flex justify-content-evenly">
                          <Link to={"/shop"}>
                            <i class="bi bi-heart fs-2 text-black"></i>
                          </Link>
                          <Link to={"/shop"}>
                            <i class="bi fs-2 bi-cart3  div-2"></i>
                          </Link>

                          <i class="bi fs-2 bi-search"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-4 col-lg-3 d-none d-lg-block">
                    <div class="border pb-3">
                      <div class="s6-img">
                        <img
                          src="assets/latest2.jpg.webp"
                          className="img-fluid"
                        ></img>
                      </div>
                      <div className="text-center">
                        <p className="mt-2 fw-bold">Cashmere Tank + Bag</p>
                        <p className="text-success fw-bold">
                          $98.00 <del className="text-secondary ">$120.00</del>
                        </p>
                        <div className="d-flex justify-content-evenly">
                          <Link to={"/shop"}>
                            <i class="bi bi-heart fs-2 text-black"></i>
                          </Link>
                          <Link to={"/shop"}>
                            <i class="bi fs-2 bi-cart3  div-2"></i>
                          </Link>

                          <i class="bi fs-2 bi-search"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class=" col-12 col-md-4 col-lg-3 d-none d-md-block">
                    <div class="border pb-3">
                      <div class="s6-img">
                        <img
                          src="assets/latest3.jpg.webp"
                          className="img-fluid"
                        ></img>
                      </div>
                      <div className="text-center">
                        <p className="mt-2 fw-bold">Cashmere Tank + Bag</p>
                        <p className="text-success fw-bold">
                          $98.00 <del className="text-secondary ">$120.00</del>
                        </p>
                        <div className="d-flex justify-content-evenly">
                          <Link to={"/shop"}>
                            <i class="bi bi-heart fs-2 text-black"></i>
                          </Link>
                          <Link to={"/shop"}>
                            <i class="bi fs-2 bi-cart3  div-2"></i>
                          </Link>

                          <i class="bi fs-2 bi-search"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class=" col-12 col-md-4 col-lg-3 d-none d-md-block">
                    <div class="border pb-3">
                      <div class="s6-img">
                        <img
                          src="assets/latest4.jpg.webp"
                          className="img-fluid"
                        ></img>
                      </div>
                      <div className="text-center">
                        <p className="mt-2 fw-bold">Cashmere Tank + Bag</p>
                        <p className="text-success fw-bold">
                          $98.00 <del className="text-secondary ">$120.00</del>
                        </p>
                        <div className="d-flex justify-content-evenly">
                          <Link to={"/shop"}>
                            <i class="bi bi-heart fs-2 text-black"></i>
                          </Link>
                          <Link to={"/shop"}>
                            <i class="bi fs-2 bi-cart3  div-2"></i>
                          </Link>

                          <i class="bi fs-2 bi-search"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item active">
                <div class="row ms-lg-5 me-lg-5">
                  <div class=" col-12 col-md-4 col-lg-3 d-none d-md-block">
                    <div class="border pb-3">
                      <div class="s6-img">
                        <img
                          src="assets/latest4.jpg.webp"
                          className="img-fluid"
                        ></img>
                      </div>
                      <div className="text-center">
                        <p className="mt-2 fw-bold">Cashmere Tank + Bag</p>
                        <p className="text-success fw-bold">
                          $98.00 <del className="text-secondary ">$120.00</del>
                        </p>
                        <div className="d-flex justify-content-evenly">
                          <Link to={"/shop"}>
                            <i class="bi bi-heart fs-2 text-black"></i>
                          </Link>
                          <Link to={"/shop"}>
                            <i class="bi fs-2 bi-cart3  div-2"></i>
                          </Link>

                          <i class="bi fs-2 bi-search"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class=" col-12 col-md-4 col-lg-3 ">
                    <div class="border pb-3">
                      <div class="s6-img">
                        <img
                          src="assets/latest3.jpg.webp"
                          className="img-fluid"
                        ></img>
                      </div>
                      <div className="text-center">
                        <p className="mt-2 fw-bold">Cashmere Tank + Bag</p>
                        <p className="text-success fw-bold">
                          $98.00 <del className="text-secondary ">$120.00</del>
                        </p>
                        <div className="d-flex justify-content-evenly">
                          <Link to={"/shop"}>
                            <i class="bi bi-heart fs-2 text-black"></i>
                          </Link>
                          <Link to={"/shop"}>
                            <i class="bi fs-2 bi-cart3  div-2"></i>
                          </Link>

                          <i class="bi fs-2 bi-search"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class=" col-12 col-md-4 col-lg-3 d-none d-md-block">
                    <div class="border pb-3">
                      <div class="">
                        <img
                          src="assets/latest1.jpg.webp"
                          className="img-fluid"
                        ></img>
                      </div>
                      <div className="text-center">
                        <p className="mt-2 fw-bold">Cashmere Tank + Bag</p>
                        <p className="text-success fw-bold">
                          $98.00 <del className="text-secondary ">$120.00</del>
                        </p>
                        <div className="d-flex justify-content-evenly">
                          <Link to={"/shop"}>
                            <i class="bi bi-heart fs-2 text-black"></i>
                          </Link>
                          <Link to={"/shop"}>
                            <i class="bi fs-2 bi-cart3  div-2"></i>
                          </Link>

                          <i class="bi fs-2 bi-search"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class=" col-12 col-md-4 col-lg-3 d-none d-lg-block">
                    <div class="border pb-3">
                      <div class="s6-img">
                        <img
                          src="assets/latest3.jpg.webp"
                          className="img-fluid"
                        ></img>
                      </div>
                      <div className="text-center">
                        <p className="mt-2 fw-bold">Cashmere Tank + Bag</p>
                        <p className="text-success fw-bold">
                          $98.00 <del className="text-secondary ">$120.00</del>
                        </p>
                        <div className="d-flex justify-content-evenly">
                          <Link to={"/shop"}>
                            <i class="bi bi-heart fs-2 text-black"></i>
                          </Link>
                          <Link to={"/shop"}>
                            <i class="bi fs-2 bi-cart3  div-2"></i>
                          </Link>

                          <i class="bi fs-2 bi-search"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              class="carousel-control-prev"
              data-bs-target="#carousel-2"
              data-bs-slide="prev"
            >
              <span class="fs-3 text-warning">
                <i class="bi bi-arrow-left-circle-fill"></i>{" "}
              </span>
            </button>
            <button
              type="button"
              class="carousel-control-next"
              data-bs-target="#carousel-2"
              data-bs-slide="next"
            >
              <span class="fs-3 text-warning">
                <i class="bi bi-arrow-right-circle-fill"></i>
              </span>
            </button>
          </div>
        </div>
      </section>

     

      {/* you may like */}
      
      <YouMayLike></YouMayLike>

      {/*     Latest News  */}
      <section className=" pb-5 slnew">
        <div className="container ">
          <h2 class="d-flex justify-content-center ps-1 pe-1 mb-3 pt-5">
            <span class=" text-center  fw-light border-bottom border-danger border-5 ">
            Latest News
            </span>
          </h2>
          <div className="row pt-5">
            <div className="col-12 col-md-6 col-lg-4 mb-3">
                <div >
                    <div>
                        <img src="assets/b1.webp" className="img-fluid"></img>
                    </div>
                    <p className="pt-3">Fashion Tips</p>
                    <h4>What Curling Irons Are The Best Ones</h4>
                    <p>Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..</p>
                    <a href="#" className=" read">Read More</a>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-3">
            <div >
                    <div>
                        <img src="assets/b2.webp" className="img-fluid"></img>
                    </div>
                    <p className="pt-3">Fashion Tips</p>
                    <h4>Vogue's Ultimate Guide To Autumn/ Winter 2019 Shoes</h4>
                    <p>Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..</p>
                    <a href="#" className="read">Read More</a>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-3">
            <div >
                    <div>
                        <img src="assets/b3.webp" className="img-fluid"></img>
                    </div>
                    <p className="pt-3">Fashion Tips</p>
                    <h4>What Curling Irons Are The Best Ones</h4>
                    <p>Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..</p>
                    <a href="#" className="read">Read More</a>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* secure payment */}
      <section className="">
      <div className="container pt-5 pb-5">
      <div className="row">
            <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center align-items-center flex-column">
                <div className="mb-3">
                    <img src="assets/c1.svg" className="img-fluid"></img>
                </div>
                <h4 className="mb-3">Fast & Free Delivery</h4>
                <p>Free delivery on all orders</p>
            </div>
            <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center align-items-center flex-column">
                <div className="mb-3">
                    <img src="assets/c2.svg" className="img-fluid"></img>
                </div>
                <h4 className="mb-3">Secure Payment</h4>
                <p>Free delivery on all orders</p>
            </div>
            <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center align-items-center flex-column">
                <div className="mb-3">
                    <img src="assets/c3.svg" className="img-fluid"></img>
                </div>
                <h4 className="mb-3">Money Back Guarantee</h4>
                <p>Free delivery on all orders</p>
            </div>
            <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center align-items-center flex-column">
                <div className="mb-3">
                    <img src="assets/c4.svg" className="img-fluid"></img>
                </div>
                <h4 className="mb-3">Online Support</h4>
                <p>Free delivery on all orders</p>
            </div>
        </div>
      </div>
      </section>

 {/* testimonial */}

 <section className="pt-5 pb-5 stest">
        <div class="container ms-lg-5 me-lg-5">
          <div class="row ">
            <div class="col-12">
              <h2 class="d-flex justify-content-center ps-1 pe-1 mb-5">
                <span class="s2-span text-center  fw-light border-bottom border-success border-5 ">
                  Customer Testimonials
                </span>
              </h2>
            </div>
          </div>

          <div class="row ms-lg-5 me-lg-5">
            <div class="col-12 col-md-6">
              <div class="m-md-3">
                <div class="d-flex gap-3 align-items-center mb-3">
                  <div class="s6-img">
                    <img
                      src="assets/founder-img.png.webp"
                      className="img-fluid"
                    ></img>
                  </div>
                  <div>
                    <p class="fs-6 fw-bold mb-1">Alison Homes</p>
                    <p class="mb-1">Designer</p>
                  </div>
                </div>
                <div>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Excepturi tempore, eum odit at temporibus eaque pariatur
                  commodi explicabo necessitatibus. Voluptate.
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="m-md-3">
                <div class="d-flex gap-3 align-items-center mb-3">
                  <div class="s6-img">
                    <img
                      src="assets/founder-img.png.webp"
                      className="img-fluid"
                    ></img>
                  </div>
                  <div>
                    <p class="fs-6 fw-bold mb-1">Ryan John</p>
                    <p class="mb-1">Developer</p>
                  </div>
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At a
                  quas necessitatibus esse tenetur quae ut dignissimos fuga
                  voluptates. Excepturi?
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

export default Home;
