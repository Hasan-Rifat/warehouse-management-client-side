import React from "react";
import { Link } from "react-router-dom";
import Cars from "../Cars/Cars";
import useAllCars from "../Hooks/useAllCars";
import "./Single.module.css";
const SingleCar = ({ car }) => {
  const { cars, setCars } = useAllCars();
  return (
    <section className="pt-28">
      {/* singleCar */}
      <div className="container">
        <div className="row">
          <div className="cols text-center">
            <h2>All Cars </h2>
          </div>
          <div className="container">
            <div className="row ">
              {cars.slice(0, 6).map((car) => (
                <Cars key={car._id} car={car}></Cars>
              ))}
              <div className="text-center pt-16">
                <Link to="/allcars">
                  <button className="btn btn-primary">
                    Manage all inventory
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleCar;
