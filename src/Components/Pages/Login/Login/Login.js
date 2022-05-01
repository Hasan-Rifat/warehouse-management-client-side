import { async } from "@firebase/util";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../../firebase.init";
import Loading from "../../Loading/Loading";
import Social from "../Social/Social";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, sendError] =
    useSendPasswordResetEmail(auth);
  // reset password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // RequireAuth
  let navigate = useNavigate();
  let location = useLocation();

  const handleEmail = (event) => {
    // setEmail(event.target.value);
    setEmail(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    signInWithEmailAndPassword(email, password);
  };
  // const navigate = useNavigate();
  if (loading) {
    return <Loading></Loading>;
  }

  let from = location.state?.from?.pathname || "/";

  // RequireAuth
  if (user) {
    navigate(from, { replace: true });
  }
  let errorMessage;
  if (error) {
    errorMessage = <p className="text-danger">{error?.message}</p>;
  } else {
    errorMessage = "";
  }

  const handleResetPassword = async () => {
    await sendPasswordResetEmail(email);
    toast("Sent email");
  };
  return (
    <section className="text-center">
      <div className="container pt-6 ">
        <div className="w-50 mx-auto shadow-lg p-12 rounded ">
          <div>
            <Form className="py-6" onSubmit={handleLogin}>
              <h2>Login</h2>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  onBlur={handleEmail}
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
              <Button variant="primary " className="w-[81%]" type="submit">
                Login
              </Button>
              <div>
                <Link className="no-underline " to="/register">
                  <Button
                    variant="primary "
                    type="submit"
                    className="w-2/5 mr-1"
                  >
                    Create Account
                  </Button>
                </Link>
                <Button
                  variant="primary  "
                  className="my-4 ml-1 w-2/5"
                  onClick={handleResetPassword}
                >
                  Reset Password
                </Button>
              </div>
            </Form>
          </div>

          <Social />
          {errorMessage}
        </div>
      </div>
    </section>
  );
};

export default Login;
