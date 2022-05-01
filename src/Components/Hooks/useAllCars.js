import React, { useEffect, useState } from "react";

const useAllCars = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("allcars.json")
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
      });
  }, []);
  return { cars, setCars };
};

export default useAllCars;
