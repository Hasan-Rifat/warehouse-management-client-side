import axios from "axios";
import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const AddItem = () => {
  const handleAddItem = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    /*  useEffect(() => {
      fetch();
    }, []); */

    // toast("Password not match");
  };
  return (
    <div className="container pt-6 mt-20">
      <div className="row">
        <div className="cols col-md-6 mx-auto shadow-lg p-8 m-4 rounded">
          <div className="p-3">
            <h2>Add Product</h2>
            <Form className="py-6" onSubmit={handleAddItem}>
              <Form.Group className="mb-3" controlId="formBasicFirstName">
                <Form.Control
                  type="text"
                  name="productName"
                  placeholder="Product Name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Control
                  type="text"
                  name="image"
                  placeholder="Image url"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Control
                  type="text"
                  name="description"
                  placeholder="Description"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Control
                  type="text"
                  name="price"
                  placeholder="Price"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Control
                  type="text"
                  name="quantity"
                  placeholder="Quantity"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Control
                  type="text"
                  name="supplier"
                  placeholder="Supplier name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  required
                />
              </Form.Group>

              <Button variant="primary w-100" type="submit">
                Add Product
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
