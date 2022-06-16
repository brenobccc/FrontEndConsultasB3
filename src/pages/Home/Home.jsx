
import React from "react";
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer';
import Body from "../../components/Body/Body";
import './HomeStyle.css';
function Home() {
  return (
    <div className="App">

      <Header />
      <Body />
      <Footer />
      {/* <Grafico nomeAtivo="VALE3.SAO;PETR4.SAO;R1H.FRK;IBM"/>
        <Grafico nomeAtivo="VALE3.SAO;PETR4.SAO;R1H.FRK;IBM"/> */}


    </div>
  );
}

export default Home;