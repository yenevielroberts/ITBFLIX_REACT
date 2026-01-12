import React, { createElement } from 'react';

class SeccionesCotenido extends React.Component {
    render() {

        const { imagenes } = this.props;//Obtengo los valores de las propiedades
        const { titleSection } = this.props;

        //console.log(imagenes)
        let arrayImagenes = []; {/**Array donde se guarda el contenedor individual de la imagenes*/ }
        if (titleSection == "Actores") {

            arrayImagenes = imagenes.map((imagen, index) => (//Itero el array de las imagenes que pase en el App.jsx

                /*Contenedor indivual de las imagenes  actores*/
                <div className="mb-5 mt-5 rounded-xl " key={index} role='button'>
                    <img src={imagen.image} className="max-w-56 max-h-56 rounded-full object-cover hover:ring-4 ring-yellow-300" />
                </div>
            ));

        } else {
            arrayImagenes = imagenes.map((imagen, index) => (

                /*Contenedor indivual de las imagenes */
                <div className="mb-10 mt-5 rounded-xl hover:ring-4 ring-yellow-300" ole='button' key={index} >
                    <a href=''>
                        <img src={imagen.image} className="image" />
                    </a>
                </div>
            ));
        }


        return (
            <section className="containerImg" >
                {/**Contenedor del titulo y flecha */}
                <div className="flex w-full items-center">
                    <h2 className="til-section">{this.props.titleSection}</h2>
                    {/**Icono de flecha */}
                    <div className="flex w-full justify-end mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8
                     text-black hover:text-yellow-300">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </div>
                </div>
                {/**Contenedor de todas las imagenes de una sección */}
                <div className=" flex flex-row flex-wrap  justify-evenly ">
                    {arrayImagenes}{/**Muestro las imagenes */}
                </div>
            </section>
        )
    }

}

export default SeccionesCotenido