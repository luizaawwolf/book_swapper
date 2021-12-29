import React, { useState } from "react";
import {
 Navbar,
 Nav,
 Container,
 Form,
 FormControl
} from "react-bootstrap";
import './index.css';
  
const Navigation = () => {
 const [modalShow, setModalShow] = useState(false);
 
 return (
    <>
    <Navbar>
      <Container>
      <Navbar.Brand href="/">Navbar</Navbar.Brand>
      <Nav className="justify-content-between w-100 mx-5">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/findbooks">Find Books</Nav.Link>
        <Nav.Link href="/swaps">Swaps</Nav.Link>
        <Nav.Link href="/yourlibrary">Your Library</Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
      </Form>
      </Container>
    </Navbar> 
  </>
 );
};
export default Navigation;