import React from 'react';
import './SeccionesContenido.css'

class SeccionesCotenido extends React.Component{
    render(){
        const nombreSecciones=['Series','Movies','Más visto','Actores']
        return(
            <div className='section-series'>
                <h2>{this.props.titleSection}</h2>
                <div className='foto'><img src={this.props.img1}></img></div>
                <div className='foto'><img></img></div>
                <div className='foto'><img></img></div>
                <div className='foto'><img></img></div>
                <div className='foto'><img></img></div>
            </div>
        )
    }

}

export default SeccionesCotenido