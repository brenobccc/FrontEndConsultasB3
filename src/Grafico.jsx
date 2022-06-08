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

    const [datsets, setDatasets] = useState([]);

    const dt = {
        label: 'Gráfico Teste',
        backgroundColor: 'rgb(211, 99, 132)',
        borderColor: 'rgb(211, 99, 132)',
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

    useEffect(() => {
        axios.get(url).then((response) => {
            setDados(response.data);

            let lista = []

            for(let dads = 0; dads < response.data.lista_ativosb3.length; dads++){
                // let objData = dt.data;
                // console.log(" teste \n");
                // console.log("v:"+response.data.lista_ativosb3[dads].valores+"\n");
                
                // objData.data = response.data.lista_ativosb3[dads].valores;
                // console.log("depois:"+objData+"\n");
                lista.push({
                    label: 'Gráfico Teste',
                    backgroundColor: 'rgb(211, 99, 132)',
                    borderColor: 'rgb(211, 99, 132)',
                    borderWidth: 1.5,
                    data: response.data.lista_ativosb3[dads].valores,// fill: 
                    //     target: 'origin',
                    //     above: 'red',   // Area will be red above the origin
                    //     below: 'red'    // And blue below the origin
                    // },
                    tension: 0.4,
                    //pointStyle: 'rectRot'
                    pointStyle: 'circle',
                    pointRadius: 0,
                    hoverPointRadius: 0
            
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
            <Line options={chartOptions} data={chartData} />
        </div>
    </div >)
}