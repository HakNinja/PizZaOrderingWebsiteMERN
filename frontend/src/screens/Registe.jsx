import React, { useState } from "react";
import {Nav,Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { registerUser } from "../actions/userAction";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import Success from "../components/Success";
import Error from "../components/Error";
import { LinkContainer } from "react-router-bootstrap";
import "../components/StyleSheets/registration.css"
import "../components/StyleSheets/popup.css"
import { FaEnvelope, FaLock, FaSignInAlt, FaUser } from "react-icons/fa";
const Registe = () => {
  const registerState = useSelector((state) => state.registerUserReducer);
  const { error, success, loading } = registerState;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confrimPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const registerhandler = () => {
    if (password !== confrimPassword) {
      alert("Password and Confirm Password did not Match Kindly Check");
    } else {
      const user = { name, email, password, confrimPassword };
      dispatch(registerUser(user));
    }
  };
  return (
    <div className="registerContainerbox">
<div className="popupnotifcationContainer">
        {loading && <Loader />}
        {success && <Success success="User Register Successfully" className="popupNotificationSuccess" />}
        {error && <Error error="Cannot Register the User !!!  Something Went Wrong.. ERORR-404 "   className="popupNotificationError"/>}
</div>
  
        <div className="registerContainerboxform">
        <Form>
          <h1 className="SignUpheading" >Sign Up With Us </h1>
          <h6 className="SignUpdec" >to register with us fill up your detials below</h6>
          <Form.Group className="formGroup" controlId="formBasicName">
            <Form.Label className="formlabel"> <p><FaUser /></p>
            <Form.Control
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="formtextboxControl"
            /></Form.Label>
          </Form.Group>
          <Form.Group className="" controlId="formBasicEmail">
          <Form.Label className="formlabel"> <p  ><FaEnvelope/></p>
            <Form.Control
              type="email"
              placeholder="Enter your Email Id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="formtextboxControl"
            /> </Form.Label>
            <p className="description-text">
              We'll never share your email with anyone else.
            </p>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="formlabel"><p><FaLock/> </p> 
            <Form.Control
              type="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="formtextboxControl"
            /></Form.Label>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label className="formlabel"> <p ><FaLock/> </p>
            <Form.Control
              type="password"
              placeholder="Enter the Confirm Password"
              value={confrimPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="formtextboxControl"
            /></Form.Label>

          </Form.Group> 
          <Form.Group  className="rembermecheckBox" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" className="rembermecheckBox" />
          </Form.Group>
          <Button variant="primary" onClick={registerhandler} className="createaccountBtn">
            <FaSignInAlt/> CREATE ACCOUNT
          </Button>
          <Form.Label className="alreadyuser">Already have an Account ?
          <LinkContainer to="/login">
             <Nav.Link > <p className="alreadyuser signin">Sign in</p></Nav.Link>
 </LinkContainer> </Form.Label>
        </Form>
        </div>
    </div>
  );
};

export default Registe;
