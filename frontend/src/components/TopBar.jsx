import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { MdLocalOffer } from "react-icons/md";
import "./StyleSheets/topbar.css"
const TopBar = () => {
  return (
    <>

       <Navbar bg="dark" variant="dark" expand="lg" className="navbarcontainer">
        <Container fluid>
          <h6 className="text-light">
            <MdLocalOffer className="text-warning" /> &nbsp;&nbsp; Free Home
            Delivery on Order Above 500/- Rupees
          </h6>
          <Nav className="ms-auto">
            <div className="navbarDivContainer">
            <LinkContainer to="/" activeClassName="" >
              <Nav.Link ><p className="linksInNavbar" >Home</p></Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about" activeClassName="">
              <Nav.Link><p className="linksInNavbar" >About Us</p></Nav.Link>
            </LinkContainer>
            <LinkContainer to="/ourmenu" activeClassName="">
              <Nav.Link><p className="linksInNavbar" >Our Menu</p></Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact" activeClassName="">
              <Nav.Link><p className="linksInNavbar" >Contact Us</p></Nav.Link>
            </LinkContainer>
            <LinkContainer to="/policy" activeClassName="">
              <Nav.Link><p className="linksInNavbar" >Terms and Policies</p></Nav.Link>
            </LinkContainer>
            <LinkContainer to="/faq" activeClassName="">
              <Nav.Link><p className="linksInNavbar" >FAQ</p></Nav.Link>
            </LinkContainer>
            </div> 
          </Nav>
        </Container>
      </Navbar>
 
    </>
  );
};

export default TopBar;
