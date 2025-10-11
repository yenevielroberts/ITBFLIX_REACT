import React, { createElement } from 'react';
import '../css/SeccionesContenido.css'

class SeccionesCotenido extends React.Component {
    render() {

        const { imagenes } = this.props;
        const arrayImagenes = imagenes.map((imagen, index) => (

            <div className='foto' key={index}>
                <img src={imagen} />
            </div>
        ));

        return (
            <section className={this.props.titleSection}>
                <h2>{this.props.titleSection}</h2>
                {arrayImagenes}
            </section>
        )
    }

}

export default SeccionesCotenido