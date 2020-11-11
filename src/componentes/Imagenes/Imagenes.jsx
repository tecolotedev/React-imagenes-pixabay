import React,{Component} from 'react';
import Imagen from '../Imagen/Imagen.jsx';
import Paginacion from '../Paginacion/Paginacion';
class Imagenes extends Component{

    
    render(){
        const {imagenes, query} = this.props;
        if(imagenes.length===0)return null;
        const queryF = query.split('+').join(' ')

        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Imagenes de {queryF}</h1>
                    </div> 
                    {Object.keys(imagenes).map(key=>{
                        return(<Imagen key={key}  imagen={imagenes[key]}/>)
                    })}
                </div>
                <div className="row">
                    <Paginacion
                        cambiarPagina={this.props.cambiarPagina}
                    />
                </div>
            </div>
        );
    }
}

export default Imagenes;