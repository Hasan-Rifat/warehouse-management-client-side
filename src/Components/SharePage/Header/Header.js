import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../images/logo.jpg";
import "./Header.css";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const handleLogOut = () => {
    signOut(auth);
    /* .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      }); */
  };
  return (
    <header className="">
      <Navbar
        style={{ boxShadow: "0 0 4px #0000000d" }}
        className="bg-white"
        expand="lg"
        fixed="top"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img className="h-10" src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link className="font-semibold mx-2 link" as={Link} to="home">
                Home
              </Nav.Link>
              <Nav.Link
                className="font-semibold mx-2 link "
                as={Link}
                to="allcars"
              >
                Products
              </Nav.Link>

              <Nav.Link
                className="font-semibold mx-2 link "
                as={Link}
                to="blog"
              >
                Blog
              </Nav.Link>

              {!user ? (
                <>
                  <Nav.Link
                    className="font-semibold mx-2 link "
                    as={Link}
                    to="/login"
                  >
                    Login
                  </Nav.Link>
                  <Nav.Link
                    className="font-semibold mx-2 link "
                    as={Link}
                    to="/register"
                  >
                    Register
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link
                    className="font-semibold mx-2 link "
                    as={Link}
                    to="manageitems"
                  >
                    Manage Items
                  </Nav.Link>
                  <Nav.Link
                    className="font-semibold mx-2 link "
                    as={Link}
                    to="additem"
                  >
                    Add Item
                  </Nav.Link>
                  <Nav.Link
                    className="font-semibold mx-2 link "
                    as={Link}
                    to="myitems"
                  >
                    My Items
                  </Nav.Link>

                  <button onClick={handleLogOut} className="btn btn-primary">
                    Logout
                  </button>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
