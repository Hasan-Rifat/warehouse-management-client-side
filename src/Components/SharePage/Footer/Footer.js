import React from "react";

const Footer = () => {
  // let
  let month = new Date();
  let year = month.getFullYear();
  return (
    <div className="py-20">
      <h2>© Copyright by Hasan Rifat {year}</h2>
    </div>
  );
};

export default Footer;
