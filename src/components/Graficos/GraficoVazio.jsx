import React from 'react';
import styled from "styled-components";
import imagem from "../../assets/vazio.png"

const Div = styled.div`
width:80%;
height: 390px;
margin-top:30px;
box-sizing: border-box;
border-radius: 15px;
& img{
    background:white;
    width: 100%;
    height: 100%;
    image-size: hidden;
}
`


export default () => {
    return <Div>
        <img src={imagem}/>
    </Div>
}