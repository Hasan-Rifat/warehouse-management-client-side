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
                Cras a elit sit amet leo accumsan volutpat. Suspendisse
                hendrerit vehicula leo, vel efficitur felis ultrices non.
                Integer aliquet ullamcorper dolor, quis sollicitudin.
              </p>
              <p className="product-text">
                Cras a elit sit amet leo accumsan volutpat. Suspendisse
                hendrerit vehicula leo, vel efficitur felis ultrices non.
                Integer aliquet ullamcorper dolor, quis sollicitudin.
                Suspendisse hendrerit vehicula leo, vel efficitur felis ultrices
                non.
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
