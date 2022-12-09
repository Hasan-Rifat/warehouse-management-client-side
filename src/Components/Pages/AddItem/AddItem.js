import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";

const AddItem = () => {
  const handleAddItem = async (e) => {
    e.preventDefault();
    const allCars = {
      productName: e.target.productName.value,
      image: e.target.image.value,
      about: e.target.about.value,
      price: e.target.price.value,
      quantity: e.target.quantity.value,
      supplierName: e.target.supplierName.value,
      email: e.target.email.value,
    };
    try {
      const { data } = await axios.post(
        //add car api
        "https://warehouse-management-server-one.vercel.app/api/v1/car",
        allCars
      );
      console.log(data);
      if (data.success) {
        e.target.reset();
      }

      if (!data.success) {
        return toast.error(data.error);
      }

      toast.success(data.message);
      console.log(allCars);
    } catch (error) {
      toast.error(error.message);
    }
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
                  name="about"
                  placeholder="Description"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Control
                  type="number"
                  name="price"
                  placeholder="Price"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Control
                  type="number"
                  name="quantity"
                  placeholder="Quantity"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Control
                  type="text"
                  name="supplierName"
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
