import React from "react";
import { Navbar, Nav, Container, Image, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { logoutUser } from "../actions/userAction";
import "./StyleSheets/navbar.css";
import { FaCartPlus,  FaSignInAlt, FaUserAlt } from 'react-icons/fa';
const NavBar = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="navbarcontainermain">
        <Container>
          <Navbar.Brand>
            <Image
              src="images/PizzaOrderingWebsite.png"
              alt="logo"
              style={{ height: "70px" , width:"300px"}}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {currentUser ? (
                <LinkContainer to="/">
                  <NavDropdown title={currentUser.name}   className="navbardropdownhead" id="basic-nav-dropdown">
                    <LinkContainer to="/orders">
                       <NavDropdown.Item className="navbardropdownData"> My Orders</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/register">
                       <NavDropdown.Item className="navbardropdownData"> Register </NavDropdown.Item></LinkContainer>
                    <NavDropdown.Item  onClick={() => {  dispatch(logoutUser());  }}className="navbardropdownData" >    Sign Out  </NavDropdown.Item>
                  </NavDropdown>
                </LinkContainer>
              ) : (
                <>
                  {" "}
                  <LinkContainer to="/login">
                    <Nav.Link className="navbardropdownhead"  id="signInblock"><FaSignInAlt/> Sign In</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/register">
                    <Nav.Link className="navbardropdownhead" id="signUpblock"><FaUserAlt/> SignUp</Nav.Link>
                  </LinkContainer>{" "}
                </>
              )}

              <LinkContainer to="/cart">
                <Nav.Link className="navbardropdownhead" id="cartblock" ><FaCartPlus/> Cart {cartState.cartItems.length}</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
