
  import React from "react";
  import Grafico from './Grafico';
  import Header from './Header';
  import Body from './Body';
  import Footer from './Footer';
  import './style.css'
import Content from "./Content";
   
  function App() {
    // useEffect(() => {
    // }, []);
    return (
      <div className="App">

        <Header/> 
        <Content/>
        <Footer/>
        {/* <Grafico nomeAtivo="VALE3.SAO;PETR4.SAO;R1H.FRK;IBM"/>
        <Grafico nomeAtivo="VALE3.SAO;PETR4.SAO;R1H.FRK;IBM"/> */}


      </div>
    );
  }
   
  export default App;