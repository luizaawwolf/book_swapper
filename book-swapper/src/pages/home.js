import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import SwapBooksButton from '../components/SwapBooksButton';
import { useAuth } from '../contexts/AuthContext';  

const Home = () => {

  const {currentUser, logout } = useAuth();
  return (
    <div
      style={{
        height: '100vh'
      }}
    >
      {currentUser ? currentUser.uid : "not logged in"}
      <SwapBooksButton></SwapBooksButton>
      <Button>Log Out</Button>
    </div>
  );
};
  
export default Home;