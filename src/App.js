import React, { Component } from 'react';

import './App.css';
import Creador from './creador/Creador.js';
import Visualizador from './visualizador/Visualizador.js';

const porValor = (ingresado,enviado) => ({
  [ingresado]:enviado
});

class App extends Component {

  constructor(){
    super();
    this.state=({
      tituloArticulo:'',
      cuerpoArticulo:'',
      referenciaArticulo:'',
      urlArticulo:'',
      colorTituloArticulo:'',
      tamanoTituloArticulo:'',
      fuenteTituloArticulo:'',
      vista:'Desktop',
      className:'container'
    });
    this.getData = this.getData.bind(this);
    this.cambiarVista = this.cambiarVista.bind(this);

  }


  manejador(clave, valor){
    this.setState(
      porValor(clave, valor)
      );
  }

  getData(tituloR, cuerpoR, referenciaR,urlR, colorTituloR, tamanoTituloR, fuenteTituloR){
    this.setState({
      tituloArticulo: tituloR,
      cuerpoArticulo:cuerpoR,
      referenciaArticulo:referenciaR,
      urlArticulo:urlR,
      colorTituloArticulo:colorTituloR,
      tamanoTituloArticulo:tamanoTituloR,
      fuenteTituloArticulo:fuenteTituloR
    });
   
  }
  cambiarVista(event) {
    this.setState({vista: event.target.value});
    if (event.target.value === 'Mobile'){
      let className = this.state.className;
      className = 'principal'
      this.setState({className})

    } else {

      let className = this.state.className;
      className =  'container'
      this.setState({className})
    }
  }

  render() {
    const {
      tituloArticulo,cuerpoArticulo, referenciaArticulo, urlArticulo, colorTituloArticulo, tamanoTituloArticulo, fuenteTituloArticulo
    } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <div>

             <select value={this.state.value} onChange={this.cambiarVista}>
              <option value="Desktop">Desktop</option>
              <option value="Mobile">Mobile</option>
            </select> 

          </div>


          <div className={this.state.className}>
            <div className="row">
                <div className="col-md-6"><h3>Publicador</h3></div>
                <div className="col-md-6"><h3>Visualizador</h3></div>
            </div>

            <div className="row">
                <div className="col-md-6"><Creador sendData={this.getData}/></div>
                <div className="col-md-6"><Visualizador titulo={tituloArticulo} cuerpo={cuerpoArticulo} referencias={referenciaArticulo} url={urlArticulo} colorTitulo={colorTituloArticulo} tamanoTitulo={tamanoTituloArticulo} fuenteTitulo={fuenteTituloArticulo}/></div>
            </div>

          </div>
          
        </div>
      </div>
    );
  }
}

export default App;
