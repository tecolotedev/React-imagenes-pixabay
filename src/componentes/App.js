import React,{useState} from 'react';
import Buscador from './Buscador/Buscador.jsx';
import Imagenes from './Imagenes/Imagenes.jsx';
import axios from 'axios';
import scrollToElement from 'scroll-to-element';


const App =() => {
  const [imagenes, setImagenes] = useState([]);
  const [query, setQuery] = useState('');
  let [pagina, setPagina] = useState(1);
  
  const getImagenes = async (query) =>{
    const url =`https://pixabay.com/api/?key=12385005-999bb56a24d994fe930346e99&q=${query}&image_type=all&page=${1}&lang=es`;
    let res = await axios.get(url)
    setImagenes(res.data.hits);
    setQuery(query);
  }
  const cambiarPagina = async (paginaN) => {
    
    pagina=pagina+paginaN;
    if(pagina<1)return null;
    const url =`https://pixabay.com/api/?key=12385005-999bb56a24d994fe930346e99&q=${query}&image_type=all&page=${pagina}&lang=es`;
    let res = await axios.get(url);
    
    setImagenes(res.data.hits);
    setPagina(pagina);

    scrollToElement('#app', {
      offset: 0,
      ease: 'linear',
      duration: 500
    });
  }

  return (
    <div className="App" id="app">
      <Buscador 
        getImagenes={getImagenes}
      />
      <Imagenes
        imagenes={imagenes} 
        query={query}
        cambiarPagina={cambiarPagina}
        />
    </div> 
  );
  
}

export default App;
