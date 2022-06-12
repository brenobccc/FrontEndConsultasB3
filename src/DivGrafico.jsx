import React from 'react';
import styled from "styled-components";
import Grafico from './Grafico';
import GraficoVazio from './GraficoVazio';

const Div = styled.div`
   

    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    & h3{
        margin-top: 15;
    }
`


export default function DivGrafico(props) {

//let dtIni = '01/04/2021', dtFim = '01/05/2022', ativos = 'Petrobrás';
    // let dtIni ='', dtFim = '', ativos = '';
    

    return (
        <Div>
            <div>
                <div id="grafico-form">
                 {(props.dtIni === undefined || props.dtFim ===undefined || props.ativos === undefined) ? <h3 style={{height: 30}}></h3> : <h3>A consulta entre o Período de {props.dtIni} até {props.dtFim}</h3> }
                </div>
            </div>
            <div id="grafico-content">

                {
                    (props.dtIni === undefined || props.dtFim ===undefined || props.ativos === undefined) ? <GraficoVazio/> : <Grafico nomeAtivo = {props.ativos}/> 
                }

            </div>
        </Div>
    )
}