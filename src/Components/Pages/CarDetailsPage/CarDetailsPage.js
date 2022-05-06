import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";

const CarDetailsPage = () => {
  const [car, setCar] = useState({});
  const { carsId } = useParams();
  const [addQuantity, setAddQuantity] = useState(1);
  const { supplierName, quantity, price, about, image, productName } = car;

  useEffect(() => {
    fetch(`http://localhost:5000/car/${carsId}`)
      .then((res) => res.json())
      .then((data) => setCar(data));
  }, [carsId]);

  const updateQuantity = (e) => {
    const q = e.target.value;
    const total = parseInt(q);
    setAddQuantity(total);
    // e.target.reset();
  };

  // add quantity
  const handleAddQuantity = async () => {
    let deliver = addQuantity;
    let quantityParse = parseInt(car.quantity);
    let quantity = quantityParse + deliver;

    const carInfo = {
      supplierName: car.supplierName,
      price: car.price,
      about: car.about,
      image: car.image,
      productName: car.productName,
      quantity: quantity,
    };
    const url = `http://localhost:5000/car/${carsId}`;
    fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(carInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCar(carInfo);
        if (data.matchedCount === 1) {
          setAddQuantity("");
        }
      });
  };

  // console.log(addQuantity);
  // delete function

  const handleDeliver = async () => {
    let deliver = 1;
    let quantityParse = parseInt(car.quantity);
    let quantity = quantityParse - deliver;

    const carInfo = {
      supplierName: car.supplierName,
      quantity: quantity,
      price: car.price,
      about: car.about,
      image: car.image,
      productName: car.productName,
    };
    const url = `http://localhost:5000/car/${carsId}`;
    fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(carInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCar(carInfo);
      });
  };

  return (
    <section className="py-16 my-12">
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
              <h2 className="text-2xl py-2">
                <span className="font-semibold">Name : {productName} </span>
              </h2>
              <p>
                <span className="font-semibold text-lg">
                  Description : <small>{about?.slice(0, 20)}</small>
                </span>
              </p>
              <p>
                <span className="font-semibold text-lg">
                  Price : <span className="text-base font-normal">{price}</span>
                </span>
              </p>
              <p>
                <span className="font-semibold text-lg">Quantity</span> :{" "}
                <small>{quantity}</small>
              </p>
              <h4 className="text-lg py-3 font-semibold">
                Supplier Name :{" "}
                <span className="text-base font-normal">{supplierName}</span>
              </h4>
              <Form
                className="my-2"
                // onSubmit={handleRegister}
              >
                <Form.Group className="mb-4" controlId="formBasicFirstName">
                  <Form.Control
                    type="number"
                    name="quantity"
                    placeholder="Add Quantity"
                    onBlur={updateQuantity}
                    required
                  />
                </Form.Group>
                <div className="flex justify-around">
                  <Button
                    onClick={() => handleDeliver()}
                    className="btn btn-primary "
                  >
                    Delivered
                  </Button>
                  <Button
                    onClick={() => handleAddQuantity()}
                    className="btn btn-primary  "
                  >
                    Add Quantity
                  </Button>
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
