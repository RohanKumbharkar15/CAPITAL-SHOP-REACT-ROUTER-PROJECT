import React from "react";
import "./news.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
function News() {
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
              <Link to={"/news"} className="text-danger ">
                News
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className=" pb-5 slnew">
        <div className="container ">
          <div className="row pt-5">
            <div className="col-12 col-md-6 col-lg-4 mb-3">
              <div>
                <div>
                  <img src="assets/b1.webp" className="img-fluid"></img>
                </div>
                <p className="pt-3">Fashion Tips</p>
                <h4>What Curling Irons Are The Best Ones</h4>
                <p>
                  Consectetur adipisicing elit. Laborum fuga incidunt laboriosam
                  voluptas iure, delectus..
                </p>
                <a href="#" className=" read">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-3">
              <div>
                <div>
                  <img src="assets/b2.webp" className="img-fluid"></img>
                </div>
                <p className="pt-3">Fashion Tips</p>
                <h4>Vogue's Ultimate Guide To Autumn/ Winter 2019 Shoes</h4>
                <p>
                  Consectetur adipisicing elit. Laborum fuga incidunt laboriosam
                  voluptas iure, delectus..
                </p>
                <a href="#" className="read">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-3">
              <div>
                <div>
                  <img src="assets/b3.webp" className="img-fluid"></img>
                </div>
                <p className="pt-3">Fashion Tips</p>
                <h4>What Curling Irons Are The Best Ones</h4>
                <p>
                  Consectetur adipisicing elit. Laborum fuga incidunt laboriosam
                  voluptas iure, delectus..
                </p>
                <a href="#" className="read">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-12 col-md-6 col-lg-4 mb-3">
              <div>
                <div>
                  <img src="assets/b3.webp" className="img-fluid"></img>
                </div>
                <p className="pt-3">Fashion Tips</p>
                <h4>What Curling Irons Are The Best Ones</h4>
                <p>
                  Consectetur adipisicing elit. Laborum fuga incidunt laboriosam
                  voluptas iure, delectus..
                </p>
                <a href="#" className=" read">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-3">
              <div>
                <div>
                  <img src="assets/b1.webp" className="img-fluid"></img>
                </div>
                <p className="pt-3">Fashion Tips</p>
                <h4>Vogue's Ultimate Guide To Autumn/ Winter 2019 Shoes</h4>
                <p>
                  Consectetur adipisicing elit. Laborum fuga incidunt laboriosam
                  voluptas iure, delectus..
                </p>
                <a href="#" className="read">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-3">
              <div>
                <div>
                  <img src="assets/b2.webp" className="img-fluid"></img>
                </div>
                <p className="pt-3">Fashion Tips</p>
                <h4>What Curling Irons Are The Best Ones</h4>
                <p>
                  Consectetur adipisicing elit. Laborum fuga incidunt laboriosam
                  voluptas iure, delectus..
                </p>
                <a href="#" className="read">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
}

export default News;
