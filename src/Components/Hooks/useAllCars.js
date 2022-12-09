import { useEffect, useState } from "react";

const useAllCars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch(
      "https://warehouse-management-server-one.vercel.app/api/v1/inventories"
    )
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
      });
  }, []);
  return { cars, setCars };
};

export default useAllCars;
