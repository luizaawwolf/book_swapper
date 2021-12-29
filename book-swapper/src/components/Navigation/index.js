import React, { useState } from "react";
import {
 Navbar,
 Nav,
 Container
} from "react-bootstrap";
  
const Navigation = () => {
 const [modalShow, setModalShow] = useState(false);
 
 return (
    <>
    <Navbar bg="light" variant="light">
      <Container>
      <Navbar.Brand href="/">Navbar</Navbar.Brand>
      <Nav className="me-auto justify-content-between w-100">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/findbooks">Find Books</Nav.Link>
        <Nav.Link href="/swaps">Swaps</Nav.Link>
        <Nav.Link href="/yourlibrary">Your Library</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
  </>
 );
};
export default Navigation;