import React from "react";

function Footer() {
  return (
    <>
      {/* footer */}
      <footer className="container-fluid bg-dark pt-5 pb-5">
        <div className="row pb-5 border-bottom">
          <div className="col-12 col-md-6 col-lg-3 pb-5">
            <div className="d-flex justify-content-center">
              <img src="assets/logo2.webp" className="img-fluid"></img>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <ul>
              <li className="text-white pb-3">Shop Men</li>
              <li className="pb-2">
                <a href="#" className="text-secondary fw-light">
                  Clothing Fashion
                </a>
              </li>
              <li className="pb-2">
                <a href="#" className="text-secondary fw-light ">
                  Winter
                </a>
              </li>
              <li className="pb-2">
                <a href="#" className="text-secondary fw-light ">
                  Summer
                </a>
              </li>
              <li className="pb-2">
                <a href="#" className="text-secondary fw-light ">
                  Formal
                </a>
              </li>
              <li className="pb-2">
                <a href="#" className="text-secondary fw-light ">
                  Casual
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <ul>
              <li className="text-white pb-3">Shop Women</li>
              <li className="pb-2">
                <a href="#" className="text-secondary fw-light">
                  Clothing Fashion
                </a>
              </li>
              <li className="pb-2">
                <a href="#" className="text-secondary fw-light ">
                  Winter
                </a>
              </li>
              <li className="pb-2">
                <a href="#" className="text-secondary fw-light ">
                  Summer
                </a>
              </li>
              <li className="pb-2">
                <a href="#" className="text-secondary fw-light ">
                  Formal
                </a>
              </li>
              <li className="pb-2">
                <a href="#" className="text-secondary fw-light ">
                  Casual
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <ul>
              <li className="text-white pb-3">Quick Links</li>
              <li className="pb-2">
                <a href="#" className="text-secondary fw-light">
                  Track Your Order
                </a>
              </li>
              <li className="pb-2">
                <a href="#" className="text-secondary fw-light ">
                  Support
                </a>
              </li>
              <li className="pb-2">
                <a href="#" className="text-secondary fw-light ">
                  Carrier
                </a>
              </li>
              <li className="pb-2">
                <a href="#" className="text-secondary fw-light ">
                  About
                </a>
              </li>
              <li className="pb-2">
                <a href="#" className="text-secondary fw-light ">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-12 d-flex justify-content-center ">
            <p className="fs-5 text-white">
              Copyright ©2024 All rights reserved | This template is made with{" "}
              <span>
                <i class="bi bi-heart-fill text-danger "></i>
              </span>{" "}
              by <span className="text-danger">Rohan Kumbharkar</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
