import { React, useState, useEffect } from 'react';
import styled from "styled-components";
import DivGrafico from './DivGrafico';
import GraficoVazio from './GraficoVazio'


const Div = styled.div`
padding: 0 16px;
display: flex;
flex-direction: column;
box-sizing: border-box;
background: rgba(12, 36, 16, 0.13);
width: 70%;
    height: 753px;
    border-radius: 15px;

    & h2{
        margin-bottom: 0;
        color: white;
    }
`;

const DivForm = styled.div`
width: 100%;
height: 20%;
background: rgba(255, 246, 246, 0.24);
border-radius: 20px;
`;


// function preencher(){
//     console.log("teste")
// }

export default function Content(props) {
    const [data_ini, setDataIni] = useState('');
    const [data_fim, setDataFim] = useState('');
    const [ativo, setAtivo] = useState('');
    const [ativoAnt, setAtivoAnt] = useState('');

    const [controll, setControll] = useState(true)
    const [controll2, setControll2] = useState(false)

    useEffect((ativo) => {
        console.log("mudou")
    })


    return (
        <Div>
            <h2>Realizar Consultas de Ativos da Bolsa de Valores </h2>
            <DivForm>
                <input type="date" id="data_inicial"></input>
                <input type="date" id="data_final"></input>
                <input type="text" id="ativo"></input>
                <button onClick={() => {
                    setDataIni(document.getElementById("data_inicial").value);
                    setDataFim(document.getElementById("data_final").value);

                    setAtivoAnt(ativo);
                    setAtivo(document.getElementById("ativo").value);


                    //    if(controll){
                    //         setControll(true);
                    //    }
                }}>
                    enviar
                </button>
            </DivForm>
            {console.log("Data inicial:" + data_ini)}

            {controll == true ?
                (ativo != "" ? (<DivGrafico dtIni={data_ini} dtFim={data_fim} ativos={ativo} />) : <GraficoVazio />) : ""}
            {/* { controll == true ? setControll(false) : setControll(false)} */}


        </Div>
    )
}


