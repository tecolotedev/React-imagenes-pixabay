import React from 'react';

const Imagen = props=>{
    const imagen = props.imagen;
    const {views,likes,pageURL,previewURL}= imagen;
    
    return(
        <div className="col-2 col-md-3">
            <div className="card my-3 border border-info" >
                <img src={previewURL} className="card-img-top " alt="..."/>
                <div className="card-body">
                    <p className="card-text">Me gusta: <span className="font-weight-bold">{likes}</span></p>
                    <p className="card-text">Vistas: <span className="font-weight-bold">{views}</span></p>
                    <a href={pageURL} target="_blank"  rel="noopener noreferrer" className="btn btn-danger">Ver Imagen</a>
                </div>
            </div>
        </div>
    );
}
export default Imagen