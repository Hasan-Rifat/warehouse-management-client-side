import React from "react";
import image from "../../../images/404.png";

const NotFound = () => {
  return (
    <div className="py-12">
      <img
        className="d-block mx-auto img-fluid w-[50%] h-[60%]"
        src={image}
        alt=""
      />
    </div>
  );
};

export default NotFound;
