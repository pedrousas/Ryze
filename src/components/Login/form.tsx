import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  min-height: 600px;
  min-width: 350px;
  position:absolute;
  left: 30%;
  bottom: 30;
  transform: translateX(-50%);
  background:rgba(255,255,255,0.7);
  backdrop-filter: blur(13px);
  box-shadow: 0 0 20px -2px black;
  display:flex;
  justify-content:center;
  align-items: center;
  flex-direction: column;
  padding: 20px 0;
  color: black;
  font-family: 'Poppins';

  div {
    text-align:center;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    width: 80%;
  }
`

const Title = styled.h1`
  font-weight: 600;
`

const Input = styled.input`
  margin: 10px 0;
  padding: 12px;
  font-family:'Poppins';
  font-weight:700;
  border: 2px transparent;
  background-color: #ececec;
  border-radius:2px;
  color: #5e5c58;
  font-size: 12px;
  width: 100%;

  &:focus{
    outline: 2px solid black;
  }
`

const Google = styled.button`
  background-color: white;
  width: 100%;
  outline:none;
  border:none;
  text-transform: uppercase;
  font-family:'Poppins';
  padding: 12px;
  font-size: 18px;
  font-weight:600;
  margin: 8px 0;
  border-radius: 5px;
  display:flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;

  &:hover{
    background-color:#5944c9;
    transition: 0.4s;
    color:white;
  }

  i{
    font-size: 20px;
    margin-left: 5px;
  }

  i:before{
    background-image:linear-gradient(-200deg, #4285f4, #34a853, #fbbc05, #ea4335);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

const ButtonLogin = styled.button`
  width: 30%;
  padding: 10px 5px;
  font-size: 30px;
  border:none;
  color:white;
  background-color:#222257 ;
  border-radius: 10px;
  cursor:pointer;

  margin: 10px 0;

  &:hover{
    background-color:#5944c9;
    transition: 0.4s;
  }

`

const Link = styled.p`
  margin: 8px 0;
  text-transform: uppercase;
  color:#201c16;
  
`




function Form() {
  return (
    <Container>
      <div className="content">
        <Title>Iniciar Sessão</Title>

        <Input type="text" placeholder="E-MAIL" />

        <Input type="password" placeholder="SENHA" />

        <Google>
          Entrar com <i className="fab fa-google"></i>
        </Google>

        <ButtonLogin>
          <i className="fas fa-arrow-right"></i>
        </ButtonLogin>

        <Link>Não consegue fazer login?</Link>
        <Link>Criar Conta</Link>
      </div>

    </Container>
  );
}

export default Form;