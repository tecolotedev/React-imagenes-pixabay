import React,{createRef} from 'react';

const Buscador = ({getImagenes}) => {
    let palabrasRef= createRef();
    const getQuery = e => {
        e.preventDefault();

        const palabrasjuntas = palabrasRef.current.value;
        const palabras = palabrasjuntas.split(' ').join('+');
        getImagenes(palabras);
    }
    return(
        <div className="container bg-dark">  
            <div className="row">
                <div className="col">
                    <form className="p-5 text-center" onSubmit={getQuery}>
                        <h1 className="text-white ">Busca tus Imagenes</h1>
                        <div className="form-row mt-5">
                            <div className="col-10">
                                <input type="text" className="form-control mb-2" placeholder="Flores Amarillas" ref={palabrasRef}/>
                            </div>
                            <div className="col-2">
                                <button type="submit" className="btn btn-primary mb-2">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Buscador;