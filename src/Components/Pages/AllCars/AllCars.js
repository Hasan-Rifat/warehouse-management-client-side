import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import CarInventories from "../../CarInventories/CarInventories";
// import Cars from "../../Cars/Cars";
import useAllCars from "../../Hooks/useAllCars";

const AllCars = () => {
  const { cars, setCars } = useAllCars();

  const handleDelete = async (id) => {
    const agree = window.confirm("are you sure you want to delete this item?");
    if (window.confirm === true) {
      toast.success("Item has been removed");
    }
    if (agree) {
      await axios.delete(`http://localhost:5000/car/${id}`);
      const carItem = cars.filter((item) => item._id !== id);
      setCars(carItem);
    }
  };
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
                <CarInventories
                  key={car._id}
                  car={car}
                  handleDelete={handleDelete}
                ></CarInventories>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllCars;
