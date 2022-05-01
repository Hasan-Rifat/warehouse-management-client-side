import React from "react";
import "./Footer.css";

const Footer = () => {
  let month = new Date();
  let year = month.getFullYear();
  return (
    <footer className="py-20 lg:py-48 relative">
      <div className="container ">
        <div className="row">
          <div className="cols">
            <div className="absolute bottom-5 left-0 right-0">
              <h2 className="sm:text-xs md:text-xl text-center text-[#000b76]">
                © Copyright by Hasan Rifat {year}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
