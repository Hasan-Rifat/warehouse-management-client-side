import React from "react";

const Footer = () => {
  // let
  let month = new Date();
  let year = month.getFullYear();
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="cols">
            <div className="py-20">
              <h2 className="text-center">© Copyright by Hasan Rifat {year}</h2>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
