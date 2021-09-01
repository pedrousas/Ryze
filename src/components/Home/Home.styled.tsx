import styled from 'styled-components';
import Img from '../../assets/images/ryze-logo.png';


const HomeDiv = styled.div`
width: 100%;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
background-color: black;
`

const RyzeAnime = styled.div`
position: absolute;
width: 100%;
min-height: 100vh;
z-index: -1;

img {
    position: absolute;
    width: 100%;
    height: 100vh; 
    z-index: -1;
    object-fit: cover;
}

& img:nth-child(2) {
    z-index: 9999;
    animation: glow 2s infinite;
}


@keyframes glow {
    0% {
        -webkit-filter: drop-shadow(0 0 1px rgb(70, 0, 199));
        filter: drop-shadow(0 0 0 rgb(32, 3, 196));
    }

    50% {
        -webkit-filter: drop-shadow(0 0 100px rgb(70, 0, 199));
        filter: drop-shadow(0 0 15px rgba(38, 0, 255, 0.844));
    }

    100% {
        -webkit-filter: drop-shadow(0 0 1px rgb(70, 0, 199));
        filter: drop-shadow(0 0 1px rgb(32, 3, 196));
    }
}

`

const Header = styled.div`
width: 100%;
height: 100vh;
z-index: 9999;
display: flex;
justify-content: flex-end;
position: relative;
align-items: center;

div{
    display: flex;
    flex-direction: column;
    align-items: center;
    
}

button {
    padding: 13px;
    height: 50px;
    margin-right: 150px; 
    margin-top: 20px;
    border-radius: 4px;
    border: none;
    font-family:'Poppins';
    font-size: 20px;
    color: white;
    background-color:#222257 ;
    cursor:pointer;
}

button:hover{
    background-color:#5944c9;
    transition: 0.4s;
  }

span {
color: #5944c9;
}

`

const ButtonLogin = styled.button`
  width: 140px;
  height: 6vh;
  padding: 20px 20px;
  font-family:'Poppins';
  font-size: 20px;
  border:none;
  color:white;
  background-color:#222257 ;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor:pointer;
  position: absolute;
  top: 20px;
  right: 40px;
   
  margin: 15px;
   
  &:hover{
    background-color:#5944c9;
    transition: 0.4s;
  }
`

const TextoTitulo = styled.h1`
font-family: 'Poppins';
color: #ffffff;
font-size: 50px;
font-weight: 900;
margin-top: 50px;
text-align: center;
margin-right: 150px;
`

const TextoMenor = styled.h1`
font-family: 'Poppins';
font-weight: 600;
font-size: 25px;
color: #ffffff;
text-align: center;
margin-right: 150px;
`
const Container = styled.div`
height: 100vh;
width: 100%;
background-color: black;
display: flex;
justify-content: center;
flex-direction: column ;

span {
color: #5944c9;
}

`
const TextoConteudo = styled.h1`
font-family: 'Poppins';
color: #ffffff;
font-size: 50px;
font-weight: 900;
margin: 30px 10px 10px 10px;
text-align: center;
`

const TextoConteudoMenor = styled.h1`
font-family: 'Poppins';
font-weight: 600;
font-size: 25px;
color: #ffffff;
text-align: center;
`

const Section = styled.div`
width: 100%;
height: 60vh;
display: flex;
align-items: center;
justify-content: space-between;


h1 {
    color: #5944c9
}
`
const Info = styled.div`
width: 20%;
height: 40vh;
margin: 60px 20px 20px 20px;
text-align: center;
font-family: 'Ubuntu';
color: white;
`

const NewSection = styled.div`
height: 100vh;
width: 100%;
background-color: black;
display: flex;
flex-direction: column ;
padding: 30px;

h1 {
  /* position: relative;
  top: 0px; */
  font-family: 'Poppins';
  color: #5944c9;
  font-size: 50px;
  font-weight: 900;
  text-align: center;
}

h3{
  font-family: 'Poppins';
  font-weight: 600;
  font-size: 25px;
  color: #ffffff;
  text-align: center;
}

h5 {
 font-family: 'Poppins';
  font-weight: 300;
  font-size: 20px;
  color: #ffffff;
  text-align: center;
}

`

const CaixaComentarios = styled.div`
width: 100%;
height: 50vh;
display: flex;
justify-content: center;
align-items: center;
margin-top: 50px ;
`
const Comentarios = styled.div`
width: 25%;
height: 45vh;
background-color: #25282c73;
margin: 0px 20px 50px 20px;
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
align-items: center;
font-family: "Inter";
font-weight: 200;

h3{ 
   color: #9ca9b3;
   font-weight: 400;
   font-size: 1.4vw;
   
}
`
const Footer = styled.div`
    width: 100%;
    height: 10vh;
    background: #000000;
    text-align: center;
    color: #f4f4f4;
`


export { HomeDiv, Header, ButtonLogin, TextoTitulo, TextoMenor, 
        RyzeAnime, Container, TextoConteudo, TextoConteudoMenor, Section, Info, NewSection,
        CaixaComentarios, Comentarios, Footer };