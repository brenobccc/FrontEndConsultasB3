import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from "chart.js";

import Loading from './Loading'
import { Line } from 'react-chartjs-2';
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Div = styled.div`

background: white;
padding-left: 15px;
box-sizing: border-box;
border-radius: 15px;
// max-width: 1000px;
// max-height: 500px;

@media (min-width: 900px) and (max-width: 1200px){
    background-color: white;
    
}
`



ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);



  
 


export default (props) => {

    // function FormataStringData(data) {
    //     var dia  = data.split("/")[0];
    //     var mes  = data.split("/")[1];
    //     var ano  = data.split("/")[2];
      
    //     return ano + '-' + ("0"+mes).slice(-2) + '-' + ("0"+dia).slice(-2);
    //     // Utilizo o .slice(-2) para garantir o formato com 2 digitos.
    //   }
      
    const [removeLoading, setRemoveLoading] = useState(false)
    // const url = "http://localhost:3000/teste?ativo=VALE3.SAO&data_inicial=2019-01-04&data_final=2020-02-26";
    const nomeAtivo = props.nomeAtivo;
    let dataIni = props.dataIni;
    let dataFim = props.dataFim;

    console.log("nome atual:"+nomeAtivo);
    console.log("dataIni"+dataIni)
    const url = `http://localhost:3000/teste?ativo=${nomeAtivo}&data_inicial=${dataIni}&data_final=${dataFim}`
    const [dados, setDados] = useState();
    const [chartData, setChartData] = useState({
        datasets: [],
    });

    const lista_de_cores = [
        'rgb(181, 101, 167)',
        'rgb(221, 65, 36)', 
        'rgb(136, 176, 75)', 
        'rgb(146, 168, 209)', 
        'rgb(255, 77, 0)',
        'rgb(31, 87, 56)'
    ]
    

    const [chartOptions, setChartOptions] = useState({});

    const [datsets, setDatasets] = useState([]);

    const dt = {
        label: 'Gráfico Teste',
        backgroundColor: '',
        borderColor: '',
        borderWidth: 1.5,
        data: [],// fill: 
        //     target: 'origin',
        //     above: 'red',   // Area will be red above the origin
        //     below: 'red'    // And blue below the origin
        // },
        tension: 0.4,
        //pointStyle: 'rectRot'
        pointStyle: 'circle',
        pointRadius: 0,
        hoverPointRadius: 0

    }


    const l = ['origin', '-1', '1','-2']
    // const fi = [
    //     {fill: 'origin'},   // 0: fill to 'origin'
    //     {fill: '-1'},       // 1: fill to dataset 0
    //     {fill: 1},          // 2: fill to dataset 1
    //     {fill: false},      // 3: no fill
    //     {fill: '-2'}        // 4: fill to dataset 2
    // ]

    useEffect((nomeAtivo, dataIni, dataFim) => {
        setRemoveLoading(false)
        axios.get(url).then((response) => {
            setDados(response.data);

            let lista = []

             for (let dads = 0, i = 0, j=0; dads < response.data.lista_ativosb3.length; dads++, i++, j++) {
                // let objData = dt.data;
                // console.log(" teste \n");
                // console.log("v:"+response.data.lista_ativosb3[dads].valores+"\n");

                // objData.data = response.data.lista_ativosb3[dads].valores;
                // console.log("depois:"+objData+"\n");
                lista.push({
                    label: response.data.lista_ativosb3[dads].ativo,
                    backgroundColor: lista_de_cores[dads],
                    borderColor: lista_de_cores[i],
                    borderWidth: 1.5,
                    data: response.data.lista_ativosb3[dads].valores,
                

                    
    // const fi = [
    //     {fill: 'origin'},   // 0: fill to 'origin'
    //     {fill: '-1'},       // 1: fill to dataset 0
    //     {fill: 1},          // 2: fill to dataset 1
    //     {fill: false},      // 3: no fill
    //     {fill: '-2'}        // 4: fill to dataset 2
    // ]
                    //     target: 'origin',
                    //     above: 'red',   // Area will be red above the origin
                    //     below: 'red'    // And blue below the origin
                    // },
                    tension: 0.4,
                    //pointStyle: 'rectRot'
                    pointStyle: 'circle',
                    pointRadius: 0,
                    hoverPointRadius: 0,
                    

                });
            }
            // for (let ds in dados) {

            //     console.log("aq: "+ds);
            //     //lista.push(dt.data,);

            // }

            setDatasets(lista);
            console.log(lista)
            //console.log(lista);


            setChartData({
                labels: response.data.list_datas_genericas,
                datasets: lista,
            });
            

            setChartOptions({
                // maintainAspectRatio: false,
                responsive: true,
                plugins: {
                    legend: {
                        position: "top",
                    },
                    title: {
                        display: true,
                        text: "Consulta de Ativos da Bolsa de Valores",
                    },
                },
            });


            
        }).then(()=>{setRemoveLoading(true);})
          
        

    },[nomeAtivo, dataIni, dataFim ]);


    return (
       
       
        <Div style={{fontSize: '14px' }} >
             {!removeLoading ? <Loading/> : <Line id="grafico-linha" options={chartOptions} data={chartData} />}
        </Div>)
}