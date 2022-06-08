
  import React from "react";
  import Grafico from './Grafico';
   
  function App() {
    // useEffect(() => {
    // }, []);
    return (
      <div className="App">
        <Grafico nomeAtivo="VALE3.SAO;PETR4.SAO;R1H.FRK;IBM"/>
      </div>
    );
  }
   
  export default App;