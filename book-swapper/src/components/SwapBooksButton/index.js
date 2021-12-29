import React, { useState } from "react";
import {
    Button, Container
} from "react-bootstrap";
import './index.css';
  
const SwapBooksButton = () => {
 const [modalShow, setModalShow] = useState(false);
 
 return (
    <>
    <Container id="container-button" className="centered" fluid>
        <Button id="swap_button">SWAP YOUR BOOKS</Button>{' '}
    </Container>

  </>
 );
};
export default SwapBooksButton;