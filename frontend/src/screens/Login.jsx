import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userAction";
import Loader from "../components/Loader";
import Success from "../components/Success";
import Error from "../components/Error";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import "../components/StyleSheets/popup.css"
 import "../components/StyleSheets/login.css"
import { FaEnvelope, FaLocationArrow, FaLock } from "react-icons/fa";


const Login = () => {
  const registerState = useSelector((state) => state.registerUserReducer);
  const { error, success, loading } = registerState;
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();


  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);
  const loginHandler = () => {
    const user = { email, password };
    if(!email && !password){
    alert(" Kindly enter email and password to proess further");
    }
    else if(!password){
alert("Warning enter your  secret password Id to process further");
    }
    else if(!email){
      alert("Warning enter your email Id to process further");
    }
    dispatch(loginUser(user));
   
  };
  return (
    
    <>
     <div className="popupnotifcationContainer">
    {loading && <Loader />}
    {success && <Success success="Login Succesfully" className="popupNotificationSuccess" />}
    {error && <Error error="Error Login!!! Username or Password is Invalid "   className="popupNotificationError"/>}
  </div>  
      <Container className="loginContainer">
        <Form className="loginformContainer">
        <h1 className="SignUpheading colorhead" >Sign In into your Account </h1>
          <h6 className="SignUpdec" >login to your account to get more discounts!! </h6>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="formlabellogin"> <p  ><FaEnvelope / ></p></Form.Label>
            <Form.Control 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your email Id...."
              className="formtextboxControllogin"
            />
          <p className="description-textlogin">
              We'll never share your email with anyone else.
            </p>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="formlabellogin"> <p  ><FaLock / ></p></Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=" your password...."
              className="formtextboxControllogin"
            />
          </Form.Group>
          <Form.Group  className="rembermecheckBoxlogin" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out"   className="rembermecheckBoxlogin"/>
          </Form.Group>
          <Button variant="primary" className="loginaccountBtn" onClick={loginHandler}>
          <FaLocationArrow />  Login
          </Button>
        </Form>
      </Container> 
      {/* <ToastContainer/> */}
      
    </>
  );
};

export default Login;
