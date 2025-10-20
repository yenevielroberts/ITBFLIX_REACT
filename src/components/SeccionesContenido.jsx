import React, { createElement } from 'react';

class SeccionesCotenido extends React.Component {
    render() {

        const { imagenes } = this.props;
        const { titleSection } = this.props;

        let arrayImagenes = [];{/**Array donde se guarda el contenedor individual de la imagenes*/}
        if (titleSection == "Actores") {

             arrayImagenes = imagenes.map((imagen, index) => (

                /*Contenedor indivual de las imagenes */
                <div className='foto' key={index} class="mb-10 mt-5 rounded-xl hover:ring-4 ring-white">
                    <img src={imagen} class="max-w-56 max-h-56 rounded-full object-cover" />
                </div>
            ));

        } else {
            arrayImagenes = imagenes.map((imagen, index) => (

                /*Contenedor indivual de las imagenes */
                <div className="mb-10 mt-5 rounded-xl hover:ring-4 ring-white" key={index} >
                    <img src={imagen} className="max-w-56 max-h-56 rounded-xl" />
                </div>
            ));
        }


        return (
            <section className="flex-col mb-36 w-screen h-fit sm:h-fit bg-blue-900" >
                {/**Contenedor del titulo y flecha */}
                <div className="flex w-full items-center">
                    <h2 className=" mb-2 ml-2 p-3 w-96 text-white font-serif text-2xl">{this.props.titleSection}</h2>
                    {/**Icono de flecha */}
                    <div className="flex w-full justify-end mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8
                     text-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </div>
                </div>
                {/**Contenedor de las imagenes */}
                <div className='fotos' class=" flex flex-wrap justify-evenly">
                    {arrayImagenes}{/**Muestro las imagenes */}
                </div>
            </section>
        )
    }

}

export default SeccionesCotenido