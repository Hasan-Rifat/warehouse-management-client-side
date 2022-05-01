import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";
const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="row">
          <div className="cols col-md-6">
            <div className="banner-info py-20 md:py-40">
              <h4>
                Mechanics Who Are <br /> Ready To Work For You
              </h4>
              <h2 className="py-8">
                Reliable And Knowledgeable Mechanics Locate In Los Angeles, CA
              </h2>
              <Link to="/login">
                <button className="banner-main-btn">GET STARTED</button>
              </Link>
            </div>
          </div>
          <div className="cols col-md-7"></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
