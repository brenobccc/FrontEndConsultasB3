import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";


import { Line } from 'react-chartjs-2';
import React, { useState, useEffect } from "react";
import axios from "axios";


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


export default (props) => {

    // const url = "http://localhost:3000/teste?ativo=VALE3.SAO&data_inicial=2019-01-04&data_final=2020-02-26";
    const nomeAtivo = props.nomeAtivo;

    console.log(nomeAtivo)
    const url = `http://localhost:3000/teste?ativo=${nomeAtivo}&data_inicial=2019-01-04&data_final=2020-02-26`
    const [dados, setDados] = useState();
    const [chartData, setChartData] = useState({
        datasets: [],
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        axios.get(url).then((response) => {
            setDados(response.data);


            setChartData({
                //labels: ["John", "Kevin", "Geroge", "Micheal", "Oreo"],
              
                datasets: [
                    {
                        label: nomeAtivo,
                        //data: [12, 55, 34, 120, 720],
                        data: response.data,
                        borderColor: "rgb(53, 162, 235)",
                        backgroundColor: "rgba(255,99,132,0,2)",
                        tension: 0, 
                        //pointStyle: 'rectRot'
                        pointStyle: 'circle',
                        pointRadius: 0,
                        hoverPointRadius: 0,
                        borderWidth: 0.9,
                        fill: true
                      
                    },
                ],
            });

            
            setChartOptions({
                // maintainAspectRatio: false,
                responsive: false,
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
        })

    }, []);


    return (<div>
        <h1>Dados logo abaixo</h1>
        {/* {JSON.stringify(dados)} */}
        <div style={{ width: '780px', height: '300px', fontSize: '14px' }} >
            <Line options={chartOptions} data={chartData}/>
        </div>
    </div >)
}