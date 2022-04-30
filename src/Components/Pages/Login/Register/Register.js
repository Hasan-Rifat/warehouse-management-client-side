import React from "react";
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../../firebase.init";
import Loading from "../../Loading/Loading";
import Social from "../Social/Social";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  // RequireAuth
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password === confirmPassword) {
      createUserWithEmailAndPassword(email, password);
    } else {
      toast("Password not match");
    }
  };
  // const navigate = useNavigate();

  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    navigate(from, { replace: true });
  }
  let errorMessage;
  if (error) {
    errorMessage = <p className="text-danger">{error?.message}</p>;
  } else {
    errorMessage = "";
  }

  return (
    <div className="container pt-6">
      <div className="w-50 mx-auto shadow-lg p-12 rounded">
        <h2>Register</h2>
        <Form className="py-6" onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicFirstName">
            <Form.Control
              type="text"
              name="first-name"
              placeholder="First Name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicLastName">
            <Form.Control
              type="text"
              name="Name"
              placeholder="Last Name"
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
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              name="confirmPassword"
              placeholder="confirm Password"
              required
            />
          </Form.Group>
          <Button variant="primary" className="w-[81%]" type="submit">
            Register
          </Button>
        </Form>
        <div>
          <Link className="no-underline " to="/login">
            <Button variant="primary " type="submit" className="w-2/5 mr-1">
              Login
            </Button>
          </Link>
          <Link className="no-underline " to="/">
            <Button variant="primary " type="submit" className="w-2/5 mr-1">
              Return to store
            </Button>
          </Link>
        </div>
        <Social />
        {errorMessage}
      </div>
    </div>
  );
};

export default Register;
