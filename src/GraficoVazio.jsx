import React from 'react';
import styled from "styled-components";
import imagem from './vazio.png'


const Div = styled.div`
width:100%;
height: 390px;
margin-top:30px;
box-sizing: border-box;
border-radius: 15px;
& img{
    background:white;
    width: 80%;
    height: 100%;
    border-radius: 35px;
}
`


export default () => {
    return <Div>
        <img src={imagem}/>
    </Div>
}