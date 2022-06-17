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


// const options = [
//     {
//         "value": "ADHMY",
//         "label": "(ADHMY) Advanced Digital Health Medicina Preventiva SA "
//     },
//     {
//         "value": "AERI3.SAO",
//         "label": "(AERI3.SAO) Aeris Industria E ComerciodeEquipamentos paraGeracaodeEnergiaS.A "
//     },
//     {
//         "value": "AESB3.SAO",
//         "label": "(AESB3.SAO) AES Brasil Energia SA "
//     },
//     {
//         "value": "AFLT3.SAO",
//         "label": "(AFLT3.SAO) Afluente Transmissao De Energia Eletrica SA "
//     },
//     {
//         "value": "AGXY3.SAO",
//         "label": "(AGXY3.SAO) Agrogalaxy Participacoes S.A. "
//     },
//     {
//         "value": "RPAD6.SAO",
//         "label": "(RPAD6.SAO)undefined"
//     },
//     {
//         "value": "RPAD3.SAO",
//         "label": "(RPAD3.SAO)undefined"
//     },
//     {
//         "value": "RPAD5.SAO",
//         "label": "(RPAD5.SAO)undefined"
//     },
//     {
//         "value": "ALLD3.SAO",
//         "label": "(ALLD3.SAO) Allied Tecnologia SA "
//     },
//     {
//         "value": "ALPK3.SAO",
//         "label": "(ALPK3.SAO) Allpark Empreendimentos Participacoes Servicos S.A. "
//     },
//     {
//         "value": "APER3.SAO",
//         "label": "(APER3.SAO) Alper Consultoria E Corretora De Seguros S.A. "
//     },
//     {
//         "value": "AVLL3.SAO",
//         "label": "(AVLL3.SAO) Alphaville SA "
//     },
//     {
//         "value": "ALUP3.SAO",
//         "label": "(ALUP3.SAO) Alupar Unt N2 "
//     },
//     {
//         "value": "ALUP4.SAO",
//         "label": "(ALUP4.SAO) Alupar Unt N2 "
//     },
//     {
//         "value": "ABEV3.SAO",
//         "label": "(ABEV3.SAO) Ambev SA "
//     },
//     {
//         "value": "AMBP3.SAO",
//         "label": "(AMBP3.SAO) Ambipar Participacoes e Empreendimentos SA "
//     },
//     {
//         "value": "AMER3.SAO",
//         "label": "(AMER3.SAO) Americanas SA "
//     },
//     {
//         "value": "ANIM3.SAO",
//         "label": "(ANIM3.SAO) Anima Holding S.A. "
//     },
//     {
//         "value": "ARZZ3.SAO",
//         "label": "(ARZZ3.SAO) Arezzo Industria E Comercio S.A. "
//     },
//     {
//         "value": "ARML3.SAO",
//         "label": "(ARML3.SAO) Armac Locacao Logistica e Servicos SA "
//     },
//     {
//         "value": "ATMP3.SAO",
//         "label": "(ATMP3.SAO) ATMA Participacoes S.A. "
//     },
//     {
//         "value": "ATOM3.SAO",
//         "label": "(ATOM3.SAO) Atom Empreendimentos e Participacoes SA "
//     },
//     {
//         "value": "AZEV3.SAO",
//         "label": "(AZEV3.SAO) Azevedo Travassos Sa "
//     },
//     {
//         "value": "AZEV4.SAO",
//         "label": "(AZEV4.SAO) Azevedo Travassos Sa "
//     },
//     {
//         "value": "AZUL4.SAO",
//         "label": "(AZUL4.SAO) AZUL SA "
//     },
//     {
//         "value": "B3SA3.SAO",
//         "label": "(B3SA3.SAO) B3 SA - Brasil Bolsa Balcao "
//     },
//     {
//         "value": "BAHI3.SAO",
//         "label": "(BAHI3.SAO) Bahema Sa "
//     },
//     {
//         "value": "BMGB4.SAO",
//         "label": "(BMGB4.SAO) Banco BMG S.A. "
//     },
//     {
//         "value": "BPAC5.SAO",
//         "label": "(BPAC5.SAO) Banco BTG Pactual S.A. "
//     },
//     {
//         "value": "BPAC3.SAO",
//         "label": "(BPAC3.SAO) Banco BTG Pactual S.A. "
//     },
//     {
//         "value": "BBAS3.SAO",
//         "label": "(BBAS3.SAO) Banco do Brasil SA "
//     },
//     {
//         "value": "BIDI1.SAO",
//         "label": "(BIDI1.SAO) Banco Inter SA "
//     },
//     {
//         "value": "BIDI3.SAO",
//         "label": "(BIDI3.SAO) Banco Inter SA "
//     },
//     {
//         "value": "BIDI4.SAO",
//         "label": "(BIDI4.SAO) Banco Inter SA "
//     },
//     {
//         "value": "BPAN4.SAO",
//         "label": "(BPAN4.SAO) Banco Pan "
//     },
//     {
//         "value": "PINE4.SAO",
//         "label": "(PINE4.SAO) Banco Pine SA "
//     },
//     {
//         "value": "SANB3.SAO",
//         "label": "(SANB3.SAO) Banco Santander Brasil SA "
//     },
//     {
//         "value": "SANB4.SAO",
//         "label": "(SANB4.SAO) Banco Santander Brasil SA "
//     },
//     {
//         "value": "BEES3.SAO",
//         "label": "(BEES3.SAO) Banestes Sa Bco Estado Espirito Santo "
//     },
//     {
//         "value": "BEES4.SAO",
//         "label": "(BEES4.SAO) Banestes Sa Bco Estado Espirito Santo "
//     },
//     {
//         "value": "BDLL4.SAO",
//         "label": "(BDLL4.SAO) Bardella Sa Inds Mecanicas "
//     },
//     {
//         "value": "BALM4.SAO",
//         "label": "(BALM4.SAO) Baumer Sa "
//     },
//     {
//         "value": "BBSE3.SAO",
//         "label": "(BBSE3.SAO) Bbseguridade On NM "
//     },
//     {
//         "value": "ABCB4.SAO",
//         "label": "(ABCB4.SAO) Bco Abc Brasil Sa "
//     },
//     {
//         "value": "BRIV4.SAO",
//         "label": "(BRIV4.SAO)undefined"
//     },
//     {
//         "value": "BRIV3.SAO",
//         "label": "(BRIV3.SAO)undefined"
//     },
//     {
//         "value": "BAZA3.SAO",
//         "label": "(BAZA3.SAO) Bco Amazonia Sa "
//     },
//     {
//         "value": "BBDC4.SAO",
//         "label": "(BBDC4.SAO) Bco Bradesco Sa "
//     },
//     {
//         "value": "BBDC3.SAO",
//         "label": "(BBDC3.SAO) Bco Bradesco Sa "
//     },
//     {
//         "value": "BRSR5.SAO",
//         "label": "(BRSR5.SAO) Bco Estado Rio Grande Sul Sa "
//     },
//     {
//         "value": "BRSR6.SAO",
//         "label": "(BRSR6.SAO) Bco Estado Rio Grande Sul Sa "
//     },
//     {
//         "value": "BRSR3.SAO",
//         "label": "(BRSR3.SAO) Bco Estado Rio Grande Sul Sa "
//     },
//     {
//         "value": "BGIP4.SAO",
//         "label": "(BGIP4.SAO) Bco Estado Sergipe Sa Banese "
//     },
//     {
//         "value": "BGIP3.SAO",
//         "label": "(BGIP3.SAO) Bco Estado Sergipe Sa Banese "
//     },
//     {
//         "value": "BMEB4.SAO",
//         "label": "(BMEB4.SAO) Bco Mercantil Brasil Sa "
//     },
//     {
//         "value": "BMEB3.SAO",
//         "label": "(BMEB3.SAO) Bco Mercantil Brasil Sa "
//     },
//     {
//         "value": "BMIN3.SAO",
//         "label": "(BMIN3.SAO) Bco Mercantil Invests Sa "
//     },
//     {
//         "value": "BMIN4.SAO",
//         "label": "(BMIN4.SAO) Bco Mercantil Invests Sa "
//     },
//     {
//         "value": "MODL4.SAO",
//         "label": "(MODL4.SAO) Bco Modal Sa "
//     },
//     {
//         "value": "MODL3.SAO",
//         "label": "(MODL3.SAO) Bco Modal Sa "
//     },
//     {
//         "value": "BNBR3.SAO",
//         "label": "(BNBR3.SAO) Bco Nordeste Brasil Sa "
//     },
//     {
//         "value": "BMOB3.SAO",
//         "label": "(BMOB3.SAO) Bemobi Tech S.A. "
//     },
//     {
//         "value": "BMKS3.SAO",
//         "label": "(BMKS3.SAO) Bicicletas Monark Sa "
//     },
//     {
//         "value": "BIOM3.SAO",
//         "label": "(BIOM3.SAO) Biomm SA "
//     },
//     {
//         "value": "BKBR3.SAO",
//         "label": "(BKBR3.SAO) BK Brasil Operacao E Assessoria A Restaurantes S.A. "
//     },
//     {
//         "value": "BLAU3.SAO",
//         "label": "(BLAU3.SAO) Blau Farmaceutica SA "
//     },
//     {
//         "value": "BLUT4.SAO",
//         "label": "(BLUT4.SAO) Blue Tech Solutions EQI SA "
//     },
//     {
//         "value": "BLUT3.SAO",
//         "label": "(BLUT3.SAO) Blue Tech Solutions EQI SA "
//     },
//     {
//         "value": "SOJA3.SAO",
//         "label": "(SOJA3.SAO) Boa Safra Sementes S.A. "
//     },
//     {
//         "value": "BOAS3.SAO",
//         "label": "(BOAS3.SAO) Boa Vista "
//     },
//     {
//         "value": "BOBR4.SAO",
//         "label": "(BOBR4.SAO)undefined"
//     },
//     {
//         "value": "BRML3.SAO",
//         "label": "(BRML3.SAO) Br Malls Participacoes Sa "
//     },
//     {
//         "value": "BRPR3.SAO",
//         "label": "(BRPR3.SAO) Br Properties Sa "
//     },
//     {
//         "value": "BRAP3.SAO",
//         "label": "(BRAP3.SAO) Bradespar Sa "
//     },
//     {
//         "value": "AGRO3.SAO",
//         "label": "(AGRO3.SAO) Brasilagro Cia Bras Propriedades Agricolas "
//     },
//     {
//         "value": "BRKM5.SAO",
//         "label": "(BRKM5.SAO) Braskem Sa "
//     },
//     {
//         "value": "BRKM6.SAO",
//         "label": "(BRKM6.SAO) Braskem Sa "
//     },
//     {
//         "value": "BRKM3.SAO",
//         "label": "(BRKM3.SAO) Braskem Sa "
//     },
//     {
//         "value": "BRFS3.SAO",
//         "label": "(BRFS3.SAO) BRF Sa "
//     },
//     {
//         "value": "BRIT3.SAO",
//         "label": "(BRIT3.SAO) Brisanet Participacoes S.A. "
//     },
//     {
//         "value": "CEAB3.SAO",
//         "label": "(CEAB3.SAO) C &amp; A Modas S.A. "
//     },
//     {
//         "value": "CXSE3.SAO",
//         "label": "(CXSE3.SAO) Caixa Seguridade Participacoes S.A. "
//     },
//     {
//         "value": "CAMB4",
//         "label": "(CAMB4) Cambuci Sa "
//     },
//     {
//         "value": "CAMB3.SAO",
//         "label": "(CAMB3.SAO) Cambuci Sa "
//     },
//     {
//         "value": "CAML3.SAO",
//         "label": "(CAML3.SAO) Camil Alimentos, S.A. "
//     },
//     {
//         "value": "CRFB3.SAO",
//         "label": "(CRFB3.SAO) Carrefour Bron "
//     },
//     {
//         "value": "CCRO3.SAO",
//         "label": "(CCRO3.SAO) CCR SA "
//     },
//     {
//         "value": "EQMA3B.SAO",
//         "label": "(EQMA3B.SAO) Cemar-Cia Energetica Do Maranhao "
//     },
//     {
//         "value": "MAPT4.SAO",
//         "label": "(MAPT4.SAO) Cemepe Invests Sa "
//     },
//     {
//         "value": "CCNO5L",
//         "label": "(CCNO5L) Ceno Norte Pna "
//     },
//     {
//         "value": "CTNR11L",
//         "label": "(CTNR11L) Centenor Empreendimentos Sa "
//     },
//     {
//         "value": "ELET11",
//         "label": "(ELET11) Centrais Eletricas Brasileiras SA "
//     },
//     {
//         "value": "ELET6.SAO",
//         "label": "(ELET6.SAO) Centrais Eletricas Brasileiras SA "
//     },
//     {
//         "value": "ELET3.SAO",
//         "label": "(ELET3.SAO) Centrais Eletricas Brasileiras SA "
//     },
//     {
//         "value": "CLSC4.SAO",
//         "label": "(CLSC4.SAO) Centrais Eletricas Santa Catarina Sa "
//     },
//     {
//         "value": "AALR3.SAO",
//         "label": "(AALR3.SAO) Centro De Image Diagnosticos S.A. "
//     },
//     {
//         "value": "PCAR3.SAO",
//         "label": "(PCAR3.SAO) Cia Brasileira Distribuicao "
//     },
//     {
//         "value": "CEEB3.SAO",
//         "label": "(CEEB3.SAO) Cia Eletricidade Estado Bahia Coelba "
//     },
//     {
//         "value": "CEEB5.SAO",
//         "label": "(CEEB5.SAO) Cia Eletricidade Estado Bahia Coelba "
//     },
//     {
//         "value": "CEBR6.SAO",
//         "label": "(CEBR6.SAO) Cia Energetica Brasilia "
//     },
//     {
//         "value": "CEBR5.SAO",
//         "label": "(CEBR5.SAO) Cia Energetica Brasilia "
//     },
//     {
//         "value": "CEBR3.SAO",
//         "label": "(CEBR3.SAO) Cia Energetica Brasilia "
//     },
//     {
//         "value": "COCE5.SAO",
//         "label": "(COCE5.SAO) Cia Energetica Ceara Coelce "
//     },
//     {
//         "value": "COCE3.SAO",
//         "label": "(COCE3.SAO) Cia Energetica Ceara Coelce "
//     },
//     {
//         "value": "CMIG4.SAO",
//         "label": "(CMIG4.SAO) Cia Energetica Minas Gerais Cemig "
//     },
//     {
//         "value": "CMIG3.SAO",
//         "label": "(CMIG3.SAO) Cia Energetica Minas Gerais Cemig "
//     },
//     {
//         "value": "CEPE6.SAO",
//         "label": "(CEPE6.SAO) Cia Energetica Pernambuco Celpe "
//     },
//     {
//         "value": "CEPE5.SAO",
//         "label": "(CEPE5.SAO) Cia Energetica Pernambuco Celpe "
//     },
//     {
//         "value": "CSRN3.SAO",
//         "label": "(CSRN3.SAO) Cia Energetica Rio Grande Norte Cosern "
//     },
//     {
//         "value": "CSRN5.SAO",
//         "label": "(CSRN5.SAO) Cia Energetica Rio Grande Norte Cosern "
//     },
//     {
//         "value": "CSRN6.SAO",
//         "label": "(CSRN6.SAO) Cia Energetica Rio Grande Norte Cosern "
//     },
//     {
//         "value": "CEED4.SAO",
//         "label": "(CEED4.SAO) Cia Estadual Distribuicao Energia Eletrica Ceee-d "
//     },
//     {
//         "value": "FESA4.SAO",
//         "label": "(FESA4.SAO) Cia Ferro Ligas Bahia Ferbasa "
//     },
//     {
//         "value": "FESA3.SAO",
//         "label": "(FESA3.SAO) Cia Ferro Ligas Bahia Ferbasa "
//     },
//     {
//         "value": "CEDO4.SAO",
//         "label": "(CEDO4.SAO) Cia Fiacao Tecidos Cedro Cachoeira "
//     },
//     {
//         "value": "CGAS5.SAO",
//         "label": "(CGAS5.SAO) Cia Gas Sao Paulo Comgas "
//     },
//     {
//         "value": "CGAS3.SAO",
//         "label": "(CGAS3.SAO) Cia Gas Sao Paulo Comgas "
//     },
//     {
//         "value": "HBTS5.SAO",
//         "label": "(HBTS5.SAO) Cia Habitasul Participacoes "
//     },
//     {
//         "value": "LCAM3.SAO",
//         "label": "(LCAM3.SAO) Cia Locacao Das Americas "
//     },
//     {
//         "value": "MSPA3.SAO",
//         "label": "(MSPA3.SAO) Cia Melhoramentos Sao Paulo "
//     },
//     {
//         "value": "CPLE3.SAO",
//         "label": "(CPLE3.SAO) Cia Paranaense Energia Copel "
//     },
//     {
//         "value": "CPLE5.SAO",
//         "label": "(CPLE5.SAO) Cia Paranaense Energia Copel "
//     },
//     {
//         "value": "CPLE6.SAO",
//         "label": "(CPLE6.SAO) Cia Paranaense Energia Copel "
//     },
//     {
//         "value": "SAPR3.SAO",
//         "label": "(SAPR3.SAO) Cia Saneamento Do Parana Sanepar "
//     },
//     {
//         "value": "SAPR4.SAO",
//         "label": "(SAPR4.SAO) Cia Saneamento Do Parana Sanepar "
//     },
//     {
//         "value": "CSMG3.SAO",
//         "label": "(CSMG3.SAO) Cia Saneamento Minas Gerais Copasa Mg "
//     },
//     {
//         "value": "CSAB4",
//         "label": "(CSAB4) Cia Seguros Alianca Bahia "
//     },
//     {
//         "value": "CSNA3.SAO",
//         "label": "(CSNA3.SAO) Cia Siderurgica Nacional "
//     },
//     {
//         "value": "CTNM4.SAO",
//         "label": "(CTNM4.SAO) Cia Tecidos Norte Minas Coteminas "
//     },
//     {
//         "value": "CTNM3.SAO",
//         "label": "(CTNM3.SAO) Cia Tecidos Norte Minas Coteminas "
//     },
//     {
//         "value": "CTSA3.SAO",
//         "label": "(CTSA3.SAO) Cia Tecidos Santanense "
//     },
//     {
//         "value": "CTSA4.SAO",
//         "label": "(CTSA4.SAO) Cia Tecidos Santanense "
//     },
//     {
//         "value": "TRPL4.SAO",
//         "label": "(TRPL4.SAO) Cia Transmissao Energia Eletrica Paulista "
//     },
//     {
//         "value": "TRPL3.SAO",
//         "label": "(TRPL3.SAO) Cia Transmissao Energia Eletrica Paulista "
//     }
// ]

export default function Content(props) {
    const [options, setOptions] = useState([]);

    const [data_ini, setDataIni] = useState('');
    const [data_fim, setDataFim] = useState('');
    const [ativo, setAtivo] = useState('');
    const [ativoAnt, setAtivoAnt] = useState('');

    const [controll, setControll] = useState(true)
    const [selectedOptions, setSelectedOptions] = useState([]);
    let listOptions = []

    useEffect(()=>{
        axios.get('http://localhost:3000/lista_ativos').then((response) => {
            setOptions(response.data);
            console.log('OI')
        });
        
    },[])

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
                    Deseja consultar um ativo e suas devidas informações? Informe abaixo a Data inicial, a Data final o(s) ativo(s) desejados.
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


