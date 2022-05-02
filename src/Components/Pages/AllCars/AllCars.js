import React from "react";
import CarInventories from "../../CarInventories/CarInventories";
import Cars from "../../Cars/Cars";
import useAllCars from "../../Hooks/useAllCars";

const AllCars = () => {
  const { cars, setCars } = useAllCars();
  return (
    <section className="py-16">
      {/* all cars    */}
      <div className="container">
        <div className="row">
          <div className="cols ">
            <h2 className="text-center py-14 text-5xl px-0">All Cars</h2>
          </div>
          <div className="container">
            <div className="row ">
              {cars.map((car) => (
                <CarInventories key={car._id} car={car}></CarInventories>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllCars;
