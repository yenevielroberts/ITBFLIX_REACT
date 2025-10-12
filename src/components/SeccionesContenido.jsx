import React, { createElement } from 'react';

class SeccionesCotenido extends React.Component {
    render() {

        const { imagenes } = this.props;
        const arrayImagenes = imagenes.map((imagen, index) => (

            <div className='foto' key={index} class="m-2 rounded-xl hover:ring-4 ring-white">
                <img src={imagen} class="max-w-56 max-h-56 rounded-xl" />
            </div>
        ));

        return (
            <section className={this.props.titleSection} class="flex-col mb-36 w-full h-72 bg-blue-900" >

                <div class="flex w-full items-center">
                    <h2 class=" mb-2 ml-2 p-3 w-96 text-white font-serif text-2xl">{this.props.titleSection}</h2>
                    <div class="flex w-full justify-end mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8
                     text-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </div>


                </div>

                <div className='fotos' class=" flex flex-wrap ml-4 justify-evenly">
                    {arrayImagenes}
                </div>
            </section>
        )
    }

}

export default SeccionesCotenido