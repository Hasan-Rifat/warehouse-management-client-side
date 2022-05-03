import React, { useEffect, useState } from "react";

const useAllCars = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/inventories")
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
      });
  }, []);
  return { cars, setCars };
};

export default useAllCars;
