import React from "react";

const Cars = ({ car, children }) => {
  const handleNavigate = (id) => {
    console.log(id);
  };
  const { _id, supplierName, quantity, price, about, image, productName } = car;
  return (
    <div className="cols col-md-4 g-4">
      <div className="rounded p-4 shadow-lg">
        <img className="rounded" src={image} alt="" />
        <div className="py-2">
          <h2 className="text-lg">Name: {productName}</h2>
          <p>
            Description : <small>{about.slice(0, 20)}</small>
          </p>
          <p>
            Price : <span>{price}</span>
          </p>
          <p>
            Quantity : <small>{quantity}</small>
          </p>
          <h4 className="text-base">Supplier Name : {supplierName}</h4>
          <div className="flex justify-between">
            <button
              onClick={() => handleNavigate(_id)}
              className="btn btn-primary my-3"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cars;
