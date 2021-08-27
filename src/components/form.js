import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 600px;
  min-width: 350px;
  border-radius: 10px;
  position:absolute;
  left: 30%;
  bottom: 30;
  transform: translateX(-50%);
  background:rgba(255,255,255,0.3);
  backdrop-filter: blur(13px);
  box-shadow: 0 0 20px -2px black;
  display:flex;
  justify-content:center;
  flex-direction: column;
  padding: 20px 0;
  color: rgba(18,18,18,0.85);
`

const Texto = styled.h1`
  text-align:center;
  padding: 10px 0;
  color: #222257;
  font-family: 'Poppins';
  font-weight: 700;
`
const Form = styled.form`
  display:flex;
  flex-direction:column;
`

const Field = styled.div`
 width: 100%;
  position: relative;
  font-size: 18px;
  padding: 7px 30px;
  white-space: nowrap;

  &::after{
  content : "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 100%;
  height: 1px;
  width: 85%;
  padding-top: 5px;
  border-top:1px solid rgba(18,18,18,0.6);
}
`
const Label = styled.label`
  width: 100%;
  font-size: 17px;
  margin-bottom: 20px;
  line-height: 30px;
  font-weight: 400;
  text-transform: uppercase;
`

const Input = styled.input`
  border: 0;
  background: transparent;
  padding:0 5px;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  height: 30px;
  width: calc(100% - 50px);
  vertical-align: middle;

  &:focus{
  outline:none;
  }

  &::placeholder{
      color: #343380 
    }

`

const A = styled.a`
margin-right: 10%;
  margin-top: 10px;
  text-align: right;
  font-size: 16px;
  text-decoration:none;
  color:rgba(18,18,18,0.7);
  
`

const SIGN = styled.div`
width: 100%;
  margin-top: 20px;
  position: relative;
  font-size: 18px;
  padding: 7px 30px;
  white-space: nowrap;
`

const Span = styled.span`
border-bottom: 1px solid transparent;
  transition: all 0.3s ease;
  color: #0f112b ;

  &:hover span{
  color: #121212;
  border-bottom-color: #121212;
  }
`
const A2 = styled.a`
text-decoration: none;
  color: inherit;
  position: relative;
  top: 10px;
  border-bottom: 1px solid transparent;
  transition: all 0.3s ease;

  &:hover{
  color: #5944c9;
  border-bottom-color: #121212;
}
`

const H3 = styled.h3`
color: #222257;
font-family: 'Poppins';
text-transform: uppercase;

`


function form() {
  return (
      <Container>
      <Texto>Login</Texto>
      <Field>
          <Label>Usuário</Label><br/>
          <Input type='text' placeholder='type your Login'/>
      </Field>
      <Field>
      <Label>Senha</Label><br/>
          <Input type='password' placeholder='type your password'/>
      </Field>
      <A>
          <Span>Esqueceu a senha?</Span>
      </A>

      <SIGN>
        <H3>É sua primeira vez aqui?<br/></H3> 
          <A2>
          Cadastre-se
          </A2>
      </SIGN>

      </Container>
  );
}

export default form;