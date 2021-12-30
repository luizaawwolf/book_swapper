import React from 'react';
import SignupForm from '../components/SignUp';
  
const SignUp = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Right',
        alignItems: 'Right',
        height: '100vh'
      }}
    >
      <h1>Sign Up</h1>
      <SignupForm></SignupForm>
    </div>
  );
};
  
export default SignUp;