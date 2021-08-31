import React from 'react';
import { HomeDiv } from './Home.styled';
import r1 from '../../assets/images/ryze-animation/teste.png';
import r2 from '../../assets/images/ryze-animation/teste2.jpg';

import './index.css';


export default function Home() {

    return (
        <HomeDiv>

            <h1>VAI TOMA NO CU</h1>

            <div className="ryze">
                <img src={r2} alt="" />
                <img src={r1} alt="" />

            </div>
        </HomeDiv>
    )

}