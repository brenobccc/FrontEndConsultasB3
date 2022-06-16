import { React, useState, useEffect } from 'react';
import styled from "styled-components";
import DivGrafico from './DivGrafico';
import GraficoVazio from './GraficoVazio'   
// import InputForAny from './InputForAny'
import Select from 'react-select'

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
const DivF = styled.div`
background: orange;
width: 50%;
`;


const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'test', label: 'teste1'},
    { value: 'test2', label: 'teste2'},
    { value: 'test3', label: 'teste3'},
    { value: 'test4', label: 'teste4'},
]

export default function Content(props) {
    const [data_ini, setDataIni] = useState('');
    const [data_fim, setDataFim] = useState('');
    const [ativo, setAtivo] = useState('');
    const [ativoAnt, setAtivoAnt] = useState('');

    const [controll, setControll] = useState(true)
    const [selectedOptions, setSelectedOptions] = useState([]);
    useEffect((ativo) => {
        console.log("mudou")
    })

    useEffect(() => {
        console.log("valor atualizado:"+JSON.stringify(selectedOptions));
    })


    return (
        <Div>
            <h2>Realizar Consultas de Ativos da Bolsa de Valores </h2>
            <DivForm>
                <input type="date" id="data_inicial"></input>
                <input type="date" id="data_final"></input>

                <DivF>
                <Select isMulti onChange={(item)=> setSelectedOptions(item)} options={options}/>
                </DivF>
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


