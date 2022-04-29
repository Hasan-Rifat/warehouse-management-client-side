import React from "react";
import AllServices from "../AllServices/AllServices";
import Banner from "../Banner/Banner";
import ProductReview from "../ProductReview/ProductReview";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <ProductReview />
      <AllServices />
      <Testimonial />
    </div>
  );
};

export default Home;
