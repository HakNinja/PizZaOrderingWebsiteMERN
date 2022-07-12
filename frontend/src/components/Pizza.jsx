import React, { useState } from "react";
import { Card, Button, Row, Col, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartAction";
import "./StyleSheets/pizza.css";
import { FaCartPlus } from 'react-icons/fa';

const Pizza = ({ pizza }) => {
  const [varient, setVarient] = useState("small");
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(pizza, quantity, varient));
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div className="mainContainerofPizzas">
      <Card style={{ width: "27rem" }}>
        <Card.Img
          variant="top"
          src={pizza.image }
          alt="Image of your delicious Pizza  Is Not Available!! Sorry for the Inconvience!!! "
          style={{ height: "18rem", cursor: "pointer" }}
          onClick={handleShow}
        />

        <Card.Body>
          <Card.Title>{pizza.name}</Card.Title>
          <hr />
          <Card.Text>
            <Row>
              <Col md={6}>
                <h6 className="pizzaDisplaycontainer">Varient</h6>
                <select className="selectdropdown"
                  value={varient}
                  onChange={(e) => setVarient(e.target.value)}
                >
                  {pizza.varients.map((varient) => (
                    <option key={varient}>{varient}</option>
                  ))}
                </select>
              </Col>
              <Col md={6}>
                <h6 className="pizzaDisplaycontainer">Quantity</h6>
                <select className="selectdropdown"
                  value={quantity}onChange={(e) => setQuantity(e.target.value)} >{[...Array(10).keys()].map((v, i) => (<option key={i + 1} value={i + 1}>{i + 1}</option> ))}</select>
              </Col>
            </Row>
          </Card.Text>
          <Row>
            <Col md={6} className=" pricesize ">Price : <p className="pizzaDisplaycontainer1">&#8377; {pizza.prices[0][varient]}.00</p> </Col>
            <Col md={6} className=" pricesize "> Amount for {quantity} Pizzas:<p className="pizzaDisplaycontainer1 " > &#8377;{pizza.prices[0][varient] * quantity}.00 </p></Col>
            <Col md={6}>
              <Button
                onClick={addToCartHandler}
                className="addtoCartBtn"
              >
                <FaCartPlus/> Add to Cart 
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* modal */}
      <Modal id="modalBoxContainer"   show={show} onHide={handleClose} >
        <Modal.Header closeButton  >
          <Modal.Title  className="modalBoxheading">{pizza.name} </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBoxpizza">
          <div>
            <Card.Img
              variant="top"
              src={pizza.image}
              style={{ height: "430px"  }}
            />
          </div>
          <div>
            <h5>Description :</h5>
            <h6>{pizza.description}</h6>
          </div>
        </Modal.Body>
      </Modal  >
      </div>

      
    </>
  );
};

export default Pizza;
