import React from "react";
import image from "../../../images/generic.png";
import "./ProductReview.css";

const ProductReview = () => {
  return (
    <section className="product-review py-20">
      <div className="container">
        <div className="row flex justify-center items-center">
          <div className="cols col-lg-6">
            <div className="product-review-info">
              <h2 className="product-heading">
                Twenty Years of Top Experience
              </h2>
              <div className="product-divider"></div>
              <p className="product-text">
                A mechanic usually works from the workshop in which the (well
                equipped) mechanic has access to a vehicle lift to access areas
                that are difficult to reach when the car is on the ground.
                Beside the workshop bound mechanic, there are mobile mechanics
                like those of the UK Automobile Association (the AA) which allow
                the car owner to receive assistance without the car necessarily
                having to be brought to a garage.
              </p>
              <p className="product-text">
                A mechanic may opt to engage in other careers related to his or
                her field. Teaching of automotive trade courses, for example, is
                almost entirely carried out by qualified mechanics in many
                countries.
              </p>
            </div>
          </div>
          <div className="cols col-lg-6 pt-10">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductReview;
