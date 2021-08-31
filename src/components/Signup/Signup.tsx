import React from 'react';
import { ContainerSignUp, SignUpGlass, Title, Input, ConfirmButton } from './Signup.styled';


export default function Signup() {
    return (
        <ContainerSignUp>
            <div className="picture">
            </div>

            <SignUpGlass>

                <div className="cadastro">
                    Cadastro <i className="fas fa-user"></i>
                </div>

                <Title>Seja bem-vindo a Ryze, um app feito pra <br></br> <strong>te ajudar a subir de elo.</strong></Title>

                <div className="name">
                    <Input type="text" placeholder="NOME" />
                    <Input type="text" placeholder="SOBRENOME" />
                </div>

                <Input type="email" placeholder="E-MAIL" />
                <Input type="password" placeholder="SENHA" />

                <Input type="password" placeholder="DIGITE A SENHA NOVAMENTE" />


                <ConfirmButton>Criar Conta <i className="fas fa-user-plus"></i></ConfirmButton>
            </SignUpGlass>
        </ContainerSignUp>
    )
}