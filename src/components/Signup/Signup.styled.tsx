import styled from 'styled-components';
import bg from '../../assets/images/signup-bg.jpg';

const ContainerSignUp = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    display:flex;
    justify-content: center;
    align-items:center;
    font-family: 'Poppins';

    .picture{
        background-image:url(${bg});
        background-position:center;
        background-size:cover;
        background-repeat: no-repeat;
        height: 100vh;
        width: 50vw;
    }
`


const SignUpGlass = styled.div`
  background:rgba(255,255,255,0.6);
  backdrop-filter: blur(13px);
  box-shadow: 0 0 20px -2px black;
  height: 100vh;
  min-width: 50%;

  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  .name{
      display:flex;
      width: 70%;
      justify-content: space-between;

  }

  .name input:nth-child(2){
       margin-left: 10px; 
  }

  .cadastro{
    background-color: red;
    color: white;
    font-weight: 700;
    margin: 10px;
    padding: 10px;
    border-radius: 20px;
  }

`

const Title = styled.h1`
    font-weight: 700;
    font-size: 22px;
    width: 70%;
    text-align:center;
    color: #222257;

    strong{
        color:#343380;
    }

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
  width: 70%;

  &:focus{
    outline: 2px solid black;
  }
`


const ConfirmButton = styled.button`
  margin: 10px 0;
  padding: 8px;
  outline: none;
  border: none;
  font-weight: 600;
  font-family: 'Poppins';
  font-size: 20px;
  border-radius: 8px;
  background-color: #343380;
  color: white;

  &:hover{
    background-color: #5944c9;
    cursor:pointer;
    transition: 0.4s;
  }

`

export { ContainerSignUp, SignUpGlass, Title, Input, ConfirmButton }