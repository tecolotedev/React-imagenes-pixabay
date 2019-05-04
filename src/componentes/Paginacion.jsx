import React,{Component} from 'react';

class Paginacion extends Component{
    paginacionAnterior=()=>{
        this.props.cambiarPagina(-1);
    }
    paginacionSiguiente=()=>{
        this.props.cambiarPagina(1);
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item"><button className="btn btn-info mr-2" onClick={this.paginacionAnterior}>Anterior</button></li>  
                                <li className="page-item"><button className="btn btn-info ml-2" onClick={this.paginacionSiguiente}>Siguiente</button></li>  
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default Paginacion;