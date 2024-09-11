import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className="container">
        <div className="d-flex justify-content-between  pt-4 pb-4  border-bottom ">
          <div>
            <a href="#">
              <img src="assets/logo.png.webp"></img>
            </a>
          </div>
          <div className="d-none d-lg-block">
            <ul className="d-flex gap-5 m-0 ">
              <li className="pt-3">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="pt-3">
                <Link to={"/news"}>News</Link>
              </li>
              <li className="pt-3">
                <Link to={"/blog"}>Blog</Link>
              </li>
              <li className="pt-3">
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
          <div class="d-lg-none">
            {/* <!-- offcanvas --> */}
            <button
              type="button"
              class="btn btn-outline-primary  "
              data-bs-toggle="offcanvas"
              data-bs-target="#menu"
            >
              <i class="bi bi-list fs-5"></i>
            </button>
            <div class="offcanvas offcanvas-end w-75" id="menu">
              <div class="offcanvas-header">
                <button
                  type="button"
                  class="btn btn-close"
                  data-bs-dismiss="offcanvas"
                ></button>
              </div>
              <div class="offcanvas-body ">
                <ul className="d-flex flex-column gap-3 ">
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>
                    <Link to={"/news"}>News</Link>
                  </li>
                  <li>
                    <Link to={"/blog"}>Blog</Link>
                  </li>
                  <li>
                    <Link to={"/contact"}>Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div  className="mt-3  mb-3  ">
          <h5
           className="text-center d-none d-md-block ">
               Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer<a href="#" className="aa"> Shop Now</a>
          </h5>
        </div>
        
      </nav>
    </>
  );
}

export default Nav;
