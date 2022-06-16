import styled from "styled-components";

export const HeaderDiv = styled.div`
    background: #57E27E;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin:0;
`;


export const Div = styled.div`
    // background: #57E27E;

    width: 98.5%;
    height: 75%;
    display: flex;
    justify-content: space-between;
`;

export const Logo = styled.div`
    background: black;
    width: 250px;
    heigth: 50px;
`

export const Menu = styled.div`
    width: 420px;
    heigth: 50px;

    display: flex;
    justify-content: space-between;
    

    & li{
        list-style: none;
        width: 200px;
        background: #020202;
        color: white;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    & li:hover{
        background: #319257;
    }
`






