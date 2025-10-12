import React, { createElement } from 'react';

class SeccionesCotenido extends React.Component {
    render() {

        const { imagenes } = this.props;
        const arrayImagenes = imagenes.map((imagen, index) => (

            <div className='foto' key={index} class="mr-1 p-2 hover:ring-4 ring-white">
                <img src={imagen} class="max-w-56 max-h-56"/>
            </div>
        ));

        return (
            <section className={this.props.titleSection} class="flex-col mb-36 w-full h-72 bg-blue-900" >
                <h2 class="mb-2 p-3 text-white font-serif text-2xl">{this.props.titleSection}</h2>
                <div className='fotos'class=" flex">
                    {arrayImagenes}
                </div>
            </section>
        )
    }

}

export default SeccionesCotenido