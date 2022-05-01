import React from "react";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <section className="testimonial">
      <div className="container">
        <div className="row">
          <div className="cols col-lg-5">
            <div className="testimonial-info p-9 bg-[#e8aa37]">
              <h2 className="py-3 text-[#232628] font-bold text-4xl">
                CAR DEALERSHIP{" "}
                <span className="text-[#fff] uppercase">
                  Complete Auto Services
                </span>
              </h2>
              <p className="text-[#232628]">
                With specialists on hand to help with any part of the car
                shopping or vehicle ownership experience, Motors provides
                financing, car service and a great selection of vehicles for
                luxury car shoppers in Chicago, IL. Motors is ultimate <br />
                Automotive, Auto Services.
              </p>
            </div>
          </div>
          <div className="cols col-lg-7"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
