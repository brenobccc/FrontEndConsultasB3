import React from 'react';
import {HeaderDiv,Div, Logo, Menu} from './HeaderStyle'

export default function Header(props) {
    return (
        <HeaderDiv>

            <Div>
                <Logo>test</Logo>
                <Menu>
                    <li> Início </li>
                    <li> Sobre </li>
                </Menu>
            </Div>


        </HeaderDiv>)

}