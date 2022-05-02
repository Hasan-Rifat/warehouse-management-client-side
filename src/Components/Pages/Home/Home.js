import React from "react";
import SingleCar from "../../SingleCar/SingleCar";
import Banner from "../Banner/Banner";
import ProductReview from "../ProductReview/ProductReview";
import Testimonial from "../Testimonial/Testimonial";
import "./Home.module.css";

const Home = () => {
  return (
    <div className="" id="home">
      <Banner />
      <ProductReview />
      <Testimonial />
      <SingleCar />
    </div>
  );
};

export default Home;
