import React, { Component } from 'react';
import './creador.css';

const porClave = (nombreKey,valor) => ({
  [nombreKey]:valor
});

class Creador extends Component {
  constructor(){
    super();
    this.state = {
      titulo: '',
      cuerpo: '',
      referencias: '',
      url: '',
      colorTitulo:'',
      tamanoTitulo:'',
      fuenteTitulo:''
    }
  }
  manejador(clave, valor){
    this.setState(
      porClave(clave, valor)
      );
      this.props.sendData(this.state.titulo, this.state.cuerpo, this.state.referencias, this.state.url, this.state.colorTitulo, this.state.tamanoTitulo, this.state.fuenteTitulo)
  }
  render() {
  
    return (
      <div className="App">
      
        <table>
          <tbody>
            <tr>
              <td>
                <h3>Título del artículo</h3>
              </td>
              <td>
               <input type="text" className="campoForm" placeholder="Titulo" onChange={event => this.manejador('titulo', event.target.value)}/>
               </td>
               </tr>
               <tr>
              <td>
                <h3>Color del Título</h3>
              </td>
              <td>
              <select onChange={event => this.manejador('colorTitulo', event.target.value)}>
              <option value="blue">Azul</option>
              <option value="red">Rojo</option>
              <option value="green">Verde</option>
            </select>
               </td>
               </tr>

               <tr>
              <td>
                <h3>Tamaño del Título</h3>
              </td>
              <td>
              <input type="text" placeholder="Tamaño del titulo" onChange={event => this.manejador('tamanoTitulo', event.target.value)} />
            
               </td>
               </tr>


               <tr>
              <td>
                <h3>Fuente del Título</h3>
              </td>
              <td>
              <select onChange={event => this.manejador('fuenteTitulo', event.target.value)}>
              <option value="Arial">Arial</option>
              <option value="Helvetica">Helvetica</option>
              <option value="Verdana">Verdana</option>
            </select>            
               </td>
               </tr>


               <tr>
                 <td> <h3>URL</h3></td>
               <td>
              <input type="text"className="campoForm"  placeholder="Image URL" onChange={event => this.manejador('url', event.target.value)}/>
              </td>
              </tr>
              <tr>
                <td> <h3>Cuerpo</h3></td>
              <td>
              <textarea rows="10"className="campoArea"  columns="50" type="text" onChange={event => this.manejador('cuerpo', event.target.value)}/>
              </td>
              </tr>
              <tr>
                <td>
                <h3>Referencias</h3>
                </td>
              <td>
              <textarea rows="3" className="campoArea"  columns="50" type="text" onChange={event => this.manejador('referencias', event.target.value)}/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Creador;
