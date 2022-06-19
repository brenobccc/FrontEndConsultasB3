import { React, useState, useEffect } from 'react';
import styled from "styled-components";
import DivGrafico from '../Graficos/DivGrafico';
import GraficoVazio from '../Graficos/GraficoVazio'
// import InputForAny from './InputForAny'
import Select from 'react-select'
import axios from "axios";

const Div = styled.div`
padding: 0 16px 40px 16px;
margin-bottom: 40px;
min-height: 1000px;
max-width: 1500px;
display: flex;
flex-direction: column;
box-sizing: border-box;
background: rgba(12, 36, 16, 0.13);
width: 80%;

    border-radius: 15px;

    & h2{
        margin-bottom: 0;
        color: white;
    }


    @media (min-width:0px) and (max-width: 819px){
        width: 98%;
        & h2{
            font-size:18px;
        }
    }
    @media (min-width:820px) and (max-width: 1200px){

        width: 90%;
    }
}



`;

const DivForm = styled.div`
width: 100%;
background: rgba(255, 246, 246, 0.24);
border-radius: 20px;
display: flex;
justify-content: space-between;
box-sizing: border-box;
#box1{
    width: 50%;
    height: 100%;
    box-sizing: border-box;
    padding: 15px;
}

#box2{
    margin: 10px;
    width: 50%;
}

@media (max-width: 575px){
    border-radius: 5px;
    #box1{
        padding: 10px;
        width: 40%;
        font-size: 11px;
    }

    #box2{
        width: 60%;
        margin: 5px;
    }
    
}
`;


// function preencher(){
//     console.log("teste")
// }
const DivF = styled.div`
background: orange;
width: 50%;
`;

const FormRow = styled.div`
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
    height: 40px;
    & #data_inicial,& #data_final, & button{
        border: 1px solid white;
        border-radius: 2px;
        text-align: center;
        font-size: 15px;
        width: 32%;
     
        
    }

    & #data_inicial,& #data_final{
        text-transform: uppercase;
    }

    & button{
        background-color: #F59E4E;

        border: 0 solid black; 
        border-radius: 5px;
        transition: background-color 1s ;
        cursor: pointer;
    }

    & button:hover{

        border: 0 solid black; 
        background-color: #B76B26;
   
    }

    @media (max-width: 575px){
        & button, & #data_inicial,& #data_final{
            font-size: 10px;
        }
        
    }


`


export default function Content(props) {
    const [options, setOptions] = useState([]);

    const [data_ini, setDataIni] = useState('');
    const [data_fim, setDataFim] = useState('');
    const [ativo, setAtivo] = useState('');
    const [ativoAnt, setAtivoAnt] = useState('');

    const [controll, setControll] = useState(true)
    const [selectedOptions, setSelectedOptions] = useState([]);
    let listOptions = []

    useEffect(() => {
        axios.get('http://localhost:8080/nomes_ativos').then((response) => {
            setOptions(response.data);
        });

    }, [])

    useEffect((ativo) => {
        console.log("mudou")
    })

    useEffect(() => {
        console.log("valor atualizado:" + JSON.stringify(selectedOptions));

        let list = []
        selectedOptions.map((el) => {
            list.push(el.value)
        })
        listOptions = list;
        console.log("v:" + listOptions);

    })


    return (
        <Div>
            <h2>Realizar Consultas de Ativos da Bolsa de Valores </h2>
            <DivForm>
                <div id="box1">
                    Deseja consultar um ativo e suas devidas informações? Informe abaixo a Data inicial, a Data final, e o(s) ativo(s) desejados.
                </div>
                <div id="box2">
                    <Select isMulti onChange={(item) => setSelectedOptions(item)} options={options} placeholder="Escolha os ativos" />
                    <FormRow>

                        <input type="date" id="data_inicial"></input>
                        <input type="date" id="data_final"></input>

                        <button onClick={() => {
                            setDataIni(document.getElementById("data_inicial").value);
                            setDataFim(document.getElementById("data_final").value);

                            //setAtivoAnt(listOptions.join(';'));
                            setAtivo(listOptions.join(';'));

                            // listOptions

                            //    if(controll){
                            //         setControll(true);
                            //    }


                        }}>
                            Consultar
                        </button>

                        {/* 
                    <input type="text" id="ativo"></input> */}
                    </FormRow>
                </div>

            </DivForm>
            {console.log("Data inicial:" + data_ini)}

            {controll == true ?
                (ativo !== "" && data_ini !== "" && data_fim !== "" ? (<DivGrafico dtIni={data_ini} dtFim={data_fim} ativos={ativo} />) : <GraficoVazio dataIni={data_ini} dataFim={data_fim} ativos={ativo} />) : ""}
            {/* { controll == true ? setControll(false) : setControll(false)} */}
        </Div>
    )
}


