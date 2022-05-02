import React from "react";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import image from "../../../images/404.png";

const CarDetailsPage = () => {
  const { carsId } = useParams();
  // add quantity
  const handleUpdateQuantity = (event) => {
    console.log(event);
  };
  // delete function
  const handleDelete = (event) => {
    console.log(event);
  };

  return (
    <section className="py-16">
      <div className="container rounded p-4 shadow-lg">
        <h2 className="text-center">Id {carsId}</h2>
        <div className="row flex items-center">
          <div className="cols col-md-7 g-4 py-5">
            <div className="">
              <img className="rounded" src={image} alt="" />
            </div>
          </div>
          <div className="cols col-md-5 py-5">
            <div className="">
              <h2 className="text-4xl py-4">
                <span className="font-semibold">Name : </span> Tesla
                {/* {productName} */}
              </h2>
              <p>
                <span className="font-semibold text-lg">Description : </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                saepe voluptas laboriosam debitis, assumenda neque
                {/* <small>{about.slice(0, 20)}
                </small> */}
              </p>
              <p>
                <span className="font-semibold text-lg">Price : </span> $20,000
                {/* <span>{price}</span> */}
              </p>
              <p>
                <span className="font-semibold text-lg">Quantity</span> : 25
                {/* <small>{quantity}</small> */}
              </p>
              <h4 className="text-lg py-3 font-semibold">
                Supplier Name : Khan{/* {supplierName} */}
              </h4>
              <Form
                className="my-2"
                // onSubmit={handleRegister}
              >
                <Form.Group className="mb-4" controlId="formBasicFirstName">
                  <Form.Control
                    type="text"
                    name="quantity"
                    placeholder="Add Quantity"
                    required
                  />
                </Form.Group>
                <div className="flex justify-around">
                  <button
                    onClick={() => handleUpdateQuantity()}
                    className="btn btn-primary "
                  >
                    Delivered
                  </button>
                  <button
                    onClick={() => handleDelete()}
                    className="btn btn-primary  "
                  >
                    Add Quantity
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarDetailsPage;
