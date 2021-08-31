import React from 'react';
import styled from 'styled-components';
import img from '../../assets/images/ryze2.jpeg'
import Form from './form';

const Background = styled.div`
width: 100%;
height: 100vh;
background-image: url(${img});
background-size: cover;
background-repeat: no-repeat;
display: flex;
justify-content: center;
align-items: center;
`

function Login() {
  return (
    <Background>
      <Form />
    </Background>
  );
}

export default Login;