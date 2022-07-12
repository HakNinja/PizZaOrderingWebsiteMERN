import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { filterPizza } from "../actions/pizzaAction";
import "./StyleSheets/navbar.css";
const Filters = () => {
  const [searchkey, setsearchkey] = useState("");
  const [category, setcategory] = useState("All");
  const dispatch = useDispatch();
  return (
    <div className="searchbarWrapper" >
      <Form>
        <Row>
         
            <Form.Control
              value={searchkey}
              onChange={(e) => setsearchkey(e.target.value)}
              placeholder="Search your delicious pizza from here...."
              className="form-search-select"
            />
        
            <select
               className="form-search-select form-select"
              value={category}
              onChange={(e) => setcategory(e.target.value)} >
              <option className="selectedOption">All</option>
              <option className="selectedOption">veg</option>
              <option className="selectedOption">nonveg</option>
              <option className="selectedOption" >pizza mania</option>
              <option className="selectedOption" >sides beverage</option>
              <option className="selectedOption" >pasta</option>
            </select>
          
          <Col>
            <Button
            className="SearchButton"
              onClick={() => {
                dispatch(filterPizza(searchkey, category  ));
              }} > Search
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Filters;
