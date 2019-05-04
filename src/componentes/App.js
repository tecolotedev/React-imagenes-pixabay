import React,{Component} from 'react';
import Buscador from './Buscador.jsx';
import Imagenes from './Imagenes.jsx';
import axios from 'axios';
import scrollToElement from 'scroll-to-element';


class App extends Component{
  state={
    imagenes:[],
    query:'',
    pagina:''
  }
  getImagenes=query=>{
    const url =`https://pixabay.com/api/?key=12385005-999bb56a24d994fe930346e99&q=${query}&image_type=all&page=${1}&lang=es`;
    axios.get(url)
                .then(res=> this.setState({imagenes:res.data.hits, query,pagina:1}))
                .catch(error=>console.log(error));
  }
  cambiarPagina=paginaN=>{
    let {query,pagina}=this.state;
    pagina=pagina+paginaN;
    if(pagina<1)return null;
    
    const url =`https://pixabay.com/api/?key=12385005-999bb56a24d994fe930346e99&q=${query}&image_type=all&page=${pagina}&lang=es`;
    axios.get(url)
                .then(res=> this.setState({imagenes:res.data.hits, query,pagina}))
                .catch(error=>console.log(error));
    
    scrollToElement('#app', {
      offset: 0,
      ease: 'linear',
      duration: 1500
    });
  }
  render(){
    return (
      <div className="App" id="app">
        <Buscador 
          getImagenes={this.getImagenes}
        />
        <Imagenes
          imagenes={this.state.imagenes} 
          query={this.state.query}
          cambiarPagina={this.cambiarPagina}
          />
      </div> 
    );
  }
}

export default App;
