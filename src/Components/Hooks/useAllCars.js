import { useEffect, useState } from "react";

const useAllCars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("https://hasan-rifat-assignment-11.herokuapp.com/inventories")
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
      });
  }, []);
  return { cars, setCars };
};

export default useAllCars;
